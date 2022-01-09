# Z3 TypeScript Bindings

This is a project to provide TypeScript bindings for the [Z3 theorem prover](https://github.com/Z3Prover/z3).

Right now Z3 is compiled to wasm, which works in browsers as well as node, but it should be fairly straightforward to replace it with a native Node-API package for use in node (with better performance than wasm).

There are two parts to the effort:
1. exposing a low-level wrapper around the raw API (but not so low-level that you need to do your own `malloc`s)
1. exposing a high-level wrapper around that, like the Python bindings.

The first part is complete, and is the focus of the remainder of this readme. The second part is in progress under [`fancy-wrapper`](./fancy-wrapper).


## Building

This repository has the wasm artifact committed, so you don't need to install emscripten unless you want to modify the artifact for some reason. If you do want that, you can run `npm run build-wasm`; it will take a while.

To build the wrapper, run `npm i` and then `npm run build`.


## Using

This requires threads, which means you'll need to be running in an environment which supports `SharedArrayBuffer`. In browsers, in addition to ensuring your browser supports SAB, you'll need to serve your page with [special headers](https://web.dev/coop-coep/). There's a [neat trick](https://github.com/gzuidhof/coi-serviceworker) for doing that client-side on e.g. Github Pages, though you shouldn't use that trick in more complex applications.

Other than the differences below, the bindings can be used exactly as you'd use the C library.

The exported object is an async function which initializes the library and returns `{ em, Z3 }` - `em` contains the underlying emscripten module, which you can use to e.g. kill stray threads, and `Z3` contains the actual bindings.

[`test-ts-api.ts`](./test-ts-api.ts) contains a couple real cases translated very mechanically from [this file](https://github.com/Z3Prover/z3/blob/90fd3d82fce20d45ed2eececdf65545bab769503/examples/c/test_capi.c).


## Differences from the C API

### Integers

JavaScript numbers are IEEE double-precisions floats. These can be used wherever the C API expects an `int`, `unsigned int`, `float`, or `double`.

`int64_t` and `uint64_t` cannot be precisely represented by JS numbers, so in the TS bindings they are represented by [BigInts](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#bigint_type).

### Out parameters

In C, to return multiple values a function will take an address to write to, conventionally referred to as an "out parameter". Sometimes the function returns a boolean to indicate success; other times it may return nothing or some other value.

In JS the convention when returning multiple values is to return records containing the values of interest.

The wrapper translates between the two conventions. For example, the C declaration

```c
void Z3_API Z3_rcf_get_numerator_denominator(Z3_context c, Z3_rcf_num a, Z3_rcf_num * n, Z3_rcf_num * d);
```

is represented in the TS bindings as

```ts
function rcf_get_numerator_denominator(c: Z3_context, a: Z3_rcf_num): { n: Z3_rcf_num; d: Z3_rcf_num } {
  // ...
}
```

When there is only a single out parameter, and the return value is not otherwise of interest, the parameter is not wrapped. For example, the C declaration

```c
Z3_bool Z3_API Z3_model_eval(Z3_context c, Z3_model m, Z3_ast t, bool model_completion, Z3_ast * v);
```

is represented in the TS bindings as

```ts
function model_eval(c: Z3_context, m: Z3_model, t: Z3_ast, model_completion: boolean): Z3_ast | null {
 // ...
}
```

Note that the boolean return type of the C function is translated into a nullable return type for the TS binding.

When the return value is of interest it is included in the returned record under the key `rv`.


### Arrays

The when the C API takes an array as an argument it will also require a parameter which specifies the length of the array (since arrays do not carry their own lengths in C). In the TS bindings this is automatically inferred.

For example, the C declaration
```js
unsigned Z3_API Z3_rcf_mk_roots(Z3_context c, unsigned n, Z3_rcf_num const a[], Z3_rcf_num roots[]);
```

is represented in the TS bindings as

```ts
function rcf_mk_roots(c: Z3_context, a: Z3_rcf_num[]): { rv: number; roots: Z3_rcf_num[] }
```

When there are multiple arrays which the C API expects to be of the same length, the TS bindings will enforce that this is the case.


### Null pointers

Some of the C APIs accept or return null pointers (represented by types whose name end in `_opt`). These are represented in the TS bindings as `| null`. For example, the C declaration

```js
Z3_ast_opt Z3_API Z3_model_get_const_interp(Z3_context c, Z3_model m, Z3_func_decl a);
```

is represented in the TS bindings as

```ts
function model_get_const_interp(c: Z3_context, m: Z3_model, a: Z3_func_decl): Z3_ast | null {
  // ...
}
```


### Async functions

Certain long-running APIs are not appropriate to call on the main thread. In the TS bindings those APIs are marked as `async` and are automatically called on a different thread. This includes the following APIs:

- `Z3_simplify`
- `Z3_simplify_ex`
- `Z3_solver_check`
- `Z3_solver_check_assumptions`
- `Z3_solver_cube`
- `Z3_solver_get_consequences`
- `Z3_tactic_apply`
- `Z3_tactic_apply_ex`
- `Z3_optimize_check`
- `Z3_algebraic_roots`
- `Z3_algebraic_eval`
- `Z3_fixedpoint_query`
- `Z3_fixedpoint_query_relations`
- `Z3_fixedpoint_query_from_lvl`
- `Z3_polynomial_subresultants`

Note that these are not thread-safe, and so only one call can be running at a time. Trying to call a second async API before the first completes will throw.


## Contributing

The low-level bindings are complete, but contributions to the high-level bindings are very welcome.

The current work is in [`fancy-wrapper/lib.ts`](./fancy-wrapper/lib.ts). Pick something you want to be able to do and add the parts of the [Python API](https://github.com/Z3Prover/z3/blob/a90b66134d74fa2e6b36968955d306902ccc3cc6/src/api/python/z3/z3.py) necessary to make it work.

In the Python bindings, reference counting is managed through destructors. JS doesn't have those, but it does have [`FinalizationRegistry`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry), which the high-level bindings use for the same purpose.

There's no tests or linting right now, whoops. And the code is pretty disorganized. Gotta work on that soon.


### Implementation notes

The native Z3 APIs are given TypeScript types by [`scripts/make-ts-wrapper.js`](./scripts/make-ts-wrapper.js). They mostly operate on pointers, which are given opaque types through a hack.
