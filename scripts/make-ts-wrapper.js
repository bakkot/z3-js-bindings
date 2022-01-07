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
  if (['boolean', 'number', 'string', 'void'].includes(type)) {
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

function isAcceptableArrayType(type) {
  return type.startsWith('Z3_') && type !== 'Z3_string';
}

function toEm(p) {
  if (p.isArray) {
    if (!isAcceptableArrayType(p.type)) {
      throw new Error(`only know how to deal with arrays of pointers (got ${p.type})`);
    }
    return `pointerArrayToByteArr(${p.name} as unknown as number[])`;
  }
  let { type } = p;
  if (type in primitiveTypes) {
    type = primitiveTypes[type];
  }

  if (['boolean', 'number', 'string', 'Z3_string'].includes(type)) {
    return p.name;
  }
  if (type.startsWith('Z3_')) {
    return p.name;
  }
  throw new Error(`unknown parameter type ${JSON.stringify(p)}`);
}

function wrapFunction(fn) {
  // we'll figure out how to deal with these later
  if (fn.params.some(p =>
    !['in', 'in_array'].includes(p.kind)
      || p.isPtr
      || p.type === 'Z3_string_ptr'
      || p.type === 'Z3_char_ptr'
      || p.isArray && !isAcceptableArrayType(p.type)
    )) {
    return null;
  }
  if (fn.ret === 'Z3_string_ptr' || fn.ret === 'Z3_char_ptr') {
    return null;
  }
  // console.error(fn.name);

  let isAsync = asyncFns.includes(fn.name);
  let trivial = fn.ret !== 'string' && !fn.params.some(p => p.type === 'Z3_string' || p.isArray);

  let name = fn.name.startsWith('Z3_') ? fn.name.substring(3) : fn.name;
  let params = fn.params.map(p => `${p.name}: ${p.type === 'Z3_string' ? 'string' : p.type}${p.isArray ? '[]' : ''}`).join(', ');

  let args = fn.params.map(toEm).join(', ');

  if (trivial && !isAsync) {
    return `${name}: Mod._${fn.name} as ((${params}) => ${fn.ret})`;
  }

  if (trivial) {
    // i.e. and async
    return `${name}: function (${params}): Promise<${fn.ret}> {
      return Mod.async_call(Mod._async_${fn.name}, ${args});
    }`;
  }

  // otherwise fall back to ccall
  // TODO could be cwrap...

  if (isAsync) {
    throw new Error('todo: nontrivial async functions');
  }

  let ctypes = fn.params.map(p => p.isArray ? 'array' : toEmType(p.type));
  return `${name}: function(${params}): ${fn.ret} {
    return Mod.ccall('${fn.name}', '${toEmType(fn.ret)}', ${JSON.stringify(ctypes)}, [${args}]);
  }`;

}

// function wrapFunction(fn) {
//   // we'll figure out how to deal with these later
//   if (fn.params.some(p => p.kind !== 'in' || p.isConst || p.isPtr || p.isArray|| p.type === 'Z3_string_ptr' || p.type === 'Z3_char_ptr')) {
//     return null;
//   }
//   if (fn.ret === 'Z3_string_ptr' || fn.ret === 'Z3_char_ptr') {
//     return null;
//   }
//   let isAsync = asyncFns.includes(fn.name);
//   let name = fn.name.startsWith('Z3_') ? fn.name.substring(3) : fn.name;
//   let params = fn.params.map(p => `${p.name}: ${p.type === 'Z3_string' ? 'string' : p.type}`).join(', ');
//   let args = fn.params.map((p, i) => p.type === 'Z3_string' ? '_str_' + i : p.name).join(', ');
//   let ret = isAsync ? `Promise<${fn.ret}>` : fn.ret;

//   let invocation = isAsync ? `Mod.async_call(Mod._async_${fn.name}, ${args})` : `Mod._${fn.name}(${args})`;

//   if (fn.ret === 'Z3_string') {
//     invocation = `Mod.UTF8ToString(${invocation})`;
//   }

//   let stringCount = fn.params.filter(p => p.type === 'Z3_string').length; // ugh, no .count
//   if (stringCount > 0) {
//     // gotta make a wrapper to handle strings
//     // TODO maybe just use ccall?
//     let wrappers = fn.params.map((p, i) => {
//       if (p.type !== 'Z3_string') {
//         return '';
//       }
//       return {
//         alloc: `let _str_${i} = Mod.allocate(Mod.intArrayFromString(${p.name}), Mod.ALLOC_NORMAL);\n`,
//         free: `Mod._free(_str_${i});\n`
//       };
//     });
//     return `${name}: function (${params}): ${ret} {
//       ${wrappers.map(w => w.alloc).join('')}
//       try {
//         return ${invocation};
//       } finally {
//         ${wrappers.map(w => w.free).join('')}
//       }
//     }`;
//   }

//   // TODO actually just give it the type, instead of a full wrapper, for the simple cases
//   return `${name}: function (${params}): ${ret} {
//     return ${invocation};
//   }`;
// }

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

function pointerArrayToByteArr(pointers: number[]) {
  return new Uint8Array((new Int32Array(pointers)).buffer);
}

${Object.entries(primitiveTypes).filter(e => e[0] !== 'void' && e[0] !== 'Z3_string_ptr').map(e => `type ${e[0]} = ${e[1]};`).join('\n')}

${Object.keys(types).filter(k => k.startsWith('Z3')).map(makePointerType).join('\n')}

${Object.entries(enums).map(e => wrapEnum(e[0], e[1])).join('\n\n')}

export async function init() {
  let Mod = await initModule();
  return {
    em: Mod,
    Z3: {
     ${functions.map(wrapFunction).filter(f => f != null).join(',\n')}
    }
  };
}

`;

console.log(prettier.format(out, { singleQuote: true, parser: 'typescript' }));
