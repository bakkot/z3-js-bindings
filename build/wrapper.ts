// @ts-ignore no-implicit-any
import initModule = require('./z3-built.js');
interface Pointer<T extends string> extends Number {
  readonly __typeName: T;
}
interface Subpointer<T extends string, S extends string> extends Pointer<S> {
  readonly __typeName2: T;
}

type bool = boolean;
type Z3_string = string;
type Z3_char_ptr = string;
type unsigned = number;
type double = number;
type int = number;
type uint64_t = number;
type int64_t = number;

export type Z3_sort_opt = Pointer<'Z3_sort_opt'>;
export type Z3_ast_opt = Pointer<'Z3_ast_opt'>;
export type Z3_func_interp_opt = Pointer<'Z3_func_interp_opt'>;
export type Z3_bool_opt = Pointer<'Z3_bool_opt'>;
export type Z3_error_handler = Pointer<'Z3_error_handler'>;
export type Z3_push_eh = Pointer<'Z3_push_eh'>;
export type Z3_pop_eh = Pointer<'Z3_pop_eh'>;
export type Z3_fresh_eh = Pointer<'Z3_fresh_eh'>;
export type Z3_fixed_eh = Pointer<'Z3_fixed_eh'>;
export type Z3_eq_eh = Pointer<'Z3_eq_eh'>;
export type Z3_final_eh = Pointer<'Z3_final_eh'>;
export type Z3_created_eh = Pointer<'Z3_created_eh'>;
export type Z3_symbol = Pointer<'Z3_symbol'>;
export type Z3_literals = Pointer<'Z3_literals'>;
export type Z3_config = Pointer<'Z3_config'>;
export type Z3_context = Pointer<'Z3_context'>;
export type Z3_sort = Subpointer<'Z3_sort', 'Z3_ast'>;
export type Z3_func_decl = Pointer<'Z3_func_decl'>;
export type Z3_ast = Pointer<'Z3_ast'>;
export type Z3_app = Pointer<'Z3_app'>;
export type Z3_pattern = Pointer<'Z3_pattern'>;
export type Z3_model = Pointer<'Z3_model'>;
export type Z3_constructor = Pointer<'Z3_constructor'>;
export type Z3_constructor_list = Pointer<'Z3_constructor_list'>;
export type Z3_params = Pointer<'Z3_params'>;
export type Z3_param_descrs = Pointer<'Z3_param_descrs'>;
export type Z3_goal = Pointer<'Z3_goal'>;
export type Z3_tactic = Pointer<'Z3_tactic'>;
export type Z3_probe = Pointer<'Z3_probe'>;
export type Z3_stats = Pointer<'Z3_stats'>;
export type Z3_solver = Pointer<'Z3_solver'>;
export type Z3_solver_callback = Pointer<'Z3_solver_callback'>;
export type Z3_ast_vector = Pointer<'Z3_ast_vector'>;
export type Z3_ast_map = Pointer<'Z3_ast_map'>;
export type Z3_apply_result = Pointer<'Z3_apply_result'>;
export type Z3_func_interp = Pointer<'Z3_func_interp'>;
export type Z3_func_entry = Pointer<'Z3_func_entry'>;
export type Z3_fixedpoint = Pointer<'Z3_fixedpoint'>;
export type Z3_optimize = Pointer<'Z3_optimize'>;
export type Z3_rcf_num = Pointer<'Z3_rcf_num'>;

export enum Z3_lbool {
  Z3_L_FALSE = -1,
  Z3_L_UNDEF,
  Z3_L_TRUE,
}

export enum Z3_symbol_kind {
  Z3_INT_SYMBOL,
  Z3_STRING_SYMBOL,
}

export enum Z3_parameter_kind {
  Z3_PARAMETER_INT,
  Z3_PARAMETER_DOUBLE,
  Z3_PARAMETER_RATIONAL,
  Z3_PARAMETER_SYMBOL,
  Z3_PARAMETER_SORT,
  Z3_PARAMETER_AST,
  Z3_PARAMETER_FUNC_DECL,
}

export enum Z3_sort_kind {
  Z3_UNINTERPRETED_SORT,
  Z3_BOOL_SORT,
  Z3_INT_SORT,
  Z3_REAL_SORT,
  Z3_BV_SORT,
  Z3_ARRAY_SORT,
  Z3_DATATYPE_SORT,
  Z3_RELATION_SORT,
  Z3_FINITE_DOMAIN_SORT,
  Z3_FLOATING_POINT_SORT,
  Z3_ROUNDING_MODE_SORT,
  Z3_SEQ_SORT,
  Z3_RE_SORT,
  Z3_CHAR_SORT,
  Z3_UNKNOWN_SORT = 1000,
}

export enum Z3_ast_kind {
  Z3_NUMERAL_AST,
  Z3_APP_AST,
  Z3_VAR_AST,
  Z3_QUANTIFIER_AST,
  Z3_SORT_AST,
  Z3_FUNC_DECL_AST,
  Z3_UNKNOWN_AST = 1000,
}

export enum Z3_decl_kind {
  Z3_OP_TRUE = 256,
  Z3_OP_FALSE,
  Z3_OP_EQ,
  Z3_OP_DISTINCT,
  Z3_OP_ITE,
  Z3_OP_AND,
  Z3_OP_OR,
  Z3_OP_IFF,
  Z3_OP_XOR,
  Z3_OP_NOT,
  Z3_OP_IMPLIES,
  Z3_OP_OEQ,
  Z3_OP_ANUM = 512,
  Z3_OP_AGNUM,
  Z3_OP_LE,
  Z3_OP_GE,
  Z3_OP_LT,
  Z3_OP_GT,
  Z3_OP_ADD,
  Z3_OP_SUB,
  Z3_OP_UMINUS,
  Z3_OP_MUL,
  Z3_OP_DIV,
  Z3_OP_IDIV,
  Z3_OP_REM,
  Z3_OP_MOD,
  Z3_OP_TO_REAL,
  Z3_OP_TO_INT,
  Z3_OP_IS_INT,
  Z3_OP_POWER,
  Z3_OP_STORE = 768,
  Z3_OP_SELECT,
  Z3_OP_CONST_ARRAY,
  Z3_OP_ARRAY_MAP,
  Z3_OP_ARRAY_DEFAULT,
  Z3_OP_SET_UNION,
  Z3_OP_SET_INTERSECT,
  Z3_OP_SET_DIFFERENCE,
  Z3_OP_SET_COMPLEMENT,
  Z3_OP_SET_SUBSET,
  Z3_OP_AS_ARRAY,
  Z3_OP_ARRAY_EXT,
  Z3_OP_SET_HAS_SIZE,
  Z3_OP_SET_CARD,
  Z3_OP_BNUM = 1024,
  Z3_OP_BIT1,
  Z3_OP_BIT0,
  Z3_OP_BNEG,
  Z3_OP_BADD,
  Z3_OP_BSUB,
  Z3_OP_BMUL,
  Z3_OP_BSDIV,
  Z3_OP_BUDIV,
  Z3_OP_BSREM,
  Z3_OP_BUREM,
  Z3_OP_BSMOD,
  Z3_OP_BSDIV0,
  Z3_OP_BUDIV0,
  Z3_OP_BSREM0,
  Z3_OP_BUREM0,
  Z3_OP_BSMOD0,
  Z3_OP_ULEQ,
  Z3_OP_SLEQ,
  Z3_OP_UGEQ,
  Z3_OP_SGEQ,
  Z3_OP_ULT,
  Z3_OP_SLT,
  Z3_OP_UGT,
  Z3_OP_SGT,
  Z3_OP_BAND,
  Z3_OP_BOR,
  Z3_OP_BNOT,
  Z3_OP_BXOR,
  Z3_OP_BNAND,
  Z3_OP_BNOR,
  Z3_OP_BXNOR,
  Z3_OP_CONCAT,
  Z3_OP_SIGN_EXT,
  Z3_OP_ZERO_EXT,
  Z3_OP_EXTRACT,
  Z3_OP_REPEAT,
  Z3_OP_BREDOR,
  Z3_OP_BREDAND,
  Z3_OP_BCOMP,
  Z3_OP_BSHL,
  Z3_OP_BLSHR,
  Z3_OP_BASHR,
  Z3_OP_ROTATE_LEFT,
  Z3_OP_ROTATE_RIGHT,
  Z3_OP_EXT_ROTATE_LEFT,
  Z3_OP_EXT_ROTATE_RIGHT,
  Z3_OP_BIT2BOOL,
  Z3_OP_INT2BV,
  Z3_OP_BV2INT,
  Z3_OP_CARRY,
  Z3_OP_XOR3,
  Z3_OP_BSMUL_NO_OVFL,
  Z3_OP_BUMUL_NO_OVFL,
  Z3_OP_BSMUL_NO_UDFL,
  Z3_OP_BSDIV_I,
  Z3_OP_BUDIV_I,
  Z3_OP_BSREM_I,
  Z3_OP_BUREM_I,
  Z3_OP_BSMOD_I,
  Z3_OP_PR_UNDEF = 1280,
  Z3_OP_PR_TRUE,
  Z3_OP_PR_ASSERTED,
  Z3_OP_PR_GOAL,
  Z3_OP_PR_MODUS_PONENS,
  Z3_OP_PR_REFLEXIVITY,
  Z3_OP_PR_SYMMETRY,
  Z3_OP_PR_TRANSITIVITY,
  Z3_OP_PR_TRANSITIVITY_STAR,
  Z3_OP_PR_MONOTONICITY,
  Z3_OP_PR_QUANT_INTRO,
  Z3_OP_PR_BIND,
  Z3_OP_PR_DISTRIBUTIVITY,
  Z3_OP_PR_AND_ELIM,
  Z3_OP_PR_NOT_OR_ELIM,
  Z3_OP_PR_REWRITE,
  Z3_OP_PR_REWRITE_STAR,
  Z3_OP_PR_PULL_QUANT,
  Z3_OP_PR_PUSH_QUANT,
  Z3_OP_PR_ELIM_UNUSED_VARS,
  Z3_OP_PR_DER,
  Z3_OP_PR_QUANT_INST,
  Z3_OP_PR_HYPOTHESIS,
  Z3_OP_PR_LEMMA,
  Z3_OP_PR_UNIT_RESOLUTION,
  Z3_OP_PR_IFF_TRUE,
  Z3_OP_PR_IFF_FALSE,
  Z3_OP_PR_COMMUTATIVITY,
  Z3_OP_PR_DEF_AXIOM,
  Z3_OP_PR_ASSUMPTION_ADD,
  Z3_OP_PR_LEMMA_ADD,
  Z3_OP_PR_REDUNDANT_DEL,
  Z3_OP_PR_CLAUSE_TRAIL,
  Z3_OP_PR_DEF_INTRO,
  Z3_OP_PR_APPLY_DEF,
  Z3_OP_PR_IFF_OEQ,
  Z3_OP_PR_NNF_POS,
  Z3_OP_PR_NNF_NEG,
  Z3_OP_PR_SKOLEMIZE,
  Z3_OP_PR_MODUS_PONENS_OEQ,
  Z3_OP_PR_TH_LEMMA,
  Z3_OP_PR_HYPER_RESOLVE,
  Z3_OP_RA_STORE = 1536,
  Z3_OP_RA_EMPTY,
  Z3_OP_RA_IS_EMPTY,
  Z3_OP_RA_JOIN,
  Z3_OP_RA_UNION,
  Z3_OP_RA_WIDEN,
  Z3_OP_RA_PROJECT,
  Z3_OP_RA_FILTER,
  Z3_OP_RA_NEGATION_FILTER,
  Z3_OP_RA_RENAME,
  Z3_OP_RA_COMPLEMENT,
  Z3_OP_RA_SELECT,
  Z3_OP_RA_CLONE,
  Z3_OP_FD_CONSTANT,
  Z3_OP_FD_LT,
  Z3_OP_SEQ_UNIT,
  Z3_OP_SEQ_EMPTY,
  Z3_OP_SEQ_CONCAT,
  Z3_OP_SEQ_PREFIX,
  Z3_OP_SEQ_SUFFIX,
  Z3_OP_SEQ_CONTAINS,
  Z3_OP_SEQ_EXTRACT,
  Z3_OP_SEQ_REPLACE,
  Z3_OP_SEQ_REPLACE_RE,
  Z3_OP_SEQ_REPLACE_RE_ALL,
  Z3_OP_SEQ_REPLACE_ALL,
  Z3_OP_SEQ_AT,
  Z3_OP_SEQ_NTH,
  Z3_OP_SEQ_LENGTH,
  Z3_OP_SEQ_INDEX,
  Z3_OP_SEQ_LAST_INDEX,
  Z3_OP_SEQ_TO_RE,
  Z3_OP_SEQ_IN_RE,
  Z3_OP_STR_TO_INT,
  Z3_OP_INT_TO_STR,
  Z3_OP_UBV_TO_STR,
  Z3_OP_SBV_TO_STR,
  Z3_OP_STRING_LT,
  Z3_OP_STRING_LE,
  Z3_OP_RE_PLUS,
  Z3_OP_RE_STAR,
  Z3_OP_RE_OPTION,
  Z3_OP_RE_CONCAT,
  Z3_OP_RE_UNION,
  Z3_OP_RE_RANGE,
  Z3_OP_RE_LOOP,
  Z3_OP_RE_POWER,
  Z3_OP_RE_INTERSECT,
  Z3_OP_RE_DIFF,
  Z3_OP_RE_EMPTY_SET,
  Z3_OP_RE_FULL_SET,
  Z3_OP_RE_COMPLEMENT,
  Z3_OP_CHAR_CONST,
  Z3_OP_CHAR_LE,
  Z3_OP_CHAR_TO_INT,
  Z3_OP_CHAR_TO_BV,
  Z3_OP_CHAR_FROM_BV,
  Z3_OP_CHAR_IS_DIGIT,
  Z3_OP_LABEL = 1792,
  Z3_OP_LABEL_LIT,
  Z3_OP_DT_CONSTRUCTOR = 2048,
  Z3_OP_DT_RECOGNISER,
  Z3_OP_DT_IS,
  Z3_OP_DT_ACCESSOR,
  Z3_OP_DT_UPDATE_FIELD,
  Z3_OP_PB_AT_MOST = 2304,
  Z3_OP_PB_AT_LEAST,
  Z3_OP_PB_LE,
  Z3_OP_PB_GE,
  Z3_OP_PB_EQ,
  Z3_OP_SPECIAL_RELATION_LO = 40960,
  Z3_OP_SPECIAL_RELATION_PO,
  Z3_OP_SPECIAL_RELATION_PLO,
  Z3_OP_SPECIAL_RELATION_TO,
  Z3_OP_SPECIAL_RELATION_TC,
  Z3_OP_SPECIAL_RELATION_TRC,
  Z3_OP_FPA_RM_NEAREST_TIES_TO_EVEN = 45056,
  Z3_OP_FPA_RM_NEAREST_TIES_TO_AWAY,
  Z3_OP_FPA_RM_TOWARD_POSITIVE,
  Z3_OP_FPA_RM_TOWARD_NEGATIVE,
  Z3_OP_FPA_RM_TOWARD_ZERO,
  Z3_OP_FPA_NUM,
  Z3_OP_FPA_PLUS_INF,
  Z3_OP_FPA_MINUS_INF,
  Z3_OP_FPA_NAN,
  Z3_OP_FPA_PLUS_ZERO,
  Z3_OP_FPA_MINUS_ZERO,
  Z3_OP_FPA_ADD,
  Z3_OP_FPA_SUB,
  Z3_OP_FPA_NEG,
  Z3_OP_FPA_MUL,
  Z3_OP_FPA_DIV,
  Z3_OP_FPA_REM,
  Z3_OP_FPA_ABS,
  Z3_OP_FPA_MIN,
  Z3_OP_FPA_MAX,
  Z3_OP_FPA_FMA,
  Z3_OP_FPA_SQRT,
  Z3_OP_FPA_ROUND_TO_INTEGRAL,
  Z3_OP_FPA_EQ,
  Z3_OP_FPA_LT,
  Z3_OP_FPA_GT,
  Z3_OP_FPA_LE,
  Z3_OP_FPA_GE,
  Z3_OP_FPA_IS_NAN,
  Z3_OP_FPA_IS_INF,
  Z3_OP_FPA_IS_ZERO,
  Z3_OP_FPA_IS_NORMAL,
  Z3_OP_FPA_IS_SUBNORMAL,
  Z3_OP_FPA_IS_NEGATIVE,
  Z3_OP_FPA_IS_POSITIVE,
  Z3_OP_FPA_FP,
  Z3_OP_FPA_TO_FP,
  Z3_OP_FPA_TO_FP_UNSIGNED,
  Z3_OP_FPA_TO_UBV,
  Z3_OP_FPA_TO_SBV,
  Z3_OP_FPA_TO_REAL,
  Z3_OP_FPA_TO_IEEE_BV,
  Z3_OP_FPA_BVWRAP,
  Z3_OP_FPA_BV2RM,
  Z3_OP_INTERNAL,
  Z3_OP_UNINTERPRETED,
}

