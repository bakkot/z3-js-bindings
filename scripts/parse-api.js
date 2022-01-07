'use strict';

let fs = require('fs');
let path = require('path');

let contents = fs.readFileSync(path.join(__dirname, '..', 'z3', 'src', 'api', 'z3_api.h'), 'utf8');

// we _could_ use an actual C++ parser, which accounted for macros and everything
// but that's super painful
// and the files are regular enough that we can get away without it

// we could also do this by modifying the `update_api.py` script
// which we should probably do eventually
// but this is easier while this remains not upstreamed

// we need to parse the `def_API` stuff so we know which things are out parameters
// unfortunately we also need to parse the actual declarations so we know the parameter names also
let pytypes = Object.create(null);

let typeMatches = contents.matchAll(/def_Type\(\s*'(?<name>[A-Za-z0-9_]+)',\s*'(?<cname>[A-Za-z0-9_]+)',\s*'(?<pname>[A-Za-z0-9_]+)'\)/g);
for (let { groups } of typeMatches) {
  pytypes[groups.name] = groups.cname;
}


// we filter first to ensure our regex isn't too strict
let apiLines = contents.split('\n').filter(l => /def_API|extra_API/.test(l));
let defApis = Object.create(null);
for (let line of apiLines) {
  let match = line.match(/^\s*(?<def>def_API|extra_API)\(\s*'(?<name>[A-Za-z0-9_]+)'\s*,\s*(?<ret>[A-Za-z0-9_]+)\s*,\s*\((?<params>((_in|_out|_in_array|_out_array|_inout_array)\([^)]+\)\s*,?\s*)*)\)\)\s*$/);
  if (match == null) {
    throw new Error(`failed to match ${JSON.stringify(line)}`);
  }
  let { name, ret, def } = match.groups;
  let params = match.groups.params.trim();
  let text = params;
  let parsedParams = [];
  while (true) {
    text = eatWs(text);
    ({ text, match } = eat(text, /^_(?<kind>in|out|in_array|out_array|inout_array)\(/));
    if (match == null) {
      break;
    }
    let kind = match.groups.kind;
    if (kind === 'in' || kind === 'out') {
      ({ text, match } = expect(text, /^[A-Za-z0-9_]+/));
      parsedParams.push({ kind, type: match[0] });
    } else {
      ({ text, match } = expect(text, /^(\d+),/));
      let sizeIndex = Number(match[1]);
      text = eatWs(text);
      ({ text, match } = expect(text, /^[A-Za-z0-9_]+/));
      parsedParams.push({ kind, sizeIndex, type: match[0] });
    }
    ({ text, match } = expect(text, /^\)/));
    text = eatWs(text);
    ({ text, match } = eat(text, /^,/));
  }
  if (text !== '') {
    throw new Error(`extra text in parameter list ${JSON.stringify(text)}`);
  }
  defApis[name] = { params: parsedParams, ret, extra: def === 'extra_API' };
}

let primitiveTypes = {
  __proto__: null,
  bool: 'boolean',
  Z3_bool: 'boolean',
  Z3_string: 'string',
  Z3_char_ptr: 'string',
  unsigned: 'number',
  double: 'number',
  int: 'number',
  uint64_t: 'number',
  int64_t: 'number',
  void: 'void',
};

// parse type declarations
let types = {
  __proto__: null,

  // these are done with #define for some reason
  Z3_sort_opt: 'Z3_sort',
  Z3_ast_opt: 'Z3_ast',
  Z3_func_interp_opt: 'Z3_func_interp',
  Z3_string_ptr: 'Z3_string_ptr',

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

    ({ match, text } = expect(text, /^,/));

    ++next;
  }
  text = eatWs(text);
  ({ match, text } = expect(text, /^[A-Za-z0-9_]+/));
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
        paramName = match[0];
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

  if (name in defApis) {
    functions.push({ ret, name, params: parsedParams });
  }
  // only a few things are missing `def_API`; we'll skip those
}

function isKnownType(t) {
  return t in enums || t in types || t in primitiveTypes;
}

for (let fn of functions) {
  if (!isKnownType(fn.ret)) {
    throw new Error(`unknown type ${fn.ret}`);
  }
  let defParams = defApis[fn.name].params;
  if (fn.params.length !== defParams.length) {
    throw new Error(`parameter length mismatch for ${fn.name}`);
  }
  let idx = 0;
  for (let param of fn.params) {
    if (!isKnownType(param.type)) {
      throw new Error(`unknown type ${param.type}`);
    }
    param.kind = defParams[idx].kind;
    ++idx;
  }
}

function eat(str, regex) {
  const match = str.match(regex);
  if (match == null) {
    return { match, text: str };
  }
  return { match, text: str.substring(match[0].length) };
}

function eatWs(text) {
  return eat(text, /^\s*/).text;
}

function expect(str, regex) {
  let { text, match } = eat(str, regex);
  if (match === null) {
    throw new Error(`expected ${regex}, got ${JSON.stringify(text)}`);
  }
  return { text, match };
}

module.exports = { primitiveTypes, types, enums, functions };
