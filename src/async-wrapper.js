// this wrapper works with async-fns to provide promise-based off-thread versions of some functions
let capabilities = [];

function resolve_async(idx, val) {
  capabilities[idx]?.resolve(val);
  capabilities[idx] = null;
}
function reject_async(idx, val) {
  capabilities[idx]?.reject(val);
  capabilities[idx] = null;
}

Module.do_work = (x) => {
  let idx = capabilities.length;
  let promise = new Promise((resolve, reject) => {
    capabilities.push({ resolve, reject });
  });
  Module._async_do_work(idx, x);
  return promise;
};
