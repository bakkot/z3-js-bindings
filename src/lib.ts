// see the Python API: https://github.com/Z3Prover/z3/blob/a90b66134d74fa2e6b36968955d306902ccc3cc6/src/api/python/z3/z3.py

import type {
  Z3_context,
  Z3_solver,
  Z3_model,
  Z3_ast,
  Z3_sort,
  Z3_symbol,
  Z3_lbool,
  Z3_func_interp,
  Z3_func_decl,
  Z3_app,
} from '../build/wrapper';
import { init as initZ3 } from '../build/wrapper';

export async function init() {
  let { em, Z3 } = await initZ3();

  let cleanupRegistry = new FinalizationRegistry(thunk => {
    // console.log('cleaning up');
    // @ts-ignore typescript's types for FinalizationRegistry aren't good enough to infer this properly
    thunk();
  });

  // Global Z3 context
  let _main_ctx: Context | null = null;

  function main_ctx() {
    if (_main_ctx === null) {
      _main_ctx = new Context();
    }
    return _main_ctx;
  }

  class Context {
    declare ctx: Z3_context;
    // we're not going to worry about parameters or anything at the moment
    constructor() {
      let conf = Z3.mk_config();
      // Z3.set_param_value(conf, "timeout", 10000);
      // Z3.set_param_value(conf, "auto_config", true);
      let ctx = Z3.mk_context_rc(conf);
      this.ctx = ctx;

      // TODO figure out how to set error handler properly
      // probably needs https://emscripten.org/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html#calling-javascript-functions-as-function-pointers-from-c
      // this.eh = Z3.set_error_handler(this.ctx, z3_error_handler);
      // Z3_set_ast_print_mode(this.ctx, Z3_PRINT_SMTLIB2_COMPLIANT)
      // ^ TODO get the enums out of Z3
      Z3.del_config(conf);

      // TODO lint rule against `this` in the thunk
      cleanupRegistry.register(this, () => Z3.del_context(ctx));
    }

    ref() {
      return this.ctx;
    }
  }

  class Solver {
    declare ctx: Context;
    declare solver: Z3_solver;
    constructor() {
      let ctx = main_ctx();
      let solver = Z3.mk_solver(ctx.ref());
      Z3.solver_inc_ref(ctx.ref(), solver);

      this.ctx = ctx;
      this.solver = solver;
      cleanupRegistry.register(this, () => Z3.solver_dec_ref(ctx.ref(), solver));
    }

    add(...args: BoolRef[]) {
      this.assert_exprs(...args);
    }

    assert_exprs(...args: BoolRef[]) {
      let s = BoolSort(this.ctx);
      for (let arg of args) {
        // TODO support Goal/AstVector here
        if (!is_expr(arg)) {
          throw new Error(`unimplemented: asserting ${arg}`);
        }
        Z3.solver_assert(this.ctx.ref(), this.solver, arg.ast);
      }
    }

    async check() {
      // TODO assumptions
      // let s = BoolSort(self.ctx)
      // let r = Z3.solver_check_assumptions(this.ctx.ref(), this.solver, 0, 0);
      let r = await Z3.solver_check(this.ctx.ref(), this.solver);
      return lboolToString(r);
    }

    model() {
      let m = Z3.solver_get_model(this.ctx.ref(), this.solver);
      if ((m as unknown as number) === 0) {
        throw new Error('failed to get model');
      }
      return new ModelRef(m, this.ctx);
    }

    // help() {
    //   return Z3.solver_get_help(this.ctx.ref(), this.solver);
    // }

    // str() {
    //   return Z3.solver_to_string(this.ctx.ref(), this.solver);
    // }
  }

  class ModelRef {
    declare model: Z3_model;
    declare ctx: Context;
    constructor(m: Z3_model, ctx = main_ctx()) {
      this.model = m;
      this.ctx = ctx;
      Z3.model_inc_ref(this.ctx.ref(), this.model);
      cleanupRegistry.register(this, () => Z3.model_dec_ref(ctx.ref(), m));
    }

    // toString() {
    //   // this is a hack until we get something better
    //   let lines = [];
    //   for (let ref of this) {
    //     lines.push(`${ref.name()} = ${this.get_interp(ref)?.as_string()}`);
    //   }
    //   return lines.join('\n');
    // }

    len() {
      return Z3.model_get_num_consts(this.ctx.ref(), this.model) + Z3.model_get_num_funcs(this.ctx.ref(), this.model);
    }

    // python API uses __getitem__ to be iterable, but JS doesn't have that hack
    *[Symbol.iterator]() {
      let num_consts = Z3.model_get_num_consts(this.ctx.ref(), this.model);
      for (let i = 0; i < num_consts; ++i) {
        yield new FuncDeclRef(Z3.model_get_const_decl(this.ctx.ref(), this.model, i), this.ctx);
      }
      let num_funcs = Z3.model_get_num_funcs(this.ctx.ref(), this.model);
      for (let i = 0; i < num_funcs; ++i) {
        yield new FuncDeclRef(Z3.model_get_func_decl(this.ctx.ref(), this.model, i), this.ctx);
      }
    }

    get_interp(decl: FuncDeclRef) {
      // if (is_const(decl)) {
      //   decl = decl.decl();
      // }
      if (decl.arity() == 0) {
        let _r = Z3.model_get_const_interp(this.ctx.ref(), this.model, decl.ast);
        if ((_r as unknown as number) === 0) {
          throw new Error('npe in get_interp');
        }
        let r = _to_expr_ref(_r as unknown as Z3_ast, this.ctx);
        if (is_as_array(r)) {
          throw new Error('unimplement: get_interp of as_array');
        } else {
          return r;
        }
      } else {
        let interp = Z3.model_get_func_interp(this.ctx.ref(), this.model, decl.ast);
        if ((interp as unknown as number) === 0) {
          return null;
        }
        return new FuncInterp(interp as unknown as Z3_func_interp, this.ctx);
      }
    }

    evaluate(t: ExprRef, model_completion = false) {
      let out = Z3.model_eval(this.ctx.ref(), this.model, t.ast, model_completion);
      if (out == null) {
        throw new Error('failed to evaluate expression in the model');
      }
      return _to_expr_ref(out, this.ctx);
    }
  }

  class FuncInterp {
    declare f: Z3_func_interp;
    declare ctx: Context;
    constructor(f: Z3_func_interp, ctx = main_ctx()) {
      this.f = f;
      this.ctx = ctx;
    }
  }

  class AstRef {
    declare ast: Z3_ast;
    declare ctx: Context;
    constructor(ast: Z3_ast, ctx: Context = main_ctx()) {
      Z3.inc_ref(ctx.ref(), ast);
      this.ast = ast;
      this.ctx = ctx;
      cleanupRegistry.register(this, () => Z3.dec_ref(ctx.ref(), ast));
    }

    valueOf() {
      throw new Error('attempting to take value of ref; this is almost certainly a mistake');
    }
  }

  class FuncDeclRef extends AstRef {
    declare ast: Z3_func_decl;
    constructor(ast: Z3_func_decl, ctx = main_ctx()) {
      super(ast, ctx);
    }

    // TODO methods
    arity() {
      return Z3.get_arity(this.ctx.ref(), this.ast);
    }

    name() {
      return _symbol2py(this.ctx, Z3.get_decl_name(this.ctx.ref(), this.ast));
    }
  }

  class ExprRef extends AstRef {
    // todo methods

    // TODO probably override this with more precise types
    eq(other: CoercibleToExpr | null) {
      if (other == null) {
        return BoolVal(false, this.ctx);
      }
      let [a, b] = _coerce_exprs(this, other);
      return new BoolRef(Z3.mk_eq(this.ctx.ref(), a.ast, b.ast), this.ctx);
    }

    decl() {
      if (!is_app(this)) {
        throw new Error('decl called on non-app');
      }
      return new FuncDeclRef(Z3.get_app_decl(this.ctx.ref(), this.ast as unknown as Z3_app), this.ctx);
    }

    sort(): SortRef {
      throw new Error(`unimplemented: sort on ${this.constructor.name}`);
    }

    num_args() {
      if (!is_app(this)) {
        throw new Error('num_args called on non-app');
      }
      return Z3.get_app_num_args(this.ctx.ref(), this.ast as unknown as Z3_app);
    }
  }

  class ArithRef extends ExprRef {
    // todo methods
    sort(): SortRef {
      return new ArithSortRef(Z3.get_sort(this.ctx.ref(), this.ast), this.ctx);
    }

    le(other: ArithRef | number) {
      let [a, b] = _coerce_exprs(this, other);
      return new BoolRef(Z3.mk_le(this.ctx.ref(), a.ast, b.ast), this.ctx);
    }

    ge(other: ArithRef | number) {
      let [a, b] = _coerce_exprs(this, other);
      return new BoolRef(Z3.mk_ge(this.ctx.ref(), a.ast, b.ast), this.ctx);
    }

    as_string(): string {
      throw new Error(`unimplemented: as_string on ${this.constructor.name}`);
    }
  }

  class IntNumRef extends ArithRef {
    // todo methods
    sort() {
      return new BoolSortRef(Z3.get_sort(this.ctx.ref(), this.ast), this.ctx);
    }

    as_string() {
      return Z3.get_numeral_string(this.ctx.ref(), this.ast);
    }
  }

  class BoolRef extends ArithRef {
    // todo methods
    sort() {
      return new BoolSortRef(Z3.get_sort(this.ctx.ref(), this.ast), this.ctx);
    }
  }

  class SortRef extends AstRef {
    // todo methods
    declare ast: Z3_sort;
    constructor(ast: Z3_sort, ctx = main_ctx()) {
      super(ast, ctx);
    }
    eq(other: SortRef | null) {
      if (other == null) {
        return false;
      }
      return Z3.is_eq_sort(this.ctx.ref(), this.ast, other.ast);
    }
  }

  class ArithSortRef extends SortRef {
    // todo methods
  }

  class BoolSortRef extends SortRef {
    // todo methods
    // todo maybe just don't have cast
    // cast(val: boolean | BoolRef) {
    //   if (typeof val === 'boolean') {
    //     return BoolVal(val, this.ctx);
    //   }
    //   // todo debug asserts
    //   return val;
    // }
  }

  function to_symbol(s: number | string, ctx = main_ctx()) {
    if (typeof s === 'number') {
      assert_int(s);
      return Z3.mk_int_symbol(ctx.ref(), s);
    } else if (typeof s === 'string') {
      return Z3.mk_string_symbol(ctx.ref(), s);
    } else {
      throw new Error(`unreachable: to_symbol called with ${typeof s}`);
    }
  }

  // todo rename
  function _symbol2py(ctx: Context, s: Z3_symbol) {
    if (Z3.get_symbol_kind(ctx.ref(), s) === /* Z3_INT_SYMBOL */ 0) {
      return `k!${Z3.get_symbol_int(ctx.ref(), s)}`;
    } else {
      return Z3.get_symbol_string(ctx.ref(), s);
    }
  }

  let is_expr = (a: unknown) => a instanceof ExprRef;

  let is_ast = (a: unknown) => a instanceof AstRef;

  function is_app(a: unknown) {
    if (!(a instanceof ExprRef)) {
      return false;
    }
    let k = _ast_kind(a.ctx, a);
    return k == 0 || k == 1; // TODO Z3_ast_kind
  }

  let is_const = (a: unknown) => is_app(a) && (a as ExprRef).num_args() === 0;

  let is_as_array = (n: unknown) => n instanceof ExprRef && Z3.is_as_array(n.ctx.ref(), n.ast);

  function _to_expr_ref(a: Z3_ast, ctx: Context) {
    let k = Z3.get_ast_kind(ctx.ref(), a);
    let sk = Z3.get_sort_kind(ctx.ref(), Z3.get_sort(ctx.ref(), a));
    if (sk === /* Z3_BOOL_SORT */ 1) {
      return new BoolRef(a, ctx);
    }
    if (sk === /* Z3_INT_SORT */ 2) {
      if (k === /* Z3_NUMERAL_AST */ 0) {
        return new IntNumRef(a, ctx);
      }
      return new ArithRef(a, ctx);
    }
    throw new Error(`unknown sort kind ${sk}`);
  }

  function _ast_kind(ctx: Context, a: ExprRef) {
    return Z3.get_ast_kind(ctx.ref(), a.ast);
  }

  // TODO export, probably
  type CoercibleToExpr = boolean | number | ExprRef;
  function _coerce_exprs(a: CoercibleToExpr, b: CoercibleToExpr, ctx = main_ctx()) {
    // in python these casts are conditional but I don't know why
    let ca = _py2expr(a, ctx);
    let cb = _py2expr(b, ctx);
    if (!ca.sort().eq(cb.sort())) {
      throw new Error('unimplemented: _coerce_exprs with unequal sorts');
    }
    // no casting necessary since they're equal
    return [ca, cb];
  }

  function _coerce_expr_list(exprs: CoercibleToExpr[], ctx: Context) {
    if (exprs.length === 0) {
      return [];
    }
    if (ctx == null) {
      throw new Error('unimplemented: _coerce_expr_list without ctx');
    }
    let coerced = exprs.map(e => _py2expr(e, ctx));
    let sort = coerced[0].sort();
    if (coerced.some(e => !e.sort().eq(sort))) {
      throw new Error('unimplemented: _coerce_expr_list with unequal sorts');
    }
    return coerced;
  }

  function assert_int(val: number) {
    if (Math.floor(val) !== val || !Number.isFinite(val)) {
      throw new Error('unimplemented: support for non-integer values');
    }
  }

  function _to_int_str(val: boolean | number) {
    if (typeof val === 'boolean') {
      return val ? '1' : '0';
    } else if (typeof val === 'number') {
      assert_int(val);
      return '' + val;
    }
    throw new Error(`unimplemented: _to_int_str for ${val}`);
  }

  // // TODO rename
  // todo maybe this is ExprRef?
  function _py2expr(a: boolean | number | ExprRef, ctx = main_ctx()): ExprRef {
    if (typeof a === 'boolean') {
      return BoolVal(a, ctx);
    } else if (typeof a === 'number') {
      if (Math.floor(a) !== a || !Number.isFinite(a)) {
        throw new Error('unimplemented: support for non-integer values');
      }
      return IntVal(a, ctx);
    } else if (is_expr(a)) {
      return a as ExprRef;
    } else {
      throw new Error(`unimplemented: _py2expr support for ${typeof a}`);
    }
  }

  function _ctx_from_ast_arg_list(args: unknown[]) {
    let ctx = null;
    for (let a of args) {
      if (is_ast(a) /* || is_probe(a) */) {
        if (ctx == null) {
          ctx = (a as AstRef).ctx;
        } else if (ctx !== (a as AstRef).ctx) {
          throw new Error('args are from different contexts');
        }
      }
    }
    return ctx;
  }

  function BoolVal(val: boolean, ctx = main_ctx()) {
    return new BoolRef((val ? Z3.mk_false : Z3.mk_true)(ctx.ref()), ctx);
  }

  function IntVal(val: number, ctx = main_ctx()) {
    if (Math.floor(val) !== val || !Number.isFinite(val)) {
      throw new Error(`IntVal expects an int (got ${val}`);
    }
    return new IntNumRef(Z3.mk_numeral(ctx.ref(), _to_int_str(val), IntSort(ctx).ast), ctx);
  }

  function BoolSort(ctx = main_ctx()) {
    return new BoolSortRef(Z3.mk_bool_sort(ctx.ref()), ctx);
  }

  function IntSort(ctx = main_ctx()) {
    return new ArithSortRef(Z3.mk_int_sort(ctx.ref()), ctx);
  }

  function Int(name: string) {
    let ctx = main_ctx();
    return new ArithRef(Z3.mk_const(ctx.ref(), to_symbol(name, ctx), IntSort(ctx).ast), ctx);
  }

  function Distinct(...args: CoercibleToExpr[]) {
    let ctx = _ctx_from_ast_arg_list(args);
    if (ctx == null) {
      throw new Error('at least one argument to Distinct must be a Z3 expression');
    }
    let coerced = _coerce_expr_list(args, ctx);
    let out = new BoolRef(
      Z3.mk_distinct(
        ctx.ref(),
        coerced.map(c => c.ast),
      ),
      ctx,
    );

    // Module._free(_args);
    return out;
  }

  function lboolToString(r: Z3_lbool) {
    // intentionally not implemented like python
    // TODO pull out the Z3_lbool enum
    return r === -1 ? 'unsat' : r === 1 ? 'sat' : 'unknown';
  }

  return {
    em,
    Z3: {
      Context,
      Solver,
      Int,
      Distinct,
    },
    rawZ3: Z3,
  };
}
