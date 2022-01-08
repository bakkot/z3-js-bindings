'use strict';

let prettier = require('prettier');

let { primitiveTypes, types, enums, functions } = require('./parse-api.js');
let asyncFns = require('./async-fns.js');

let subtypes = {
  __proto__: null,
  'Z3_sort': 'Z3_ast',
  'Z3_func_decl': 'Z3_ast',
};

let makePointerType = t => `export type ${t} = ` + (t in subtypes ? `Subpointer<'${t}', '${subtypes[t]}'>;` : `Pointer<'${t}'>;`);


function toEmType(type) {
  if (type in primitiveTypes) {
    type = primitiveTypes[type];
  }
  if (['boolean', 'number', 'string', 'bigint', 'void'].includes(type)) {
    return type;
  }
  if (type === 'Z3_string') {
    return 'string';
  }
  if (type.startsWith('Z3_')) {
    return 'number';
  }
  throw new Error(`unknown parameter type ${type}`);
}

function isZ3PointerType(type) {
  return type.startsWith('Z3_') && type !== 'Z3_string';
}

function toEm(p) {
  if (typeof p === 'string') {
    // we've already set this, e.g. by replacing it with an expression
    return p;
  }
  let { type } = p;
  if (p.kind === 'out') {
    if (p.isPtr && (type.startsWith('Z3_') || type === 'unsigned' || type === 'int')) {
      return 'outIntAddress';
    }
    throw new Error(`unknown out parameter type ${JSON.stringify(p)}`);
  }
  if (p.isArray) {
    if (isZ3PointerType(type) || type === 'unsigned' || type === 'int') {
      return `intArrayToByteArr(${p.name} as unknown as number[])`;
    } else {
      throw new Error(`only know how to deal with arrays of pointers (got ${type})`);
    }
  }
  if (type in primitiveTypes) {
    type = primitiveTypes[type];
  }

  if (['boolean', 'number', 'bigint', 'string', 'Z3_string'].includes(type)) {
    return p.name;
  }
  if (type.startsWith('Z3_')) {
    return p.name;
  }
  throw new Error(`unknown parameter type ${JSON.stringify(p)}`);
}

