'use strict';

// this is called by build.sh to generate the names of the bindings to export

let { functions } = require('./parse-api.js');

// functions defined in async-fns.cc
let extras = ['_async_Z3_solver_check'];

console.log(JSON.stringify([...extras, ...functions.map(f => '_' + f.name)]));
