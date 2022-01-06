'use strict';

let res;
window.ready = new Promise(r => { res = r });
(async () => {
  let Module = await initZ3();
  let Z3 = bind(Module);
  console.log(Z3);
  window.z = Z3;

  // see the Python API: https://github.com/Z3Prover/z3/blob/a90b66134d74fa2e6b36968955d306902ccc3cc6/src/api/python/z3/z3.py

  // Global Z3 context
  let _main_ctx = null;

  function main_ctx() {
    if (_main_ctx === null) {
      _main_ctx = new Context();
    }
    return _main_ctx;
  }

  let _get_ctx = ctx => ctx ?? main_ctx();

  function z3_error_handler(c, e) {
    console.error('z3 error', c, e);
    return;
  }

  let cleanupRegistry = new FinalizationRegistry(thunk => { console.log('cleaning up'); thunk(); });

  class Context {
    // we're not going to worry about parameters or anything at the moment
    constructor() {
      let conf = Z3.mk_config();
      // Z3.set_param_value(conf, "timeout", 10000);
      // Z3.set_param_value(conf, "auto_config", true);
      let ctx = Z3.mk_context_rc(conf);
      this.ctx = ctx;
      this.eh = Z3.set_error_handler(this.ctx, z3_error_handler);
      // Z3_set_ast_print_mode(this.ctx, Z3_PRINT_SMTLIB2_COMPLIANT)
      // ^ TODO figure out how to get the enums out of Z3
      // https://emscripten.org/docs/porting/connecting_cpp_and_javascript/embind.html#enums
      // https://github.com/Z3Prover/z3/blob/a90b66134d74fa2e6b36968955d306902ccc3cc6/src/api/z3_api.h#L1353
      Z3.del_config(conf);
      cleanupRegistry.register(this, () => Z3.del_context(ctx)); // can't refer to `this` in the thunk, of course
    }

    get ref() {
      return this.ctx;
    }
  }

  function CheckSatResult(r) {
    // intentionally not implemented like python
    // TODO pull out the Z3_lbool enum
    return r === -1
      ? 'unsat'
      : r === 1
      ? 'sat'
      : 'unknown';
  }

  class Solver {
    constructor() {
      let ctx = main_ctx();
      let solver = Z3.mk_solver(ctx.ref);;
      Z3.solver_inc_ref(ctx.ref, solver);

      // todo remove this
      // // let params = Z3.mk_params(ctx.ref);
      // Z3.params_inc_ref(ctx.ref, params);
      // Z3.params_set_uint(ctx.ref, params, to_symbol("max_rounds"), 10)
      // Z3.solver_set_params(ctx.ref, solver, params);

      this.ctx = ctx;
      this.solver = solver;
      cleanupRegistry.register(this, () => Z3.solver_dec_ref(ctx.ref, solver));
    }

    add(...args) {
      this.assert_exprs(...args);
    }

    assert_exprs(...args) {
      let s = BoolSort(self.ctx);
      for (let arg of args) {
        // TODO support Goal/AstVector here
        if (!is_expr(arg)) {
          throw new Error(`unimplemented: asserting ${arg}`);
        }
        Z3.solver_assert(this.ctx.ref, this.solver, arg.ast);
      }
    }

    check() {
      // TODO assumptions
      // let s = BoolSort(self.ctx)
      // let r = Z3.solver_check_assumptions(this.ctx.ref, this.solver, 0, 0);
      let r = Z3.solver_check(this.ctx.ref, this.solver);
      let str = CheckSatResult(r);
      if (str === 'unknown') {
        console.log('unknown reason:', JSON.stringify(Z3.solver_get_reason_unknown(this.ctx.ref, this.solver)));
      }
      return str;
    }

    model() {
      let m = Z3.solver_get_model(this.ctx.ref, this.solver);
      if (m === 0) {
        throw new Error('failed to get model');
      }
      return new ModelRef(m, this.ctx);
    }

    help() {
      return Z3.solver_get_help(this.ctx.ref, this.solver);
    }

    str() {
      return Z3.solver_to_string(this.ctx.ref, this.solver);
    }
  }

  class ModelRef {
    constructor(m, ctx) {
      this.model = m;
      this.ctx = ctx;
      Z3.model_inc_ref(this.ctx.ref, this.model);
      cleanupRegistry.register(this, () => Z3.model_dec_ref(ctx));
    }

    toString() {
      // this is a hack until we get something better
      let lines = [];
      for (let ref of this) {
        lines.push(`${ref.name()} = ${this.get_interp(ref).as_string()}`);
      }
      return lines.join('\n');
    }

    len() {
      return Z3.model_get_num_consts(this.ctx.ref, this.model) + Z3.model_get_num_funcs(this.ctx.ref, this.model);
    }

    // python API uses __getitem__ to be iterable, but JS doesn't have that hack
    *[Symbol.iterator]() {
      let num_consts = Z3.model_get_num_consts(this.ctx.ref, this.model);
      for (let i = 0; i < num_consts; ++i) {
        yield new FuncDeclRef(Z3.model_get_const_decl(this.ctx.ref, this.model, i), this.ctx);
      }
      let num_funcs = Z3.model_get_num_funcs(this.ctx.ref, this.model);
      for (let i = 0; i < num_funcs; ++i) {
        yield new FuncDeclRef(Z3.model_get_func_decl(this.ctx.ref, this.model, i), this.ctx);
      }
    }

    get_interp(decl) {
      if (is_const(decl)) {
        decl = decl.decl();
      }
      if (decl.arity() == 0) {
        let _r = Z3.model_get_const_interp(this.ctx.ref, this.model, decl.ast);
        if (_r === 0) {
          throw new Error('npe in get_interp');
        }
        let r = _to_expr_ref(_r, this.ctx);
        if (is_as_array(r)) {
          throw new Error('unimplement: get_interp of as_array');
        } else {
          return r;
        }
      } else {
        return FuncInterp(Z3.model_get_func_interp(this.ctx.ref, this.model, decl.ast), this.ctx);
      }
    }

    eval(t, model_completion = false) {
      let outAddress;
      try {
        outAddress = Module._malloc(4);
        // todo ensure model_eval returns a boolean
        // todo maybe figure out automagic out-parameter wrappers?
        if (Z3.model_eval(this.ctx.ref, this.model, t.ast, model_completion, outAddress)) {
          let address = (new Uint32Array(Module.HEAPU32.buffer, outAddress, 1))[0];
          return _to_expr_ref(address, this.ctx);
        }
        throw new Error('failed to evaluate expression in the model');
      } finally {
        if (outAddress) {
          Module._free(outAddress);
        }
      }
    }

    evaluate(t, model_completion) {
      return this.eval(t, model_completion);
    }
  }

  class AstRef {
    constructor(ast, ctx) {
      ctx = _get_ctx(ctx);
      Z3.inc_ref(ctx.ref, ast);
      this.ast = ast;
      this.ctx = ctx;
      cleanupRegistry.register(this, () => Z3.dec_ref(ctx.ref, ast));
    }

    valueOf() {
      throw new Error('attempting to take value of ref; this is almost certainly a mistake');
    }
  }

  class FuncDeclRef extends AstRef {
    // TODO methods
    arity() {
      return Z3.get_arity(this.ctx.ref, this.ast);
    }

    name() {
      return _symbol2py(this.ctx, Z3.get_decl_name(this.ctx.ref, this.ast));
    }
  }

  class ExprRef extends AstRef {
    // todo methods
    eq(other) {
      if (other == null) {
        return false;
      }
      let [a, b] = _coerce_exprs(this, other);
      return new BoolRef(Z3.mk_eq(this.ctx.ref, a.ast, b.ast), this.ctx);
    }

    decl() {
      return new FuncDeclRef(Z3.get_app_decl(this.ctx.ref, this.ast), this.ctx);
    }
  }

  class ArithRef extends ExprRef {
    // todo methods
    sort(self) {
      return new ArithSortRef(Z3.get_sort(this.ctx.ref, this.ast), this.ctx);
    }

    le(other) {
      let [a, b] = _coerce_exprs(this, other);
      return new BoolRef(Z3.mk_le(this.ctx.ref, a.ast, b.ast), this.ctx);
    }

    ge(other) {
      let [a, b] = _coerce_exprs(this, other);
      return new BoolRef(Z3.mk_ge(this.ctx.ref, a.ast, b.ast), this.ctx);
    }
  }

  class IntNumRef extends ArithRef {
    // todo methods
    sort(self) {
      return new BoolSortRef(Z3.get_sort(this.ctx.ref, this.ast), this.ctx);
    }

    as_string() {
      return Z3.get_numeral_string(this.ctx.ref, this.ast);
    }
  }

  class BoolRef extends ArithRef {
    // todo methods
    sort(self) {
      return new BoolSortRef(Z3.get_sort(this.ctx.ref, this.ast), this.ctx);
    }
  }

  class SortRef extends AstRef {
    // todo methods
    eq(other) {
      if (other == null) {
        return false;
      }
      return Z3.is_eq_sort(this.ctx.ref, this.ast, other.ast);
    }
  }

  class ArithSortRef extends SortRef {
    // todo methods
  }

  class BoolSortRef extends SortRef {
    // todo methods
  }

  let to_symbol = (s, ctx) => (typeof s === 'number' ? Z3.mk_int_symbol : Z3.mk_string_symbol)(_get_ctx(ctx).ref, s);

  // todo rename
  function _symbol2py(ctx, s) {
    if (Z3.get_symbol_kind(ctx.ref, s) === /* Z3_INT_SYMBOL */ 0) {
      return `k!${Z3.get_symbol_int(ctx.ref, s)}`;
    } else {
      return Z3.get_symbol_string(ctx.ref, s);
    }
  }

  let is_expr = a => a instanceof ExprRef;

  let is_ast = a => a instanceof AstRef;

  function is_app(a) {
    if (!(a instanceof ExprRef)) {
      return false;
    }
    let k = _ast_kind(a.ctx, a);
    return k == 0 || k == 1; // TODO Z3_ast_kind
  }

  let is_const = a => is_app(a) && a.num_args() === 0;

  let is_as_array = n => (n instanceof ExprRef) && Z3.is_as_array(n.ctx.ref, n.ast);

  // TODO figure out how not to leak
  function _to_ast_array(args) {
    let address = Module._malloc(4 * args.length);
    let array = new Uint32Array(Module.HEAPU32.buffer, address, args.length);
    for (let i = 0; i < args.length; ++i) {
      array[i] = args[i].ast;
    }
    return address;
  }

  function _to_expr_ref(a, ctx) {
    let k = Z3.get_ast_kind(ctx.ref, a);
    let sk = Z3.get_sort_kind(ctx.ref, Z3.get_sort(ctx.ref, a));
    if (sk === /* Z3_BOOL_SORT */ 1) {
      return new BoolRef(a, ctx);
    }
    if (sk === /* Z3_INT_SORT */ 2) {
      if (k === /* Z3_NUMERAL_AST */ 0) {
        return new IntNumRef(a, ctx);
      }
      return new ArithRef(a, ctx)
    }
    throw new Error(`unknown sort kind ${sk}`);
  }

  function _ast_kind(ctx, a) {
    if (!is_ast(a)) {
      throw new Error(`_ast_kind called on non-ast ${a}`); // intentionally stricter than python
    }
    return Z3.get_ast_kind(ctx.ref, a.ast);
  }

  function _coerce_exprs(a, b, ctx) {
    // in python these casts are conditional but I don't know why
    a = _py2expr(a, ctx);
    b = _py2expr(b, ctx);
    if (!a.sort().eq(b.sort())) {
      throw new Error('unimplemented: _coerce_exprs with unequal sorts');
    }
    // no casting necessary since they're equal
    return [a, b];
  }

  function _coerce_expr_list(exprs, ctx) {
    if (exprs.length === 0) {
      return [];
    }
    if (ctx == null) {
      throw new Error('unimplemented: _coerce_expr_list without ctx');
    }
    exprs = exprs.map(e => _py2expr(e, ctx));
    let sort = exprs[0].sort();
    if (exprs.some(e => !e.sort().eq(sort))) {
      throw new Error('unimplemented: _coerce_expr_list with unequal sorts');
    }
    return exprs;
  }

  function _to_int_str(val) {
    if (typeof val === 'boolean') {
      return val ? '1' : '0';
    } else if (typeof val === 'number') {
      if (Math.floor(val) !== val || !Number.isFinite(val)) {
        throw new Error('unimplemented: support for non-integer values');
      }
      return '' + val;
    }
    throw new Error(`unimplemented: _to_int_str for ${val}`);
  }

  // TODO rename
  function _py2expr(a, ctx) {
    if (typeof a === 'boolean') {
      return BoolVal(a, ctx);
    } else if (typeof a === 'number') {
      if (Math.floor(a) !== a || !Number.isFinite(a)) {
        throw new Error('unimplemented: support for non-integer values');
      }
      return IntVal(a, ctx);
    } else if (is_expr(a)) {
      return a;
    } else {
      throw new Error(`unimplemented: _py2expr support for ${typeof a}`);
    }
  }

  function _ctx_from_ast_arg_list(args) {
    let ctx = null;
    for (let a of args) {
      if (is_ast(a) /* || is_probe(a) */) {
        if (ctx == null) {
          ctx = a.ctx;
        } else if (ctx !== a.ctx) {
          throw new Error('args are from different contexts');
        }
      }
    }
    return ctx;
  }

  function BoolVal(val, ctx) {
    if (typeof val !== 'boolean') {
      // TODO gate on debug, I guess?
      throw new Error('BoolVal expects a boolean');
    }
    ctx = _get_ctx(ctx);
    return new BoolRef((val ? Z3.mk_false : Z3.mk_true)(ctx.ref), ctx);
  }

  function IntVal(val, ctx) {
    if (typeof val !== 'number' || Math.floor(val) !== val || !Number.isFinite(val)) {
      // TODO gate on debug, I guess?
      throw new Error(`IntVal expects an int (got ${val}`);
    }
    ctx = _get_ctx(ctx);
    return new IntNumRef(Z3.mk_numeral(ctx.ref, _to_int_str(val), IntSort(ctx).ast), ctx)
  }

  function BoolSort(ctx) {
    ctx = _get_ctx(ctx);
    return new BoolSortRef(Z3.mk_bool_sort(ctx.ref), ctx);
  }

  function IntSort(ctx) {
    ctx = _get_ctx(ctx);
    return new ArithSortRef(Z3.mk_int_sort(ctx.ref), ctx);
  }

  function Int(name) {
    let ctx = main_ctx();
    return new ArithRef(Z3.mk_const(ctx.ref, to_symbol(name, ctx), IntSort(ctx).ast), ctx);
  }

  function Distinct(...args) {
    let ctx = _ctx_from_ast_arg_list(args);
    if (ctx == null) {
      throw new Error('at least one argument to Distinct must be a Z3 expression');
    }
    args = _coerce_expr_list(args, ctx);
    let _args = _to_ast_array(args);
    let out = new BoolRef(Z3.mk_distinct(ctx.ref, args.length, _args), ctx);
    // Module._free(_args);
    return out;
  }

  let c = main_ctx().ref;
  let solver = Z3.mk_solver(c);
  let s = Z3.solver_from_string(c, solver, `(declare-fun c_4_0 () Int)
(declare-fun c_7_0 () Int)
(declare-fun c_2_1 () Int)
(declare-fun c_5_1 () Int)
(declare-fun c_8_1 () Int)
(declare-fun c_0_2 () Int)
(declare-fun c_2_2 () Int)
(declare-fun c_5_2 () Int)
(declare-fun c_7_2 () Int)
(declare-fun c_8_2 () Int)
(declare-fun c_6_3 () Int)
(declare-fun c_2_4 () Int)
(declare-fun c_5_4 () Int)
(declare-fun c_0_5 () Int)
(declare-fun c_1_5 () Int)
(declare-fun c_4_5 () Int)
(declare-fun c_5_5 () Int)
(declare-fun c_0_6 () Int)
(declare-fun c_3_6 () Int)
(declare-fun c_6_6 () Int)
(declare-fun c_1_7 () Int)
(declare-fun c_2_7 () Int)
(declare-fun c_5_7 () Int)
(declare-fun c_0_8 () Int)
(declare-fun c_0_0 () Int)
(declare-fun c_0_1 () Int)
(declare-fun c_0_3 () Int)
(declare-fun c_0_4 () Int)
(declare-fun c_0_7 () Int)
(declare-fun c_1_0 () Int)
(declare-fun c_1_1 () Int)
(declare-fun c_1_2 () Int)
(declare-fun c_1_3 () Int)
(declare-fun c_1_4 () Int)
(declare-fun c_1_6 () Int)
(declare-fun c_1_8 () Int)
(declare-fun c_2_0 () Int)
(declare-fun c_2_3 () Int)
(declare-fun c_2_5 () Int)
(declare-fun c_2_6 () Int)
(declare-fun c_2_8 () Int)
(declare-fun c_3_0 () Int)
(declare-fun c_3_1 () Int)
(declare-fun c_3_2 () Int)
(declare-fun c_3_3 () Int)
(declare-fun c_3_4 () Int)
(declare-fun c_3_5 () Int)
(declare-fun c_3_7 () Int)
(declare-fun c_3_8 () Int)
(declare-fun c_4_1 () Int)
(declare-fun c_4_2 () Int)
(declare-fun c_4_3 () Int)
(declare-fun c_4_4 () Int)
(declare-fun c_4_6 () Int)
(declare-fun c_4_7 () Int)
(declare-fun c_4_8 () Int)
(declare-fun c_5_0 () Int)
(declare-fun c_5_3 () Int)
(declare-fun c_5_6 () Int)
(declare-fun c_5_8 () Int)
(declare-fun c_6_0 () Int)
(declare-fun c_6_1 () Int)
(declare-fun c_6_2 () Int)
(declare-fun c_6_4 () Int)
(declare-fun c_6_5 () Int)
(declare-fun c_6_7 () Int)
(declare-fun c_6_8 () Int)
(declare-fun c_7_1 () Int)
(declare-fun c_7_3 () Int)
(declare-fun c_7_4 () Int)
(declare-fun c_7_5 () Int)
(declare-fun c_7_6 () Int)
(declare-fun c_7_7 () Int)
(declare-fun c_7_8 () Int)
(declare-fun c_8_0 () Int)
(declare-fun c_8_3 () Int)
(declare-fun c_8_4 () Int)
(declare-fun c_8_5 () Int)
(declare-fun c_8_6 () Int)
(declare-fun c_8_7 () Int)
(declare-fun c_8_8 () Int)
(assert (= c_4_0 1))
(assert (= c_7_0 3))
(assert (= c_2_1 9))
(assert (= c_5_1 5))
(assert (= c_8_1 8))
(assert (= c_0_2 8))
(assert (= c_2_2 4))
(assert (= c_5_2 6))
(assert (= c_7_2 2))
(assert (= c_8_2 5))
(assert (= c_6_3 6))
(assert (= c_2_4 8))
(assert (= c_5_4 4))
(assert (= c_0_5 1))
(assert (= c_1_5 2))
(assert (= c_4_5 8))
(assert (= c_5_5 7))
(assert (= c_0_6 3))
(assert (= c_3_6 9))
(assert (= c_6_6 2))
(assert (= c_1_7 6))
(assert (= c_2_7 5))
(assert (= c_5_7 8))
(assert (= c_0_8 9))
(assert (<= c_0_0 9))
(assert (<= c_0_1 9))
(assert (<= c_0_2 9))
(assert (<= c_0_3 9))
(assert (<= c_0_4 9))
(assert (<= c_0_5 9))
(assert (<= c_0_6 9))
(assert (<= c_0_7 9))
(assert (<= c_0_8 9))
(assert (<= c_1_0 9))
(assert (<= c_1_1 9))
(assert (<= c_1_2 9))
(assert (<= c_1_3 9))
(assert (<= c_1_4 9))
(assert (<= c_1_5 9))
(assert (<= c_1_6 9))
(assert (<= c_1_7 9))
(assert (<= c_1_8 9))
(assert (<= c_2_0 9))
(assert (<= c_2_1 9))
(assert (<= c_2_2 9))
(assert (<= c_2_3 9))
(assert (<= c_2_4 9))
(assert (<= c_2_5 9))
(assert (<= c_2_6 9))
(assert (<= c_2_7 9))
(assert (<= c_2_8 9))
(assert (<= c_3_0 9))
(assert (<= c_3_1 9))
(assert (<= c_3_2 9))
(assert (<= c_3_3 9))
(assert (<= c_3_4 9))
(assert (<= c_3_5 9))
(assert (<= c_3_6 9))
(assert (<= c_3_7 9))
(assert (<= c_3_8 9))
(assert (<= c_4_0 9))
(assert (<= c_4_1 9))
(assert (<= c_4_2 9))
(assert (<= c_4_3 9))
(assert (<= c_4_4 9))
(assert (<= c_4_5 9))
(assert (<= c_4_6 9))
(assert (<= c_4_7 9))
(assert (<= c_4_8 9))
(assert (<= c_5_0 9))
(assert (<= c_5_1 9))
(assert (<= c_5_2 9))
(assert (<= c_5_3 9))
(assert (<= c_5_4 9))
(assert (<= c_5_5 9))
(assert (<= c_5_6 9))
(assert (<= c_5_7 9))
(assert (<= c_5_8 9))
(assert (<= c_6_0 9))
(assert (<= c_6_1 9))
(assert (<= c_6_2 9))
(assert (<= c_6_3 9))
(assert (<= c_6_4 9))
(assert (<= c_6_5 9))
(assert (<= c_6_6 9))
(assert (<= c_6_7 9))
(assert (<= c_6_8 9))
(assert (<= c_7_0 9))
(assert (<= c_7_1 9))
(assert (<= c_7_2 9))
(assert (<= c_7_3 9))
(assert (<= c_7_4 9))
(assert (<= c_7_5 9))
(assert (<= c_7_6 9))
(assert (<= c_7_7 9))
(assert (<= c_7_8 9))
(assert (<= c_8_0 9))
(assert (<= c_8_1 9))
(assert (<= c_8_2 9))
(assert (<= c_8_3 9))
(assert (<= c_8_4 9))
(assert (<= c_8_5 9))
(assert (<= c_8_6 9))
(assert (<= c_8_7 9))
(assert (>= c_0_0 1))
(assert (>= c_1_0 1))
(assert (>= c_2_0 1))
(assert (>= c_3_0 1))
(assert (>= c_4_0 1))
(assert (>= c_5_0 1))
(assert (>= c_6_0 1))
(assert (>= c_7_0 1))
(assert (>= c_8_0 1))
(assert (>= c_0_1 1))
(assert (>= c_1_1 1))
(assert (>= c_2_1 1))
(assert (>= c_3_1 1))
(assert (>= c_4_1 1))
(assert (>= c_5_1 1))
(assert (>= c_6_1 1))
(assert (>= c_7_1 1))
(assert (>= c_8_1 1))
(assert (>= c_0_2 1))
(assert (>= c_1_2 1))
(assert (>= c_2_2 1))
(assert (>= c_3_2 1))
(assert (>= c_4_2 1))
(assert (>= c_5_2 1))
(assert (>= c_6_2 1))
(assert (>= c_7_2 1))
(assert (>= c_8_2 1))
(assert (>= c_0_3 1))
(assert (>= c_1_3 1))
(assert (>= c_2_3 1))
(assert (>= c_3_3 1))
(assert (>= c_4_3 1))
(assert (>= c_5_3 1))
(assert (>= c_6_3 1))
(assert (>= c_7_3 1))
(assert (>= c_8_3 1))
(assert (>= c_0_4 1))
(assert (>= c_1_4 1))
(assert (>= c_2_4 1))
(assert (>= c_3_4 1))
(assert (>= c_4_4 1))
(assert (>= c_5_4 1))
(assert (>= c_6_4 1))
(assert (>= c_7_4 1))
(assert (>= c_8_4 1))
(assert (>= c_0_5 1))
(assert (>= c_1_5 1))
(assert (>= c_2_5 1))
(assert (>= c_3_5 1))
(assert (>= c_4_5 1))
(assert (>= c_5_5 1))
(assert (>= c_6_5 1))
(assert (>= c_7_5 1))
(assert (>= c_8_5 1))
(assert (>= c_0_6 1))
(assert (>= c_1_6 1))
(assert (>= c_2_6 1))
(assert (>= c_3_6 1))
(assert (>= c_4_6 1))
(assert (>= c_5_6 1))
(assert (>= c_6_6 1))
(assert (>= c_7_6 1))
(assert (>= c_8_6 1))
(assert (>= c_0_7 1))
(assert (>= c_1_7 1))
(assert (>= c_2_7 1))
(assert (>= c_3_7 1))
(assert (>= c_4_7 1))
(assert (>= c_5_7 1))
(assert (>= c_6_7 1))
(assert (>= c_7_7 1))
(assert (>= c_8_7 1))
(assert (>= c_0_8 1))
(assert (>= c_1_8 1))
(assert (>= c_2_8 1))
(assert (>= c_3_8 1))
(assert (>= c_4_8 1))
(assert (>= c_5_8 1))
(assert (>= c_6_8 1))
(assert (>= c_7_8 1))
(assert (>= c_8_8 1))
(assert (distinct c_0_0 c_1_0 c_2_0 c_3_0 c_4_0 c_5_0 c_6_0 c_7_0 c_8_0))
(assert (distinct c_0_1 c_1_1 c_2_1 c_3_1 c_4_1 c_5_1 c_6_1 c_7_1 c_8_1))
(assert (distinct c_0_2 c_1_2 c_2_2 c_3_2 c_4_2 c_5_2 c_6_2 c_7_2 c_8_2))
(assert (distinct c_0_3 c_1_3 c_2_3 c_3_3 c_4_3 c_5_3 c_6_3 c_7_3 c_8_3))
(assert (distinct c_0_4 c_1_4 c_2_4 c_3_4 c_4_4 c_5_4 c_6_4 c_7_4 c_8_4))
(assert (distinct c_0_5 c_1_5 c_2_5 c_3_5 c_4_5 c_5_5 c_6_5 c_7_5 c_8_5))
(assert (distinct c_0_6 c_1_6 c_2_6 c_3_6 c_4_6 c_5_6 c_6_6 c_7_6 c_8_6))
(assert (distinct c_0_7 c_1_7 c_2_7 c_3_7 c_4_7 c_5_7 c_6_7 c_7_7 c_8_7))
(assert (distinct c_0_8 c_1_8 c_2_8 c_3_8 c_4_8 c_5_8 c_6_8 c_7_8 c_8_8))
(assert (distinct c_0_0 c_0_1 c_0_2 c_0_3 c_0_4 c_0_5 c_0_6 c_0_7 c_0_8))
(assert (distinct c_1_0 c_1_1 c_1_2 c_1_3 c_1_4 c_1_5 c_1_6 c_1_7 c_1_8))
(assert (distinct c_2_0 c_2_1 c_2_2 c_2_3 c_2_4 c_2_5 c_2_6 c_2_7 c_2_8))
(assert (distinct c_3_0 c_3_1 c_3_2 c_3_3 c_3_4 c_3_5 c_3_6 c_3_7 c_3_8))
(assert (distinct c_4_0 c_4_1 c_4_2 c_4_3 c_4_4 c_4_5 c_4_6 c_4_7 c_4_8))
(assert (distinct c_5_0 c_5_1 c_5_2 c_5_3 c_5_4 c_5_5 c_5_6 c_5_7 c_5_8))
(assert (distinct c_6_0 c_6_1 c_6_2 c_6_3 c_6_4 c_6_5 c_6_6 c_6_7 c_6_8))
(assert (distinct c_7_0 c_7_1 c_7_2 c_7_3 c_7_4 c_7_5 c_7_6 c_7_7 c_7_8))
(assert (distinct c_8_0 c_8_1 c_8_2 c_8_3 c_8_4 c_8_5 c_8_6 c_8_7 c_8_8))
(assert (distinct c_0_0 c_1_0 c_2_0 c_0_1 c_1_1 c_2_1 c_0_2 c_1_2 c_2_2))
(assert (distinct c_3_0 c_4_0 c_5_0 c_3_1 c_4_1 c_5_1 c_3_2 c_4_2 c_5_2))
(assert (distinct c_6_0 c_7_0 c_8_0 c_6_1 c_7_1 c_8_1 c_6_2 c_7_2 c_8_2))
(assert (distinct c_0_3 c_1_3 c_2_3 c_0_4 c_1_4 c_2_4 c_0_5 c_1_5 c_2_5))
(assert (distinct c_3_3 c_4_3 c_5_3 c_3_4 c_4_4 c_5_4 c_3_5 c_4_5 c_5_5))
(assert (distinct c_6_3 c_7_3 c_8_3 c_6_4 c_7_4 c_8_4 c_6_5 c_7_5 c_8_5))
(assert (distinct c_0_6 c_1_6 c_2_6 c_0_7 c_1_7 c_2_7 c_0_8 c_1_8 c_2_8))
(assert (distinct c_3_6 c_4_6 c_5_6 c_3_7 c_4_7 c_5_7 c_3_8 c_4_8 c_5_8))
(assert (distinct c_6_6 c_7_6 c_8_6 c_6_7 c_7_7 c_8_7 c_6_8 c_7_8 c_8_8))
(assert (<= c_8_8 9))
`);
  console.log(Z3.solver_check(c, solver));
  console.log('unknown reason', Z3.solver_get_reason_unknown(c, solver));

  window.Z3 = {
    Solver,
    Int,
    Distinct,
  };
  res();

})().catch(e => { console.error(e); });
