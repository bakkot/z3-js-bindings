// THIS FILE IS AUTOMATICALLY GENERATED BY make-cc-wrapper.js
// DO NOT EDIT IT BY HAND

#include <thread>

#include <emscripten.h>

#include "../z3/src/api/z3.h"

template<typename Fn, Fn fn, typename... Args>
void wrapper(Args&&... args) {
  // gotta capture idx by value
  std::thread t([...args = std::forward<Args>(args)] {
    try {
      auto result = fn(args...);
      MAIN_THREAD_ASYNC_EM_ASM({
        resolve_async($0);
      }, result);
    } catch (...) {
      MAIN_THREAD_ASYNC_EM_ASM({
        reject_async('failed with unknown exception');
      });
      throw;
    }
  });
  t.detach();
}

extern "C" void async_Z3_simplify(Z3_context c, Z3_ast a) {
  wrapper<decltype(&Z3_simplify), &Z3_simplify>(c, a);
}

extern "C" void async_Z3_simplify_ex(Z3_context c, Z3_ast a, Z3_params p) {
  wrapper<decltype(&Z3_simplify_ex), &Z3_simplify_ex>(c, a, p);
}

extern "C" void async_Z3_solver_check(Z3_context c, Z3_solver s) {
  wrapper<decltype(&Z3_solver_check), &Z3_solver_check>(c, s);
}

extern "C" void async_Z3_solver_cube(Z3_context c, Z3_solver s, Z3_ast_vector vars, unsigned backtrack_level) {
  wrapper<decltype(&Z3_solver_cube), &Z3_solver_cube>(c, s, vars, backtrack_level);
}

extern "C" void async_Z3_solver_get_consequences(Z3_context c, Z3_solver s, Z3_ast_vector assumptions, Z3_ast_vector variables, Z3_ast_vector consequences) {
  wrapper<decltype(&Z3_solver_get_consequences), &Z3_solver_get_consequences>(c, s, assumptions, variables, consequences);
}

extern "C" void async_Z3_tactic_apply(Z3_context c, Z3_tactic t, Z3_goal g) {
  wrapper<decltype(&Z3_tactic_apply), &Z3_tactic_apply>(c, t, g);
}

extern "C" void async_Z3_tactic_apply_ex(Z3_context c, Z3_tactic t, Z3_goal g, Z3_params p) {
  wrapper<decltype(&Z3_tactic_apply_ex), &Z3_tactic_apply_ex>(c, t, g, p);
}

extern "C" void async_Z3_fixedpoint_query(Z3_context c, Z3_fixedpoint d, Z3_ast query) {
  wrapper<decltype(&Z3_fixedpoint_query), &Z3_fixedpoint_query>(c, d, query);
}

extern "C" void async_Z3_fixedpoint_query_from_lvl(Z3_context c, Z3_fixedpoint d, Z3_ast query, unsigned lvl) {
  wrapper<decltype(&Z3_fixedpoint_query_from_lvl), &Z3_fixedpoint_query_from_lvl>(c, d, query, lvl);
}

extern "C" void async_Z3_polynomial_subresultants(Z3_context c, Z3_ast p, Z3_ast q, Z3_ast x) {
  wrapper<decltype(&Z3_polynomial_subresultants), &Z3_polynomial_subresultants>(c, p, q, x);
}
