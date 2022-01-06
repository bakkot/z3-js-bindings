'use strict';

let prettier = require('prettier');

let { primitiveTypes, types, enums, functions } = require('./parse-api.js');

let makePointerType = t => `type ${t} = Pointer<'${t}'>;`;

function wrapFunction(fn) {
  // we'll figure out how to deal with these later
  if (fn.params.some(p => p.kind !== 'in' || p.isConst || p.isPtr || p.isArray || p.type === 'Z3_string' || p.type === 'Z3_string_ptr' || p.type === 'Z3_char_ptr')) {
    return null;
  }
  let params = fn.params.map(p => `${p.name}: ${p.type}`).join(', ');
  return `${fn.name}: function (${params}): ${fn.ret} {
  return Mod._${fn.name}(${fn.params.map(p => p.name).join(', ')});
}`;
}

function wrapEnum(name, values) {
  let enumEntries = Object.entries(values);
  return `enum ${name} {
    ${enumEntries.map(([k, v], i) => k + (v === ((enumEntries[i - 1]?.[1] ?? -1) + 1) ? '' : ` = ${v}`) + ',').join('\n')}
  };`
}

let out = `
// @ts-ignore no-implicit-any
import initModule = require('./z3-built.js');
interface Pointer<T extends string> extends Number {
  readonly __typeName: T;
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
