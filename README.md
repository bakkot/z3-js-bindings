# Z3 TypeScript Bindings

This is a WIP project to provide TypeScript bindings for the [Z3 theorem prover](https://github.com/Z3Prover/z3), following the design of the Python bindings.

Right now Z3 is compiled to wasm, which works in browsers as well as node, but it should be fairly straightforward to replace it with a native Node-API package for use in node (with better performance than wasm).


## Building

This repository has the wasm artifact committed, so you don't need to install emscripten unless you want to modify teh artifact for some reason. If you do want that, you can run `build-wasm.sh`; it will take a while.

To build the wrapper, just `npm i` and `npm run build-ts`.


## Using

I would not recommend using this in production right now. The organization of the code is likely to change. For that reason it's not on npm even as a 0.x version.

Only a small part of the API is exposed currently, but it's enough to implement a simple sudoku solver: see [`example.ts`](./example.ts).

This requires threads, which means you'll need to be running in an environment which supports `SharedArrayBuffer`. In browsers, in addition to ensuring your browser supports SAB, you'll need to serve your page with [special headers](https://web.dev/coop-coep/). There's a [neat trick](https://github.com/gzuidhof/coi-serviceworker) for doing that client-side on e.g. Github Pages, though you shouldn't use that trick in more complex applications. 


## Contributing

The library is in [`src/lib.ts`](./src/lib.ts). Pick something you want to be able to do and add the parts of the [Python API](https://github.com/Z3Prover/z3/blob/a90b66134d74fa2e6b36968955d306902ccc3cc6/src/api/python/z3/z3.py) necessary to make it work.

There's no tests or linting right now, whoops. Gotta work on that soon.


### Implementation notes

The native Z3 APIs are given TypeScript types by [`scripts/make-ts-wrapper.js`](./scripts/make-ts-wrapper.js). They mostly operate on pointers, which are given opaque types through a hack.

I've only extracted a subset of the native API right now. You can modify `make-ts-wrapper` as necessary to teach it how to handle your new thing if you need that.

In the Python bindings, reference counting is managed through destructors. JS doesn't have those, but it does have [`FinalizationRegistry`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry), which this project uses for the same purpose.

Also, the library isn't very organized. I intend to split it out into a few files at some point.