export enum Z3_param_kind {
  Z3_PK_UINT,
  Z3_PK_BOOL,
  Z3_PK_DOUBLE,
  Z3_PK_SYMBOL,
  Z3_PK_STRING,
  Z3_PK_OTHER,
  Z3_PK_INVALID,
}

export enum Z3_ast_print_mode {
  Z3_PRINT_SMTLIB_FULL,
  Z3_PRINT_LOW_LEVEL,
  Z3_PRINT_SMTLIB2_COMPLIANT,
}

export enum Z3_error_code {
  Z3_OK,
  Z3_SORT_ERROR,
  Z3_IOB,
  Z3_INVALID_ARG,
  Z3_PARSER_ERROR,
  Z3_NO_PARSER,
  Z3_INVALID_PATTERN,
  Z3_MEMOUT_FAIL,
  Z3_FILE_ACCESS_ERROR,
  Z3_INTERNAL_FATAL,
  Z3_INVALID_USAGE,
  Z3_DEC_REF_ERROR,
  Z3_EXCEPTION,
}

export enum Z3_goal_prec {
  Z3_GOAL_PRECISE,
  Z3_GOAL_UNDER,
  Z3_GOAL_OVER,
  Z3_GOAL_UNDER_OVER,
}

export async function init() {
  let Mod = await initModule();
  return {
    em: Mod,
    Z3: {
      global_param_set: function (param_id: string, param_value: string): void {
        let _str_0 = Mod.allocate(
          Mod.intArrayFromString(param_id),
          Mod.ALLOC_NORMAL
        );
        let _str_1 = Mod.allocate(
          Mod.intArrayFromString(param_value),
          Mod.ALLOC_NORMAL
        );

        try {
          return Mod._Z3_global_param_set(_str_0, _str_1);
        } finally {
          Mod._free(_str_0);
          Mod._free(_str_1);
        }
      },
      global_param_reset_all: function (): void {
        return Mod._Z3_global_param_reset_all();
      },
      mk_config: function (): Z3_config {
        return Mod._Z3_mk_config();
      },
      del_config: function (c: Z3_config): void {
        return Mod._Z3_del_config(c);
      },
      set_param_value: function (
        c: Z3_config,
        param_id: string,
        param_value: string
      ): void {
        let _str_1 = Mod.allocate(
          Mod.intArrayFromString(param_id),
          Mod.ALLOC_NORMAL
        );
        let _str_2 = Mod.allocate(
          Mod.intArrayFromString(param_value),
          Mod.ALLOC_NORMAL
        );

        try {
          return Mod._Z3_set_param_value(c, _str_1, _str_2);
        } finally {
          Mod._free(_str_1);
          Mod._free(_str_2);
        }
      },
      mk_context: function (c: Z3_config): Z3_context {
        return Mod._Z3_mk_context(c);
      },
      mk_context_rc: function (c: Z3_config): Z3_context {
        return Mod._Z3_mk_context_rc(c);
      },
      del_context: function (c: Z3_context): void {
        return Mod._Z3_del_context(c);
      },
      inc_ref: function (c: Z3_context, a: Z3_ast): void {
        return Mod._Z3_inc_ref(c, a);
      },
      dec_ref: function (c: Z3_context, a: Z3_ast): void {
        return Mod._Z3_dec_ref(c, a);
      },
      update_param_value: function (
        c: Z3_context,
        param_id: string,
        param_value: string
      ): void {
        let _str_1 = Mod.allocate(
          Mod.intArrayFromString(param_id),
          Mod.ALLOC_NORMAL
        );
        let _str_2 = Mod.allocate(
          Mod.intArrayFromString(param_value),
          Mod.ALLOC_NORMAL
        );

        try {
          return Mod._Z3_update_param_value(c, _str_1, _str_2);
        } finally {
          Mod._free(_str_1);
          Mod._free(_str_2);
        }
      },
      interrupt: function (c: Z3_context): void {
        return Mod._Z3_interrupt(c);
      },
      mk_params: function (c: Z3_context): Z3_params {
        return Mod._Z3_mk_params(c);
      },
      params_inc_ref: function (c: Z3_context, p: Z3_params): void {
        return Mod._Z3_params_inc_ref(c, p);
      },
      params_dec_ref: function (c: Z3_context, p: Z3_params): void {
        return Mod._Z3_params_dec_ref(c, p);
      },
      params_set_bool: function (
        c: Z3_context,
        p: Z3_params,
        k: Z3_symbol,
        v: bool
      ): void {
        return Mod._Z3_params_set_bool(c, p, k, v);
      },
      params_set_uint: function (
        c: Z3_context,
        p: Z3_params,
        k: Z3_symbol,
        v: unsigned
      ): void {
        return Mod._Z3_params_set_uint(c, p, k, v);
      },
      params_set_double: function (
        c: Z3_context,
        p: Z3_params,
        k: Z3_symbol,
        v: double
      ): void {
        return Mod._Z3_params_set_double(c, p, k, v);
      },
      params_set_symbol: function (
        c: Z3_context,
        p: Z3_params,
        k: Z3_symbol,
        v: Z3_symbol
      ): void {
        return Mod._Z3_params_set_symbol(c, p, k, v);
      },
      params_to_string: function (c: Z3_context, p: Z3_params): Z3_string {
        return Mod.UTF8ToString(Mod._Z3_params_to_string(c, p));
      },
      params_validate: function (
        c: Z3_context,
        p: Z3_params,
        d: Z3_param_descrs
      ): void {
        return Mod._Z3_params_validate(c, p, d);
      },
      param_descrs_inc_ref: function (c: Z3_context, p: Z3_param_descrs): void {
        return Mod._Z3_param_descrs_inc_ref(c, p);
      },
      param_descrs_dec_ref: function (c: Z3_context, p: Z3_param_descrs): void {
        return Mod._Z3_param_descrs_dec_ref(c, p);
      },
      param_descrs_get_kind: function (
        c: Z3_context,
        p: Z3_param_descrs,
        n: Z3_symbol
      ): Z3_param_kind {
        return Mod._Z3_param_descrs_get_kind(c, p, n);
      },
      param_descrs_size: function (
        c: Z3_context,
        p: Z3_param_descrs
      ): unsigned {
        return Mod._Z3_param_descrs_size(c, p);
      },
      param_descrs_get_name: function (
        c: Z3_context,
        p: Z3_param_descrs,
        i: unsigned
      ): Z3_symbol {
        return Mod._Z3_param_descrs_get_name(c, p, i);
      },
      param_descrs_get_documentation: function (
        c: Z3_context,
        p: Z3_param_descrs,
        s: Z3_symbol
      ): Z3_string {
        return Mod.UTF8ToString(
          Mod._Z3_param_descrs_get_documentation(c, p, s)
        );
      },
      param_descrs_to_string: function (
        c: Z3_context,
        p: Z3_param_descrs
      ): Z3_string {
        return Mod.UTF8ToString(Mod._Z3_param_descrs_to_string(c, p));
      },
      mk_int_symbol: function (c: Z3_context, i: int): Z3_symbol {
        return Mod._Z3_mk_int_symbol(c, i);
      },
      mk_string_symbol: function (c: Z3_context, s: string): Z3_symbol {
        let _str_1 = Mod.allocate(Mod.intArrayFromString(s), Mod.ALLOC_NORMAL);

        try {
          return Mod._Z3_mk_string_symbol(c, _str_1);
        } finally {
          Mod._free(_str_1);
        }
      },
      mk_uninterpreted_sort: function (c: Z3_context, s: Z3_symbol): Z3_sort {
        return Mod._Z3_mk_uninterpreted_sort(c, s);
      },
      mk_bool_sort: function (c: Z3_context): Z3_sort {
        return Mod._Z3_mk_bool_sort(c);
      },
      mk_int_sort: function (c: Z3_context): Z3_sort {
        return Mod._Z3_mk_int_sort(c);
      },
      mk_real_sort: function (c: Z3_context): Z3_sort {
        return Mod._Z3_mk_real_sort(c);
      },
      mk_bv_sort: function (c: Z3_context, sz: unsigned): Z3_sort {
        return Mod._Z3_mk_bv_sort(c, sz);
      },
      mk_finite_domain_sort: function (
        c: Z3_context,
        name: Z3_symbol,
        size: uint64_t
      ): Z3_sort {
        return Mod._Z3_mk_finite_domain_sort(c, name, size);
      },
      mk_array_sort: function (
        c: Z3_context,
        domain: Z3_sort,
        range: Z3_sort
      ): Z3_sort {
        return Mod._Z3_mk_array_sort(c, domain, range);
      },
      del_constructor: function (c: Z3_context, constr: Z3_constructor): void {
        return Mod._Z3_del_constructor(c, constr);
      },
      del_constructor_list: function (
        c: Z3_context,
        clist: Z3_constructor_list
      ): void {
        return Mod._Z3_del_constructor_list(c, clist);
      },
      mk_const: function (c: Z3_context, s: Z3_symbol, ty: Z3_sort): Z3_ast {
        return Mod._Z3_mk_const(c, s, ty);
      },
      mk_fresh_const: function (
        c: Z3_context,
        prefix: string,
        ty: Z3_sort
      ): Z3_ast {
        let _str_1 = Mod.allocate(
          Mod.intArrayFromString(prefix),
          Mod.ALLOC_NORMAL
        );

        try {
          return Mod._Z3_mk_fresh_const(c, _str_1, ty);
        } finally {
          Mod._free(_str_1);
        }
      },
      mk_true: function (c: Z3_context): Z3_ast {
        return Mod._Z3_mk_true(c);
      },
      mk_false: function (c: Z3_context): Z3_ast {
        return Mod._Z3_mk_false(c);
      },
      mk_eq: function (c: Z3_context, l: Z3_ast, r: Z3_ast): Z3_ast {
        return Mod._Z3_mk_eq(c, l, r);
      },
      mk_not: function (c: Z3_context, a: Z3_ast): Z3_ast {
        return Mod._Z3_mk_not(c, a);
      },
      mk_ite: function (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast,
        t3: Z3_ast
      ): Z3_ast {
        return Mod._Z3_mk_ite(c, t1, t2, t3);
      },
      mk_iff: function (c: Z3_context, t1: Z3_ast, t2: Z3_ast): Z3_ast {
        return Mod._Z3_mk_iff(c, t1, t2);
      },
      mk_implies: function (c: Z3_context, t1: Z3_ast, t2: Z3_ast): Z3_ast {
        return Mod._Z3_mk_implies(c, t1, t2);
      },
      mk_xor: function (c: Z3_context, t1: Z3_ast, t2: Z3_ast): Z3_ast {
        return Mod._Z3_mk_xor(c, t1, t2);
      },
      mk_unary_minus: function (c: Z3_context, arg: Z3_ast): Z3_ast {
        return Mod._Z3_mk_unary_minus(c, arg);
      },
      mk_div: function (c: Z3_context, arg1: Z3_ast, arg2: Z3_ast): Z3_ast {
        return Mod._Z3_mk_div(c, arg1, arg2);
      },
      mk_mod: function (c: Z3_context, arg1: Z3_ast, arg2: Z3_ast): Z3_ast {
        return Mod._Z3_mk_mod(c, arg1, arg2);
      },
      mk_rem: function (c: Z3_context, arg1: Z3_ast, arg2: Z3_ast): Z3_ast {
        return Mod._Z3_mk_rem(c, arg1, arg2);
      },
      mk_power: function (c: Z3_context, arg1: Z3_ast, arg2: Z3_ast): Z3_ast {
        return Mod._Z3_mk_power(c, arg1, arg2);
      },
      mk_lt: function (c: Z3_context, t1: Z3_ast, t2: Z3_ast): Z3_ast {
        return Mod._Z3_mk_lt(c, t1, t2);
      },
      mk_le: function (c: Z3_context, t1: Z3_ast, t2: Z3_ast): Z3_ast {
        return Mod._Z3_mk_le(c, t1, t2);
      },
      mk_gt: function (c: Z3_context, t1: Z3_ast, t2: Z3_ast): Z3_ast {
        return Mod._Z3_mk_gt(c, t1, t2);
      },
      mk_ge: function (c: Z3_context, t1: Z3_ast, t2: Z3_ast): Z3_ast {
        return Mod._Z3_mk_ge(c, t1, t2);
      },
      mk_divides: function (c: Z3_context, t1: Z3_ast, t2: Z3_ast): Z3_ast {
        return Mod._Z3_mk_divides(c, t1, t2);
      },
      mk_int2real: function (c: Z3_context, t1: Z3_ast): Z3_ast {
        return Mod._Z3_mk_int2real(c, t1);
      },
      mk_real2int: function (c: Z3_context, t1: Z3_ast): Z3_ast {
        return Mod._Z3_mk_real2int(c, t1);
      },
      mk_is_int: function (c: Z3_context, t1: Z3_ast): Z3_ast {
        return Mod._Z3_mk_is_int(c, t1);
      },
      mk_bvnot: function (c: Z3_context, t1: Z3_ast): Z3_ast {
        return Mod._Z3_mk_bvnot(c, t1);
      },
      mk_bvredand: function (c: Z3_context, t1: Z3_ast): Z3_ast {
        return Mod._Z3_mk_bvredand(c, t1);
      },
      mk_bvredor: function (c: Z3_context, t1: Z3_ast): Z3_ast {
        return Mod._Z3_mk_bvredor(c, t1);
      },
      mk_bvand: function (c: Z3_context, t1: Z3_ast, t2: Z3_ast): Z3_ast {
        return Mod._Z3_mk_bvand(c, t1, t2);
      },
      mk_bvor: function (c: Z3_context, t1: Z3_ast, t2: Z3_ast): Z3_ast {
        return Mod._Z3_mk_bvor(c, t1, t2);
      },
      mk_bvxor: function (c: Z3_context, t1: Z3_ast, t2: Z3_ast): Z3_ast {
        return Mod._Z3_mk_bvxor(c, t1, t2);
      },
      mk_bvnand: function (c: Z3_context, t1: Z3_ast, t2: Z3_ast): Z3_ast {
        return Mod._Z3_mk_bvnand(c, t1, t2);
      },
      mk_bvnor: function (c: Z3_context, t1: Z3_ast, t2: Z3_ast): Z3_ast {
        return Mod._Z3_mk_bvnor(c, t1, t2);
      },
      mk_bvxnor: function (c: Z3_context, t1: Z3_ast, t2: Z3_ast): Z3_ast {
        return Mod._Z3_mk_bvxnor(c, t1, t2);
      },
      mk_bvneg: function (c: Z3_context, t1: Z3_ast): Z3_ast {
        return Mod._Z3_mk_bvneg(c, t1);
      },
      mk_bvadd: function (c: Z3_context, t1: Z3_ast, t2: Z3_ast): Z3_ast {
        return Mod._Z3_mk_bvadd(c, t1, t2);
      },
      mk_bvsub: function (c: Z3_context, t1: Z3_ast, t2: Z3_ast): Z3_ast {
        return Mod._Z3_mk_bvsub(c, t1, t2);
      },
      mk_bvmul: function (c: Z3_context, t1: Z3_ast, t2: Z3_ast): Z3_ast {
        return Mod._Z3_mk_bvmul(c, t1, t2);
      },
      mk_bvudiv: function (c: Z3_context, t1: Z3_ast, t2: Z3_ast): Z3_ast {
        return Mod._Z3_mk_bvudiv(c, t1, t2);
      },
      mk_bvsdiv: function (c: Z3_context, t1: Z3_ast, t2: Z3_ast): Z3_ast {
        return Mod._Z3_mk_bvsdiv(c, t1, t2);
      },
      mk_bvurem: function (c: Z3_context, t1: Z3_ast, t2: Z3_ast): Z3_ast {
        return Mod._Z3_mk_bvurem(c, t1, t2);
      },
      mk_bvsrem: function (c: Z3_context, t1: Z3_ast, t2: Z3_ast): Z3_ast {
        return Mod._Z3_mk_bvsrem(c, t1, t2);
      },
      mk_bvsmod: function (c: Z3_context, t1: Z3_ast, t2: Z3_ast): Z3_ast {
        return Mod._Z3_mk_bvsmod(c, t1, t2);
      },
      mk_bvult: function (c: Z3_context, t1: Z3_ast, t2: Z3_ast): Z3_ast {
        return Mod._Z3_mk_bvult(c, t1, t2);
      },
      mk_bvslt: function (c: Z3_context, t1: Z3_ast, t2: Z3_ast): Z3_ast {
        return Mod._Z3_mk_bvslt(c, t1, t2);
      },
      mk_bvule: function (c: Z3_context, t1: Z3_ast, t2: Z3_ast): Z3_ast {
        return Mod._Z3_mk_bvule(c, t1, t2);
      },
      mk_bvsle: function (c: Z3_context, t1: Z3_ast, t2: Z3_ast): Z3_ast {
        return Mod._Z3_mk_bvsle(c, t1, t2);
      },
      mk_bvuge: function (c: Z3_context, t1: Z3_ast, t2: Z3_ast): Z3_ast {
        return Mod._Z3_mk_bvuge(c, t1, t2);
      },
      mk_bvsge: function (c: Z3_context, t1: Z3_ast, t2: Z3_ast): Z3_ast {
        return Mod._Z3_mk_bvsge(c, t1, t2);
      },
      mk_bvugt: function (c: Z3_context, t1: Z3_ast, t2: Z3_ast): Z3_ast {
        return Mod._Z3_mk_bvugt(c, t1, t2);
      },
      mk_bvsgt: function (c: Z3_context, t1: Z3_ast, t2: Z3_ast): Z3_ast {
        return Mod._Z3_mk_bvsgt(c, t1, t2);
      },
      mk_concat: function (c: Z3_context, t1: Z3_ast, t2: Z3_ast): Z3_ast {
        return Mod._Z3_mk_concat(c, t1, t2);
      },
      mk_extract: function (
        c: Z3_context,
        high: unsigned,
        low: unsigned,
        t1: Z3_ast
      ): Z3_ast {
        return Mod._Z3_mk_extract(c, high, low, t1);
      },
      mk_sign_ext: function (c: Z3_context, i: unsigned, t1: Z3_ast): Z3_ast {
        return Mod._Z3_mk_sign_ext(c, i, t1);
      },
      mk_zero_ext: function (c: Z3_context, i: unsigned, t1: Z3_ast): Z3_ast {
        return Mod._Z3_mk_zero_ext(c, i, t1);
      },
      mk_repeat: function (c: Z3_context, i: unsigned, t1: Z3_ast): Z3_ast {
        return Mod._Z3_mk_repeat(c, i, t1);
      },
      mk_bvshl: function (c: Z3_context, t1: Z3_ast, t2: Z3_ast): Z3_ast {
        return Mod._Z3_mk_bvshl(c, t1, t2);
      },
      mk_bvlshr: function (c: Z3_context, t1: Z3_ast, t2: Z3_ast): Z3_ast {
        return Mod._Z3_mk_bvlshr(c, t1, t2);
      },
      mk_bvashr: function (c: Z3_context, t1: Z3_ast, t2: Z3_ast): Z3_ast {
        return Mod._Z3_mk_bvashr(c, t1, t2);
      },
      mk_rotate_left: function (
        c: Z3_context,
        i: unsigned,
        t1: Z3_ast
      ): Z3_ast {
        return Mod._Z3_mk_rotate_left(c, i, t1);
      },
      mk_rotate_right: function (
        c: Z3_context,
        i: unsigned,
        t1: Z3_ast
      ): Z3_ast {
        return Mod._Z3_mk_rotate_right(c, i, t1);
      },
      mk_ext_rotate_left: function (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast
      ): Z3_ast {
        return Mod._Z3_mk_ext_rotate_left(c, t1, t2);
      },
      mk_ext_rotate_right: function (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast
      ): Z3_ast {
        return Mod._Z3_mk_ext_rotate_right(c, t1, t2);
      },
      mk_int2bv: function (c: Z3_context, n: unsigned, t1: Z3_ast): Z3_ast {
        return Mod._Z3_mk_int2bv(c, n, t1);
      },
      mk_bv2int: function (c: Z3_context, t1: Z3_ast, is_signed: bool): Z3_ast {
        return Mod._Z3_mk_bv2int(c, t1, is_signed);
      },
      mk_bvadd_no_overflow: function (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast,
        is_signed: bool
      ): Z3_ast {
        return Mod._Z3_mk_bvadd_no_overflow(c, t1, t2, is_signed);
      },
      mk_bvadd_no_underflow: function (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast
      ): Z3_ast {
        return Mod._Z3_mk_bvadd_no_underflow(c, t1, t2);
      },
      mk_bvsub_no_overflow: function (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast
      ): Z3_ast {
        return Mod._Z3_mk_bvsub_no_overflow(c, t1, t2);
      },
      mk_bvsub_no_underflow: function (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast,
        is_signed: bool
      ): Z3_ast {
        return Mod._Z3_mk_bvsub_no_underflow(c, t1, t2, is_signed);
      },
      mk_bvsdiv_no_overflow: function (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast
      ): Z3_ast {
        return Mod._Z3_mk_bvsdiv_no_overflow(c, t1, t2);
      },
      mk_bvneg_no_overflow: function (c: Z3_context, t1: Z3_ast): Z3_ast {
        return Mod._Z3_mk_bvneg_no_overflow(c, t1);
      },
      mk_bvmul_no_overflow: function (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast,
        is_signed: bool
      ): Z3_ast {
        return Mod._Z3_mk_bvmul_no_overflow(c, t1, t2, is_signed);
      },
      mk_bvmul_no_underflow: function (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast
      ): Z3_ast {
        return Mod._Z3_mk_bvmul_no_underflow(c, t1, t2);
      },
      mk_select: function (c: Z3_context, a: Z3_ast, i: Z3_ast): Z3_ast {
        return Mod._Z3_mk_select(c, a, i);
      },
      mk_store: function (
        c: Z3_context,
        a: Z3_ast,
        i: Z3_ast,
        v: Z3_ast
      ): Z3_ast {
        return Mod._Z3_mk_store(c, a, i, v);
      },
      mk_const_array: function (
        c: Z3_context,
        domain: Z3_sort,
        v: Z3_ast
      ): Z3_ast {
        return Mod._Z3_mk_const_array(c, domain, v);
      },
      mk_array_default: function (c: Z3_context, array: Z3_ast): Z3_ast {
        return Mod._Z3_mk_array_default(c, array);
      },
      mk_as_array: function (c: Z3_context, f: Z3_func_decl): Z3_ast {
        return Mod._Z3_mk_as_array(c, f);
      },
      mk_set_has_size: function (
        c: Z3_context,
        set: Z3_ast,
        k: Z3_ast
      ): Z3_ast {
        return Mod._Z3_mk_set_has_size(c, set, k);
      },
      mk_set_sort: function (c: Z3_context, ty: Z3_sort): Z3_sort {
        return Mod._Z3_mk_set_sort(c, ty);
      },
      mk_empty_set: function (c: Z3_context, domain: Z3_sort): Z3_ast {
        return Mod._Z3_mk_empty_set(c, domain);
      },
      mk_full_set: function (c: Z3_context, domain: Z3_sort): Z3_ast {
        return Mod._Z3_mk_full_set(c, domain);
      },
      mk_set_add: function (c: Z3_context, set: Z3_ast, elem: Z3_ast): Z3_ast {
        return Mod._Z3_mk_set_add(c, set, elem);
      },
      mk_set_del: function (c: Z3_context, set: Z3_ast, elem: Z3_ast): Z3_ast {
        return Mod._Z3_mk_set_del(c, set, elem);
      },
      mk_set_difference: function (
        c: Z3_context,
        arg1: Z3_ast,
        arg2: Z3_ast
      ): Z3_ast {
        return Mod._Z3_mk_set_difference(c, arg1, arg2);
      },
      mk_set_complement: function (c: Z3_context, arg: Z3_ast): Z3_ast {
        return Mod._Z3_mk_set_complement(c, arg);
      },
      mk_set_member: function (
        c: Z3_context,
        elem: Z3_ast,
        set: Z3_ast
      ): Z3_ast {
        return Mod._Z3_mk_set_member(c, elem, set);
      },
      mk_set_subset: function (
        c: Z3_context,
        arg1: Z3_ast,
        arg2: Z3_ast
      ): Z3_ast {
        return Mod._Z3_mk_set_subset(c, arg1, arg2);
      },
      mk_array_ext: function (
        c: Z3_context,
        arg1: Z3_ast,
        arg2: Z3_ast
      ): Z3_ast {
        return Mod._Z3_mk_array_ext(c, arg1, arg2);
      },
      mk_numeral: function (
        c: Z3_context,
        numeral: string,
        ty: Z3_sort
      ): Z3_ast {
        let _str_1 = Mod.allocate(
          Mod.intArrayFromString(numeral),
          Mod.ALLOC_NORMAL
        );

        try {
          return Mod._Z3_mk_numeral(c, _str_1, ty);
        } finally {
          Mod._free(_str_1);
        }
      },
      mk_real: function (c: Z3_context, num: int, den: int): Z3_ast {
        return Mod._Z3_mk_real(c, num, den);
      },
      mk_int: function (c: Z3_context, v: int, ty: Z3_sort): Z3_ast {
        return Mod._Z3_mk_int(c, v, ty);
      },
      mk_unsigned_int: function (
        c: Z3_context,
        v: unsigned,
        ty: Z3_sort
      ): Z3_ast {
        return Mod._Z3_mk_unsigned_int(c, v, ty);
      },
      mk_int64: function (c: Z3_context, v: int64_t, ty: Z3_sort): Z3_ast {
        return Mod._Z3_mk_int64(c, v, ty);
      },
      mk_unsigned_int64: function (
        c: Z3_context,
        v: uint64_t,
        ty: Z3_sort
      ): Z3_ast {
        return Mod._Z3_mk_unsigned_int64(c, v, ty);
      },
      mk_seq_sort: function (c: Z3_context, s: Z3_sort): Z3_sort {
        return Mod._Z3_mk_seq_sort(c, s);
      },
      is_seq_sort: function (c: Z3_context, s: Z3_sort): bool {
        return Mod._Z3_is_seq_sort(c, s);
      },
      get_seq_sort_basis: function (c: Z3_context, s: Z3_sort): Z3_sort {
        return Mod._Z3_get_seq_sort_basis(c, s);
      },
      mk_re_sort: function (c: Z3_context, seq: Z3_sort): Z3_sort {
        return Mod._Z3_mk_re_sort(c, seq);
      },
      is_re_sort: function (c: Z3_context, s: Z3_sort): bool {
        return Mod._Z3_is_re_sort(c, s);
      },
      get_re_sort_basis: function (c: Z3_context, s: Z3_sort): Z3_sort {
        return Mod._Z3_get_re_sort_basis(c, s);
      },
      mk_string_sort: function (c: Z3_context): Z3_sort {
        return Mod._Z3_mk_string_sort(c);
      },
      mk_char_sort: function (c: Z3_context): Z3_sort {
        return Mod._Z3_mk_char_sort(c);
      },
      is_string_sort: function (c: Z3_context, s: Z3_sort): bool {
        return Mod._Z3_is_string_sort(c, s);
      },
      is_char_sort: function (c: Z3_context, s: Z3_sort): bool {
        return Mod._Z3_is_char_sort(c, s);
      },
      mk_string: function (c: Z3_context, s: string): Z3_ast {
        let _str_1 = Mod.allocate(Mod.intArrayFromString(s), Mod.ALLOC_NORMAL);

        try {
          return Mod._Z3_mk_string(c, _str_1);
        } finally {
          Mod._free(_str_1);
        }
      },
      mk_lstring: function (c: Z3_context, len: unsigned, s: string): Z3_ast {
        let _str_2 = Mod.allocate(Mod.intArrayFromString(s), Mod.ALLOC_NORMAL);

        try {
          return Mod._Z3_mk_lstring(c, len, _str_2);
        } finally {
          Mod._free(_str_2);
        }
      },
      is_string: function (c: Z3_context, s: Z3_ast): bool {
        return Mod._Z3_is_string(c, s);
      },
      get_string: function (c: Z3_context, s: Z3_ast): Z3_string {
        return Mod.UTF8ToString(Mod._Z3_get_string(c, s));
      },
      get_string_length: function (c: Z3_context, s: Z3_ast): unsigned {
        return Mod._Z3_get_string_length(c, s);
      },
      mk_seq_empty: function (c: Z3_context, seq: Z3_sort): Z3_ast {
        return Mod._Z3_mk_seq_empty(c, seq);
      },
      mk_seq_unit: function (c: Z3_context, a: Z3_ast): Z3_ast {
        return Mod._Z3_mk_seq_unit(c, a);
      },
      mk_seq_prefix: function (
        c: Z3_context,
        prefix: Z3_ast,
        s: Z3_ast
      ): Z3_ast {
        return Mod._Z3_mk_seq_prefix(c, prefix, s);
      },
      mk_seq_suffix: function (
        c: Z3_context,
        suffix: Z3_ast,
        s: Z3_ast
      ): Z3_ast {
        return Mod._Z3_mk_seq_suffix(c, suffix, s);
      },
      mk_seq_contains: function (
        c: Z3_context,
        container: Z3_ast,
        containee: Z3_ast
      ): Z3_ast {
        return Mod._Z3_mk_seq_contains(c, container, containee);
      },
      mk_str_lt: function (c: Z3_context, prefix: Z3_ast, s: Z3_ast): Z3_ast {
        return Mod._Z3_mk_str_lt(c, prefix, s);
      },
      mk_str_le: function (c: Z3_context, prefix: Z3_ast, s: Z3_ast): Z3_ast {
        return Mod._Z3_mk_str_le(c, prefix, s);
      },
      mk_seq_extract: function (
        c: Z3_context,
        s: Z3_ast,
        offset: Z3_ast,
        length: Z3_ast
      ): Z3_ast {
        return Mod._Z3_mk_seq_extract(c, s, offset, length);
      },
      mk_seq_replace: function (
        c: Z3_context,
        s: Z3_ast,
        src: Z3_ast,
        dst: Z3_ast
      ): Z3_ast {
        return Mod._Z3_mk_seq_replace(c, s, src, dst);
      },
      mk_seq_at: function (c: Z3_context, s: Z3_ast, index: Z3_ast): Z3_ast {
        return Mod._Z3_mk_seq_at(c, s, index);
      },
      mk_seq_nth: function (c: Z3_context, s: Z3_ast, index: Z3_ast): Z3_ast {
        return Mod._Z3_mk_seq_nth(c, s, index);
      },
      mk_seq_length: function (c: Z3_context, s: Z3_ast): Z3_ast {
        return Mod._Z3_mk_seq_length(c, s);
      },
      mk_seq_index: function (
        c: Z3_context,
        s: Z3_ast,
        substr: Z3_ast,
        offset: Z3_ast
      ): Z3_ast {
        return Mod._Z3_mk_seq_index(c, s, substr, offset);
      },
      mk_seq_last_index: function (
        c: Z3_context,
        UNNAMED: Z3_ast,
        substr: Z3_ast
      ): Z3_ast {
        return Mod._Z3_mk_seq_last_index(c, UNNAMED, substr);
      },
      mk_str_to_int: function (c: Z3_context, s: Z3_ast): Z3_ast {
        return Mod._Z3_mk_str_to_int(c, s);
      },
      mk_int_to_str: function (c: Z3_context, s: Z3_ast): Z3_ast {
        return Mod._Z3_mk_int_to_str(c, s);
      },
      mk_ubv_to_str: function (c: Z3_context, s: Z3_ast): Z3_ast {
        return Mod._Z3_mk_ubv_to_str(c, s);
      },
      mk_sbv_to_str: function (c: Z3_context, s: Z3_ast): Z3_ast {
        return Mod._Z3_mk_sbv_to_str(c, s);
      },
      mk_seq_to_re: function (c: Z3_context, seq: Z3_ast): Z3_ast {
        return Mod._Z3_mk_seq_to_re(c, seq);
      },
      mk_seq_in_re: function (c: Z3_context, seq: Z3_ast, re: Z3_ast): Z3_ast {
        return Mod._Z3_mk_seq_in_re(c, seq, re);
      },
      mk_re_plus: function (c: Z3_context, re: Z3_ast): Z3_ast {
        return Mod._Z3_mk_re_plus(c, re);
      },
      mk_re_star: function (c: Z3_context, re: Z3_ast): Z3_ast {
        return Mod._Z3_mk_re_star(c, re);
      },
      mk_re_option: function (c: Z3_context, re: Z3_ast): Z3_ast {
        return Mod._Z3_mk_re_option(c, re);
      },
      mk_re_range: function (c: Z3_context, lo: Z3_ast, hi: Z3_ast): Z3_ast {
        return Mod._Z3_mk_re_range(c, lo, hi);
      },
      mk_re_allchar: function (c: Z3_context, regex_sort: Z3_sort): Z3_ast {
        return Mod._Z3_mk_re_allchar(c, regex_sort);
      },
      mk_re_loop: function (
        c: Z3_context,
        r: Z3_ast,
        lo: unsigned,
        hi: unsigned
      ): Z3_ast {
        return Mod._Z3_mk_re_loop(c, r, lo, hi);
      },
      mk_re_complement: function (c: Z3_context, re: Z3_ast): Z3_ast {
        return Mod._Z3_mk_re_complement(c, re);
      },
      mk_re_diff: function (c: Z3_context, re1: Z3_ast, re2: Z3_ast): Z3_ast {
        return Mod._Z3_mk_re_diff(c, re1, re2);
      },
      mk_re_empty: function (c: Z3_context, re: Z3_sort): Z3_ast {
        return Mod._Z3_mk_re_empty(c, re);
      },
      mk_re_full: function (c: Z3_context, re: Z3_sort): Z3_ast {
        return Mod._Z3_mk_re_full(c, re);
      },
      mk_char_le: function (c: Z3_context, ch1: Z3_ast, ch2: Z3_ast): Z3_ast {
        return Mod._Z3_mk_char_le(c, ch1, ch2);
      },
      mk_char_to_int: function (c: Z3_context, ch: Z3_ast): Z3_ast {
        return Mod._Z3_mk_char_to_int(c, ch);
      },
      mk_char_to_bv: function (c: Z3_context, ch: Z3_ast): Z3_ast {
        return Mod._Z3_mk_char_to_bv(c, ch);
      },
      mk_char_from_bv: function (c: Z3_context, bv: Z3_ast): Z3_ast {
        return Mod._Z3_mk_char_from_bv(c, bv);
      },
      mk_char_is_digit: function (c: Z3_context, ch: Z3_ast): Z3_ast {
        return Mod._Z3_mk_char_is_digit(c, ch);
      },
      mk_linear_order: function (
        c: Z3_context,
        a: Z3_sort,
        id: unsigned
      ): Z3_func_decl {
        return Mod._Z3_mk_linear_order(c, a, id);
      },
      mk_partial_order: function (
        c: Z3_context,
        a: Z3_sort,
        id: unsigned
      ): Z3_func_decl {
        return Mod._Z3_mk_partial_order(c, a, id);
      },
      mk_piecewise_linear_order: function (
        c: Z3_context,
        a: Z3_sort,
        id: unsigned
      ): Z3_func_decl {
        return Mod._Z3_mk_piecewise_linear_order(c, a, id);
      },
      mk_tree_order: function (
        c: Z3_context,
        a: Z3_sort,
        id: unsigned
      ): Z3_func_decl {
        return Mod._Z3_mk_tree_order(c, a, id);
      },
      mk_transitive_closure: function (
        c: Z3_context,
        f: Z3_func_decl
      ): Z3_func_decl {
        return Mod._Z3_mk_transitive_closure(c, f);
      },
      mk_bound: function (c: Z3_context, index: unsigned, ty: Z3_sort): Z3_ast {
        return Mod._Z3_mk_bound(c, index, ty);
      },
      get_symbol_kind: function (c: Z3_context, s: Z3_symbol): Z3_symbol_kind {
        return Mod._Z3_get_symbol_kind(c, s);
      },
      get_symbol_int: function (c: Z3_context, s: Z3_symbol): int {
        return Mod._Z3_get_symbol_int(c, s);
      },
      get_symbol_string: function (c: Z3_context, s: Z3_symbol): Z3_string {
        return Mod.UTF8ToString(Mod._Z3_get_symbol_string(c, s));
      },
      get_sort_name: function (c: Z3_context, d: Z3_sort): Z3_symbol {
        return Mod._Z3_get_sort_name(c, d);
      },
      get_sort_id: function (c: Z3_context, s: Z3_sort): unsigned {
        return Mod._Z3_get_sort_id(c, s);
      },
      sort_to_ast: function (c: Z3_context, s: Z3_sort): Z3_ast {
        return Mod._Z3_sort_to_ast(c, s);
      },
      is_eq_sort: function (c: Z3_context, s1: Z3_sort, s2: Z3_sort): bool {
        return Mod._Z3_is_eq_sort(c, s1, s2);
      },
      get_sort_kind: function (c: Z3_context, t: Z3_sort): Z3_sort_kind {
        return Mod._Z3_get_sort_kind(c, t);
      },
      get_bv_sort_size: function (c: Z3_context, t: Z3_sort): unsigned {
        return Mod._Z3_get_bv_sort_size(c, t);
      },
      get_array_sort_domain: function (c: Z3_context, t: Z3_sort): Z3_sort {
        return Mod._Z3_get_array_sort_domain(c, t);
      },
      get_array_sort_range: function (c: Z3_context, t: Z3_sort): Z3_sort {
        return Mod._Z3_get_array_sort_range(c, t);
      },
      get_tuple_sort_mk_decl: function (
        c: Z3_context,
        t: Z3_sort
      ): Z3_func_decl {
        return Mod._Z3_get_tuple_sort_mk_decl(c, t);
      },
      get_tuple_sort_num_fields: function (
        c: Z3_context,
        t: Z3_sort
      ): unsigned {
        return Mod._Z3_get_tuple_sort_num_fields(c, t);
      },
      get_tuple_sort_field_decl: function (
        c: Z3_context,
        t: Z3_sort,
        i: unsigned
      ): Z3_func_decl {
        return Mod._Z3_get_tuple_sort_field_decl(c, t, i);
      },
      get_datatype_sort_num_constructors: function (
        c: Z3_context,
        t: Z3_sort
      ): unsigned {
        return Mod._Z3_get_datatype_sort_num_constructors(c, t);
      },
      get_datatype_sort_constructor: function (
        c: Z3_context,
        t: Z3_sort,
        idx: unsigned
      ): Z3_func_decl {
        return Mod._Z3_get_datatype_sort_constructor(c, t, idx);
      },
      get_datatype_sort_recognizer: function (
        c: Z3_context,
        t: Z3_sort,
        idx: unsigned
      ): Z3_func_decl {
        return Mod._Z3_get_datatype_sort_recognizer(c, t, idx);
      },
      get_datatype_sort_constructor_accessor: function (
        c: Z3_context,
        t: Z3_sort,
        idx_c: unsigned,
        idx_a: unsigned
      ): Z3_func_decl {
        return Mod._Z3_get_datatype_sort_constructor_accessor(
          c,
          t,
          idx_c,
          idx_a
        );
      },
      datatype_update_field: function (
        c: Z3_context,
        field_access: Z3_func_decl,
        t: Z3_ast,
        value: Z3_ast
      ): Z3_ast {
        return Mod._Z3_datatype_update_field(c, field_access, t, value);
      },
      get_relation_arity: function (c: Z3_context, s: Z3_sort): unsigned {
        return Mod._Z3_get_relation_arity(c, s);
      },
      get_relation_column: function (
        c: Z3_context,
        s: Z3_sort,
        col: unsigned
      ): Z3_sort {
        return Mod._Z3_get_relation_column(c, s, col);
      },
      func_decl_to_ast: function (c: Z3_context, f: Z3_func_decl): Z3_ast {
        return Mod._Z3_func_decl_to_ast(c, f);
      },
      is_eq_func_decl: function (
        c: Z3_context,
        f1: Z3_func_decl,
        f2: Z3_func_decl
      ): bool {
        return Mod._Z3_is_eq_func_decl(c, f1, f2);
      },
      get_func_decl_id: function (c: Z3_context, f: Z3_func_decl): unsigned {
        return Mod._Z3_get_func_decl_id(c, f);
      },
      get_decl_name: function (c: Z3_context, d: Z3_func_decl): Z3_symbol {
        return Mod._Z3_get_decl_name(c, d);
      },
      get_decl_kind: function (c: Z3_context, d: Z3_func_decl): Z3_decl_kind {
        return Mod._Z3_get_decl_kind(c, d);
      },
      get_domain_size: function (c: Z3_context, d: Z3_func_decl): unsigned {
        return Mod._Z3_get_domain_size(c, d);
      },
      get_arity: function (c: Z3_context, d: Z3_func_decl): unsigned {
        return Mod._Z3_get_arity(c, d);
      },
      get_domain: function (
        c: Z3_context,
        d: Z3_func_decl,
        i: unsigned
      ): Z3_sort {
        return Mod._Z3_get_domain(c, d, i);
      },
      get_range: function (c: Z3_context, d: Z3_func_decl): Z3_sort {
        return Mod._Z3_get_range(c, d);
      },
      get_decl_num_parameters: function (
        c: Z3_context,
        d: Z3_func_decl
      ): unsigned {
        return Mod._Z3_get_decl_num_parameters(c, d);
      },
      get_decl_parameter_kind: function (
        c: Z3_context,
        d: Z3_func_decl,
        idx: unsigned
      ): Z3_parameter_kind {
        return Mod._Z3_get_decl_parameter_kind(c, d, idx);
      },
      get_decl_int_parameter: function (
        c: Z3_context,
        d: Z3_func_decl,
        idx: unsigned
      ): int {
        return Mod._Z3_get_decl_int_parameter(c, d, idx);
      },
      get_decl_double_parameter: function (
        c: Z3_context,
        d: Z3_func_decl,
        idx: unsigned
      ): double {
        return Mod._Z3_get_decl_double_parameter(c, d, idx);
      },
      get_decl_symbol_parameter: function (
        c: Z3_context,
        d: Z3_func_decl,
        idx: unsigned
      ): Z3_symbol {
        return Mod._Z3_get_decl_symbol_parameter(c, d, idx);
      },
      get_decl_sort_parameter: function (
        c: Z3_context,
        d: Z3_func_decl,
        idx: unsigned
      ): Z3_sort {
        return Mod._Z3_get_decl_sort_parameter(c, d, idx);
      },
      get_decl_ast_parameter: function (
        c: Z3_context,
        d: Z3_func_decl,
        idx: unsigned
      ): Z3_ast {
        return Mod._Z3_get_decl_ast_parameter(c, d, idx);
      },
      get_decl_func_decl_parameter: function (
        c: Z3_context,
        d: Z3_func_decl,
        idx: unsigned
      ): Z3_func_decl {
        return Mod._Z3_get_decl_func_decl_parameter(c, d, idx);
      },
      get_decl_rational_parameter: function (
        c: Z3_context,
        d: Z3_func_decl,
        idx: unsigned
      ): Z3_string {
        return Mod.UTF8ToString(Mod._Z3_get_decl_rational_parameter(c, d, idx));
      },
      app_to_ast: function (c: Z3_context, a: Z3_app): Z3_ast {
        return Mod._Z3_app_to_ast(c, a);
      },
      get_app_decl: function (c: Z3_context, a: Z3_app): Z3_func_decl {
        return Mod._Z3_get_app_decl(c, a);
      },
      get_app_num_args: function (c: Z3_context, a: Z3_app): unsigned {
        return Mod._Z3_get_app_num_args(c, a);
      },
      get_app_arg: function (c: Z3_context, a: Z3_app, i: unsigned): Z3_ast {
        return Mod._Z3_get_app_arg(c, a, i);
      },
      is_eq_ast: function (c: Z3_context, t1: Z3_ast, t2: Z3_ast): bool {
        return Mod._Z3_is_eq_ast(c, t1, t2);
      },
      get_ast_id: function (c: Z3_context, t: Z3_ast): unsigned {
        return Mod._Z3_get_ast_id(c, t);
      },
      get_ast_hash: function (c: Z3_context, a: Z3_ast): unsigned {
        return Mod._Z3_get_ast_hash(c, a);
      },
      get_sort: function (c: Z3_context, a: Z3_ast): Z3_sort {
        return Mod._Z3_get_sort(c, a);
      },
      is_well_sorted: function (c: Z3_context, t: Z3_ast): bool {
        return Mod._Z3_is_well_sorted(c, t);
      },
      get_bool_value: function (c: Z3_context, a: Z3_ast): Z3_lbool {
        return Mod._Z3_get_bool_value(c, a);
      },
      get_ast_kind: function (c: Z3_context, a: Z3_ast): Z3_ast_kind {
        return Mod._Z3_get_ast_kind(c, a);
      },
      is_app: function (c: Z3_context, a: Z3_ast): bool {
        return Mod._Z3_is_app(c, a);
      },
      is_numeral_ast: function (c: Z3_context, a: Z3_ast): bool {
        return Mod._Z3_is_numeral_ast(c, a);
      },
      is_algebraic_number: function (c: Z3_context, a: Z3_ast): bool {
        return Mod._Z3_is_algebraic_number(c, a);
      },
      to_app: function (c: Z3_context, a: Z3_ast): Z3_app {
        return Mod._Z3_to_app(c, a);
      },
      to_func_decl: function (c: Z3_context, a: Z3_ast): Z3_func_decl {
        return Mod._Z3_to_func_decl(c, a);
      },
      get_numeral_string: function (c: Z3_context, a: Z3_ast): Z3_string {
        return Mod.UTF8ToString(Mod._Z3_get_numeral_string(c, a));
      },
      get_numeral_binary_string: function (
        c: Z3_context,
        a: Z3_ast
      ): Z3_string {
        return Mod.UTF8ToString(Mod._Z3_get_numeral_binary_string(c, a));
      },
      get_numeral_decimal_string: function (
        c: Z3_context,
        a: Z3_ast,
        precision: unsigned
      ): Z3_string {
        return Mod.UTF8ToString(
          Mod._Z3_get_numeral_decimal_string(c, a, precision)
        );
      },
      get_numeral_double: function (c: Z3_context, a: Z3_ast): double {
        return Mod._Z3_get_numeral_double(c, a);
      },
      get_numerator: function (c: Z3_context, a: Z3_ast): Z3_ast {
        return Mod._Z3_get_numerator(c, a);
      },
      get_denominator: function (c: Z3_context, a: Z3_ast): Z3_ast {
        return Mod._Z3_get_denominator(c, a);
      },
      get_algebraic_number_lower: function (
        c: Z3_context,
        a: Z3_ast,
        precision: unsigned
      ): Z3_ast {
        return Mod._Z3_get_algebraic_number_lower(c, a, precision);
      },
      get_algebraic_number_upper: function (
        c: Z3_context,
        a: Z3_ast,
        precision: unsigned
      ): Z3_ast {
        return Mod._Z3_get_algebraic_number_upper(c, a, precision);
      },
      pattern_to_ast: function (c: Z3_context, p: Z3_pattern): Z3_ast {
        return Mod._Z3_pattern_to_ast(c, p);
      },
      get_pattern_num_terms: function (c: Z3_context, p: Z3_pattern): unsigned {
        return Mod._Z3_get_pattern_num_terms(c, p);
      },
      get_pattern: function (
        c: Z3_context,
        p: Z3_pattern,
        idx: unsigned
      ): Z3_ast {
        return Mod._Z3_get_pattern(c, p, idx);
      },
      get_index_value: function (c: Z3_context, a: Z3_ast): unsigned {
        return Mod._Z3_get_index_value(c, a);
      },
      is_quantifier_forall: function (c: Z3_context, a: Z3_ast): bool {
        return Mod._Z3_is_quantifier_forall(c, a);
      },
      is_quantifier_exists: function (c: Z3_context, a: Z3_ast): bool {
        return Mod._Z3_is_quantifier_exists(c, a);
      },
      is_lambda: function (c: Z3_context, a: Z3_ast): bool {
        return Mod._Z3_is_lambda(c, a);
      },
      get_quantifier_weight: function (c: Z3_context, a: Z3_ast): unsigned {
        return Mod._Z3_get_quantifier_weight(c, a);
      },
      get_quantifier_num_patterns: function (
        c: Z3_context,
        a: Z3_ast
      ): unsigned {
        return Mod._Z3_get_quantifier_num_patterns(c, a);
      },
      get_quantifier_pattern_ast: function (
        c: Z3_context,
        a: Z3_ast,
        i: unsigned
      ): Z3_pattern {
        return Mod._Z3_get_quantifier_pattern_ast(c, a, i);
      },
      get_quantifier_num_no_patterns: function (
        c: Z3_context,
        a: Z3_ast
      ): unsigned {
        return Mod._Z3_get_quantifier_num_no_patterns(c, a);
      },
      get_quantifier_no_pattern_ast: function (
        c: Z3_context,
        a: Z3_ast,
        i: unsigned
      ): Z3_ast {
        return Mod._Z3_get_quantifier_no_pattern_ast(c, a, i);
      },
      get_quantifier_num_bound: function (c: Z3_context, a: Z3_ast): unsigned {
        return Mod._Z3_get_quantifier_num_bound(c, a);
      },
      get_quantifier_bound_name: function (
        c: Z3_context,
        a: Z3_ast,
        i: unsigned
      ): Z3_symbol {
        return Mod._Z3_get_quantifier_bound_name(c, a, i);
      },
      get_quantifier_bound_sort: function (
        c: Z3_context,
        a: Z3_ast,
        i: unsigned
      ): Z3_sort {
        return Mod._Z3_get_quantifier_bound_sort(c, a, i);
      },
      get_quantifier_body: function (c: Z3_context, a: Z3_ast): Z3_ast {
        return Mod._Z3_get_quantifier_body(c, a);
      },
      simplify: function (c: Z3_context, a: Z3_ast): Z3_ast {
        return Mod._Z3_simplify(c, a);
      },
      simplify_ex: function (c: Z3_context, a: Z3_ast, p: Z3_params): Z3_ast {
        return Mod._Z3_simplify_ex(c, a, p);
      },
      simplify_get_help: function (c: Z3_context): Z3_string {
        return Mod.UTF8ToString(Mod._Z3_simplify_get_help(c));
      },
      simplify_get_param_descrs: function (c: Z3_context): Z3_param_descrs {
        return Mod._Z3_simplify_get_param_descrs(c);
      },
      translate: function (
        source: Z3_context,
        a: Z3_ast,
        target: Z3_context
      ): Z3_ast {
        return Mod._Z3_translate(source, a, target);
      },
      mk_model: function (c: Z3_context): Z3_model {
        return Mod._Z3_mk_model(c);
      },
      model_inc_ref: function (c: Z3_context, m: Z3_model): void {
        return Mod._Z3_model_inc_ref(c, m);
      },
      model_dec_ref: function (c: Z3_context, m: Z3_model): void {
        return Mod._Z3_model_dec_ref(c, m);
      },
      model_get_const_interp: function (
        c: Z3_context,
        m: Z3_model,
        a: Z3_func_decl
      ): Z3_ast_opt {
        return Mod._Z3_model_get_const_interp(c, m, a);
      },
      model_has_interp: function (
        c: Z3_context,
        m: Z3_model,
        a: Z3_func_decl
      ): bool {
        return Mod._Z3_model_has_interp(c, m, a);
      },
      model_get_func_interp: function (
        c: Z3_context,
        m: Z3_model,
        f: Z3_func_decl
      ): Z3_func_interp_opt {
        return Mod._Z3_model_get_func_interp(c, m, f);
      },
      model_get_num_consts: function (c: Z3_context, m: Z3_model): unsigned {
        return Mod._Z3_model_get_num_consts(c, m);
      },
      model_get_const_decl: function (
        c: Z3_context,
        m: Z3_model,
        i: unsigned
      ): Z3_func_decl {
        return Mod._Z3_model_get_const_decl(c, m, i);
      },
      model_get_num_funcs: function (c: Z3_context, m: Z3_model): unsigned {
        return Mod._Z3_model_get_num_funcs(c, m);
      },
      model_get_func_decl: function (
        c: Z3_context,
        m: Z3_model,
        i: unsigned
      ): Z3_func_decl {
        return Mod._Z3_model_get_func_decl(c, m, i);
      },
      model_get_num_sorts: function (c: Z3_context, m: Z3_model): unsigned {
        return Mod._Z3_model_get_num_sorts(c, m);
      },
      model_get_sort: function (
        c: Z3_context,
        m: Z3_model,
        i: unsigned
      ): Z3_sort {
        return Mod._Z3_model_get_sort(c, m, i);
      },
      model_get_sort_universe: function (
        c: Z3_context,
        m: Z3_model,
        s: Z3_sort
      ): Z3_ast_vector {
        return Mod._Z3_model_get_sort_universe(c, m, s);
      },
      model_translate: function (
        c: Z3_context,
        m: Z3_model,
        dst: Z3_context
      ): Z3_model {
        return Mod._Z3_model_translate(c, m, dst);
      },
      is_as_array: function (c: Z3_context, a: Z3_ast): bool {
        return Mod._Z3_is_as_array(c, a);
      },
      get_as_array_func_decl: function (
        c: Z3_context,
        a: Z3_ast
      ): Z3_func_decl {
        return Mod._Z3_get_as_array_func_decl(c, a);
      },
      add_func_interp: function (
        c: Z3_context,
        m: Z3_model,
        f: Z3_func_decl,
        default_value: Z3_ast
      ): Z3_func_interp {
        return Mod._Z3_add_func_interp(c, m, f, default_value);
      },
      add_const_interp: function (
        c: Z3_context,
        m: Z3_model,
        f: Z3_func_decl,
        a: Z3_ast
      ): void {
        return Mod._Z3_add_const_interp(c, m, f, a);
      },
      func_interp_inc_ref: function (c: Z3_context, f: Z3_func_interp): void {
        return Mod._Z3_func_interp_inc_ref(c, f);
      },
      func_interp_dec_ref: function (c: Z3_context, f: Z3_func_interp): void {
        return Mod._Z3_func_interp_dec_ref(c, f);
      },
      func_interp_get_num_entries: function (
        c: Z3_context,
        f: Z3_func_interp
      ): unsigned {
        return Mod._Z3_func_interp_get_num_entries(c, f);
      },
      func_interp_get_entry: function (
        c: Z3_context,
        f: Z3_func_interp,
        i: unsigned
      ): Z3_func_entry {
        return Mod._Z3_func_interp_get_entry(c, f, i);
      },
      func_interp_get_else: function (
        c: Z3_context,
        f: Z3_func_interp
      ): Z3_ast {
        return Mod._Z3_func_interp_get_else(c, f);
      },
      func_interp_set_else: function (
        c: Z3_context,
        f: Z3_func_interp,
        else_value: Z3_ast
      ): void {
        return Mod._Z3_func_interp_set_else(c, f, else_value);
      },
      func_interp_get_arity: function (
        c: Z3_context,
        f: Z3_func_interp
      ): unsigned {
        return Mod._Z3_func_interp_get_arity(c, f);
      },
      func_interp_add_entry: function (
        c: Z3_context,
        fi: Z3_func_interp,
        args: Z3_ast_vector,
        value: Z3_ast
      ): void {
        return Mod._Z3_func_interp_add_entry(c, fi, args, value);
      },
      func_entry_inc_ref: function (c: Z3_context, e: Z3_func_entry): void {
        return Mod._Z3_func_entry_inc_ref(c, e);
      },
      func_entry_dec_ref: function (c: Z3_context, e: Z3_func_entry): void {
        return Mod._Z3_func_entry_dec_ref(c, e);
      },
      func_entry_get_value: function (c: Z3_context, e: Z3_func_entry): Z3_ast {
        return Mod._Z3_func_entry_get_value(c, e);
      },
      func_entry_get_num_args: function (
        c: Z3_context,
        e: Z3_func_entry
      ): unsigned {
        return Mod._Z3_func_entry_get_num_args(c, e);
      },
      func_entry_get_arg: function (
        c: Z3_context,
        e: Z3_func_entry,
        i: unsigned
      ): Z3_ast {
        return Mod._Z3_func_entry_get_arg(c, e, i);
      },
      open_log: function (filename: string): bool {
        let _str_0 = Mod.allocate(
          Mod.intArrayFromString(filename),
          Mod.ALLOC_NORMAL
        );

        try {
          return Mod._Z3_open_log(_str_0);
        } finally {
          Mod._free(_str_0);
        }
      },
      append_log: function (string: string): void {
        let _str_0 = Mod.allocate(
          Mod.intArrayFromString(string),
          Mod.ALLOC_NORMAL
        );

        try {
          return Mod._Z3_append_log(_str_0);
        } finally {
          Mod._free(_str_0);
        }
      },
      close_log: function (): void {
        return Mod._Z3_close_log();
      },
      toggle_warning_messages: function (enabled: bool): void {
        return Mod._Z3_toggle_warning_messages(enabled);
      },
      set_ast_print_mode: function (
        c: Z3_context,
        mode: Z3_ast_print_mode
      ): void {
        return Mod._Z3_set_ast_print_mode(c, mode);
      },
      ast_to_string: function (c: Z3_context, a: Z3_ast): Z3_string {
        return Mod.UTF8ToString(Mod._Z3_ast_to_string(c, a));
      },
      pattern_to_string: function (c: Z3_context, p: Z3_pattern): Z3_string {
        return Mod.UTF8ToString(Mod._Z3_pattern_to_string(c, p));
      },
      sort_to_string: function (c: Z3_context, s: Z3_sort): Z3_string {
        return Mod.UTF8ToString(Mod._Z3_sort_to_string(c, s));
      },
      func_decl_to_string: function (
        c: Z3_context,
        d: Z3_func_decl
      ): Z3_string {
        return Mod.UTF8ToString(Mod._Z3_func_decl_to_string(c, d));
      },
      model_to_string: function (c: Z3_context, m: Z3_model): Z3_string {
        return Mod.UTF8ToString(Mod._Z3_model_to_string(c, m));
      },
      eval_smtlib2_string: function (
        UNNAMED: Z3_context,
        str: string
      ): Z3_string {
        let _str_1 = Mod.allocate(
          Mod.intArrayFromString(str),
          Mod.ALLOC_NORMAL
        );

        try {
          return Mod.UTF8ToString(Mod._Z3_eval_smtlib2_string(UNNAMED, _str_1));
        } finally {
          Mod._free(_str_1);
        }
      },
      get_error_code: function (c: Z3_context): Z3_error_code {
        return Mod._Z3_get_error_code(c);
      },
      set_error: function (c: Z3_context, e: Z3_error_code): void {
        return Mod._Z3_set_error(c, e);
      },
      get_error_msg: function (c: Z3_context, err: Z3_error_code): Z3_string {
        return Mod.UTF8ToString(Mod._Z3_get_error_msg(c, err));
      },
      get_full_version: function (): Z3_string {
        return Mod.UTF8ToString(Mod._Z3_get_full_version());
      },
      enable_trace: function (tag: string): void {
        let _str_0 = Mod.allocate(
          Mod.intArrayFromString(tag),
          Mod.ALLOC_NORMAL
        );

        try {
          return Mod._Z3_enable_trace(_str_0);
        } finally {
          Mod._free(_str_0);
        }
      },
      disable_trace: function (tag: string): void {
        let _str_0 = Mod.allocate(
          Mod.intArrayFromString(tag),
          Mod.ALLOC_NORMAL
        );

        try {
          return Mod._Z3_disable_trace(_str_0);
        } finally {
          Mod._free(_str_0);
        }
      },
      reset_memory: function (): void {
        return Mod._Z3_reset_memory();
      },
      finalize_memory: function (): void {
        return Mod._Z3_finalize_memory();
      },
      mk_goal: function (
        c: Z3_context,
        models: bool,
        unsat_cores: bool,
        proofs: bool
      ): Z3_goal {
        return Mod._Z3_mk_goal(c, models, unsat_cores, proofs);
      },
      goal_inc_ref: function (c: Z3_context, g: Z3_goal): void {
        return Mod._Z3_goal_inc_ref(c, g);
      },
      goal_dec_ref: function (c: Z3_context, g: Z3_goal): void {
        return Mod._Z3_goal_dec_ref(c, g);
      },
      goal_precision: function (c: Z3_context, g: Z3_goal): Z3_goal_prec {
        return Mod._Z3_goal_precision(c, g);
      },
      goal_assert: function (c: Z3_context, g: Z3_goal, a: Z3_ast): void {
        return Mod._Z3_goal_assert(c, g, a);
      },
      goal_inconsistent: function (c: Z3_context, g: Z3_goal): bool {
        return Mod._Z3_goal_inconsistent(c, g);
      },
      goal_depth: function (c: Z3_context, g: Z3_goal): unsigned {
        return Mod._Z3_goal_depth(c, g);
      },
      goal_reset: function (c: Z3_context, g: Z3_goal): void {
        return Mod._Z3_goal_reset(c, g);
      },
      goal_size: function (c: Z3_context, g: Z3_goal): unsigned {
        return Mod._Z3_goal_size(c, g);
      },
      goal_formula: function (
        c: Z3_context,
        g: Z3_goal,
        idx: unsigned
      ): Z3_ast {
        return Mod._Z3_goal_formula(c, g, idx);
      },
      goal_num_exprs: function (c: Z3_context, g: Z3_goal): unsigned {
        return Mod._Z3_goal_num_exprs(c, g);
      },
      goal_is_decided_sat: function (c: Z3_context, g: Z3_goal): bool {
        return Mod._Z3_goal_is_decided_sat(c, g);
      },
      goal_is_decided_unsat: function (c: Z3_context, g: Z3_goal): bool {
        return Mod._Z3_goal_is_decided_unsat(c, g);
      },
      goal_translate: function (
        source: Z3_context,
        g: Z3_goal,
        target: Z3_context
      ): Z3_goal {
        return Mod._Z3_goal_translate(source, g, target);
      },
      goal_convert_model: function (
        c: Z3_context,
        g: Z3_goal,
        m: Z3_model
      ): Z3_model {
        return Mod._Z3_goal_convert_model(c, g, m);
      },
      goal_to_string: function (c: Z3_context, g: Z3_goal): Z3_string {
        return Mod.UTF8ToString(Mod._Z3_goal_to_string(c, g));
      },
      goal_to_dimacs_string: function (
        c: Z3_context,
        g: Z3_goal,
        include_names: bool
      ): Z3_string {
        return Mod.UTF8ToString(
          Mod._Z3_goal_to_dimacs_string(c, g, include_names)
        );
      },
      mk_tactic: function (c: Z3_context, name: string): Z3_tactic {
        let _str_1 = Mod.allocate(
          Mod.intArrayFromString(name),
          Mod.ALLOC_NORMAL
        );

        try {
          return Mod._Z3_mk_tactic(c, _str_1);
        } finally {
          Mod._free(_str_1);
        }
      },
      tactic_inc_ref: function (c: Z3_context, t: Z3_tactic): void {
        return Mod._Z3_tactic_inc_ref(c, t);
      },
      tactic_dec_ref: function (c: Z3_context, g: Z3_tactic): void {
        return Mod._Z3_tactic_dec_ref(c, g);
      },
      mk_probe: function (c: Z3_context, name: string): Z3_probe {
        let _str_1 = Mod.allocate(
          Mod.intArrayFromString(name),
          Mod.ALLOC_NORMAL
        );

        try {
          return Mod._Z3_mk_probe(c, _str_1);
        } finally {
          Mod._free(_str_1);
        }
      },
      probe_inc_ref: function (c: Z3_context, p: Z3_probe): void {
        return Mod._Z3_probe_inc_ref(c, p);
      },
      probe_dec_ref: function (c: Z3_context, p: Z3_probe): void {
        return Mod._Z3_probe_dec_ref(c, p);
      },
      tactic_and_then: function (
        c: Z3_context,
        t1: Z3_tactic,
        t2: Z3_tactic
      ): Z3_tactic {
        return Mod._Z3_tactic_and_then(c, t1, t2);
      },
      tactic_or_else: function (
        c: Z3_context,
        t1: Z3_tactic,
        t2: Z3_tactic
      ): Z3_tactic {
        return Mod._Z3_tactic_or_else(c, t1, t2);
      },
      tactic_par_and_then: function (
        c: Z3_context,
        t1: Z3_tactic,
        t2: Z3_tactic
      ): Z3_tactic {
        return Mod._Z3_tactic_par_and_then(c, t1, t2);
      },
      tactic_try_for: function (
        c: Z3_context,
        t: Z3_tactic,
        ms: unsigned
      ): Z3_tactic {
        return Mod._Z3_tactic_try_for(c, t, ms);
      },
      tactic_when: function (
        c: Z3_context,
        p: Z3_probe,
        t: Z3_tactic
      ): Z3_tactic {
        return Mod._Z3_tactic_when(c, p, t);
      },
      tactic_cond: function (
        c: Z3_context,
        p: Z3_probe,
        t1: Z3_tactic,
        t2: Z3_tactic
      ): Z3_tactic {
        return Mod._Z3_tactic_cond(c, p, t1, t2);
      },
      tactic_repeat: function (
        c: Z3_context,
        t: Z3_tactic,
        max: unsigned
      ): Z3_tactic {
        return Mod._Z3_tactic_repeat(c, t, max);
      },
      tactic_skip: function (c: Z3_context): Z3_tactic {
        return Mod._Z3_tactic_skip(c);
      },
      tactic_fail: function (c: Z3_context): Z3_tactic {
        return Mod._Z3_tactic_fail(c);
      },
      tactic_fail_if: function (c: Z3_context, p: Z3_probe): Z3_tactic {
        return Mod._Z3_tactic_fail_if(c, p);
      },
      tactic_fail_if_not_decided: function (c: Z3_context): Z3_tactic {
        return Mod._Z3_tactic_fail_if_not_decided(c);
      },
      tactic_using_params: function (
        c: Z3_context,
        t: Z3_tactic,
        p: Z3_params
      ): Z3_tactic {
        return Mod._Z3_tactic_using_params(c, t, p);
      },
      probe_const: function (x: Z3_context, val: double): Z3_probe {
        return Mod._Z3_probe_const(x, val);
      },
      probe_lt: function (x: Z3_context, p1: Z3_probe, p2: Z3_probe): Z3_probe {
        return Mod._Z3_probe_lt(x, p1, p2);
      },
      probe_gt: function (x: Z3_context, p1: Z3_probe, p2: Z3_probe): Z3_probe {
        return Mod._Z3_probe_gt(x, p1, p2);
      },
      probe_le: function (x: Z3_context, p1: Z3_probe, p2: Z3_probe): Z3_probe {
        return Mod._Z3_probe_le(x, p1, p2);
      },
      probe_ge: function (x: Z3_context, p1: Z3_probe, p2: Z3_probe): Z3_probe {
        return Mod._Z3_probe_ge(x, p1, p2);
      },
      probe_eq: function (x: Z3_context, p1: Z3_probe, p2: Z3_probe): Z3_probe {
        return Mod._Z3_probe_eq(x, p1, p2);
      },
      probe_and: function (
        x: Z3_context,
        p1: Z3_probe,
        p2: Z3_probe
      ): Z3_probe {
        return Mod._Z3_probe_and(x, p1, p2);
      },
      probe_or: function (x: Z3_context, p1: Z3_probe, p2: Z3_probe): Z3_probe {
        return Mod._Z3_probe_or(x, p1, p2);
      },
      probe_not: function (x: Z3_context, p: Z3_probe): Z3_probe {
        return Mod._Z3_probe_not(x, p);
      },
      get_num_tactics: function (c: Z3_context): unsigned {
        return Mod._Z3_get_num_tactics(c);
      },
      get_tactic_name: function (c: Z3_context, i: unsigned): Z3_string {
        return Mod.UTF8ToString(Mod._Z3_get_tactic_name(c, i));
      },
      get_num_probes: function (c: Z3_context): unsigned {
        return Mod._Z3_get_num_probes(c);
      },
      get_probe_name: function (c: Z3_context, i: unsigned): Z3_string {
        return Mod.UTF8ToString(Mod._Z3_get_probe_name(c, i));
      },
      tactic_get_help: function (c: Z3_context, t: Z3_tactic): Z3_string {
        return Mod.UTF8ToString(Mod._Z3_tactic_get_help(c, t));
      },
      tactic_get_param_descrs: function (
        c: Z3_context,
        t: Z3_tactic
      ): Z3_param_descrs {
        return Mod._Z3_tactic_get_param_descrs(c, t);
      },
      tactic_get_descr: function (c: Z3_context, name: string): Z3_string {
        let _str_1 = Mod.allocate(
          Mod.intArrayFromString(name),
          Mod.ALLOC_NORMAL
        );

        try {
          return Mod.UTF8ToString(Mod._Z3_tactic_get_descr(c, _str_1));
        } finally {
          Mod._free(_str_1);
        }
      },
      probe_get_descr: function (c: Z3_context, name: string): Z3_string {
        let _str_1 = Mod.allocate(
          Mod.intArrayFromString(name),
          Mod.ALLOC_NORMAL
        );

        try {
          return Mod.UTF8ToString(Mod._Z3_probe_get_descr(c, _str_1));
        } finally {
          Mod._free(_str_1);
        }
      },
      probe_apply: function (c: Z3_context, p: Z3_probe, g: Z3_goal): double {
        return Mod._Z3_probe_apply(c, p, g);
      },
      tactic_apply: function (
        c: Z3_context,
        t: Z3_tactic,
        g: Z3_goal
      ): Z3_apply_result {
        return Mod._Z3_tactic_apply(c, t, g);
      },
      tactic_apply_ex: function (
        c: Z3_context,
        t: Z3_tactic,
        g: Z3_goal,
        p: Z3_params
      ): Z3_apply_result {
        return Mod._Z3_tactic_apply_ex(c, t, g, p);
      },
      apply_result_inc_ref: function (c: Z3_context, r: Z3_apply_result): void {
        return Mod._Z3_apply_result_inc_ref(c, r);
      },
      apply_result_dec_ref: function (c: Z3_context, r: Z3_apply_result): void {
        return Mod._Z3_apply_result_dec_ref(c, r);
      },
      apply_result_to_string: function (
        c: Z3_context,
        r: Z3_apply_result
      ): Z3_string {
        return Mod.UTF8ToString(Mod._Z3_apply_result_to_string(c, r));
      },
      apply_result_get_num_subgoals: function (
        c: Z3_context,
        r: Z3_apply_result
      ): unsigned {
        return Mod._Z3_apply_result_get_num_subgoals(c, r);
      },
      apply_result_get_subgoal: function (
        c: Z3_context,
        r: Z3_apply_result,
        i: unsigned
      ): Z3_goal {
        return Mod._Z3_apply_result_get_subgoal(c, r, i);
      },
      mk_solver: function (c: Z3_context): Z3_solver {
        return Mod._Z3_mk_solver(c);
      },
      mk_simple_solver: function (c: Z3_context): Z3_solver {
        return Mod._Z3_mk_simple_solver(c);
      },
      mk_solver_for_logic: function (
        c: Z3_context,
        logic: Z3_symbol
      ): Z3_solver {
        return Mod._Z3_mk_solver_for_logic(c, logic);
      },
      mk_solver_from_tactic: function (c: Z3_context, t: Z3_tactic): Z3_solver {
        return Mod._Z3_mk_solver_from_tactic(c, t);
      },
      solver_translate: function (
        source: Z3_context,
        s: Z3_solver,
        target: Z3_context
      ): Z3_solver {
        return Mod._Z3_solver_translate(source, s, target);
      },
      solver_import_model_converter: function (
        ctx: Z3_context,
        src: Z3_solver,
        dst: Z3_solver
      ): void {
        return Mod._Z3_solver_import_model_converter(ctx, src, dst);
      },
      solver_get_help: function (c: Z3_context, s: Z3_solver): Z3_string {
        return Mod.UTF8ToString(Mod._Z3_solver_get_help(c, s));
      },
      solver_get_param_descrs: function (
        c: Z3_context,
        s: Z3_solver
      ): Z3_param_descrs {
        return Mod._Z3_solver_get_param_descrs(c, s);
      },
      solver_set_params: function (
        c: Z3_context,
        s: Z3_solver,
        p: Z3_params
      ): void {
        return Mod._Z3_solver_set_params(c, s, p);
      },
      solver_inc_ref: function (c: Z3_context, s: Z3_solver): void {
        return Mod._Z3_solver_inc_ref(c, s);
      },
      solver_dec_ref: function (c: Z3_context, s: Z3_solver): void {
        return Mod._Z3_solver_dec_ref(c, s);
      },
      solver_interrupt: function (c: Z3_context, s: Z3_solver): void {
        return Mod._Z3_solver_interrupt(c, s);
      },
      solver_push: function (c: Z3_context, s: Z3_solver): void {
        return Mod._Z3_solver_push(c, s);
      },
      solver_pop: function (c: Z3_context, s: Z3_solver, n: unsigned): void {
        return Mod._Z3_solver_pop(c, s, n);
      },
      solver_reset: function (c: Z3_context, s: Z3_solver): void {
        return Mod._Z3_solver_reset(c, s);
      },
      solver_get_num_scopes: function (c: Z3_context, s: Z3_solver): unsigned {
        return Mod._Z3_solver_get_num_scopes(c, s);
      },
      solver_assert: function (c: Z3_context, s: Z3_solver, a: Z3_ast): void {
        return Mod._Z3_solver_assert(c, s, a);
      },
      solver_assert_and_track: function (
        c: Z3_context,
        s: Z3_solver,
        a: Z3_ast,
        p: Z3_ast
      ): void {
        return Mod._Z3_solver_assert_and_track(c, s, a, p);
      },
      solver_from_file: function (
        c: Z3_context,
        s: Z3_solver,
        file_name: string
      ): void {
        let _str_2 = Mod.allocate(
          Mod.intArrayFromString(file_name),
          Mod.ALLOC_NORMAL
        );

        try {
          return Mod._Z3_solver_from_file(c, s, _str_2);
        } finally {
          Mod._free(_str_2);
        }
      },
      solver_from_string: function (
        c: Z3_context,
        s: Z3_solver,
        file_name: string
      ): void {
        let _str_2 = Mod.allocate(
          Mod.intArrayFromString(file_name),
          Mod.ALLOC_NORMAL
        );

        try {
          return Mod._Z3_solver_from_string(c, s, _str_2);
        } finally {
          Mod._free(_str_2);
        }
      },
      solver_get_assertions: function (
        c: Z3_context,
        s: Z3_solver
      ): Z3_ast_vector {
        return Mod._Z3_solver_get_assertions(c, s);
      },
      solver_get_units: function (c: Z3_context, s: Z3_solver): Z3_ast_vector {
        return Mod._Z3_solver_get_units(c, s);
      },
      solver_get_trail: function (c: Z3_context, s: Z3_solver): Z3_ast_vector {
        return Mod._Z3_solver_get_trail(c, s);
      },
      solver_get_non_units: function (
        c: Z3_context,
        s: Z3_solver
      ): Z3_ast_vector {
        return Mod._Z3_solver_get_non_units(c, s);
      },
      solver_propagate_register: function (
        c: Z3_context,
        s: Z3_solver,
        e: Z3_ast
      ): unsigned {
        return Mod._Z3_solver_propagate_register(c, s, e);
      },
      solver_propagate_register_cb: function (
        c: Z3_context,
        cb: Z3_solver_callback,
        e: Z3_ast
      ): unsigned {
        return Mod._Z3_solver_propagate_register_cb(c, cb, e);
      },
      solver_check: function (c: Z3_context, s: Z3_solver): Promise<Z3_lbool> {
        return Mod.async_call(Mod._async_Z3_solver_check, c, s);
      },
      solver_get_consequences: function (
        c: Z3_context,
        s: Z3_solver,
        assumptions: Z3_ast_vector,
        variables: Z3_ast_vector,
        consequences: Z3_ast_vector
      ): Z3_lbool {
        return Mod._Z3_solver_get_consequences(
          c,
          s,
          assumptions,
          variables,
          consequences
        );
      },
      solver_cube: function (
        c: Z3_context,
        s: Z3_solver,
        vars: Z3_ast_vector,
        backtrack_level: unsigned
      ): Z3_ast_vector {
        return Mod._Z3_solver_cube(c, s, vars, backtrack_level);
      },
      solver_get_model: function (c: Z3_context, s: Z3_solver): Z3_model {
        return Mod._Z3_solver_get_model(c, s);
      },
      solver_get_proof: function (c: Z3_context, s: Z3_solver): Z3_ast {
        return Mod._Z3_solver_get_proof(c, s);
      },
      solver_get_unsat_core: function (
        c: Z3_context,
        s: Z3_solver
      ): Z3_ast_vector {
        return Mod._Z3_solver_get_unsat_core(c, s);
      },
      solver_get_reason_unknown: function (
        c: Z3_context,
        s: Z3_solver
      ): Z3_string {
        return Mod.UTF8ToString(Mod._Z3_solver_get_reason_unknown(c, s));
      },
      solver_get_statistics: function (c: Z3_context, s: Z3_solver): Z3_stats {
        return Mod._Z3_solver_get_statistics(c, s);
      },
      solver_to_string: function (c: Z3_context, s: Z3_solver): Z3_string {
        return Mod.UTF8ToString(Mod._Z3_solver_to_string(c, s));
      },
      solver_to_dimacs_string: function (
        c: Z3_context,
        s: Z3_solver,
        include_names: bool
      ): Z3_string {
        return Mod.UTF8ToString(
          Mod._Z3_solver_to_dimacs_string(c, s, include_names)
        );
      },
      stats_to_string: function (c: Z3_context, s: Z3_stats): Z3_string {
        return Mod.UTF8ToString(Mod._Z3_stats_to_string(c, s));
      },
      stats_inc_ref: function (c: Z3_context, s: Z3_stats): void {
        return Mod._Z3_stats_inc_ref(c, s);
      },
      stats_dec_ref: function (c: Z3_context, s: Z3_stats): void {
        return Mod._Z3_stats_dec_ref(c, s);
      },
      stats_size: function (c: Z3_context, s: Z3_stats): unsigned {
        return Mod._Z3_stats_size(c, s);
      },
      stats_get_key: function (
        c: Z3_context,
        s: Z3_stats,
        idx: unsigned
      ): Z3_string {
        return Mod.UTF8ToString(Mod._Z3_stats_get_key(c, s, idx));
      },
      stats_is_uint: function (
        c: Z3_context,
        s: Z3_stats,
        idx: unsigned
      ): bool {
        return Mod._Z3_stats_is_uint(c, s, idx);
      },
      stats_is_double: function (
        c: Z3_context,
        s: Z3_stats,
        idx: unsigned
      ): bool {
        return Mod._Z3_stats_is_double(c, s, idx);
      },
      stats_get_uint_value: function (
        c: Z3_context,
        s: Z3_stats,
        idx: unsigned
      ): unsigned {
        return Mod._Z3_stats_get_uint_value(c, s, idx);
      },
      stats_get_double_value: function (
        c: Z3_context,
        s: Z3_stats,
        idx: unsigned
      ): double {
        return Mod._Z3_stats_get_double_value(c, s, idx);
      },
      get_estimated_alloc_size: function (): uint64_t {
        return Mod._Z3_get_estimated_alloc_size();
      },
    },
  };
}

