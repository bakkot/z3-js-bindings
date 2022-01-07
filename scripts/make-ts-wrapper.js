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

function isZ3PointerType(type) {
  return type.startsWith('Z3_') && type !== 'Z3_string';
}

function toEm(p) {
  let { type } = p;
  if (p.kind === 'out') {
    if (type === 'Z3_string_ptr' || type.startsWith('Z3_') && type !== 'Z3_string') {
      return 'outPtrAddress';
    }
    throw new Error(`unknown out parameter type ${JSON.stringify(p)}`);
  }
  if (p.isArray) {
    if (!isZ3PointerType(type)) {
      throw new Error(`only know how to deal with arrays of pointers (got ${type})`);
    }
    return `pointerArrayToByteArr(${p.name} as unknown as number[])`;
  }
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

let isInParam = p => ['in', 'in_array'].includes(p.kind);
function wrapFunction(fn) {
  let inParams = fn.params.filter(isInParam);
  let outParams = fn.params.filter(p => !isInParam(p));

  // we'll figure out how to deal with these cases later
  if (inParams.some(p =>
      p.isPtr
      || p.type === 'Z3_string_ptr'
      || p.type === 'Z3_char_ptr'
      || p.isArray && !isZ3PointerType(p.type)
    ) || outParams.length > 1) {
    console.error(`skipping ${fn.name}`);
    return null;
  }

  let outParam = null;
  if (outParams.length === 1) {
    // this special case is basically just Z3_model_eval
    outParam = outParams[0];
    if (fn.ret !== 'Z3_bool' || outParam.kind !== 'out' || outParam.isArray || !(outParam.isPtr && isZ3PointerType(outParam.type) || !outParam.isPtr && outParam.type === 'Z3_string_ptr')) {
      console.error(`skipping ${fn.name}`);
      return null;
    }
  }
  if (fn.ret === 'Z3_string_ptr' || fn.ret === 'Z3_char_ptr') {
    console.error(`skipping ${fn.name}`);
    return null;
  }
  // console.error(fn.name);

  let isAsync = asyncFns.includes(fn.name);
  let trivial = fn.ret !== 'Z3_string' && outParam === null && !inParams.some(p => p.type === 'Z3_string' || p.isArray);

  let name = fn.name.startsWith('Z3_') ? fn.name.substring(3) : fn.name;
  let params = inParams.map(p => `${p.name}: ${p.type === 'Z3_string' ? 'string' : p.type}${p.isArray ? '[]' : ''}`).join(', ');

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
  let invocation = `Mod.ccall('${fn.name}', '${toEmType(fn.ret)}', ${JSON.stringify(ctypes)}, [${args}])`;
  if (outParam !== null) {
    let returnVal = outParam.type === 'Z3_string_ptr'
      ? `Mod.UTF8ToString(getOutPtr())`
      : `getOutPtr() as unknown as ${outParam.type}`;
    return `${name}: function(${params}): ${outParam.type === 'Z3_string_ptr' ? 'string' : outParam.type} | null {
      let ret = Mod.ccall('${fn.name}', 'boolean', ${JSON.stringify(ctypes)}, [${args}]);
      if (!ret) {
        return null;
      }
      return ${returnVal};
    }`;
  }

  return `${name}: function(${params}): ${fn.ret} {
    return Mod.ccall('${fn.name}', '${toEmType(fn.ret)}', ${JSON.stringify(ctypes)}, [${args}]);
  }`;

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

function pointerArrayToByteArr(pointers: number[]) {
  return new Uint8Array((new Int32Array(pointers)).buffer);
}

${Object.entries(primitiveTypes).filter(e => e[0] !== 'void' && e[0] !== 'Z3_string_ptr').map(e => `type ${e[0]} = ${e[1]};`).join('\n')}

${Object.keys(types).filter(k => k.startsWith('Z3')).map(makePointerType).join('\n')}

${Object.entries(enums).map(e => wrapEnum(e[0], e[1])).join('\n\n')}

export async function init() {
  let Mod = await initModule();

  // this supports a single out parameter that is a pointer
  let outPtrAddress = Mod._malloc(4);
  let outPtrArray = (new Uint32Array(Mod.HEAPU32.buffer, outPtrAddress, 1));
  let getOutPtr = () => outPtrArray[0];

  return {
    em: Mod,
    Z3: {
     ${functions.map(wrapFunction).filter(f => f != null).join(',\n')}
    }
  };
}

`;

console.log(prettier.format(out, { singleQuote: true, parser: 'typescript' }));
