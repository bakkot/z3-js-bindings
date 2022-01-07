// this wrapper works with async-fns to provide promise-based off-thread versions of some functions
let capabilities = [];

function resolve_async(idx, val) {
  // setTimeout is a workaround for https://github.com/emscripten-core/emscripten/issues/15900
  let cap = capabilities[idx];
  if (cap == null) {
    return;
  }
  capabilities[idx] = null;

  setTimeout(() => {
    cap.resolve(val);
  }, 0);
}
function reject_async(idx, val) {
  let cap = capabilities[idx];
  if (cap == null) {
    return;
  }
  capabilities[idx] = null;

  setTimeout(() => {
    cap.reject(val);
  }, 0);
}

Module.async_call = function(f, ...args) {
  let idx = capabilities.length;
  let promise = new Promise((resolve, reject) => {
    capabilities.push({ resolve, reject });
  });
  f(idx, ...args);
  return promise;
}
