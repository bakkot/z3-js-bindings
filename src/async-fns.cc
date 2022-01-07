#include <thread>

#include <emscripten.h>

#include "../z3/src/api/z3.h"

extern "C" void async_Z3_solver_check(int idx, Z3_context c, Z3_solver s) {
  // gotta capture idx by value
  std::thread t([idx, c, s] {
    try {
      auto result = Z3_solver_check(c, s);
      MAIN_THREAD_ASYNC_EM_ASM({
        resolve_async($0, $1);
      }, idx, result);
    } catch (...) {
      MAIN_THREAD_ASYNC_EM_ASM({
        reject_async($0, 'failed with unknown exception');
      }, idx);
      throw;
    }
  });
  t.detach();

}


// template<typename Fn, Fn fn, typename... Args>
// void wrapper(int idx, Args&&... args) {
//   // gotta capture idx by value
//   std::thread t([idx, ...args = std::forward<Args>(args)] {
//     try {
//       auto result = fn(args...);
//       MAIN_THREAD_ASYNC_EM_ASM({
//         resolve_async($0, $1);
//       }, idx, result);
//     } catch (...) {
//       MAIN_THREAD_ASYNC_EM_ASM({
//         reject_async($0, 'failed with unknown exception');
//       }, idx);
//       throw;
//     }
//   });
//   t.detach();
// }


// extern "C" void async_Z3_solver_check(int promise_idx, Z3_context c, Z3_solver s) {
//   wrapper<decltype(&Z3_solver_check), &Z3_solver_check>(promise_idx, c, s);
// }
