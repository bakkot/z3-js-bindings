'use strict';

let fs = require('fs');
let path = require('path');

let contents = fs.readFileSync(path.join(__dirname, 'z3', 'src', 'api', 'z3_api.h'), 'utf8');

// we _could_ use an actual C++ parser, which accounted for macros and everything
// but that's super painful
// and the files are regular enough that we can get away without it

// parse type declarations
let types = {
  bool: 'boolean',
  Z3_string: 'string',
  Z3_char_ptr: 'string',
  Z3_string_ptr: 'string_ptr',
  unsigned: 'number',
  double: 'number',
  int: 'number',
  uint64_t: 'number',
  int64_t: 'number',
  void: 'void',

  // these are done with #define for some reason
  Z3_sort_opt: 'Z3_sort',
  Z3_ast_opt: 'Z3_ast',
  Z3_func_interp_opt: 'Z3_func_interp',
  Z3_bool_opt: 'Z3_bool',

  // these are function types I can't be bothered to parse
  Z3_error_handler: 'Z3_error_handler',
  Z3_push_eh: 'Z3_push_eh',
  Z3_pop_eh: 'Z3_pop_eh',
  Z3_fresh_eh: 'Z3_fresh_eh',
  Z3_fixed_eh: 'Z3_fixed_eh',
  Z3_eq_eh: 'Z3_eq_eh',
  Z3_final_eh: 'Z3_final_eh',
  Z3_created_eh: 'Z3_created_eh',
};
for (let match of contents.matchAll(/DEFINE_TYPE\((?<type>[A-Za-z0-9_]+)\)/g)) {
  types[match.groups.type] = match.groups.type;
}

// parse enum declarations
let enums = Object.create(null);
for (let idx = 0; idx < contents.length;) {
  let nextIdx = contents.indexOf('typedef enum', idx);
  if (nextIdx === -1) {
    break;
  }
  let lineStart = contents.lastIndexOf('\n', nextIdx);
  let lineEnd = contents.indexOf(';', nextIdx);
  if (lineStart === -1 || lineEnd === -1) {
    throw new Error(`could not parse enum at index ${nextIdx}`);
  }
  idx = lineEnd;
  let slice = contents.substring(lineStart, lineEnd);
  let { match, text } = eat(slice, /^\s*typedef enum\s*\{/);
  if (match === null) {
    throw new Error(`could not parse enum ${JSON.stringify(slice)}`);
  }
  let vals = Object.create(null);
  let next = 0;
  while (true) {
    let blank = true;
    while (blank) {
      ({ match, text } = eat(text, /^\s*(\/\/[^\n]*\n)?/));
      blank = match[0].length > 0;
    }
    ({ match, text } = eat(text, /^[A-Za-z0-9_]+/));
    if (match === null) {
      throw new Error(`could not parse enum value in ${slice}`);
    }
    let name = match[0];
    text = eatWs(text);

    ({ match, text } = eat(text, /^= *(?<val>[^\n,\s]+)/));
    if (match !== null) {
      let parsedVal = Number(match.groups.val);
      if (Object.is(parsedVal, NaN)) {
        throw new Error('unknown value ' + match.groups.val);
      }
      vals[name] = parsedVal;
      next = parsedVal;
    } else {
      vals[name] = next;
    }
    text = eatWs(text);
    ({ match, text } = eat(text, /^,?\s*}/));
    if (match !== null) {
      break;
    }

    ({ match, text } = eat(text, /^,/));
    if (match === null) {
      throw new Error('expected comma, got ' + text);
    }

    ++next;
  }
  text = eatWs(text);
  ({ match, text } = eat(text, /^[A-Za-z0-9_]+/));
  if (match == null) {
    throw new Error(`expected enum name, got ${text}`);
  }
  enums[match[0]] = vals;
  text = eatWs(text);
  if (text !== '') {
    throw new Error('expected end of definition, got ' + text);
  }
}

// parse function declarations
let functions = [];
for (let idx = 0; idx < contents.length;) {
  let nextIdx = contents.indexOf(' Z3_API ', idx);
  if (nextIdx === -1) {
    break;
  }
  let lineStart = contents.lastIndexOf('\n', nextIdx);
  let lineEnd = contents.indexOf(';', nextIdx);
  if (lineStart === -1 || lineEnd === -1) {
    throw new Error(`could not parse definition at index ${nextIdx}`);
  }
  idx = lineEnd;

  let slice = contents.substring(lineStart, lineEnd);
  let match = slice.match(/^\s*(?<ret>[A-Za-z0-9_]+) +Z3_API +(?<name>[A-Za-z0-9_]+)\((?<params>[^)]*)\)/);
  if (match == null) {
    throw new Error(`failed to match ${JSON.stringify(slice)}`);
  }
  let { ret, name, params } = match.groups;
  let parsedParams = [];

  if (params.trim() !== 'void') {
    for (let param of params.split(',')) {
      let paramType, paramName, isConst, isPtr, isArray;

      let { match, text } = eat(param, /^\s*/);
      ({ match, text } = eat(text, /^[A-Za-z0-9_]+/));
      if (match === null) {
        throw new Error(`failed to parse param type in ${JSON.stringify(slice)} for param ${JSON.stringify(param)}`);
      }
      paramType = match[0];
      
      text = eatWs(text);

      ({ match, text } = eat(text, /^const(?![A-Za-z0-9_])/));
      isConst = match !== null;


      ({ match, text } = eat(text, /^\s*\*/));
      isPtr = match !== null;

      text = eatWs(text);

      if (text === '') {
        paramName = 'UNNAMED';
        isArray = false;
      } else {
        ({ match, text } = eat(text, /^[A-Za-z0-9_]+/));
        if (match === null) {
          throw new Error(`failed to parse param name in ${JSON.stringify(slice)} for param ${JSON.stringify(param)}`);
        }
        text = eatWs(text);

        ({ match, text } = eat(text, /^\[\]/));
        isArray = match !== null;

        text = eatWs(text);

        if (text !== '') {
          throw new Error(`excess text in param in ${JSON.stringify(slice)} for param ${JSON.stringify(param)}`);
        }
      }

      parsedParams.push({ type: paramType, name: paramName, isConst, isPtr, isArray });
    }
  }

  functions.push({ ret, name, params: parsedParams });
}

for (let fn of functions) {
  if (!(fn.ret in enums) && !(fn.ret in types)) {
    throw new Error(`unknown type ${fn.ret}`);
  }
  for (let { name, type } of fn.params) {
    if (!(type in enums) && !(type in types)) {
      throw new Error(`unknown type ${type}`);
    }
  }
}

function eat(text, regex) {
  const match = text.match(regex);
  if (match == null) {
    return { match, text };
  }
  return { match, text: text.substring(match[0].length) };
}

function eatWs(text) {
  return eat(text, /^\s*/).text;
}