let isInParam = p => ['in', 'in_array'].includes(p.kind);
function wrapFunction(fn) {
  let inParams = fn.params.filter(isInParam);
  let outParams = fn.params.filter(p => !isInParam(p));

  // we'll figure out how to deal with these cases later
  let unknownInParam = inParams.find(p =>
      p.isPtr
      || p.type === 'Z3_char_ptr'
      || p.isArray && !(isZ3PointerType(p.type) || p.type === 'unsigned' || p.type === 'int')
    );
  if (unknownInParam) {
    console.error(`skipping ${fn.name} - unknown in parameter ${JSON.stringify(unknownInParam)}`);
    return null;
  }
  if (outParams.length > 1) {
    console.error(`skipping ${fn.name} - multiple out paramaeters`);
    return null;
  }

  for (let outParam of outParams) {
    if (outParam.kind !== 'out' || outParam.isArray) {
      console.error(`skipping ${fn.name} - out array`);
      return null;
    }
  }
  if (fn.ret === 'Z3_char_ptr') {
    console.error(`skipping ${fn.name} - returns a string or char pointer`);
    return null;
  }
  // console.error(fn.name);

  let isAsync = asyncFns.includes(fn.name);
  let trivial = !['Z3_string', 'string', 'Z3_bool', 'bool'].includes(fn.ret) && outParams.length === 0 && !inParams.some(p => p.type === 'Z3_string' || p.isArray);

  let name = fn.name.startsWith('Z3_') ? fn.name.substring(3) : fn.name;
  let params = inParams.map(p => `${p.name}: ${p.type === 'Z3_string' ? 'string' : p.type}${p.isArray ? '[]' : ''}`);

  if (trivial && !isAsync) {
    return `${name}: Mod._${fn.name} as ((${params.join(', ')}) => ${fn.ret})`;
  }

  if (trivial) {
    // i.e. and async
    return `${name}: function (${params.join(', ')}): Promise<${fn.ret}> {
      return Mod.async_call(Mod._async_${fn.name}, ${fn.params.map(toEm).join(', ')});
    }`;
  }

  // otherwise fall back to ccall

  if (isAsync) {
    throw new Error('todo: nontrivial async functions');
  }

  let ctypes = fn.params.map(p => p.isArray ? 'array' : p.isPtr ? 'number' : toEmType(p.type));

  let prefix = '';
  let suffix = null;

  let args = fn.params;

  let arrayLengthParams = new Map();
  for (let i = 0; i < fn.params.length; ++i) {
    let p = fn.params[i];
    if (p.kind === 'in_array') {
      let { sizeIndex } = p;
      if (arrayLengthParams.has(sizeIndex)) {
        let otherParam = arrayLengthParams.get(sizeIndex);
        prefix += `
          if (${otherParam}.length !== ${p.name}.length) {
            throw new TypeError(\`${otherParam} and ${p.name} must be the same length (got \${${otherParam}.length} and \{${p.name}.length})\`);
          }
        `.trim();
        continue;
      }
      arrayLengthParams.set(sizeIndex, p.name);
      // console.error(fn.name, p);
      if (fn.params[sizeIndex].type !== 'unsigned') {
        throw new Error(`size index is not unsigned int (for fn ${fn.name} parameter ${sizeIndex} got ${fn.params[i].type})`);
      }
      args[sizeIndex] = `${p.name}.length`;
      params[sizeIndex] = null;
    }
  }

  params = params.filter(p => p != null);

  let returnType = fn.ret;
  let cReturnType = toEmType(fn.ret);
  if (outParams.length > 0) {
    if (fn.ret === 'bool' || fn.ret === 'Z3_bool') {
      // assume the boolean indicates succes
      suffix = `
        if (!ret) {
          return null;
        }
      `.trim();
      cReturnType = 'boolean';

      // let mapped = [];
      // using a for instead of .map so we can exit the parent
      // let idx = 0;
      // for (let outParam of outParams) {
      //   if (outParam.isPtr === ())
      //   let read;
      //   switch (outParam.type) {
      //     case 'Z3_string_ptr': {
      //       if (outParam.isPtr) {
      //         console.error(`skipping ${fn.name} - out string pointers not supported`);
      //         return null;
      //       }
      //       read = 
      //     }
      //   }
      //   mapped.push({
      //     name: outParam.name,
      //     val: 
      //   });
      //   ++idx;
      // }
      if (outParams.length === 1) {
        let outParam = outParams[0];
        if (!outParam.isPtr) {
          console.error(`skipping ${fn.name} - out param is not pointer`);
          return null;
        }

        if (outParam.type === 'Z3_string') {
          returnType = 'string | null';
          suffix += `
            return Mod.UTF8ToString(getOutUint(0));`
        } else if (isZ3PointerType(outParam.type)) {
          returnType = `${outParam.type} | null`;
          suffix += `
            return getOutUint(0) as unknown as ${outParam.type};
          `.trim();
        } else if (outParam.type === 'unsigned') {
          returnType = `${outParam.type} | null`;
          suffix += `
            return getOutUint(0);
          `.trim();
        } else if (outParam.type === 'int') {
          returnType = `${outParam.type} | null`;
          suffix += `
            return getOutInt(0);
          `.trim();
        } else {
          console.error(`skipping ${fn.name} - unknown out parameter kind ${JSON.stringify(outParam)}`);
          return null;
        }
      }
    } else {
      console.error(`skipping ${fn.name} - out parameter for function which returns non-boolean`);
      return null;
    }
  }

  let invocation = `Mod.ccall('${fn.name}', '${cReturnType}', ${JSON.stringify(ctypes)}, [${args.map(toEm).join(', ')}])`;

  let out = `${name}: function(${params.join(', ')}): ${returnType} {
    ${prefix}`;
  if (suffix == null) {
    out += `return ${invocation};`
  } else {
    out += `
      let ret = ${invocation};
      ${suffix}
    `.trim();
  }
  out += `}`;
  return out;
}

function wrapEnum(name, values) {
  let enumEntries = Object.entries(values);
  return `export enum ${name} {
    ${enumEntries.map(([k, v], i) => k + (v === ((enumEntries[i - 1]?.[1] ?? -1) + 1) ? '' : ` = ${v}`) + ',').join('\n')}
  };`
}

let out = `
// @ts-ignore no-implicit-any
import initModule = require('./z3-built.js');
interface Pointer<T extends string> extends Number {
  readonly __typeName: T;
}
interface Subpointer<T extends string, S extends string> extends Pointer<S> {
  readonly __typeName2: T;
}

function intArrayToByteArr(ints: number[]) {
  return new Uint8Array((new Uint32Array(ints)).buffer);
}

${Object.entries(primitiveTypes).filter(e => e[0] !== 'void').map(e => `type ${e[0]} = ${e[1]};`).join('\n')}

${Object.keys(types).filter(k => k.startsWith('Z3')).map(makePointerType).join('\n')}

${Object.entries(enums).map(e => wrapEnum(e[0], e[1])).join('\n\n')}

export async function init() {
  let Mod = await initModule();

  // this supports a up to four out intergers/pointers
  // or up to two out int64s
  let outIntAddress = Mod._malloc(16);
  let outUintArray = (new Uint32Array(Mod.HEAPU32.buffer, outIntAddress, 4));
  let getOutUint = (i: 0 | 1 | 2 | 3) => outUintArray[i];
  let outIntArray = (new Int32Array(Mod.HEAPU32.buffer, outIntAddress, 4));
  let getOutInt = (i: 0 | 1 | 2 | 3) => outIntArray[i];

  return {
    em: Mod,
    Z3: {
     ${functions.map(wrapFunction).filter(f => f != null).join(',\n')}
    }
  };
}

`;

console.log(prettier.format(out, { singleQuote: true, parser: 'typescript' }));
