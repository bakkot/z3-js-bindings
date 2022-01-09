#!/bin/bash

set -euxo pipefail

if [ ! -d "z3" ]; then
  echo 'Please `git clone git@github.com:Z3Prover/z3.git`'
  exit 1
fi



export ROOT=$PWD
cd z3
export CXXFLAGS="-pthread -s USE_PTHREADS=1 -s DISABLE_EXCEPTION_CATCHING=0"
export LDFLAGS="-s WASM_BIGINT -s -pthread -s USE_PTHREADS=1"
if [ ! -f "build/Makefile" ]; then
  emconfigure python scripts/mk_make.py --staticlib --single-threaded
fi

cd build
emmake make -j$(nproc) libz3.a

cd $ROOT

export EM_CACHE=$HOME/.emscripten/
export FNS=$(node scripts/list-exports.js)
export METHODS='["ccall","FS","allocate","UTF8ToString","intArrayFromString","ALLOC_NORMAL"]'
emcc build/async-fns.cc z3/build/libz3.a --std=c++20 --pre-js src/async-wrapper.js -g2 -pthread -fexceptions -s WASM_BIGINT -s USE_PTHREADS=1 -s PTHREAD_POOL_SIZE=0 -s PTHREAD_POOL_SIZE_STRICT=0 -s MODULARIZE=1 -s 'EXPORT_NAME="initZ3"' -s EXPORTED_RUNTIME_METHODS=$METHODS -s EXPORTED_FUNCTIONS=$FNS -s DISABLE_EXCEPTION_CATCHING=0 -s SAFE_HEAP=0 -s DEMANGLE_SUPPORT=1 -s TOTAL_MEMORY=1GB -I z3/src/api/ -o build/z3-built.js
