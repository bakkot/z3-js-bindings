// @ts-ignore no-implicit-any
import initModule = require('./z3-built.js');
interface Pointer<T extends string> extends Number {
  readonly __typeName: T;
}
interface Subpointer<T extends string, S extends string> extends Pointer<S> {
  readonly __typeName2: T;
}

type Z3_char_ptr = string;
type unsigned = number;
type double = number;
type int = number;
type uint64_t = bigint;
type int64_t = bigint;

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
export type Z3_func_decl = Subpointer<'Z3_func_decl', 'Z3_ast'>;
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

  function intArrayToByteArr(ints: number[]) {
    return new Uint8Array(new Uint32Array(ints).buffer);
  }

  function boolArrayToByteArr(bools: boolean[]) {
    return bools.map((b) => (b ? 1 : 0));
  }

  function readUintArray(address: number, count: number) {
    return Array.from(new Uint32Array(Mod.HEAPU32.buffer, address, count));
  }

  let outAddress = Mod._malloc(24);
  let outUintArray = new Uint32Array(Mod.HEAPU32.buffer, outAddress, 4);
  let getOutUint = (i: 0 | 1 | 2 | 3 | 4 | 5) => outUintArray[i];
  let outIntArray = new Int32Array(Mod.HEAPU32.buffer, outAddress, 4);
  let getOutInt = (i: 0 | 1 | 2 | 3 | 4 | 5) => outIntArray[i];
  let outUint64Array = new BigUint64Array(Mod.HEAPU32.buffer, outAddress, 2);
  let getOutUint64 = (i: 0 | 1 | 2) => outUint64Array[i];
  let outInt64Array = new BigInt64Array(Mod.HEAPU32.buffer, outAddress, 2);
  let getOutInt64 = (i: 0 | 1 | 2) => outInt64Array[i];

  return {
    em: Mod,
    Z3: {
      global_param_set: function (param_id: string, param_value: string): void {
        let ret = Mod.ccall(
          'Z3_global_param_set',
          'void',
          ['string', 'string'],
          [param_id, param_value]
        );
        return ret;
      },
      global_param_reset_all: Mod._Z3_global_param_reset_all as () => void,
      global_param_get: function (param_id: string): string | null {
        let ret = Mod.ccall(
          'Z3_global_param_get',
          'boolean',
          ['string', 'number'],
          [param_id, outAddress]
        );
        if (!ret) {
          return null;
        }
        return Mod.UTF8ToString(getOutUint(0));
      },
      mk_config: Mod._Z3_mk_config as () => Z3_config,
      del_config: Mod._Z3_del_config as (c: Z3_config) => void,
      set_param_value: function (
        c: Z3_config,
        param_id: string,
        param_value: string
      ): void {
        let ret = Mod.ccall(
          'Z3_set_param_value',
          'void',
          ['number', 'string', 'string'],
          [c, param_id, param_value]
        );
        return ret;
      },
      mk_context: Mod._Z3_mk_context as (c: Z3_config) => Z3_context,
      mk_context_rc: Mod._Z3_mk_context_rc as (c: Z3_config) => Z3_context,
      del_context: Mod._Z3_del_context as (c: Z3_context) => void,
      inc_ref: Mod._Z3_inc_ref as (c: Z3_context, a: Z3_ast) => void,
      dec_ref: Mod._Z3_dec_ref as (c: Z3_context, a: Z3_ast) => void,
      update_param_value: function (
        c: Z3_context,
        param_id: string,
        param_value: string
      ): void {
        let ret = Mod.ccall(
          'Z3_update_param_value',
          'void',
          ['number', 'string', 'string'],
          [c, param_id, param_value]
        );
        return ret;
      },
      interrupt: Mod._Z3_interrupt as (c: Z3_context) => void,
      mk_params: Mod._Z3_mk_params as (c: Z3_context) => Z3_params,
      params_inc_ref: Mod._Z3_params_inc_ref as (
        c: Z3_context,
        p: Z3_params
      ) => void,
      params_dec_ref: Mod._Z3_params_dec_ref as (
        c: Z3_context,
        p: Z3_params
      ) => void,
      params_set_bool: Mod._Z3_params_set_bool as (
        c: Z3_context,
        p: Z3_params,
        k: Z3_symbol,
        v: boolean
      ) => void,
      params_set_uint: Mod._Z3_params_set_uint as (
        c: Z3_context,
        p: Z3_params,
        k: Z3_symbol,
        v: unsigned
      ) => void,
      params_set_double: Mod._Z3_params_set_double as (
        c: Z3_context,
        p: Z3_params,
        k: Z3_symbol,
        v: double
      ) => void,
      params_set_symbol: Mod._Z3_params_set_symbol as (
        c: Z3_context,
        p: Z3_params,
        k: Z3_symbol,
        v: Z3_symbol
      ) => void,
      params_to_string: function (c: Z3_context, p: Z3_params): string {
        let ret = Mod.ccall(
          'Z3_params_to_string',
          'string',
          ['number', 'number'],
          [c, p]
        );
        return ret;
      },
      params_validate: Mod._Z3_params_validate as (
        c: Z3_context,
        p: Z3_params,
        d: Z3_param_descrs
      ) => void,
      param_descrs_inc_ref: Mod._Z3_param_descrs_inc_ref as (
        c: Z3_context,
        p: Z3_param_descrs
      ) => void,
      param_descrs_dec_ref: Mod._Z3_param_descrs_dec_ref as (
        c: Z3_context,
        p: Z3_param_descrs
      ) => void,
      param_descrs_get_kind: Mod._Z3_param_descrs_get_kind as (
        c: Z3_context,
        p: Z3_param_descrs,
        n: Z3_symbol
      ) => Z3_param_kind,
      param_descrs_size: Mod._Z3_param_descrs_size as (
        c: Z3_context,
        p: Z3_param_descrs
      ) => unsigned,
      param_descrs_get_name: Mod._Z3_param_descrs_get_name as (
        c: Z3_context,
        p: Z3_param_descrs,
        i: unsigned
      ) => Z3_symbol,
      param_descrs_get_documentation: function (
        c: Z3_context,
        p: Z3_param_descrs,
        s: Z3_symbol
      ): string {
        let ret = Mod.ccall(
          'Z3_param_descrs_get_documentation',
          'string',
          ['number', 'number', 'number'],
          [c, p, s]
        );
        return ret;
      },
      param_descrs_to_string: function (
        c: Z3_context,
        p: Z3_param_descrs
      ): string {
        let ret = Mod.ccall(
          'Z3_param_descrs_to_string',
          'string',
          ['number', 'number'],
          [c, p]
        );
        return ret;
      },
      mk_int_symbol: Mod._Z3_mk_int_symbol as (
        c: Z3_context,
        i: int
      ) => Z3_symbol,
      mk_string_symbol: function (c: Z3_context, s: string): Z3_symbol {
        let ret = Mod.ccall(
          'Z3_mk_string_symbol',
          'number',
          ['number', 'string'],
          [c, s]
        );
        return ret;
      },
      mk_uninterpreted_sort: Mod._Z3_mk_uninterpreted_sort as (
        c: Z3_context,
        s: Z3_symbol
      ) => Z3_sort,
      mk_bool_sort: Mod._Z3_mk_bool_sort as (c: Z3_context) => Z3_sort,
      mk_int_sort: Mod._Z3_mk_int_sort as (c: Z3_context) => Z3_sort,
      mk_real_sort: Mod._Z3_mk_real_sort as (c: Z3_context) => Z3_sort,
      mk_bv_sort: Mod._Z3_mk_bv_sort as (
        c: Z3_context,
        sz: unsigned
      ) => Z3_sort,
      mk_finite_domain_sort: Mod._Z3_mk_finite_domain_sort as (
        c: Z3_context,
        name: Z3_symbol,
        size: uint64_t
      ) => Z3_sort,
      mk_array_sort: Mod._Z3_mk_array_sort as (
        c: Z3_context,
        domain: Z3_sort,
        range: Z3_sort
      ) => Z3_sort,
      mk_array_sort_n: function (
        c: Z3_context,
        domain: Z3_sort[],
        range: Z3_sort
      ): Z3_sort {
        let ret = Mod.ccall(
          'Z3_mk_array_sort_n',
          'number',
          ['number', 'number', 'array', 'number'],
          [
            c,
            domain.length,
            intArrayToByteArr(domain as unknown as number[]),
            range,
          ]
        );
        return ret;
      },
      mk_tuple_sort: function (
        c: Z3_context,
        mk_tuple_name: Z3_symbol,
        field_names: Z3_symbol[],
        field_sorts: Z3_sort[]
      ): {
        rv: Z3_sort;
        mk_tuple_decl: Z3_func_decl;
        proj_decl: Z3_func_decl[];
      } {
        if (field_names.length !== field_sorts.length) {
          throw new TypeError(
            `field_names and field_sorts must be the same length (got ${field_names.length} and {field_sorts.length})`
          );
        }
        let outArray_proj_decl = Mod._malloc(4 * field_names.length);
        try {
          let ret = Mod.ccall(
            'Z3_mk_tuple_sort',
            'number',
            [
              'number',
              'number',
              'number',
              'array',
              'array',
              'number',
              'number',
            ],
            [
              c,
              mk_tuple_name,
              field_names.length,
              intArrayToByteArr(field_names as unknown as number[]),
              intArrayToByteArr(field_sorts as unknown as number[]),
              outAddress,
              outArray_proj_decl,
            ]
          );
          return {
            rv: ret,
            mk_tuple_decl: getOutUint(0) as unknown as Z3_func_decl,
            proj_decl: readUintArray(
              outArray_proj_decl,
              field_names.length
            ) as unknown as Z3_func_decl[],
          };
        } finally {
          Mod._free(outArray_proj_decl);
        }
      },
      mk_enumeration_sort: function (
        c: Z3_context,
        name: Z3_symbol,
        enum_names: Z3_symbol[]
      ): {
        rv: Z3_sort;
        enum_consts: Z3_func_decl[];
        enum_testers: Z3_func_decl[];
      } {
        let outArray_enum_consts = Mod._malloc(4 * enum_names.length);
        try {
          let outArray_enum_testers = Mod._malloc(4 * enum_names.length);
          try {
            let ret = Mod.ccall(
              'Z3_mk_enumeration_sort',
              'number',
              ['number', 'number', 'number', 'array', 'number', 'number'],
              [
                c,
                name,
                enum_names.length,
                intArrayToByteArr(enum_names as unknown as number[]),
                outArray_enum_consts,
                outArray_enum_testers,
              ]
            );
            return {
              rv: ret,
              enum_consts: readUintArray(
                outArray_enum_consts,
                enum_names.length
              ) as unknown as Z3_func_decl[],
              enum_testers: readUintArray(
                outArray_enum_testers,
                enum_names.length
              ) as unknown as Z3_func_decl[],
            };
          } finally {
            Mod._free(outArray_enum_testers);
          }
        } finally {
          Mod._free(outArray_enum_consts);
        }
      },
      mk_list_sort: function (
        c: Z3_context,
        name: Z3_symbol,
        elem_sort: Z3_sort
      ): {
        rv: Z3_sort;
        nil_decl: Z3_func_decl;
        is_nil_decl: Z3_func_decl;
        cons_decl: Z3_func_decl;
        is_cons_decl: Z3_func_decl;
        head_decl: Z3_func_decl;
        tail_decl: Z3_func_decl;
      } {
        let ret = Mod.ccall(
          'Z3_mk_list_sort',
          'number',
          [
            'number',
            'number',
            'number',
            'number',
            'number',
            'number',
            'number',
            'number',
            'number',
          ],
          [
            c,
            name,
            elem_sort,
            outAddress,
            outAddress + 4,
            outAddress + 8,
            outAddress + 12,
            outAddress + 16,
            outAddress + 20,
          ]
        );
        return {
          rv: ret,
          nil_decl: getOutUint(0) as unknown as Z3_func_decl,
          is_nil_decl: getOutUint(1) as unknown as Z3_func_decl,
          cons_decl: getOutUint(2) as unknown as Z3_func_decl,
          is_cons_decl: getOutUint(3) as unknown as Z3_func_decl,
          head_decl: getOutUint(4) as unknown as Z3_func_decl,
          tail_decl: getOutUint(5) as unknown as Z3_func_decl,
        };
      },
      mk_constructor: function (
        c: Z3_context,
        name: Z3_symbol,
        recognizer: Z3_symbol,
        field_names: Z3_symbol[],
        sorts: (Z3_sort | null)[],
        sort_refs: unsigned[]
      ): Z3_constructor {
        if (field_names.length !== sorts.length) {
          throw new TypeError(
            `field_names and sorts must be the same length (got ${field_names.length} and {sorts.length})`
          );
        }
        if (field_names.length !== sort_refs.length) {
          throw new TypeError(
            `field_names and sort_refs must be the same length (got ${field_names.length} and {sort_refs.length})`
          );
        }
        let ret = Mod.ccall(
          'Z3_mk_constructor',
          'number',
          ['number', 'number', 'number', 'number', 'array', 'array', 'array'],
          [
            c,
            name,
            recognizer,
            field_names.length,
            intArrayToByteArr(field_names as unknown as number[]),
            intArrayToByteArr(sorts as unknown as number[]),
            intArrayToByteArr(sort_refs as unknown as number[]),
          ]
        );
        return ret;
      },
      del_constructor: Mod._Z3_del_constructor as (
        c: Z3_context,
        constr: Z3_constructor
      ) => void,
      mk_datatype: function (
        c: Z3_context,
        name: Z3_symbol,
        constructors: Z3_constructor[]
      ): Z3_sort {
        let ret = Mod.ccall(
          'Z3_mk_datatype',
          'number',
          ['number', 'number', 'number', 'array'],
          [
            c,
            name,
            constructors.length,
            intArrayToByteArr(constructors as unknown as number[]),
          ]
        );
        return ret;
      },
      mk_constructor_list: function (
        c: Z3_context,
        constructors: Z3_constructor[]
      ): Z3_constructor_list {
        let ret = Mod.ccall(
          'Z3_mk_constructor_list',
          'number',
          ['number', 'number', 'array'],
          [
            c,
            constructors.length,
            intArrayToByteArr(constructors as unknown as number[]),
          ]
        );
        return ret;
      },
      del_constructor_list: Mod._Z3_del_constructor_list as (
        c: Z3_context,
        clist: Z3_constructor_list
      ) => void,
      mk_datatypes: function (
        c: Z3_context,
        sort_names: Z3_symbol[],
        constructor_lists: Z3_constructor_list[]
      ): Z3_sort[] {
        if (sort_names.length !== constructor_lists.length) {
          throw new TypeError(
            `sort_names and constructor_lists must be the same length (got ${sort_names.length} and {constructor_lists.length})`
          );
        }
        let outArray_sorts = Mod._malloc(4 * sort_names.length);
        try {
          let ret = Mod.ccall(
            'Z3_mk_datatypes',
            'void',
            ['number', 'number', 'array', 'number', 'array'],
            [
              c,
              sort_names.length,
              intArrayToByteArr(sort_names as unknown as number[]),
              outArray_sorts,
              intArrayToByteArr(constructor_lists as unknown as number[]),
            ]
          );
          return readUintArray(
            outArray_sorts,
            sort_names.length
          ) as unknown as Z3_sort[];
        } finally {
          Mod._free(outArray_sorts);
        }
      },
      query_constructor: function (
        c: Z3_context,
        constr: Z3_constructor,
        num_fields: unsigned
      ): {
        constructor: Z3_func_decl;
        tester: Z3_func_decl;
        accessors: Z3_func_decl[];
      } {
        let outArray_accessors = Mod._malloc(4 * num_fields);
        try {
          let ret = Mod.ccall(
            'Z3_query_constructor',
            'void',
            ['number', 'number', 'number', 'number', 'number', 'number'],
            [
              c,
              constr,
              num_fields,
              outAddress,
              outAddress + 4,
              outArray_accessors,
            ]
          );
          return {
            constructor: getOutUint(0) as unknown as Z3_func_decl,
            tester: getOutUint(1) as unknown as Z3_func_decl,
            accessors: readUintArray(
              outArray_accessors,
              num_fields
            ) as unknown as Z3_func_decl[],
          };
        } finally {
          Mod._free(outArray_accessors);
        }
      },
      mk_func_decl: function (
        c: Z3_context,
        s: Z3_symbol,
        domain: Z3_sort[],
        range: Z3_sort
      ): Z3_func_decl {
        let ret = Mod.ccall(
          'Z3_mk_func_decl',
          'number',
          ['number', 'number', 'number', 'array', 'number'],
          [
            c,
            s,
            domain.length,
            intArrayToByteArr(domain as unknown as number[]),
            range,
          ]
        );
        return ret;
      },
      mk_app: function (
        c: Z3_context,
        d: Z3_func_decl,
        args: Z3_ast[]
      ): Z3_ast {
        let ret = Mod.ccall(
          'Z3_mk_app',
          'number',
          ['number', 'number', 'number', 'array'],
          [c, d, args.length, intArrayToByteArr(args as unknown as number[])]
        );
        return ret;
      },
      mk_const: Mod._Z3_mk_const as (
        c: Z3_context,
        s: Z3_symbol,
        ty: Z3_sort
      ) => Z3_ast,
      mk_fresh_func_decl: function (
        c: Z3_context,
        prefix: string,
        domain: Z3_sort[],
        range: Z3_sort
      ): Z3_func_decl {
        let ret = Mod.ccall(
          'Z3_mk_fresh_func_decl',
          'number',
          ['number', 'string', 'number', 'array', 'number'],
          [
            c,
            prefix,
            domain.length,
            intArrayToByteArr(domain as unknown as number[]),
            range,
          ]
        );
        return ret;
      },
      mk_fresh_const: function (
        c: Z3_context,
        prefix: string,
        ty: Z3_sort
      ): Z3_ast {
        let ret = Mod.ccall(
          'Z3_mk_fresh_const',
          'number',
          ['number', 'string', 'number'],
          [c, prefix, ty]
        );
        return ret;
      },
      mk_rec_func_decl: function (
        c: Z3_context,
        s: Z3_symbol,
        domain: Z3_sort[],
        range: Z3_sort
      ): Z3_func_decl {
        let ret = Mod.ccall(
          'Z3_mk_rec_func_decl',
          'number',
          ['number', 'number', 'number', 'array', 'number'],
          [
            c,
            s,
            domain.length,
            intArrayToByteArr(domain as unknown as number[]),
            range,
          ]
        );
        return ret;
      },
      add_rec_def: function (
        c: Z3_context,
        f: Z3_func_decl,
        args: Z3_ast[],
        body: Z3_ast
      ): void {
        let ret = Mod.ccall(
          'Z3_add_rec_def',
          'void',
          ['number', 'number', 'number', 'array', 'number'],
          [
            c,
            f,
            args.length,
            intArrayToByteArr(args as unknown as number[]),
            body,
          ]
        );
        return ret;
      },
      mk_true: Mod._Z3_mk_true as (c: Z3_context) => Z3_ast,
      mk_false: Mod._Z3_mk_false as (c: Z3_context) => Z3_ast,
      mk_eq: Mod._Z3_mk_eq as (c: Z3_context, l: Z3_ast, r: Z3_ast) => Z3_ast,
      mk_distinct: function (c: Z3_context, args: Z3_ast[]): Z3_ast {
        let ret = Mod.ccall(
          'Z3_mk_distinct',
          'number',
          ['number', 'number', 'array'],
          [c, args.length, intArrayToByteArr(args as unknown as number[])]
        );
        return ret;
      },
      mk_not: Mod._Z3_mk_not as (c: Z3_context, a: Z3_ast) => Z3_ast,
      mk_ite: Mod._Z3_mk_ite as (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast,
        t3: Z3_ast
      ) => Z3_ast,
      mk_iff: Mod._Z3_mk_iff as (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast
      ) => Z3_ast,
      mk_implies: Mod._Z3_mk_implies as (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast
      ) => Z3_ast,
      mk_xor: Mod._Z3_mk_xor as (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast
      ) => Z3_ast,
      mk_and: function (c: Z3_context, args: Z3_ast[]): Z3_ast {
        let ret = Mod.ccall(
          'Z3_mk_and',
          'number',
          ['number', 'number', 'array'],
          [c, args.length, intArrayToByteArr(args as unknown as number[])]
        );
        return ret;
      },
      mk_or: function (c: Z3_context, args: Z3_ast[]): Z3_ast {
        let ret = Mod.ccall(
          'Z3_mk_or',
          'number',
          ['number', 'number', 'array'],
          [c, args.length, intArrayToByteArr(args as unknown as number[])]
        );
        return ret;
      },
      mk_add: function (c: Z3_context, args: Z3_ast[]): Z3_ast {
        let ret = Mod.ccall(
          'Z3_mk_add',
          'number',
          ['number', 'number', 'array'],
          [c, args.length, intArrayToByteArr(args as unknown as number[])]
        );
        return ret;
      },
      mk_mul: function (c: Z3_context, args: Z3_ast[]): Z3_ast {
        let ret = Mod.ccall(
          'Z3_mk_mul',
          'number',
          ['number', 'number', 'array'],
          [c, args.length, intArrayToByteArr(args as unknown as number[])]
        );
        return ret;
      },
      mk_sub: function (c: Z3_context, args: Z3_ast[]): Z3_ast {
        let ret = Mod.ccall(
          'Z3_mk_sub',
          'number',
          ['number', 'number', 'array'],
          [c, args.length, intArrayToByteArr(args as unknown as number[])]
        );
        return ret;
      },
      mk_unary_minus: Mod._Z3_mk_unary_minus as (
        c: Z3_context,
        arg: Z3_ast
      ) => Z3_ast,
      mk_div: Mod._Z3_mk_div as (
        c: Z3_context,
        arg1: Z3_ast,
        arg2: Z3_ast
      ) => Z3_ast,
      mk_mod: Mod._Z3_mk_mod as (
        c: Z3_context,
        arg1: Z3_ast,
        arg2: Z3_ast
      ) => Z3_ast,
      mk_rem: Mod._Z3_mk_rem as (
        c: Z3_context,
        arg1: Z3_ast,
        arg2: Z3_ast
      ) => Z3_ast,
      mk_power: Mod._Z3_mk_power as (
        c: Z3_context,
        arg1: Z3_ast,
        arg2: Z3_ast
      ) => Z3_ast,
      mk_lt: Mod._Z3_mk_lt as (c: Z3_context, t1: Z3_ast, t2: Z3_ast) => Z3_ast,
      mk_le: Mod._Z3_mk_le as (c: Z3_context, t1: Z3_ast, t2: Z3_ast) => Z3_ast,
      mk_gt: Mod._Z3_mk_gt as (c: Z3_context, t1: Z3_ast, t2: Z3_ast) => Z3_ast,
      mk_ge: Mod._Z3_mk_ge as (c: Z3_context, t1: Z3_ast, t2: Z3_ast) => Z3_ast,
      mk_divides: Mod._Z3_mk_divides as (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast
      ) => Z3_ast,
      mk_int2real: Mod._Z3_mk_int2real as (c: Z3_context, t1: Z3_ast) => Z3_ast,
      mk_real2int: Mod._Z3_mk_real2int as (c: Z3_context, t1: Z3_ast) => Z3_ast,
      mk_is_int: Mod._Z3_mk_is_int as (c: Z3_context, t1: Z3_ast) => Z3_ast,
      mk_bvnot: Mod._Z3_mk_bvnot as (c: Z3_context, t1: Z3_ast) => Z3_ast,
      mk_bvredand: Mod._Z3_mk_bvredand as (c: Z3_context, t1: Z3_ast) => Z3_ast,
      mk_bvredor: Mod._Z3_mk_bvredor as (c: Z3_context, t1: Z3_ast) => Z3_ast,
      mk_bvand: Mod._Z3_mk_bvand as (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast
      ) => Z3_ast,
      mk_bvor: Mod._Z3_mk_bvor as (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast
      ) => Z3_ast,
      mk_bvxor: Mod._Z3_mk_bvxor as (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast
      ) => Z3_ast,
      mk_bvnand: Mod._Z3_mk_bvnand as (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast
      ) => Z3_ast,
      mk_bvnor: Mod._Z3_mk_bvnor as (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast
      ) => Z3_ast,
      mk_bvxnor: Mod._Z3_mk_bvxnor as (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast
      ) => Z3_ast,
      mk_bvneg: Mod._Z3_mk_bvneg as (c: Z3_context, t1: Z3_ast) => Z3_ast,
      mk_bvadd: Mod._Z3_mk_bvadd as (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast
      ) => Z3_ast,
      mk_bvsub: Mod._Z3_mk_bvsub as (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast
      ) => Z3_ast,
      mk_bvmul: Mod._Z3_mk_bvmul as (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast
      ) => Z3_ast,
      mk_bvudiv: Mod._Z3_mk_bvudiv as (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast
      ) => Z3_ast,
      mk_bvsdiv: Mod._Z3_mk_bvsdiv as (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast
      ) => Z3_ast,
      mk_bvurem: Mod._Z3_mk_bvurem as (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast
      ) => Z3_ast,
      mk_bvsrem: Mod._Z3_mk_bvsrem as (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast
      ) => Z3_ast,
      mk_bvsmod: Mod._Z3_mk_bvsmod as (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast
      ) => Z3_ast,
      mk_bvult: Mod._Z3_mk_bvult as (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast
      ) => Z3_ast,
      mk_bvslt: Mod._Z3_mk_bvslt as (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast
      ) => Z3_ast,
      mk_bvule: Mod._Z3_mk_bvule as (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast
      ) => Z3_ast,
      mk_bvsle: Mod._Z3_mk_bvsle as (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast
      ) => Z3_ast,
      mk_bvuge: Mod._Z3_mk_bvuge as (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast
      ) => Z3_ast,
      mk_bvsge: Mod._Z3_mk_bvsge as (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast
      ) => Z3_ast,
      mk_bvugt: Mod._Z3_mk_bvugt as (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast
      ) => Z3_ast,
      mk_bvsgt: Mod._Z3_mk_bvsgt as (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast
      ) => Z3_ast,
      mk_concat: Mod._Z3_mk_concat as (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast
      ) => Z3_ast,
      mk_extract: Mod._Z3_mk_extract as (
        c: Z3_context,
        high: unsigned,
        low: unsigned,
        t1: Z3_ast
      ) => Z3_ast,
      mk_sign_ext: Mod._Z3_mk_sign_ext as (
        c: Z3_context,
        i: unsigned,
        t1: Z3_ast
      ) => Z3_ast,
      mk_zero_ext: Mod._Z3_mk_zero_ext as (
        c: Z3_context,
        i: unsigned,
        t1: Z3_ast
      ) => Z3_ast,
      mk_repeat: Mod._Z3_mk_repeat as (
        c: Z3_context,
        i: unsigned,
        t1: Z3_ast
      ) => Z3_ast,
      mk_bvshl: Mod._Z3_mk_bvshl as (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast
      ) => Z3_ast,
      mk_bvlshr: Mod._Z3_mk_bvlshr as (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast
      ) => Z3_ast,
      mk_bvashr: Mod._Z3_mk_bvashr as (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast
      ) => Z3_ast,
      mk_rotate_left: Mod._Z3_mk_rotate_left as (
        c: Z3_context,
        i: unsigned,
        t1: Z3_ast
      ) => Z3_ast,
      mk_rotate_right: Mod._Z3_mk_rotate_right as (
        c: Z3_context,
        i: unsigned,
        t1: Z3_ast
      ) => Z3_ast,
      mk_ext_rotate_left: Mod._Z3_mk_ext_rotate_left as (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast
      ) => Z3_ast,
      mk_ext_rotate_right: Mod._Z3_mk_ext_rotate_right as (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast
      ) => Z3_ast,
      mk_int2bv: Mod._Z3_mk_int2bv as (
        c: Z3_context,
        n: unsigned,
        t1: Z3_ast
      ) => Z3_ast,
      mk_bv2int: Mod._Z3_mk_bv2int as (
        c: Z3_context,
        t1: Z3_ast,
        is_signed: boolean
      ) => Z3_ast,
      mk_bvadd_no_overflow: Mod._Z3_mk_bvadd_no_overflow as (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast,
        is_signed: boolean
      ) => Z3_ast,
      mk_bvadd_no_underflow: Mod._Z3_mk_bvadd_no_underflow as (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast
      ) => Z3_ast,
      mk_bvsub_no_overflow: Mod._Z3_mk_bvsub_no_overflow as (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast
      ) => Z3_ast,
      mk_bvsub_no_underflow: Mod._Z3_mk_bvsub_no_underflow as (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast,
        is_signed: boolean
      ) => Z3_ast,
      mk_bvsdiv_no_overflow: Mod._Z3_mk_bvsdiv_no_overflow as (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast
      ) => Z3_ast,
      mk_bvneg_no_overflow: Mod._Z3_mk_bvneg_no_overflow as (
        c: Z3_context,
        t1: Z3_ast
      ) => Z3_ast,
      mk_bvmul_no_overflow: Mod._Z3_mk_bvmul_no_overflow as (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast,
        is_signed: boolean
      ) => Z3_ast,
      mk_bvmul_no_underflow: Mod._Z3_mk_bvmul_no_underflow as (
        c: Z3_context,
        t1: Z3_ast,
        t2: Z3_ast
      ) => Z3_ast,
      mk_select: Mod._Z3_mk_select as (
        c: Z3_context,
        a: Z3_ast,
        i: Z3_ast
      ) => Z3_ast,
      mk_select_n: function (c: Z3_context, a: Z3_ast, idxs: Z3_ast[]): Z3_ast {
        let ret = Mod.ccall(
          'Z3_mk_select_n',
          'number',
          ['number', 'number', 'number', 'array'],
          [c, a, idxs.length, intArrayToByteArr(idxs as unknown as number[])]
        );
        return ret;
      },
      mk_store: Mod._Z3_mk_store as (
        c: Z3_context,
        a: Z3_ast,
        i: Z3_ast,
        v: Z3_ast
      ) => Z3_ast,
      mk_store_n: function (
        c: Z3_context,
        a: Z3_ast,
        idxs: Z3_ast[],
        v: Z3_ast
      ): Z3_ast {
        let ret = Mod.ccall(
          'Z3_mk_store_n',
          'number',
          ['number', 'number', 'number', 'array', 'number'],
          [c, a, idxs.length, intArrayToByteArr(idxs as unknown as number[]), v]
        );
        return ret;
      },
      mk_const_array: Mod._Z3_mk_const_array as (
        c: Z3_context,
        domain: Z3_sort,
        v: Z3_ast
      ) => Z3_ast,
      mk_map: function (
        c: Z3_context,
        f: Z3_func_decl,
        args: Z3_ast[]
      ): Z3_ast {
        let ret = Mod.ccall(
          'Z3_mk_map',
          'number',
          ['number', 'number', 'number', 'array'],
          [c, f, args.length, intArrayToByteArr(args as unknown as number[])]
        );
        return ret;
      },
      mk_array_default: Mod._Z3_mk_array_default as (
        c: Z3_context,
        array: Z3_ast
      ) => Z3_ast,
      mk_as_array: Mod._Z3_mk_as_array as (
        c: Z3_context,
        f: Z3_func_decl
      ) => Z3_ast,
      mk_set_has_size: Mod._Z3_mk_set_has_size as (
        c: Z3_context,
        set: Z3_ast,
        k: Z3_ast
      ) => Z3_ast,
      mk_set_sort: Mod._Z3_mk_set_sort as (
        c: Z3_context,
        ty: Z3_sort
      ) => Z3_sort,
      mk_empty_set: Mod._Z3_mk_empty_set as (
        c: Z3_context,
        domain: Z3_sort
      ) => Z3_ast,
      mk_full_set: Mod._Z3_mk_full_set as (
        c: Z3_context,
        domain: Z3_sort
      ) => Z3_ast,
      mk_set_add: Mod._Z3_mk_set_add as (
        c: Z3_context,
        set: Z3_ast,
        elem: Z3_ast
      ) => Z3_ast,
      mk_set_del: Mod._Z3_mk_set_del as (
        c: Z3_context,
        set: Z3_ast,
        elem: Z3_ast
      ) => Z3_ast,
      mk_set_union: function (c: Z3_context, args: Z3_ast[]): Z3_ast {
        let ret = Mod.ccall(
          'Z3_mk_set_union',
          'number',
          ['number', 'number', 'array'],
          [c, args.length, intArrayToByteArr(args as unknown as number[])]
        );
        return ret;
      },
      mk_set_intersect: function (c: Z3_context, args: Z3_ast[]): Z3_ast {
        let ret = Mod.ccall(
          'Z3_mk_set_intersect',
          'number',
          ['number', 'number', 'array'],
          [c, args.length, intArrayToByteArr(args as unknown as number[])]
        );
        return ret;
      },
      mk_set_difference: Mod._Z3_mk_set_difference as (
        c: Z3_context,
        arg1: Z3_ast,
        arg2: Z3_ast
      ) => Z3_ast,
      mk_set_complement: Mod._Z3_mk_set_complement as (
        c: Z3_context,
        arg: Z3_ast
      ) => Z3_ast,
      mk_set_member: Mod._Z3_mk_set_member as (
        c: Z3_context,
        elem: Z3_ast,
        set: Z3_ast
      ) => Z3_ast,
      mk_set_subset: Mod._Z3_mk_set_subset as (
        c: Z3_context,
        arg1: Z3_ast,
        arg2: Z3_ast
      ) => Z3_ast,
      mk_array_ext: Mod._Z3_mk_array_ext as (
        c: Z3_context,
        arg1: Z3_ast,
        arg2: Z3_ast
      ) => Z3_ast,
      mk_numeral: function (
        c: Z3_context,
        numeral: string,
        ty: Z3_sort
      ): Z3_ast {
        let ret = Mod.ccall(
          'Z3_mk_numeral',
          'number',
          ['number', 'string', 'number'],
          [c, numeral, ty]
        );
        return ret;
      },
      mk_real: Mod._Z3_mk_real as (c: Z3_context, num: int, den: int) => Z3_ast,
      mk_int: Mod._Z3_mk_int as (c: Z3_context, v: int, ty: Z3_sort) => Z3_ast,
      mk_unsigned_int: Mod._Z3_mk_unsigned_int as (
        c: Z3_context,
        v: unsigned,
        ty: Z3_sort
      ) => Z3_ast,
      mk_int64: Mod._Z3_mk_int64 as (
        c: Z3_context,
        v: int64_t,
        ty: Z3_sort
      ) => Z3_ast,
      mk_unsigned_int64: Mod._Z3_mk_unsigned_int64 as (
        c: Z3_context,
        v: uint64_t,
        ty: Z3_sort
      ) => Z3_ast,
      mk_bv_numeral: function (c: Z3_context, bits: boolean[]): Z3_ast {
        let ret = Mod.ccall(
          'Z3_mk_bv_numeral',
          'number',
          ['number', 'number', 'array'],
          [c, bits.length, boolArrayToByteArr(bits)]
        );
        return ret;
      },
      mk_seq_sort: Mod._Z3_mk_seq_sort as (
        c: Z3_context,
        s: Z3_sort
      ) => Z3_sort,
      is_seq_sort: function (c: Z3_context, s: Z3_sort): boolean {
        let ret = Mod.ccall(
          'Z3_is_seq_sort',
          'boolean',
          ['number', 'number'],
          [c, s]
        );
        return ret;
      },
      get_seq_sort_basis: Mod._Z3_get_seq_sort_basis as (
        c: Z3_context,
        s: Z3_sort
      ) => Z3_sort,
      mk_re_sort: Mod._Z3_mk_re_sort as (
        c: Z3_context,
        seq: Z3_sort
      ) => Z3_sort,
      is_re_sort: function (c: Z3_context, s: Z3_sort): boolean {
        let ret = Mod.ccall(
          'Z3_is_re_sort',
          'boolean',
          ['number', 'number'],
          [c, s]
        );
        return ret;
      },
      get_re_sort_basis: Mod._Z3_get_re_sort_basis as (
        c: Z3_context,
        s: Z3_sort
      ) => Z3_sort,
      mk_string_sort: Mod._Z3_mk_string_sort as (c: Z3_context) => Z3_sort,
      mk_char_sort: Mod._Z3_mk_char_sort as (c: Z3_context) => Z3_sort,
      is_string_sort: function (c: Z3_context, s: Z3_sort): boolean {
        let ret = Mod.ccall(
          'Z3_is_string_sort',
          'boolean',
          ['number', 'number'],
          [c, s]
        );
        return ret;
      },
      is_char_sort: function (c: Z3_context, s: Z3_sort): boolean {
        let ret = Mod.ccall(
          'Z3_is_char_sort',
          'boolean',
          ['number', 'number'],
          [c, s]
        );
        return ret;
      },
      mk_string: function (c: Z3_context, s: string): Z3_ast {
        let ret = Mod.ccall(
          'Z3_mk_string',
          'number',
          ['number', 'string'],
          [c, s]
        );
        return ret;
      },
      mk_lstring: function (c: Z3_context, len: unsigned, s: string): Z3_ast {
        let ret = Mod.ccall(
          'Z3_mk_lstring',
          'number',
          ['number', 'number', 'string'],
          [c, len, s]
        );
        return ret;
      },
      mk_u32string: function (c: Z3_context, chars: unsigned[]): Z3_ast {
        let ret = Mod.ccall(
          'Z3_mk_u32string',
          'number',
          ['number', 'number', 'array'],
          [c, chars.length, intArrayToByteArr(chars as unknown as number[])]
        );
        return ret;
      },
      is_string: function (c: Z3_context, s: Z3_ast): boolean {
        let ret = Mod.ccall(
          'Z3_is_string',
          'boolean',
          ['number', 'number'],
          [c, s]
        );
        return ret;
      },
      get_string: function (c: Z3_context, s: Z3_ast): string {
        let ret = Mod.ccall(
          'Z3_get_string',
          'string',
          ['number', 'number'],
          [c, s]
        );
        return ret;
      },
      get_string_length: Mod._Z3_get_string_length as (
        c: Z3_context,
        s: Z3_ast
      ) => unsigned,
      get_string_contents: function (
        c: Z3_context,
        s: Z3_ast,
        length: unsigned
      ): unsigned[] {
        let outArray_contents = Mod._malloc(4 * length);
        try {
          let ret = Mod.ccall(
            'Z3_get_string_contents',
            'void',
            ['number', 'number', 'number', 'number'],
            [c, s, length, outArray_contents]
          );
          return readUintArray(outArray_contents, length);
        } finally {
          Mod._free(outArray_contents);
        }
      },
      mk_seq_empty: Mod._Z3_mk_seq_empty as (
        c: Z3_context,
        seq: Z3_sort
      ) => Z3_ast,
      mk_seq_unit: Mod._Z3_mk_seq_unit as (c: Z3_context, a: Z3_ast) => Z3_ast,
      mk_seq_concat: function (c: Z3_context, args: Z3_ast[]): Z3_ast {
        let ret = Mod.ccall(
          'Z3_mk_seq_concat',
          'number',
          ['number', 'number', 'array'],
          [c, args.length, intArrayToByteArr(args as unknown as number[])]
        );
        return ret;
      },
      mk_seq_prefix: Mod._Z3_mk_seq_prefix as (
        c: Z3_context,
        prefix: Z3_ast,
        s: Z3_ast
      ) => Z3_ast,
      mk_seq_suffix: Mod._Z3_mk_seq_suffix as (
        c: Z3_context,
        suffix: Z3_ast,
        s: Z3_ast
      ) => Z3_ast,
      mk_seq_contains: Mod._Z3_mk_seq_contains as (
        c: Z3_context,
        container: Z3_ast,
        containee: Z3_ast
      ) => Z3_ast,
      mk_str_lt: Mod._Z3_mk_str_lt as (
        c: Z3_context,
        prefix: Z3_ast,
        s: Z3_ast
      ) => Z3_ast,
      mk_str_le: Mod._Z3_mk_str_le as (
        c: Z3_context,
        prefix: Z3_ast,
        s: Z3_ast
      ) => Z3_ast,
      mk_seq_extract: Mod._Z3_mk_seq_extract as (
        c: Z3_context,
        s: Z3_ast,
        offset: Z3_ast,
        length: Z3_ast
      ) => Z3_ast,
      mk_seq_replace: Mod._Z3_mk_seq_replace as (
        c: Z3_context,
        s: Z3_ast,
        src: Z3_ast,
        dst: Z3_ast
      ) => Z3_ast,
      mk_seq_at: Mod._Z3_mk_seq_at as (
        c: Z3_context,
        s: Z3_ast,
        index: Z3_ast
      ) => Z3_ast,
      mk_seq_nth: Mod._Z3_mk_seq_nth as (
        c: Z3_context,
        s: Z3_ast,
        index: Z3_ast
      ) => Z3_ast,
      mk_seq_length: Mod._Z3_mk_seq_length as (
        c: Z3_context,
        s: Z3_ast
      ) => Z3_ast,
      mk_seq_index: Mod._Z3_mk_seq_index as (
        c: Z3_context,
        s: Z3_ast,
        substr: Z3_ast,
        offset: Z3_ast
      ) => Z3_ast,
      mk_seq_last_index: Mod._Z3_mk_seq_last_index as (
        c: Z3_context,
        UNNAMED: Z3_ast,
        substr: Z3_ast
      ) => Z3_ast,
      mk_str_to_int: Mod._Z3_mk_str_to_int as (
        c: Z3_context,
        s: Z3_ast
      ) => Z3_ast,
      mk_int_to_str: Mod._Z3_mk_int_to_str as (
        c: Z3_context,
        s: Z3_ast
      ) => Z3_ast,
      mk_ubv_to_str: Mod._Z3_mk_ubv_to_str as (
        c: Z3_context,
        s: Z3_ast
      ) => Z3_ast,
      mk_sbv_to_str: Mod._Z3_mk_sbv_to_str as (
        c: Z3_context,
        s: Z3_ast
      ) => Z3_ast,
      mk_seq_to_re: Mod._Z3_mk_seq_to_re as (
        c: Z3_context,
        seq: Z3_ast
      ) => Z3_ast,
      mk_seq_in_re: Mod._Z3_mk_seq_in_re as (
        c: Z3_context,
        seq: Z3_ast,
        re: Z3_ast
      ) => Z3_ast,
      mk_re_plus: Mod._Z3_mk_re_plus as (c: Z3_context, re: Z3_ast) => Z3_ast,
      mk_re_star: Mod._Z3_mk_re_star as (c: Z3_context, re: Z3_ast) => Z3_ast,
      mk_re_option: Mod._Z3_mk_re_option as (
        c: Z3_context,
        re: Z3_ast
      ) => Z3_ast,
      mk_re_union: function (c: Z3_context, args: Z3_ast[]): Z3_ast {
        let ret = Mod.ccall(
          'Z3_mk_re_union',
          'number',
          ['number', 'number', 'array'],
          [c, args.length, intArrayToByteArr(args as unknown as number[])]
        );
        return ret;
      },
      mk_re_concat: function (c: Z3_context, args: Z3_ast[]): Z3_ast {
        let ret = Mod.ccall(
          'Z3_mk_re_concat',
          'number',
          ['number', 'number', 'array'],
          [c, args.length, intArrayToByteArr(args as unknown as number[])]
        );
        return ret;
      },
      mk_re_range: Mod._Z3_mk_re_range as (
        c: Z3_context,
        lo: Z3_ast,
        hi: Z3_ast
      ) => Z3_ast,
      mk_re_allchar: Mod._Z3_mk_re_allchar as (
        c: Z3_context,
        regex_sort: Z3_sort
      ) => Z3_ast,
      mk_re_loop: Mod._Z3_mk_re_loop as (
        c: Z3_context,
        r: Z3_ast,
        lo: unsigned,
        hi: unsigned
      ) => Z3_ast,
      mk_re_intersect: function (c: Z3_context, args: Z3_ast[]): Z3_ast {
        let ret = Mod.ccall(
          'Z3_mk_re_intersect',
          'number',
          ['number', 'number', 'array'],
          [c, args.length, intArrayToByteArr(args as unknown as number[])]
        );
        return ret;
      },
      mk_re_complement: Mod._Z3_mk_re_complement as (
        c: Z3_context,
        re: Z3_ast
      ) => Z3_ast,
      mk_re_diff: Mod._Z3_mk_re_diff as (
        c: Z3_context,
        re1: Z3_ast,
        re2: Z3_ast
      ) => Z3_ast,
      mk_re_empty: Mod._Z3_mk_re_empty as (
        c: Z3_context,
        re: Z3_sort
      ) => Z3_ast,
      mk_re_full: Mod._Z3_mk_re_full as (c: Z3_context, re: Z3_sort) => Z3_ast,
      mk_char_le: Mod._Z3_mk_char_le as (
        c: Z3_context,
        ch1: Z3_ast,
        ch2: Z3_ast
      ) => Z3_ast,
      mk_char_to_int: Mod._Z3_mk_char_to_int as (
        c: Z3_context,
        ch: Z3_ast
      ) => Z3_ast,
      mk_char_to_bv: Mod._Z3_mk_char_to_bv as (
        c: Z3_context,
        ch: Z3_ast
      ) => Z3_ast,
      mk_char_from_bv: Mod._Z3_mk_char_from_bv as (
        c: Z3_context,
        bv: Z3_ast
      ) => Z3_ast,
      mk_char_is_digit: Mod._Z3_mk_char_is_digit as (
        c: Z3_context,
        ch: Z3_ast
      ) => Z3_ast,
      mk_linear_order: Mod._Z3_mk_linear_order as (
        c: Z3_context,
        a: Z3_sort,
        id: unsigned
      ) => Z3_func_decl,
      mk_partial_order: Mod._Z3_mk_partial_order as (
        c: Z3_context,
        a: Z3_sort,
        id: unsigned
      ) => Z3_func_decl,
      mk_piecewise_linear_order: Mod._Z3_mk_piecewise_linear_order as (
        c: Z3_context,
        a: Z3_sort,
        id: unsigned
      ) => Z3_func_decl,
      mk_tree_order: Mod._Z3_mk_tree_order as (
        c: Z3_context,
        a: Z3_sort,
        id: unsigned
      ) => Z3_func_decl,
      mk_transitive_closure: Mod._Z3_mk_transitive_closure as (
        c: Z3_context,
        f: Z3_func_decl
      ) => Z3_func_decl,
      mk_pattern: function (c: Z3_context, terms: Z3_ast[]): Z3_pattern {
        let ret = Mod.ccall(
          'Z3_mk_pattern',
          'number',
          ['number', 'number', 'array'],
          [c, terms.length, intArrayToByteArr(terms as unknown as number[])]
        );
        return ret;
      },
      mk_bound: Mod._Z3_mk_bound as (
        c: Z3_context,
        index: unsigned,
        ty: Z3_sort
      ) => Z3_ast,
      mk_forall: function (
        c: Z3_context,
        weight: unsigned,
        patterns: Z3_pattern[],
        sorts: Z3_sort[],
        decl_names: Z3_symbol[],
        body: Z3_ast
      ): Z3_ast {
        if (sorts.length !== decl_names.length) {
          throw new TypeError(
            `sorts and decl_names must be the same length (got ${sorts.length} and {decl_names.length})`
          );
        }
        let ret = Mod.ccall(
          'Z3_mk_forall',
          'number',
          [
            'number',
            'number',
            'number',
            'array',
            'number',
            'array',
            'array',
            'number',
          ],
          [
            c,
            weight,
            patterns.length,
            intArrayToByteArr(patterns as unknown as number[]),
            sorts.length,
            intArrayToByteArr(sorts as unknown as number[]),
            intArrayToByteArr(decl_names as unknown as number[]),
            body,
          ]
        );
        return ret;
      },
      mk_exists: function (
        c: Z3_context,
        weight: unsigned,
        patterns: Z3_pattern[],
        sorts: Z3_sort[],
        decl_names: Z3_symbol[],
        body: Z3_ast
      ): Z3_ast {
        if (sorts.length !== decl_names.length) {
          throw new TypeError(
            `sorts and decl_names must be the same length (got ${sorts.length} and {decl_names.length})`
          );
        }
        let ret = Mod.ccall(
          'Z3_mk_exists',
          'number',
          [
            'number',
            'number',
            'number',
            'array',
            'number',
            'array',
            'array',
            'number',
          ],
          [
            c,
            weight,
            patterns.length,
            intArrayToByteArr(patterns as unknown as number[]),
            sorts.length,
            intArrayToByteArr(sorts as unknown as number[]),
            intArrayToByteArr(decl_names as unknown as number[]),
            body,
          ]
        );
        return ret;
      },
      mk_quantifier: function (
        c: Z3_context,
        is_forall: boolean,
        weight: unsigned,
        patterns: Z3_pattern[],
        sorts: Z3_sort[],
        decl_names: Z3_symbol[],
        body: Z3_ast
      ): Z3_ast {
        if (sorts.length !== decl_names.length) {
          throw new TypeError(
            `sorts and decl_names must be the same length (got ${sorts.length} and {decl_names.length})`
          );
        }
        let ret = Mod.ccall(
          'Z3_mk_quantifier',
          'number',
          [
            'number',
            'boolean',
            'number',
            'number',
            'array',
            'number',
            'array',
            'array',
            'number',
          ],
          [
            c,
            is_forall,
            weight,
            patterns.length,
            intArrayToByteArr(patterns as unknown as number[]),
            sorts.length,
            intArrayToByteArr(sorts as unknown as number[]),
            intArrayToByteArr(decl_names as unknown as number[]),
            body,
          ]
        );
        return ret;
      },
      mk_quantifier_ex: function (
        c: Z3_context,
        is_forall: boolean,
        weight: unsigned,
        quantifier_id: Z3_symbol,
        skolem_id: Z3_symbol,
        patterns: Z3_pattern[],
        no_patterns: Z3_ast[],
        sorts: Z3_sort[],
        decl_names: Z3_symbol[],
        body: Z3_ast
      ): Z3_ast {
        if (sorts.length !== decl_names.length) {
          throw new TypeError(
            `sorts and decl_names must be the same length (got ${sorts.length} and {decl_names.length})`
          );
        }
        let ret = Mod.ccall(
          'Z3_mk_quantifier_ex',
          'number',
          [
            'number',
            'boolean',
            'number',
            'number',
            'number',
            'number',
            'array',
            'number',
            'array',
            'number',
            'array',
            'array',
            'number',
          ],
          [
            c,
            is_forall,
            weight,
            quantifier_id,
            skolem_id,
            patterns.length,
            intArrayToByteArr(patterns as unknown as number[]),
            no_patterns.length,
            intArrayToByteArr(no_patterns as unknown as number[]),
            sorts.length,
            intArrayToByteArr(sorts as unknown as number[]),
            intArrayToByteArr(decl_names as unknown as number[]),
            body,
          ]
        );
        return ret;
      },
      mk_forall_const: function (
        c: Z3_context,
        weight: unsigned,
        bound: Z3_app[],
        patterns: Z3_pattern[],
        body: Z3_ast
      ): Z3_ast {
        let ret = Mod.ccall(
          'Z3_mk_forall_const',
          'number',
          ['number', 'number', 'number', 'array', 'number', 'array', 'number'],
          [
            c,
            weight,
            bound.length,
            intArrayToByteArr(bound as unknown as number[]),
            patterns.length,
            intArrayToByteArr(patterns as unknown as number[]),
            body,
          ]
        );
        return ret;
      },
      mk_exists_const: function (
        c: Z3_context,
        weight: unsigned,
        bound: Z3_app[],
        patterns: Z3_pattern[],
        body: Z3_ast
      ): Z3_ast {
        let ret = Mod.ccall(
          'Z3_mk_exists_const',
          'number',
          ['number', 'number', 'number', 'array', 'number', 'array', 'number'],
          [
            c,
            weight,
            bound.length,
            intArrayToByteArr(bound as unknown as number[]),
            patterns.length,
            intArrayToByteArr(patterns as unknown as number[]),
            body,
          ]
        );
        return ret;
      },
      mk_quantifier_const: function (
        c: Z3_context,
        is_forall: boolean,
        weight: unsigned,
        bound: Z3_app[],
        patterns: Z3_pattern[],
        body: Z3_ast
      ): Z3_ast {
        let ret = Mod.ccall(
          'Z3_mk_quantifier_const',
          'number',
          [
            'number',
            'boolean',
            'number',
            'number',
            'array',
            'number',
            'array',
            'number',
          ],
          [
            c,
            is_forall,
            weight,
            bound.length,
            intArrayToByteArr(bound as unknown as number[]),
            patterns.length,
            intArrayToByteArr(patterns as unknown as number[]),
            body,
          ]
        );
        return ret;
      },
      mk_quantifier_const_ex: function (
        c: Z3_context,
        is_forall: boolean,
        weight: unsigned,
        quantifier_id: Z3_symbol,
        skolem_id: Z3_symbol,
        bound: Z3_app[],
        patterns: Z3_pattern[],
        no_patterns: Z3_ast[],
        body: Z3_ast
      ): Z3_ast {
        let ret = Mod.ccall(
          'Z3_mk_quantifier_const_ex',
          'number',
          [
            'number',
            'boolean',
            'number',
            'number',
            'number',
            'number',
            'array',
            'number',
            'array',
            'number',
            'array',
            'number',
          ],
          [
            c,
            is_forall,
            weight,
            quantifier_id,
            skolem_id,
            bound.length,
            intArrayToByteArr(bound as unknown as number[]),
            patterns.length,
            intArrayToByteArr(patterns as unknown as number[]),
            no_patterns.length,
            intArrayToByteArr(no_patterns as unknown as number[]),
            body,
          ]
        );
        return ret;
      },
      mk_lambda: function (
        c: Z3_context,
        sorts: Z3_sort[],
        decl_names: Z3_symbol[],
        body: Z3_ast
      ): Z3_ast {
        if (sorts.length !== decl_names.length) {
          throw new TypeError(
            `sorts and decl_names must be the same length (got ${sorts.length} and {decl_names.length})`
          );
        }
        let ret = Mod.ccall(
          'Z3_mk_lambda',
          'number',
          ['number', 'number', 'array', 'array', 'number'],
          [
            c,
            sorts.length,
            intArrayToByteArr(sorts as unknown as number[]),
            intArrayToByteArr(decl_names as unknown as number[]),
            body,
          ]
        );
        return ret;
      },
      mk_lambda_const: function (
        c: Z3_context,
        bound: Z3_app[],
        body: Z3_ast
      ): Z3_ast {
        let ret = Mod.ccall(
          'Z3_mk_lambda_const',
          'number',
          ['number', 'number', 'array', 'number'],
          [
            c,
            bound.length,
            intArrayToByteArr(bound as unknown as number[]),
            body,
          ]
        );
        return ret;
      },
      get_symbol_kind: Mod._Z3_get_symbol_kind as (
        c: Z3_context,
        s: Z3_symbol
      ) => Z3_symbol_kind,
      get_symbol_int: Mod._Z3_get_symbol_int as (
        c: Z3_context,
        s: Z3_symbol
      ) => int,
      get_symbol_string: function (c: Z3_context, s: Z3_symbol): string {
        let ret = Mod.ccall(
          'Z3_get_symbol_string',
          'string',
          ['number', 'number'],
          [c, s]
        );
        return ret;
      },
      get_sort_name: Mod._Z3_get_sort_name as (
        c: Z3_context,
        d: Z3_sort
      ) => Z3_symbol,
      get_sort_id: Mod._Z3_get_sort_id as (
        c: Z3_context,
        s: Z3_sort
      ) => unsigned,
      sort_to_ast: Mod._Z3_sort_to_ast as (c: Z3_context, s: Z3_sort) => Z3_ast,
      is_eq_sort: function (c: Z3_context, s1: Z3_sort, s2: Z3_sort): boolean {
        let ret = Mod.ccall(
          'Z3_is_eq_sort',
          'boolean',
          ['number', 'number', 'number'],
          [c, s1, s2]
        );
        return ret;
      },
      get_sort_kind: Mod._Z3_get_sort_kind as (
        c: Z3_context,
        t: Z3_sort
      ) => Z3_sort_kind,
      get_bv_sort_size: Mod._Z3_get_bv_sort_size as (
        c: Z3_context,
        t: Z3_sort
      ) => unsigned,
      get_finite_domain_sort_size: function (
        c: Z3_context,
        s: Z3_sort
      ): uint64_t | null {
        let ret = Mod.ccall(
          'Z3_get_finite_domain_sort_size',
          'boolean',
          ['number', 'number', 'number'],
          [c, s, outAddress]
        );
        if (!ret) {
          return null;
        }
        return getOutUint64(0);
      },
      get_array_sort_domain: Mod._Z3_get_array_sort_domain as (
        c: Z3_context,
        t: Z3_sort
      ) => Z3_sort,
      get_array_sort_range: Mod._Z3_get_array_sort_range as (
        c: Z3_context,
        t: Z3_sort
      ) => Z3_sort,
      get_tuple_sort_mk_decl: Mod._Z3_get_tuple_sort_mk_decl as (
        c: Z3_context,
        t: Z3_sort
      ) => Z3_func_decl,
      get_tuple_sort_num_fields: Mod._Z3_get_tuple_sort_num_fields as (
        c: Z3_context,
        t: Z3_sort
      ) => unsigned,
      get_tuple_sort_field_decl: Mod._Z3_get_tuple_sort_field_decl as (
        c: Z3_context,
        t: Z3_sort,
        i: unsigned
      ) => Z3_func_decl,
      get_datatype_sort_num_constructors:
        Mod._Z3_get_datatype_sort_num_constructors as (
          c: Z3_context,
          t: Z3_sort
        ) => unsigned,
      get_datatype_sort_constructor: Mod._Z3_get_datatype_sort_constructor as (
        c: Z3_context,
        t: Z3_sort,
        idx: unsigned
      ) => Z3_func_decl,
      get_datatype_sort_recognizer: Mod._Z3_get_datatype_sort_recognizer as (
        c: Z3_context,
        t: Z3_sort,
        idx: unsigned
      ) => Z3_func_decl,
      get_datatype_sort_constructor_accessor:
        Mod._Z3_get_datatype_sort_constructor_accessor as (
          c: Z3_context,
          t: Z3_sort,
          idx_c: unsigned,
          idx_a: unsigned
        ) => Z3_func_decl,
      datatype_update_field: Mod._Z3_datatype_update_field as (
        c: Z3_context,
        field_access: Z3_func_decl,
        t: Z3_ast,
        value: Z3_ast
      ) => Z3_ast,
      get_relation_arity: Mod._Z3_get_relation_arity as (
        c: Z3_context,
        s: Z3_sort
      ) => unsigned,
      get_relation_column: Mod._Z3_get_relation_column as (
        c: Z3_context,
        s: Z3_sort,
        col: unsigned
      ) => Z3_sort,
      mk_atmost: function (c: Z3_context, args: Z3_ast[], k: unsigned): Z3_ast {
        let ret = Mod.ccall(
          'Z3_mk_atmost',
          'number',
          ['number', 'number', 'array', 'number'],
          [c, args.length, intArrayToByteArr(args as unknown as number[]), k]
        );
        return ret;
      },
      mk_atleast: function (
        c: Z3_context,
        args: Z3_ast[],
        k: unsigned
      ): Z3_ast {
        let ret = Mod.ccall(
          'Z3_mk_atleast',
          'number',
          ['number', 'number', 'array', 'number'],
          [c, args.length, intArrayToByteArr(args as unknown as number[]), k]
        );
        return ret;
      },
      mk_pble: function (
        c: Z3_context,
        args: Z3_ast[],
        coeffs: int[],
        k: int
      ): Z3_ast {
        if (args.length !== coeffs.length) {
          throw new TypeError(
            `args and coeffs must be the same length (got ${args.length} and {coeffs.length})`
          );
        }
        let ret = Mod.ccall(
          'Z3_mk_pble',
          'number',
          ['number', 'number', 'array', 'array', 'number'],
          [
            c,
            args.length,
            intArrayToByteArr(args as unknown as number[]),
            intArrayToByteArr(coeffs as unknown as number[]),
            k,
          ]
        );
        return ret;
      },
      mk_pbge: function (
        c: Z3_context,
        args: Z3_ast[],
        coeffs: int[],
        k: int
      ): Z3_ast {
        if (args.length !== coeffs.length) {
          throw new TypeError(
            `args and coeffs must be the same length (got ${args.length} and {coeffs.length})`
          );
        }
        let ret = Mod.ccall(
          'Z3_mk_pbge',
          'number',
          ['number', 'number', 'array', 'array', 'number'],
          [
            c,
            args.length,
            intArrayToByteArr(args as unknown as number[]),
            intArrayToByteArr(coeffs as unknown as number[]),
            k,
          ]
        );
        return ret;
      },
      mk_pbeq: function (
        c: Z3_context,
        args: Z3_ast[],
        coeffs: int[],
        k: int
      ): Z3_ast {
        if (args.length !== coeffs.length) {
          throw new TypeError(
            `args and coeffs must be the same length (got ${args.length} and {coeffs.length})`
          );
        }
        let ret = Mod.ccall(
          'Z3_mk_pbeq',
          'number',
          ['number', 'number', 'array', 'array', 'number'],
          [
            c,
            args.length,
            intArrayToByteArr(args as unknown as number[]),
            intArrayToByteArr(coeffs as unknown as number[]),
            k,
          ]
        );
        return ret;
      },
      func_decl_to_ast: Mod._Z3_func_decl_to_ast as (
        c: Z3_context,
        f: Z3_func_decl
      ) => Z3_ast,
      is_eq_func_decl: function (
        c: Z3_context,
        f1: Z3_func_decl,
        f2: Z3_func_decl
      ): boolean {
        let ret = Mod.ccall(
          'Z3_is_eq_func_decl',
          'boolean',
          ['number', 'number', 'number'],
          [c, f1, f2]
        );
        return ret;
      },
      get_func_decl_id: Mod._Z3_get_func_decl_id as (
        c: Z3_context,
        f: Z3_func_decl
      ) => unsigned,
      get_decl_name: Mod._Z3_get_decl_name as (
        c: Z3_context,
        d: Z3_func_decl
      ) => Z3_symbol,
      get_decl_kind: Mod._Z3_get_decl_kind as (
        c: Z3_context,
        d: Z3_func_decl
      ) => Z3_decl_kind,
      get_domain_size: Mod._Z3_get_domain_size as (
        c: Z3_context,
        d: Z3_func_decl
      ) => unsigned,
      get_arity: Mod._Z3_get_arity as (
        c: Z3_context,
        d: Z3_func_decl
      ) => unsigned,
      get_domain: Mod._Z3_get_domain as (
        c: Z3_context,
        d: Z3_func_decl,
        i: unsigned
      ) => Z3_sort,
      get_range: Mod._Z3_get_range as (
        c: Z3_context,
        d: Z3_func_decl
      ) => Z3_sort,
      get_decl_num_parameters: Mod._Z3_get_decl_num_parameters as (
        c: Z3_context,
        d: Z3_func_decl
      ) => unsigned,
      get_decl_parameter_kind: Mod._Z3_get_decl_parameter_kind as (
        c: Z3_context,
        d: Z3_func_decl,
        idx: unsigned
      ) => Z3_parameter_kind,
      get_decl_int_parameter: Mod._Z3_get_decl_int_parameter as (
        c: Z3_context,
        d: Z3_func_decl,
        idx: unsigned
      ) => int,
      get_decl_double_parameter: Mod._Z3_get_decl_double_parameter as (
        c: Z3_context,
        d: Z3_func_decl,
        idx: unsigned
      ) => double,
      get_decl_symbol_parameter: Mod._Z3_get_decl_symbol_parameter as (
        c: Z3_context,
        d: Z3_func_decl,
        idx: unsigned
      ) => Z3_symbol,
      get_decl_sort_parameter: Mod._Z3_get_decl_sort_parameter as (
        c: Z3_context,
        d: Z3_func_decl,
        idx: unsigned
      ) => Z3_sort,
      get_decl_ast_parameter: Mod._Z3_get_decl_ast_parameter as (
        c: Z3_context,
        d: Z3_func_decl,
        idx: unsigned
      ) => Z3_ast,
      get_decl_func_decl_parameter: Mod._Z3_get_decl_func_decl_parameter as (
        c: Z3_context,
        d: Z3_func_decl,
        idx: unsigned
      ) => Z3_func_decl,
      get_decl_rational_parameter: function (
        c: Z3_context,
        d: Z3_func_decl,
        idx: unsigned
      ): string {
        let ret = Mod.ccall(
          'Z3_get_decl_rational_parameter',
          'string',
          ['number', 'number', 'number'],
          [c, d, idx]
        );
        return ret;
      },
      app_to_ast: Mod._Z3_app_to_ast as (c: Z3_context, a: Z3_app) => Z3_ast,
      get_app_decl: Mod._Z3_get_app_decl as (
        c: Z3_context,
        a: Z3_app
      ) => Z3_func_decl,
      get_app_num_args: Mod._Z3_get_app_num_args as (
        c: Z3_context,
        a: Z3_app
      ) => unsigned,
      get_app_arg: Mod._Z3_get_app_arg as (
        c: Z3_context,
        a: Z3_app,
        i: unsigned
      ) => Z3_ast,
      is_eq_ast: function (c: Z3_context, t1: Z3_ast, t2: Z3_ast): boolean {
        let ret = Mod.ccall(
          'Z3_is_eq_ast',
          'boolean',
          ['number', 'number', 'number'],
          [c, t1, t2]
        );
        return ret;
      },
      get_ast_id: Mod._Z3_get_ast_id as (c: Z3_context, t: Z3_ast) => unsigned,
      get_ast_hash: Mod._Z3_get_ast_hash as (
        c: Z3_context,
        a: Z3_ast
      ) => unsigned,
      get_sort: Mod._Z3_get_sort as (c: Z3_context, a: Z3_ast) => Z3_sort,
      is_well_sorted: function (c: Z3_context, t: Z3_ast): boolean {
        let ret = Mod.ccall(
          'Z3_is_well_sorted',
          'boolean',
          ['number', 'number'],
          [c, t]
        );
        return ret;
      },
      get_bool_value: Mod._Z3_get_bool_value as (
        c: Z3_context,
        a: Z3_ast
      ) => Z3_lbool,
      get_ast_kind: Mod._Z3_get_ast_kind as (
        c: Z3_context,
        a: Z3_ast
      ) => Z3_ast_kind,
      is_app: function (c: Z3_context, a: Z3_ast): boolean {
        let ret = Mod.ccall(
          'Z3_is_app',
          'boolean',
          ['number', 'number'],
          [c, a]
        );
        return ret;
      },
      is_numeral_ast: function (c: Z3_context, a: Z3_ast): boolean {
        let ret = Mod.ccall(
          'Z3_is_numeral_ast',
          'boolean',
          ['number', 'number'],
          [c, a]
        );
        return ret;
      },
      is_algebraic_number: function (c: Z3_context, a: Z3_ast): boolean {
        let ret = Mod.ccall(
          'Z3_is_algebraic_number',
          'boolean',
          ['number', 'number'],
          [c, a]
        );
        return ret;
      },
      to_app: Mod._Z3_to_app as (c: Z3_context, a: Z3_ast) => Z3_app,
      to_func_decl: Mod._Z3_to_func_decl as (
        c: Z3_context,
        a: Z3_ast
      ) => Z3_func_decl,
      get_numeral_string: function (c: Z3_context, a: Z3_ast): string {
        let ret = Mod.ccall(
          'Z3_get_numeral_string',
          'string',
          ['number', 'number'],
          [c, a]
        );
        return ret;
      },
      get_numeral_binary_string: function (c: Z3_context, a: Z3_ast): string {
        let ret = Mod.ccall(
          'Z3_get_numeral_binary_string',
          'string',
          ['number', 'number'],
          [c, a]
        );
        return ret;
      },
      get_numeral_decimal_string: function (
        c: Z3_context,
        a: Z3_ast,
        precision: unsigned
      ): string {
        let ret = Mod.ccall(
          'Z3_get_numeral_decimal_string',
          'string',
          ['number', 'number', 'number'],
          [c, a, precision]
        );
        return ret;
      },
      get_numeral_double: Mod._Z3_get_numeral_double as (
        c: Z3_context,
        a: Z3_ast
      ) => double,
      get_numerator: Mod._Z3_get_numerator as (
        c: Z3_context,
        a: Z3_ast
      ) => Z3_ast,
      get_denominator: Mod._Z3_get_denominator as (
        c: Z3_context,
        a: Z3_ast
      ) => Z3_ast,
      get_numeral_small: function (
        c: Z3_context,
        a: Z3_ast
      ): { num: int64_t; den: int64_t } | null {
        let ret = Mod.ccall(
          'Z3_get_numeral_small',
          'boolean',
          ['number', 'number', 'number', 'number'],
          [c, a, outAddress, outAddress + 8]
        );
        if (!ret) {
          return null;
        }
        return { num: getOutInt64(0), den: getOutInt64(1) };
      },
      get_numeral_int: function (c: Z3_context, v: Z3_ast): int | null {
        let ret = Mod.ccall(
          'Z3_get_numeral_int',
          'boolean',
          ['number', 'number', 'number'],
          [c, v, outAddress]
        );
        if (!ret) {
          return null;
        }
        return getOutInt(0);
      },
      get_numeral_uint: function (c: Z3_context, v: Z3_ast): unsigned | null {
        let ret = Mod.ccall(
          'Z3_get_numeral_uint',
          'boolean',
          ['number', 'number', 'number'],
          [c, v, outAddress]
        );
        if (!ret) {
          return null;
        }
        return getOutUint(0);
      },
      get_numeral_uint64: function (c: Z3_context, v: Z3_ast): uint64_t | null {
        let ret = Mod.ccall(
          'Z3_get_numeral_uint64',
          'boolean',
          ['number', 'number', 'number'],
          [c, v, outAddress]
        );
        if (!ret) {
          return null;
        }
        return getOutUint64(0);
      },
      get_numeral_int64: function (c: Z3_context, v: Z3_ast): int64_t | null {
        let ret = Mod.ccall(
          'Z3_get_numeral_int64',
          'boolean',
          ['number', 'number', 'number'],
          [c, v, outAddress]
        );
        if (!ret) {
          return null;
        }
        return getOutInt64(0);
      },
      get_numeral_rational_int64: function (
        c: Z3_context,
        v: Z3_ast
      ): { num: int64_t; den: int64_t } | null {
        let ret = Mod.ccall(
          'Z3_get_numeral_rational_int64',
          'boolean',
          ['number', 'number', 'number', 'number'],
          [c, v, outAddress, outAddress + 8]
        );
        if (!ret) {
          return null;
        }
        return { num: getOutInt64(0), den: getOutInt64(1) };
      },
      get_algebraic_number_lower: Mod._Z3_get_algebraic_number_lower as (
        c: Z3_context,
        a: Z3_ast,
        precision: unsigned
      ) => Z3_ast,
      get_algebraic_number_upper: Mod._Z3_get_algebraic_number_upper as (
        c: Z3_context,
        a: Z3_ast,
        precision: unsigned
      ) => Z3_ast,
      pattern_to_ast: Mod._Z3_pattern_to_ast as (
        c: Z3_context,
        p: Z3_pattern
      ) => Z3_ast,
      get_pattern_num_terms: Mod._Z3_get_pattern_num_terms as (
        c: Z3_context,
        p: Z3_pattern
      ) => unsigned,
      get_pattern: Mod._Z3_get_pattern as (
        c: Z3_context,
        p: Z3_pattern,
        idx: unsigned
      ) => Z3_ast,
      get_index_value: Mod._Z3_get_index_value as (
        c: Z3_context,
        a: Z3_ast
      ) => unsigned,
      is_quantifier_forall: function (c: Z3_context, a: Z3_ast): boolean {
        let ret = Mod.ccall(
          'Z3_is_quantifier_forall',
          'boolean',
          ['number', 'number'],
          [c, a]
        );
        return ret;
      },
      is_quantifier_exists: function (c: Z3_context, a: Z3_ast): boolean {
        let ret = Mod.ccall(
          'Z3_is_quantifier_exists',
          'boolean',
          ['number', 'number'],
          [c, a]
        );
        return ret;
      },
      is_lambda: function (c: Z3_context, a: Z3_ast): boolean {
        let ret = Mod.ccall(
          'Z3_is_lambda',
          'boolean',
          ['number', 'number'],
          [c, a]
        );
        return ret;
      },
      get_quantifier_weight: Mod._Z3_get_quantifier_weight as (
        c: Z3_context,
        a: Z3_ast
      ) => unsigned,
      get_quantifier_num_patterns: Mod._Z3_get_quantifier_num_patterns as (
        c: Z3_context,
        a: Z3_ast
      ) => unsigned,
      get_quantifier_pattern_ast: Mod._Z3_get_quantifier_pattern_ast as (
        c: Z3_context,
        a: Z3_ast,
        i: unsigned
      ) => Z3_pattern,
      get_quantifier_num_no_patterns:
        Mod._Z3_get_quantifier_num_no_patterns as (
          c: Z3_context,
          a: Z3_ast
        ) => unsigned,
      get_quantifier_no_pattern_ast: Mod._Z3_get_quantifier_no_pattern_ast as (
        c: Z3_context,
        a: Z3_ast,
        i: unsigned
      ) => Z3_ast,
      get_quantifier_num_bound: Mod._Z3_get_quantifier_num_bound as (
        c: Z3_context,
        a: Z3_ast
      ) => unsigned,
      get_quantifier_bound_name: Mod._Z3_get_quantifier_bound_name as (
        c: Z3_context,
        a: Z3_ast,
        i: unsigned
      ) => Z3_symbol,
      get_quantifier_bound_sort: Mod._Z3_get_quantifier_bound_sort as (
        c: Z3_context,
        a: Z3_ast,
        i: unsigned
      ) => Z3_sort,
      get_quantifier_body: Mod._Z3_get_quantifier_body as (
        c: Z3_context,
        a: Z3_ast
      ) => Z3_ast,
      simplify: Mod._Z3_simplify as (c: Z3_context, a: Z3_ast) => Z3_ast,
      simplify_ex: Mod._Z3_simplify_ex as (
        c: Z3_context,
        a: Z3_ast,
        p: Z3_params
      ) => Z3_ast,
      simplify_get_help: function (c: Z3_context): string {
        let ret = Mod.ccall('Z3_simplify_get_help', 'string', ['number'], [c]);
        return ret;
      },
      simplify_get_param_descrs: Mod._Z3_simplify_get_param_descrs as (
        c: Z3_context
      ) => Z3_param_descrs,
      update_term: function (c: Z3_context, a: Z3_ast, args: Z3_ast[]): Z3_ast {
        let ret = Mod.ccall(
          'Z3_update_term',
          'number',
          ['number', 'number', 'number', 'array'],
          [c, a, args.length, intArrayToByteArr(args as unknown as number[])]
        );
        return ret;
      },
      substitute: function (
        c: Z3_context,
        a: Z3_ast,
        from: Z3_ast[],
        to: Z3_ast[]
      ): Z3_ast {
        if (from.length !== to.length) {
          throw new TypeError(
            `from and to must be the same length (got ${from.length} and {to.length})`
          );
        }
        let ret = Mod.ccall(
          'Z3_substitute',
          'number',
          ['number', 'number', 'number', 'array', 'array'],
          [
            c,
            a,
            from.length,
            intArrayToByteArr(from as unknown as number[]),
            intArrayToByteArr(to as unknown as number[]),
          ]
        );
        return ret;
      },
      substitute_vars: function (
        c: Z3_context,
        a: Z3_ast,
        to: Z3_ast[]
      ): Z3_ast {
        let ret = Mod.ccall(
          'Z3_substitute_vars',
          'number',
          ['number', 'number', 'number', 'array'],
          [c, a, to.length, intArrayToByteArr(to as unknown as number[])]
        );
        return ret;
      },
      translate: Mod._Z3_translate as (
        source: Z3_context,
        a: Z3_ast,
        target: Z3_context
      ) => Z3_ast,
      mk_model: Mod._Z3_mk_model as (c: Z3_context) => Z3_model,
      model_inc_ref: Mod._Z3_model_inc_ref as (
        c: Z3_context,
        m: Z3_model
      ) => void,
      model_dec_ref: Mod._Z3_model_dec_ref as (
        c: Z3_context,
        m: Z3_model
      ) => void,
      model_eval: function (
        c: Z3_context,
        m: Z3_model,
        t: Z3_ast,
        model_completion: boolean
      ): Z3_ast | null {
        let ret = Mod.ccall(
          'Z3_model_eval',
          'boolean',
          ['number', 'number', 'number', 'boolean', 'number'],
          [c, m, t, model_completion, outAddress]
        );
        if (!ret) {
          return null;
        }
        return getOutUint(0) as unknown as Z3_ast;
      },
      model_get_const_interp: function (
        c: Z3_context,
        m: Z3_model,
        a: Z3_func_decl
      ): Z3_ast | null {
        let ret = Mod.ccall(
          'Z3_model_get_const_interp',
          'number',
          ['number', 'number', 'number'],
          [c, m, a]
        );
        if (ret === 0) {
          return null;
        }
        return ret;
      },
      model_has_interp: function (
        c: Z3_context,
        m: Z3_model,
        a: Z3_func_decl
      ): boolean {
        let ret = Mod.ccall(
          'Z3_model_has_interp',
          'boolean',
          ['number', 'number', 'number'],
          [c, m, a]
        );
        return ret;
      },
      model_get_func_interp: function (
        c: Z3_context,
        m: Z3_model,
        f: Z3_func_decl
      ): Z3_func_interp | null {
        let ret = Mod.ccall(
          'Z3_model_get_func_interp',
          'number',
          ['number', 'number', 'number'],
          [c, m, f]
        );
        if (ret === 0) {
          return null;
        }
        return ret;
      },
      model_get_num_consts: Mod._Z3_model_get_num_consts as (
        c: Z3_context,
        m: Z3_model
      ) => unsigned,
      model_get_const_decl: Mod._Z3_model_get_const_decl as (
        c: Z3_context,
        m: Z3_model,
        i: unsigned
      ) => Z3_func_decl,
      model_get_num_funcs: Mod._Z3_model_get_num_funcs as (
        c: Z3_context,
        m: Z3_model
      ) => unsigned,
      model_get_func_decl: Mod._Z3_model_get_func_decl as (
        c: Z3_context,
        m: Z3_model,
        i: unsigned
      ) => Z3_func_decl,
      model_get_num_sorts: Mod._Z3_model_get_num_sorts as (
        c: Z3_context,
        m: Z3_model
      ) => unsigned,
      model_get_sort: Mod._Z3_model_get_sort as (
        c: Z3_context,
        m: Z3_model,
        i: unsigned
      ) => Z3_sort,
      model_get_sort_universe: Mod._Z3_model_get_sort_universe as (
        c: Z3_context,
        m: Z3_model,
        s: Z3_sort
      ) => Z3_ast_vector,
      model_translate: Mod._Z3_model_translate as (
        c: Z3_context,
        m: Z3_model,
        dst: Z3_context
      ) => Z3_model,
      is_as_array: function (c: Z3_context, a: Z3_ast): boolean {
        let ret = Mod.ccall(
          'Z3_is_as_array',
          'boolean',
          ['number', 'number'],
          [c, a]
        );
        return ret;
      },
      get_as_array_func_decl: Mod._Z3_get_as_array_func_decl as (
        c: Z3_context,
        a: Z3_ast
      ) => Z3_func_decl,
      add_func_interp: Mod._Z3_add_func_interp as (
        c: Z3_context,
        m: Z3_model,
        f: Z3_func_decl,
        default_value: Z3_ast
      ) => Z3_func_interp,
      add_const_interp: Mod._Z3_add_const_interp as (
        c: Z3_context,
        m: Z3_model,
        f: Z3_func_decl,
        a: Z3_ast
      ) => void,
      func_interp_inc_ref: Mod._Z3_func_interp_inc_ref as (
        c: Z3_context,
        f: Z3_func_interp
      ) => void,
      func_interp_dec_ref: Mod._Z3_func_interp_dec_ref as (
        c: Z3_context,
        f: Z3_func_interp
      ) => void,
      func_interp_get_num_entries: Mod._Z3_func_interp_get_num_entries as (
        c: Z3_context,
        f: Z3_func_interp
      ) => unsigned,
      func_interp_get_entry: Mod._Z3_func_interp_get_entry as (
        c: Z3_context,
        f: Z3_func_interp,
        i: unsigned
      ) => Z3_func_entry,
      func_interp_get_else: Mod._Z3_func_interp_get_else as (
        c: Z3_context,
        f: Z3_func_interp
      ) => Z3_ast,
      func_interp_set_else: Mod._Z3_func_interp_set_else as (
        c: Z3_context,
        f: Z3_func_interp,
        else_value: Z3_ast
      ) => void,
      func_interp_get_arity: Mod._Z3_func_interp_get_arity as (
        c: Z3_context,
        f: Z3_func_interp
      ) => unsigned,
      func_interp_add_entry: Mod._Z3_func_interp_add_entry as (
        c: Z3_context,
        fi: Z3_func_interp,
        args: Z3_ast_vector,
        value: Z3_ast
      ) => void,
      func_entry_inc_ref: Mod._Z3_func_entry_inc_ref as (
        c: Z3_context,
        e: Z3_func_entry
      ) => void,
      func_entry_dec_ref: Mod._Z3_func_entry_dec_ref as (
        c: Z3_context,
        e: Z3_func_entry
      ) => void,
      func_entry_get_value: Mod._Z3_func_entry_get_value as (
        c: Z3_context,
        e: Z3_func_entry
      ) => Z3_ast,
      func_entry_get_num_args: Mod._Z3_func_entry_get_num_args as (
        c: Z3_context,
        e: Z3_func_entry
      ) => unsigned,
      func_entry_get_arg: Mod._Z3_func_entry_get_arg as (
        c: Z3_context,
        e: Z3_func_entry,
        i: unsigned
      ) => Z3_ast,
      open_log: function (filename: string): boolean {
        let ret = Mod.ccall('Z3_open_log', 'boolean', ['string'], [filename]);
        return ret;
      },
      append_log: function (string: string): void {
        let ret = Mod.ccall('Z3_append_log', 'void', ['string'], [string]);
        return ret;
      },
      close_log: Mod._Z3_close_log as () => void,
      toggle_warning_messages: Mod._Z3_toggle_warning_messages as (
        enabled: boolean
      ) => void,
      set_ast_print_mode: Mod._Z3_set_ast_print_mode as (
        c: Z3_context,
        mode: Z3_ast_print_mode
      ) => void,
      ast_to_string: function (c: Z3_context, a: Z3_ast): string {
        let ret = Mod.ccall(
          'Z3_ast_to_string',
          'string',
          ['number', 'number'],
          [c, a]
        );
        return ret;
      },
      pattern_to_string: function (c: Z3_context, p: Z3_pattern): string {
        let ret = Mod.ccall(
          'Z3_pattern_to_string',
          'string',
          ['number', 'number'],
          [c, p]
        );
        return ret;
      },
      sort_to_string: function (c: Z3_context, s: Z3_sort): string {
        let ret = Mod.ccall(
          'Z3_sort_to_string',
          'string',
          ['number', 'number'],
          [c, s]
        );
        return ret;
      },
      func_decl_to_string: function (c: Z3_context, d: Z3_func_decl): string {
        let ret = Mod.ccall(
          'Z3_func_decl_to_string',
          'string',
          ['number', 'number'],
          [c, d]
        );
        return ret;
      },
      model_to_string: function (c: Z3_context, m: Z3_model): string {
        let ret = Mod.ccall(
          'Z3_model_to_string',
          'string',
          ['number', 'number'],
          [c, m]
        );
        return ret;
      },
      benchmark_to_smtlib_string: function (
        c: Z3_context,
        name: string,
        logic: string,
        status: string,
        attributes: string,
        assumptions: Z3_ast[],
        formula: Z3_ast
      ): string {
        let ret = Mod.ccall(
          'Z3_benchmark_to_smtlib_string',
          'string',
          [
            'number',
            'string',
            'string',
            'string',
            'string',
            'number',
            'array',
            'number',
          ],
          [
            c,
            name,
            logic,
            status,
            attributes,
            assumptions.length,
            intArrayToByteArr(assumptions as unknown as number[]),
            formula,
          ]
        );
        return ret;
      },
      parse_smtlib2_string: function (
        c: Z3_context,
        str: string,
        sort_names: Z3_symbol[],
        sorts: Z3_sort[],
        decl_names: Z3_symbol[],
        decls: Z3_func_decl[]
      ): Z3_ast_vector {
        if (sort_names.length !== sorts.length) {
          throw new TypeError(
            `sort_names and sorts must be the same length (got ${sort_names.length} and {sorts.length})`
          );
        }
        if (decl_names.length !== decls.length) {
          throw new TypeError(
            `decl_names and decls must be the same length (got ${decl_names.length} and {decls.length})`
          );
        }
        let ret = Mod.ccall(
          'Z3_parse_smtlib2_string',
          'number',
          [
            'number',
            'string',
            'number',
            'array',
            'array',
            'number',
            'array',
            'array',
          ],
          [
            c,
            str,
            sort_names.length,
            intArrayToByteArr(sort_names as unknown as number[]),
            intArrayToByteArr(sorts as unknown as number[]),
            decl_names.length,
            intArrayToByteArr(decl_names as unknown as number[]),
            intArrayToByteArr(decls as unknown as number[]),
          ]
        );
        return ret;
      },
      parse_smtlib2_file: function (
        c: Z3_context,
        file_name: string,
        sort_names: Z3_symbol[],
        sorts: Z3_sort[],
        decl_names: Z3_symbol[],
        decls: Z3_func_decl[]
      ): Z3_ast_vector {
        if (sort_names.length !== sorts.length) {
          throw new TypeError(
            `sort_names and sorts must be the same length (got ${sort_names.length} and {sorts.length})`
          );
        }
        if (decl_names.length !== decls.length) {
          throw new TypeError(
            `decl_names and decls must be the same length (got ${decl_names.length} and {decls.length})`
          );
        }
        let ret = Mod.ccall(
          'Z3_parse_smtlib2_file',
          'number',
          [
            'number',
            'string',
            'number',
            'array',
            'array',
            'number',
            'array',
            'array',
          ],
          [
            c,
            file_name,
            sort_names.length,
            intArrayToByteArr(sort_names as unknown as number[]),
            intArrayToByteArr(sorts as unknown as number[]),
            decl_names.length,
            intArrayToByteArr(decl_names as unknown as number[]),
            intArrayToByteArr(decls as unknown as number[]),
          ]
        );
        return ret;
      },
      eval_smtlib2_string: function (UNNAMED: Z3_context, str: string): string {
        let ret = Mod.ccall(
          'Z3_eval_smtlib2_string',
          'string',
          ['number', 'string'],
          [UNNAMED, str]
        );
        return ret;
      },
      get_error_code: Mod._Z3_get_error_code as (
        c: Z3_context
      ) => Z3_error_code,
      set_error: Mod._Z3_set_error as (c: Z3_context, e: Z3_error_code) => void,
      get_error_msg: function (c: Z3_context, err: Z3_error_code): string {
        let ret = Mod.ccall(
          'Z3_get_error_msg',
          'string',
          ['number', 'number'],
          [c, err]
        );
        return ret;
      },
      get_version: function (): {
        major: unsigned;
        minor: unsigned;
        build_number: unsigned;
        revision_number: unsigned;
      } {
        let ret = Mod.ccall(
          'Z3_get_version',
          'void',
          ['number', 'number', 'number', 'number'],
          [outAddress, outAddress + 4, outAddress + 8, outAddress + 12]
        );
        return {
          major: getOutUint(0),
          minor: getOutUint(1),
          build_number: getOutUint(2),
          revision_number: getOutUint(3),
        };
      },
      get_full_version: function (): string {
        let ret = Mod.ccall('Z3_get_full_version', 'string', [], []);
        return ret;
      },
      enable_trace: function (tag: string): void {
        let ret = Mod.ccall('Z3_enable_trace', 'void', ['string'], [tag]);
        return ret;
      },
      disable_trace: function (tag: string): void {
        let ret = Mod.ccall('Z3_disable_trace', 'void', ['string'], [tag]);
        return ret;
      },
      reset_memory: Mod._Z3_reset_memory as () => void,
      finalize_memory: Mod._Z3_finalize_memory as () => void,
      mk_goal: Mod._Z3_mk_goal as (
        c: Z3_context,
        models: boolean,
        unsat_cores: boolean,
        proofs: boolean
      ) => Z3_goal,
      goal_inc_ref: Mod._Z3_goal_inc_ref as (c: Z3_context, g: Z3_goal) => void,
      goal_dec_ref: Mod._Z3_goal_dec_ref as (c: Z3_context, g: Z3_goal) => void,
      goal_precision: Mod._Z3_goal_precision as (
        c: Z3_context,
        g: Z3_goal
      ) => Z3_goal_prec,
      goal_assert: Mod._Z3_goal_assert as (
        c: Z3_context,
        g: Z3_goal,
        a: Z3_ast
      ) => void,
      goal_inconsistent: function (c: Z3_context, g: Z3_goal): boolean {
        let ret = Mod.ccall(
          'Z3_goal_inconsistent',
          'boolean',
          ['number', 'number'],
          [c, g]
        );
        return ret;
      },
      goal_depth: Mod._Z3_goal_depth as (c: Z3_context, g: Z3_goal) => unsigned,
      goal_reset: Mod._Z3_goal_reset as (c: Z3_context, g: Z3_goal) => void,
      goal_size: Mod._Z3_goal_size as (c: Z3_context, g: Z3_goal) => unsigned,
      goal_formula: Mod._Z3_goal_formula as (
        c: Z3_context,
        g: Z3_goal,
        idx: unsigned
      ) => Z3_ast,
      goal_num_exprs: Mod._Z3_goal_num_exprs as (
        c: Z3_context,
        g: Z3_goal
      ) => unsigned,
      goal_is_decided_sat: function (c: Z3_context, g: Z3_goal): boolean {
        let ret = Mod.ccall(
          'Z3_goal_is_decided_sat',
          'boolean',
          ['number', 'number'],
          [c, g]
        );
        return ret;
      },
      goal_is_decided_unsat: function (c: Z3_context, g: Z3_goal): boolean {
        let ret = Mod.ccall(
          'Z3_goal_is_decided_unsat',
          'boolean',
          ['number', 'number'],
          [c, g]
        );
        return ret;
      },
      goal_translate: Mod._Z3_goal_translate as (
        source: Z3_context,
        g: Z3_goal,
        target: Z3_context
      ) => Z3_goal,
      goal_convert_model: Mod._Z3_goal_convert_model as (
        c: Z3_context,
        g: Z3_goal,
        m: Z3_model
      ) => Z3_model,
      goal_to_string: function (c: Z3_context, g: Z3_goal): string {
        let ret = Mod.ccall(
          'Z3_goal_to_string',
          'string',
          ['number', 'number'],
          [c, g]
        );
        return ret;
      },
      goal_to_dimacs_string: function (
        c: Z3_context,
        g: Z3_goal,
        include_names: boolean
      ): string {
        let ret = Mod.ccall(
          'Z3_goal_to_dimacs_string',
          'string',
          ['number', 'number', 'boolean'],
          [c, g, include_names]
        );
        return ret;
      },
      mk_tactic: function (c: Z3_context, name: string): Z3_tactic {
        let ret = Mod.ccall(
          'Z3_mk_tactic',
          'number',
          ['number', 'string'],
          [c, name]
        );
        return ret;
      },
      tactic_inc_ref: Mod._Z3_tactic_inc_ref as (
        c: Z3_context,
        t: Z3_tactic
      ) => void,
      tactic_dec_ref: Mod._Z3_tactic_dec_ref as (
        c: Z3_context,
        g: Z3_tactic
      ) => void,
      mk_probe: function (c: Z3_context, name: string): Z3_probe {
        let ret = Mod.ccall(
          'Z3_mk_probe',
          'number',
          ['number', 'string'],
          [c, name]
        );
        return ret;
      },
      probe_inc_ref: Mod._Z3_probe_inc_ref as (
        c: Z3_context,
        p: Z3_probe
      ) => void,
      probe_dec_ref: Mod._Z3_probe_dec_ref as (
        c: Z3_context,
        p: Z3_probe
      ) => void,
      tactic_and_then: Mod._Z3_tactic_and_then as (
        c: Z3_context,
        t1: Z3_tactic,
        t2: Z3_tactic
      ) => Z3_tactic,
      tactic_or_else: Mod._Z3_tactic_or_else as (
        c: Z3_context,
        t1: Z3_tactic,
        t2: Z3_tactic
      ) => Z3_tactic,
      tactic_par_or: function (c: Z3_context, ts: Z3_tactic[]): Z3_tactic {
        let ret = Mod.ccall(
          'Z3_tactic_par_or',
          'number',
          ['number', 'number', 'array'],
          [c, ts.length, intArrayToByteArr(ts as unknown as number[])]
        );
        return ret;
      },
      tactic_par_and_then: Mod._Z3_tactic_par_and_then as (
        c: Z3_context,
        t1: Z3_tactic,
        t2: Z3_tactic
      ) => Z3_tactic,
      tactic_try_for: Mod._Z3_tactic_try_for as (
        c: Z3_context,
        t: Z3_tactic,
        ms: unsigned
      ) => Z3_tactic,
      tactic_when: Mod._Z3_tactic_when as (
        c: Z3_context,
        p: Z3_probe,
        t: Z3_tactic
      ) => Z3_tactic,
      tactic_cond: Mod._Z3_tactic_cond as (
        c: Z3_context,
        p: Z3_probe,
        t1: Z3_tactic,
        t2: Z3_tactic
      ) => Z3_tactic,
      tactic_repeat: Mod._Z3_tactic_repeat as (
        c: Z3_context,
        t: Z3_tactic,
        max: unsigned
      ) => Z3_tactic,
      tactic_skip: Mod._Z3_tactic_skip as (c: Z3_context) => Z3_tactic,
      tactic_fail: Mod._Z3_tactic_fail as (c: Z3_context) => Z3_tactic,
      tactic_fail_if: Mod._Z3_tactic_fail_if as (
        c: Z3_context,
        p: Z3_probe
      ) => Z3_tactic,
      tactic_fail_if_not_decided: Mod._Z3_tactic_fail_if_not_decided as (
        c: Z3_context
      ) => Z3_tactic,
      tactic_using_params: Mod._Z3_tactic_using_params as (
        c: Z3_context,
        t: Z3_tactic,
        p: Z3_params
      ) => Z3_tactic,
      probe_const: Mod._Z3_probe_const as (
        x: Z3_context,
        val: double
      ) => Z3_probe,
      probe_lt: Mod._Z3_probe_lt as (
        x: Z3_context,
        p1: Z3_probe,
        p2: Z3_probe
      ) => Z3_probe,
      probe_gt: Mod._Z3_probe_gt as (
        x: Z3_context,
        p1: Z3_probe,
        p2: Z3_probe
      ) => Z3_probe,
      probe_le: Mod._Z3_probe_le as (
        x: Z3_context,
        p1: Z3_probe,
        p2: Z3_probe
      ) => Z3_probe,
      probe_ge: Mod._Z3_probe_ge as (
        x: Z3_context,
        p1: Z3_probe,
        p2: Z3_probe
      ) => Z3_probe,
      probe_eq: Mod._Z3_probe_eq as (
        x: Z3_context,
        p1: Z3_probe,
        p2: Z3_probe
      ) => Z3_probe,
      probe_and: Mod._Z3_probe_and as (
        x: Z3_context,
        p1: Z3_probe,
        p2: Z3_probe
      ) => Z3_probe,
      probe_or: Mod._Z3_probe_or as (
        x: Z3_context,
        p1: Z3_probe,
        p2: Z3_probe
      ) => Z3_probe,
      probe_not: Mod._Z3_probe_not as (x: Z3_context, p: Z3_probe) => Z3_probe,
      get_num_tactics: Mod._Z3_get_num_tactics as (c: Z3_context) => unsigned,
      get_tactic_name: function (c: Z3_context, i: unsigned): string {
        let ret = Mod.ccall(
          'Z3_get_tactic_name',
          'string',
          ['number', 'number'],
          [c, i]
        );
        return ret;
      },
      get_num_probes: Mod._Z3_get_num_probes as (c: Z3_context) => unsigned,
      get_probe_name: function (c: Z3_context, i: unsigned): string {
        let ret = Mod.ccall(
          'Z3_get_probe_name',
          'string',
          ['number', 'number'],
          [c, i]
        );
        return ret;
      },
      tactic_get_help: function (c: Z3_context, t: Z3_tactic): string {
        let ret = Mod.ccall(
          'Z3_tactic_get_help',
          'string',
          ['number', 'number'],
          [c, t]
        );
        return ret;
      },
      tactic_get_param_descrs: Mod._Z3_tactic_get_param_descrs as (
        c: Z3_context,
        t: Z3_tactic
      ) => Z3_param_descrs,
      tactic_get_descr: function (c: Z3_context, name: string): string {
        let ret = Mod.ccall(
          'Z3_tactic_get_descr',
          'string',
          ['number', 'string'],
          [c, name]
        );
        return ret;
      },
      probe_get_descr: function (c: Z3_context, name: string): string {
        let ret = Mod.ccall(
          'Z3_probe_get_descr',
          'string',
          ['number', 'string'],
          [c, name]
        );
        return ret;
      },
      probe_apply: Mod._Z3_probe_apply as (
        c: Z3_context,
        p: Z3_probe,
        g: Z3_goal
      ) => double,
      tactic_apply: Mod._Z3_tactic_apply as (
        c: Z3_context,
        t: Z3_tactic,
        g: Z3_goal
      ) => Z3_apply_result,
      tactic_apply_ex: Mod._Z3_tactic_apply_ex as (
        c: Z3_context,
        t: Z3_tactic,
        g: Z3_goal,
        p: Z3_params
      ) => Z3_apply_result,
      apply_result_inc_ref: Mod._Z3_apply_result_inc_ref as (
        c: Z3_context,
        r: Z3_apply_result
      ) => void,
      apply_result_dec_ref: Mod._Z3_apply_result_dec_ref as (
        c: Z3_context,
        r: Z3_apply_result
      ) => void,
      apply_result_to_string: function (
        c: Z3_context,
        r: Z3_apply_result
      ): string {
        let ret = Mod.ccall(
          'Z3_apply_result_to_string',
          'string',
          ['number', 'number'],
          [c, r]
        );
        return ret;
      },
      apply_result_get_num_subgoals: Mod._Z3_apply_result_get_num_subgoals as (
        c: Z3_context,
        r: Z3_apply_result
      ) => unsigned,
      apply_result_get_subgoal: Mod._Z3_apply_result_get_subgoal as (
        c: Z3_context,
        r: Z3_apply_result,
        i: unsigned
      ) => Z3_goal,
      mk_solver: Mod._Z3_mk_solver as (c: Z3_context) => Z3_solver,
      mk_simple_solver: Mod._Z3_mk_simple_solver as (
        c: Z3_context
      ) => Z3_solver,
      mk_solver_for_logic: Mod._Z3_mk_solver_for_logic as (
        c: Z3_context,
        logic: Z3_symbol
      ) => Z3_solver,
      mk_solver_from_tactic: Mod._Z3_mk_solver_from_tactic as (
        c: Z3_context,
        t: Z3_tactic
      ) => Z3_solver,
      solver_translate: Mod._Z3_solver_translate as (
        source: Z3_context,
        s: Z3_solver,
        target: Z3_context
      ) => Z3_solver,
      solver_import_model_converter: Mod._Z3_solver_import_model_converter as (
        ctx: Z3_context,
        src: Z3_solver,
        dst: Z3_solver
      ) => void,
      solver_get_help: function (c: Z3_context, s: Z3_solver): string {
        let ret = Mod.ccall(
          'Z3_solver_get_help',
          'string',
          ['number', 'number'],
          [c, s]
        );
        return ret;
      },
      solver_get_param_descrs: Mod._Z3_solver_get_param_descrs as (
        c: Z3_context,
        s: Z3_solver
      ) => Z3_param_descrs,
      solver_set_params: Mod._Z3_solver_set_params as (
        c: Z3_context,
        s: Z3_solver,
        p: Z3_params
      ) => void,
      solver_inc_ref: Mod._Z3_solver_inc_ref as (
        c: Z3_context,
        s: Z3_solver
      ) => void,
      solver_dec_ref: Mod._Z3_solver_dec_ref as (
        c: Z3_context,
        s: Z3_solver
      ) => void,
      solver_interrupt: Mod._Z3_solver_interrupt as (
        c: Z3_context,
        s: Z3_solver
      ) => void,
      solver_push: Mod._Z3_solver_push as (c: Z3_context, s: Z3_solver) => void,
      solver_pop: Mod._Z3_solver_pop as (
        c: Z3_context,
        s: Z3_solver,
        n: unsigned
      ) => void,
      solver_reset: Mod._Z3_solver_reset as (
        c: Z3_context,
        s: Z3_solver
      ) => void,
      solver_get_num_scopes: Mod._Z3_solver_get_num_scopes as (
        c: Z3_context,
        s: Z3_solver
      ) => unsigned,
      solver_assert: Mod._Z3_solver_assert as (
        c: Z3_context,
        s: Z3_solver,
        a: Z3_ast
      ) => void,
      solver_assert_and_track: Mod._Z3_solver_assert_and_track as (
        c: Z3_context,
        s: Z3_solver,
        a: Z3_ast,
        p: Z3_ast
      ) => void,
      solver_from_file: function (
        c: Z3_context,
        s: Z3_solver,
        file_name: string
      ): void {
        let ret = Mod.ccall(
          'Z3_solver_from_file',
          'void',
          ['number', 'number', 'string'],
          [c, s, file_name]
        );
        return ret;
      },
      solver_from_string: function (
        c: Z3_context,
        s: Z3_solver,
        file_name: string
      ): void {
        let ret = Mod.ccall(
          'Z3_solver_from_string',
          'void',
          ['number', 'number', 'string'],
          [c, s, file_name]
        );
        return ret;
      },
      solver_get_assertions: Mod._Z3_solver_get_assertions as (
        c: Z3_context,
        s: Z3_solver
      ) => Z3_ast_vector,
      solver_get_units: Mod._Z3_solver_get_units as (
        c: Z3_context,
        s: Z3_solver
      ) => Z3_ast_vector,
      solver_get_trail: Mod._Z3_solver_get_trail as (
        c: Z3_context,
        s: Z3_solver
      ) => Z3_ast_vector,
      solver_get_non_units: Mod._Z3_solver_get_non_units as (
        c: Z3_context,
        s: Z3_solver
      ) => Z3_ast_vector,
      solver_get_levels: function (
        c: Z3_context,
        s: Z3_solver,
        literals: Z3_ast_vector,
        levels: unsigned[]
      ): void {
        let ret = Mod.ccall(
          'Z3_solver_get_levels',
          'void',
          ['number', 'number', 'number', 'number', 'array'],
          [
            c,
            s,
            literals,
            levels.length,
            intArrayToByteArr(levels as unknown as number[]),
          ]
        );
        return ret;
      },
      solver_propagate_declare: function (
        c: Z3_context,
        name: Z3_symbol,
        domain: Z3_sort[],
        range: Z3_sort
      ): Z3_func_decl {
        let ret = Mod.ccall(
          'Z3_solver_propagate_declare',
          'number',
          ['number', 'number', 'number', 'array', 'number'],
          [
            c,
            name,
            domain.length,
            intArrayToByteArr(domain as unknown as number[]),
            range,
          ]
        );
        return ret;
      },
      solver_propagate_register: Mod._Z3_solver_propagate_register as (
        c: Z3_context,
        s: Z3_solver,
        e: Z3_ast
      ) => unsigned,
      solver_propagate_register_cb: Mod._Z3_solver_propagate_register_cb as (
        c: Z3_context,
        cb: Z3_solver_callback,
        e: Z3_ast
      ) => unsigned,
      solver_propagate_consequence: function (
        c: Z3_context,
        UNNAMED: Z3_solver_callback,
        fixed_ids: unsigned[],
        eq_lhs: unsigned[],
        eq_rhs: unsigned[],
        conseq: Z3_ast
      ): void {
        if (eq_lhs.length !== eq_rhs.length) {
          throw new TypeError(
            `eq_lhs and eq_rhs must be the same length (got ${eq_lhs.length} and {eq_rhs.length})`
          );
        }
        let ret = Mod.ccall(
          'Z3_solver_propagate_consequence',
          'void',
          [
            'number',
            'number',
            'number',
            'array',
            'number',
            'array',
            'array',
            'number',
          ],
          [
            c,
            UNNAMED,
            fixed_ids.length,
            intArrayToByteArr(fixed_ids as unknown as number[]),
            eq_lhs.length,
            intArrayToByteArr(eq_lhs as unknown as number[]),
            intArrayToByteArr(eq_rhs as unknown as number[]),
            conseq,
          ]
        );
        return ret;
      },
      solver_check: function (c: Z3_context, s: Z3_solver): Promise<Z3_lbool> {
        return Mod.async_call(Mod._async_Z3_solver_check, c, s);
      },
      solver_check_assumptions: function (
        c: Z3_context,
        s: Z3_solver,
        assumptions: Z3_ast[]
      ): Z3_lbool {
        let ret = Mod.ccall(
          'Z3_solver_check_assumptions',
          'number',
          ['number', 'number', 'number', 'array'],
          [
            c,
            s,
            assumptions.length,
            intArrayToByteArr(assumptions as unknown as number[]),
          ]
        );
        return ret;
      },
      get_implied_equalities: function (
        c: Z3_context,
        s: Z3_solver,
        terms: Z3_ast[]
      ): { rv: Z3_lbool; class_ids: unsigned[] } {
        let outArray_class_ids = Mod._malloc(4 * terms.length);
        try {
          let ret = Mod.ccall(
            'Z3_get_implied_equalities',
            'number',
            ['number', 'number', 'number', 'array', 'number'],
            [
              c,
              s,
              terms.length,
              intArrayToByteArr(terms as unknown as number[]),
              outArray_class_ids,
            ]
          );
          return {
            rv: ret,
            class_ids: readUintArray(outArray_class_ids, terms.length),
          };
        } finally {
          Mod._free(outArray_class_ids);
        }
      },
      solver_get_consequences: Mod._Z3_solver_get_consequences as (
        c: Z3_context,
        s: Z3_solver,
        assumptions: Z3_ast_vector,
        variables: Z3_ast_vector,
        consequences: Z3_ast_vector
      ) => Z3_lbool,
      solver_cube: Mod._Z3_solver_cube as (
        c: Z3_context,
        s: Z3_solver,
        vars: Z3_ast_vector,
        backtrack_level: unsigned
      ) => Z3_ast_vector,
      solver_get_model: Mod._Z3_solver_get_model as (
        c: Z3_context,
        s: Z3_solver
      ) => Z3_model,
      solver_get_proof: Mod._Z3_solver_get_proof as (
        c: Z3_context,
        s: Z3_solver
      ) => Z3_ast,
      solver_get_unsat_core: Mod._Z3_solver_get_unsat_core as (
        c: Z3_context,
        s: Z3_solver
      ) => Z3_ast_vector,
      solver_get_reason_unknown: function (
        c: Z3_context,
        s: Z3_solver
      ): string {
        let ret = Mod.ccall(
          'Z3_solver_get_reason_unknown',
          'string',
          ['number', 'number'],
          [c, s]
        );
        return ret;
      },
      solver_get_statistics: Mod._Z3_solver_get_statistics as (
        c: Z3_context,
        s: Z3_solver
      ) => Z3_stats,
      solver_to_string: function (c: Z3_context, s: Z3_solver): string {
        let ret = Mod.ccall(
          'Z3_solver_to_string',
          'string',
          ['number', 'number'],
          [c, s]
        );
        return ret;
      },
      solver_to_dimacs_string: function (
        c: Z3_context,
        s: Z3_solver,
        include_names: boolean
      ): string {
        let ret = Mod.ccall(
          'Z3_solver_to_dimacs_string',
          'string',
          ['number', 'number', 'boolean'],
          [c, s, include_names]
        );
        return ret;
      },
      stats_to_string: function (c: Z3_context, s: Z3_stats): string {
        let ret = Mod.ccall(
          'Z3_stats_to_string',
          'string',
          ['number', 'number'],
          [c, s]
        );
        return ret;
      },
      stats_inc_ref: Mod._Z3_stats_inc_ref as (
        c: Z3_context,
        s: Z3_stats
      ) => void,
      stats_dec_ref: Mod._Z3_stats_dec_ref as (
        c: Z3_context,
        s: Z3_stats
      ) => void,
      stats_size: Mod._Z3_stats_size as (
        c: Z3_context,
        s: Z3_stats
      ) => unsigned,
      stats_get_key: function (
        c: Z3_context,
        s: Z3_stats,
        idx: unsigned
      ): string {
        let ret = Mod.ccall(
          'Z3_stats_get_key',
          'string',
          ['number', 'number', 'number'],
          [c, s, idx]
        );
        return ret;
      },
      stats_is_uint: function (
        c: Z3_context,
        s: Z3_stats,
        idx: unsigned
      ): boolean {
        let ret = Mod.ccall(
          'Z3_stats_is_uint',
          'boolean',
          ['number', 'number', 'number'],
          [c, s, idx]
        );
        return ret;
      },
      stats_is_double: function (
        c: Z3_context,
        s: Z3_stats,
        idx: unsigned
      ): boolean {
        let ret = Mod.ccall(
          'Z3_stats_is_double',
          'boolean',
          ['number', 'number', 'number'],
          [c, s, idx]
        );
        return ret;
      },
      stats_get_uint_value: Mod._Z3_stats_get_uint_value as (
        c: Z3_context,
        s: Z3_stats,
        idx: unsigned
      ) => unsigned,
      stats_get_double_value: Mod._Z3_stats_get_double_value as (
        c: Z3_context,
        s: Z3_stats,
        idx: unsigned
      ) => double,
      get_estimated_alloc_size:
        Mod._Z3_get_estimated_alloc_size as () => uint64_t,
      algebraic_is_value: function (c: Z3_context, a: Z3_ast): boolean {
        let ret = Mod.ccall(
          'Z3_algebraic_is_value',
          'boolean',
          ['number', 'number'],
          [c, a]
        );
        return ret;
      },
      algebraic_is_pos: function (c: Z3_context, a: Z3_ast): boolean {
        let ret = Mod.ccall(
          'Z3_algebraic_is_pos',
          'boolean',
          ['number', 'number'],
          [c, a]
        );
        return ret;
      },
      algebraic_is_neg: function (c: Z3_context, a: Z3_ast): boolean {
        let ret = Mod.ccall(
          'Z3_algebraic_is_neg',
          'boolean',
          ['number', 'number'],
          [c, a]
        );
        return ret;
      },
      algebraic_is_zero: function (c: Z3_context, a: Z3_ast): boolean {
        let ret = Mod.ccall(
          'Z3_algebraic_is_zero',
          'boolean',
          ['number', 'number'],
          [c, a]
        );
        return ret;
      },
      algebraic_sign: Mod._Z3_algebraic_sign as (
        c: Z3_context,
        a: Z3_ast
      ) => int,
      algebraic_add: Mod._Z3_algebraic_add as (
        c: Z3_context,
        a: Z3_ast,
        b: Z3_ast
      ) => Z3_ast,
      algebraic_sub: Mod._Z3_algebraic_sub as (
        c: Z3_context,
        a: Z3_ast,
        b: Z3_ast
      ) => Z3_ast,
      algebraic_mul: Mod._Z3_algebraic_mul as (
        c: Z3_context,
        a: Z3_ast,
        b: Z3_ast
      ) => Z3_ast,
      algebraic_div: Mod._Z3_algebraic_div as (
        c: Z3_context,
        a: Z3_ast,
        b: Z3_ast
      ) => Z3_ast,
      algebraic_root: Mod._Z3_algebraic_root as (
        c: Z3_context,
        a: Z3_ast,
        k: unsigned
      ) => Z3_ast,
      algebraic_power: Mod._Z3_algebraic_power as (
        c: Z3_context,
        a: Z3_ast,
        k: unsigned
      ) => Z3_ast,
      algebraic_lt: function (c: Z3_context, a: Z3_ast, b: Z3_ast): boolean {
        let ret = Mod.ccall(
          'Z3_algebraic_lt',
          'boolean',
          ['number', 'number', 'number'],
          [c, a, b]
        );
        return ret;
      },
      algebraic_gt: function (c: Z3_context, a: Z3_ast, b: Z3_ast): boolean {
        let ret = Mod.ccall(
          'Z3_algebraic_gt',
          'boolean',
          ['number', 'number', 'number'],
          [c, a, b]
        );
        return ret;
      },
      algebraic_le: function (c: Z3_context, a: Z3_ast, b: Z3_ast): boolean {
        let ret = Mod.ccall(
          'Z3_algebraic_le',
          'boolean',
          ['number', 'number', 'number'],
          [c, a, b]
        );
        return ret;
      },
      algebraic_ge: function (c: Z3_context, a: Z3_ast, b: Z3_ast): boolean {
        let ret = Mod.ccall(
          'Z3_algebraic_ge',
          'boolean',
          ['number', 'number', 'number'],
          [c, a, b]
        );
        return ret;
      },
      algebraic_eq: function (c: Z3_context, a: Z3_ast, b: Z3_ast): boolean {
        let ret = Mod.ccall(
          'Z3_algebraic_eq',
          'boolean',
          ['number', 'number', 'number'],
          [c, a, b]
        );
        return ret;
      },
      algebraic_neq: function (c: Z3_context, a: Z3_ast, b: Z3_ast): boolean {
        let ret = Mod.ccall(
          'Z3_algebraic_neq',
          'boolean',
          ['number', 'number', 'number'],
          [c, a, b]
        );
        return ret;
      },
      algebraic_roots: function (
        c: Z3_context,
        p: Z3_ast,
        a: Z3_ast[]
      ): Z3_ast_vector {
        let ret = Mod.ccall(
          'Z3_algebraic_roots',
          'number',
          ['number', 'number', 'number', 'array'],
          [c, p, a.length, intArrayToByteArr(a as unknown as number[])]
        );
        return ret;
      },
      algebraic_eval: function (c: Z3_context, p: Z3_ast, a: Z3_ast[]): int {
        let ret = Mod.ccall(
          'Z3_algebraic_eval',
          'number',
          ['number', 'number', 'number', 'array'],
          [c, p, a.length, intArrayToByteArr(a as unknown as number[])]
        );
        return ret;
      },
      algebraic_get_poly: Mod._Z3_algebraic_get_poly as (
        c: Z3_context,
        a: Z3_ast
      ) => Z3_ast_vector,
      algebraic_get_i: Mod._Z3_algebraic_get_i as (
        c: Z3_context,
        a: Z3_ast
      ) => unsigned,
      mk_ast_vector: Mod._Z3_mk_ast_vector as (c: Z3_context) => Z3_ast_vector,
      ast_vector_inc_ref: Mod._Z3_ast_vector_inc_ref as (
        c: Z3_context,
        v: Z3_ast_vector
      ) => void,
      ast_vector_dec_ref: Mod._Z3_ast_vector_dec_ref as (
        c: Z3_context,
        v: Z3_ast_vector
      ) => void,
      ast_vector_size: Mod._Z3_ast_vector_size as (
        c: Z3_context,
        v: Z3_ast_vector
      ) => unsigned,
      ast_vector_get: Mod._Z3_ast_vector_get as (
        c: Z3_context,
        v: Z3_ast_vector,
        i: unsigned
      ) => Z3_ast,
      ast_vector_set: Mod._Z3_ast_vector_set as (
        c: Z3_context,
        v: Z3_ast_vector,
        i: unsigned,
        a: Z3_ast
      ) => void,
      ast_vector_resize: Mod._Z3_ast_vector_resize as (
        c: Z3_context,
        v: Z3_ast_vector,
        n: unsigned
      ) => void,
      ast_vector_push: Mod._Z3_ast_vector_push as (
        c: Z3_context,
        v: Z3_ast_vector,
        a: Z3_ast
      ) => void,
      ast_vector_translate: Mod._Z3_ast_vector_translate as (
        s: Z3_context,
        v: Z3_ast_vector,
        t: Z3_context
      ) => Z3_ast_vector,
      ast_vector_to_string: function (c: Z3_context, v: Z3_ast_vector): string {
        let ret = Mod.ccall(
          'Z3_ast_vector_to_string',
          'string',
          ['number', 'number'],
          [c, v]
        );
        return ret;
      },
      mk_ast_map: Mod._Z3_mk_ast_map as (c: Z3_context) => Z3_ast_map,
      ast_map_inc_ref: Mod._Z3_ast_map_inc_ref as (
        c: Z3_context,
        m: Z3_ast_map
      ) => void,
      ast_map_dec_ref: Mod._Z3_ast_map_dec_ref as (
        c: Z3_context,
        m: Z3_ast_map
      ) => void,
      ast_map_contains: function (
        c: Z3_context,
        m: Z3_ast_map,
        k: Z3_ast
      ): boolean {
        let ret = Mod.ccall(
          'Z3_ast_map_contains',
          'boolean',
          ['number', 'number', 'number'],
          [c, m, k]
        );
        return ret;
      },
      ast_map_find: Mod._Z3_ast_map_find as (
        c: Z3_context,
        m: Z3_ast_map,
        k: Z3_ast
      ) => Z3_ast,
      ast_map_insert: Mod._Z3_ast_map_insert as (
        c: Z3_context,
        m: Z3_ast_map,
        k: Z3_ast,
        v: Z3_ast
      ) => void,
      ast_map_erase: Mod._Z3_ast_map_erase as (
        c: Z3_context,
        m: Z3_ast_map,
        k: Z3_ast
      ) => void,
      ast_map_reset: Mod._Z3_ast_map_reset as (
        c: Z3_context,
        m: Z3_ast_map
      ) => void,
      ast_map_size: Mod._Z3_ast_map_size as (
        c: Z3_context,
        m: Z3_ast_map
      ) => unsigned,
      ast_map_keys: Mod._Z3_ast_map_keys as (
        c: Z3_context,
        m: Z3_ast_map
      ) => Z3_ast_vector,
      ast_map_to_string: function (c: Z3_context, m: Z3_ast_map): string {
        let ret = Mod.ccall(
          'Z3_ast_map_to_string',
          'string',
          ['number', 'number'],
          [c, m]
        );
        return ret;
      },
      mk_fixedpoint: Mod._Z3_mk_fixedpoint as (c: Z3_context) => Z3_fixedpoint,
      fixedpoint_inc_ref: Mod._Z3_fixedpoint_inc_ref as (
        c: Z3_context,
        d: Z3_fixedpoint
      ) => void,
      fixedpoint_dec_ref: Mod._Z3_fixedpoint_dec_ref as (
        c: Z3_context,
        d: Z3_fixedpoint
      ) => void,
      fixedpoint_add_rule: Mod._Z3_fixedpoint_add_rule as (
        c: Z3_context,
        d: Z3_fixedpoint,
        rule: Z3_ast,
        name: Z3_symbol
      ) => void,
      fixedpoint_add_fact: function (
        c: Z3_context,
        d: Z3_fixedpoint,
        r: Z3_func_decl,
        args: unsigned[]
      ): void {
        let ret = Mod.ccall(
          'Z3_fixedpoint_add_fact',
          'void',
          ['number', 'number', 'number', 'number', 'array'],
          [c, d, r, args.length, intArrayToByteArr(args as unknown as number[])]
        );
        return ret;
      },
      fixedpoint_assert: Mod._Z3_fixedpoint_assert as (
        c: Z3_context,
        d: Z3_fixedpoint,
        axiom: Z3_ast
      ) => void,
      fixedpoint_query: Mod._Z3_fixedpoint_query as (
        c: Z3_context,
        d: Z3_fixedpoint,
        query: Z3_ast
      ) => Z3_lbool,
      fixedpoint_query_relations: function (
        c: Z3_context,
        d: Z3_fixedpoint,
        relations: Z3_func_decl[]
      ): Z3_lbool {
        let ret = Mod.ccall(
          'Z3_fixedpoint_query_relations',
          'number',
          ['number', 'number', 'number', 'array'],
          [
            c,
            d,
            relations.length,
            intArrayToByteArr(relations as unknown as number[]),
          ]
        );
        return ret;
      },
      fixedpoint_get_answer: Mod._Z3_fixedpoint_get_answer as (
        c: Z3_context,
        d: Z3_fixedpoint
      ) => Z3_ast,
      fixedpoint_get_reason_unknown: function (
        c: Z3_context,
        d: Z3_fixedpoint
      ): string {
        let ret = Mod.ccall(
          'Z3_fixedpoint_get_reason_unknown',
          'string',
          ['number', 'number'],
          [c, d]
        );
        return ret;
      },
      fixedpoint_update_rule: Mod._Z3_fixedpoint_update_rule as (
        c: Z3_context,
        d: Z3_fixedpoint,
        a: Z3_ast,
        name: Z3_symbol
      ) => void,
      fixedpoint_get_num_levels: Mod._Z3_fixedpoint_get_num_levels as (
        c: Z3_context,
        d: Z3_fixedpoint,
        pred: Z3_func_decl
      ) => unsigned,
      fixedpoint_get_cover_delta: Mod._Z3_fixedpoint_get_cover_delta as (
        c: Z3_context,
        d: Z3_fixedpoint,
        level: int,
        pred: Z3_func_decl
      ) => Z3_ast,
      fixedpoint_add_cover: Mod._Z3_fixedpoint_add_cover as (
        c: Z3_context,
        d: Z3_fixedpoint,
        level: int,
        pred: Z3_func_decl,
        property: Z3_ast
      ) => void,
      fixedpoint_get_statistics: Mod._Z3_fixedpoint_get_statistics as (
        c: Z3_context,
        d: Z3_fixedpoint
      ) => Z3_stats,
      fixedpoint_register_relation: Mod._Z3_fixedpoint_register_relation as (
        c: Z3_context,
        d: Z3_fixedpoint,
        f: Z3_func_decl
      ) => void,
      fixedpoint_set_predicate_representation: function (
        c: Z3_context,
        d: Z3_fixedpoint,
        f: Z3_func_decl,
        relation_kinds: Z3_symbol[]
      ): void {
        let ret = Mod.ccall(
          'Z3_fixedpoint_set_predicate_representation',
          'void',
          ['number', 'number', 'number', 'number', 'array'],
          [
            c,
            d,
            f,
            relation_kinds.length,
            intArrayToByteArr(relation_kinds as unknown as number[]),
          ]
        );
        return ret;
      },
      fixedpoint_get_rules: Mod._Z3_fixedpoint_get_rules as (
        c: Z3_context,
        f: Z3_fixedpoint
      ) => Z3_ast_vector,
      fixedpoint_get_assertions: Mod._Z3_fixedpoint_get_assertions as (
        c: Z3_context,
        f: Z3_fixedpoint
      ) => Z3_ast_vector,
      fixedpoint_set_params: Mod._Z3_fixedpoint_set_params as (
        c: Z3_context,
        f: Z3_fixedpoint,
        p: Z3_params
      ) => void,
      fixedpoint_get_help: function (c: Z3_context, f: Z3_fixedpoint): string {
        let ret = Mod.ccall(
          'Z3_fixedpoint_get_help',
          'string',
          ['number', 'number'],
          [c, f]
        );
        return ret;
      },
      fixedpoint_get_param_descrs: Mod._Z3_fixedpoint_get_param_descrs as (
        c: Z3_context,
        f: Z3_fixedpoint
      ) => Z3_param_descrs,
      fixedpoint_to_string: function (
        c: Z3_context,
        f: Z3_fixedpoint,
        queries: Z3_ast[]
      ): string {
        let ret = Mod.ccall(
          'Z3_fixedpoint_to_string',
          'string',
          ['number', 'number', 'number', 'array'],
          [
            c,
            f,
            queries.length,
            intArrayToByteArr(queries as unknown as number[]),
          ]
        );
        return ret;
      },
      fixedpoint_from_string: function (
        c: Z3_context,
        f: Z3_fixedpoint,
        s: string
      ): Z3_ast_vector {
        let ret = Mod.ccall(
          'Z3_fixedpoint_from_string',
          'number',
          ['number', 'number', 'string'],
          [c, f, s]
        );
        return ret;
      },
      fixedpoint_from_file: function (
        c: Z3_context,
        f: Z3_fixedpoint,
        s: string
      ): Z3_ast_vector {
        let ret = Mod.ccall(
          'Z3_fixedpoint_from_file',
          'number',
          ['number', 'number', 'string'],
          [c, f, s]
        );
        return ret;
      },
    },
  };
}

