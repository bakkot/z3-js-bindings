// THIS FILE IS AUTOMATICALLY GENERATED BY make-cc-wrapper.js
// DO NOT EDIT IT BY HAND

#include <thread>

#include <emscripten.h>

#include "../z3/src/api/z3.h"

template<typename Fn, Fn fn, typename... Args>
void wrapper(int idx, Args&&... args) {
  // gotta capture idx by value
  std::thread t([idx, ...args = std::forward<Args>(args)] {
    try {
      auto result = fn(args...);
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

extern "C" void async_Z3_simplify(int promise_idx, Z3_context c, Z3_ast a) {
  wrapper<decltype(&Z3_simplify), &Z3_simplify>(promise_idx, c, a);
}

extern "C" void async_Z3_simplify_ex(int promise_idx, Z3_context c, Z3_ast a, Z3_params p) {
  wrapper<decltype(&Z3_simplify_ex), &Z3_simplify_ex>(promise_idx, c, a, p);
}

extern "C" void async_Z3_solver_check(int promise_idx, Z3_context c, Z3_solver s) {
  wrapper<decltype(&Z3_solver_check), &Z3_solver_check>(promise_idx, c, s);
}

extern "C" void async_Z3_solver_cube(int promise_idx, Z3_context c, Z3_solver s, Z3_ast_vector vars, unsigned backtrack_level) {
  wrapper<decltype(&Z3_solver_cube), &Z3_solver_cube>(promise_idx, c, s, vars, backtrack_level);
}

extern "C" void async_Z3_solver_get_consequences(int promise_idx, Z3_context c, Z3_solver s, Z3_ast_vector assumptions, Z3_ast_vector variables, Z3_ast_vector consequences) {
  wrapper<decltype(&Z3_solver_get_consequences), &Z3_solver_get_consequences>(promise_idx, c, s, assumptions, variables, consequences);
}

extern "C" void async_Z3_tactic_apply(int promise_idx, Z3_context c, Z3_tactic t, Z3_goal g) {
  wrapper<decltype(&Z3_tactic_apply), &Z3_tactic_apply>(promise_idx, c, t, g);
}

extern "C" void async_Z3_tactic_apply_ex(int promise_idx, Z3_context c, Z3_tactic t, Z3_goal g, Z3_params p) {
  wrapper<decltype(&Z3_tactic_apply_ex), &Z3_tactic_apply_ex>(promise_idx, c, t, g, p);
}

extern "C" void async_Z3_optimize_check(int promise_idx, Z3_context c, Z3_optimize o, unsigned num_assumptions, const Z3_ast assumptions[]) {
  wrapper<decltype(&Z3_optimize_check), &Z3_optimize_check>(promise_idx, c, o, num_assumptions, assumptions);
}

extern "C" void async_Z3_algebraic_eval(int promise_idx, Z3_context c, Z3_ast p, unsigned n, Z3_ast a[]) {
  wrapper<decltype(&Z3_algebraic_eval), &Z3_algebraic_eval>(promise_idx, c, p, n, a);
}

extern "C" void async_Z3_fixedpoint_query(int promise_idx, Z3_context c, Z3_fixedpoint d, Z3_ast query) {
  wrapper<decltype(&Z3_fixedpoint_query), &Z3_fixedpoint_query>(promise_idx, c, d, query);
}

extern "C" void async_Z3_fixedpoint_query_relations(int promise_idx, Z3_context c, Z3_fixedpoint d, unsigned num_relations, const Z3_func_decl relations[]) {
  wrapper<decltype(&Z3_fixedpoint_query_relations), &Z3_fixedpoint_query_relations>(promise_idx, c, d, num_relations, relations);
}

extern "C" void async_Z3_fixedpoint_query_from_lvl(int promise_idx, Z3_context c, Z3_fixedpoint d, Z3_ast query, unsigned lvl) {
  wrapper<decltype(&Z3_fixedpoint_query_from_lvl), &Z3_fixedpoint_query_from_lvl>(promise_idx, c, d, query, lvl);
}

extern "C" void async_Z3_polynomial_subresultants(int promise_idx, Z3_context c, Z3_ast p, Z3_ast q, Z3_ast x) {
  wrapper<decltype(&Z3_polynomial_subresultants), &Z3_polynomial_subresultants>(promise_idx, c, p, q, x);
}