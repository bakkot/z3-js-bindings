// Some of the examples from test_capi.c.
// Note that none of the type annotations on variable declarations are necessary:
// TypeScript can infer all of them.
// They're just here so readers can see what types things are.

import type { Z3_config, Z3_context, Z3_solver, Z3_sort, Z3_ast, Z3_model, Z3_symbol } from './build/wrapper';
import { init, Z3_lbool } from './build/wrapper';

// @ts-ignore we're not going to bother with types for this
import { sprintf } from 'sprintf-js';

let printf = (str: string, ...args: unknown[]) => console.log(sprintf(str.replace(/\n$/, ''), ...args));

(async () => {
  let { em, Z3 } = await init();

  function mk_context(): Z3_context {
    let cfg: Z3_config = Z3.mk_config();
    Z3.set_param_value(cfg, "model", "true");
    let ctx: Z3_context = Z3.mk_context(cfg);
    Z3.del_config(cfg);
    return ctx;
  }

  function mk_solver(ctx: Z3_context): Z3_solver {
    let s: Z3_solver = Z3.mk_solver(ctx);
    Z3.solver_inc_ref(ctx, s);
    return s;
  }

  function del_solver(ctx: Z3_context, s: Z3_solver) {
    Z3.solver_dec_ref(ctx, s);
  }

  function mk_var(ctx: Z3_context, name: string, ty: Z3_sort): Z3_ast {
    let s: Z3_symbol = Z3.mk_string_symbol(ctx, name);
    return Z3.mk_const(ctx, s, ty);
  }

  function exitf(m: string) {
    console.error(`BUG: ${m}`);
    process.exit(1);
  }

  async function check(ctx: Z3_context, s: Z3_solver, expected_result: Z3_lbool) {
    let m: Z3_model | null = null;
    let result: Z3_lbool = await Z3.solver_check(ctx, s);
    switch (result) {
      case Z3_lbool.Z3_L_FALSE:
        printf("unsat\n");
        break;
      case Z3_lbool.Z3_L_UNDEF:
        printf("unknown\n");
        m = Z3.solver_get_model(ctx, s);
        if (m) Z3.model_inc_ref(ctx, m);
        printf("potential model:\n%s\n", Z3.model_to_string(ctx, m));
        break;
      case Z3_lbool.Z3_L_TRUE:
        m = Z3.solver_get_model(ctx, s);
        if (m) Z3.model_inc_ref(ctx, m);
        printf("sat\n%s\n", Z3.model_to_string(ctx, m));
        break;
    }
    if (result !== expected_result) {
        exitf("unexpected result");
    }
    if (m) Z3.model_dec_ref(ctx, m);
  }


  // https://github.com/Z3Prover/z3/blob/174889ad5ea8b1e1127aeec8a4121a5687ac9a2b/examples/c/test_capi.c#L1440
  async function bitvector_example2() {
    let ctx: Z3_context = mk_context();
    let s: Z3_solver = mk_solver(ctx);

    /* construct x ^ y - 103 == x * y */
    let bv_sort: Z3_sort = Z3.mk_bv_sort(ctx, 32);
    let x: Z3_ast = mk_var(ctx, "x", bv_sort);
    let y: Z3_ast = mk_var(ctx, "y", bv_sort);
    let x_xor_y: Z3_ast = Z3.mk_bvxor(ctx, x, y);
    let c103: Z3_ast = Z3.mk_numeral(ctx, "103", bv_sort);
    let lhs: Z3_ast = Z3.mk_bvsub(ctx, x_xor_y, c103);
    let rhs: Z3_ast = Z3.mk_bvmul(ctx, x, y);
    let ctr: Z3_ast = Z3.mk_eq(ctx, lhs, rhs);

    printf("\nbitvector_example2\n");
    // LOG_MSG("bitvector_example2");
    printf("find values of x and y, such that x ^ y - 103 == x * y\n");

    // /* add the constraint <tt>x ^ y - 103 == x * y<\tt> to the logical context */
    Z3.solver_assert(ctx, s, ctr);

    // /* find a model (i.e., values for x an y that satisfy the constraint */
    await check(ctx, s, Z3_lbool.Z3_L_TRUE);

    del_solver(ctx, s);
    Z3.del_context(ctx);
  }

  await bitvector_example2();

  // shut down
  em.PThread.terminateAllThreads();
})().catch(e => {
  console.error('error', e);
  process.exit(1);
});
