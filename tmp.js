'use strict';
let mod = require('./build/lib.js');

(async () => {
  let Z = await mod.init();

  Z.Z3.global_param_set('verbose', '10');

  let c = new Z.Context();
  let solver = Z.Z3.mk_solver(c.ref());
  Z.Z3.solver_inc_ref(c.ref(), solver);

  let s = Z.Z3.solver_from_string(c.ref(), solver, `(declare-fun c_4_0 () Int)
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
  
  console.log('starting...');
  let ret = await Z.Z3.solver_check(c, solver);
  console.log(ret);


  // console.log(Z3.solver_check(c, solver));
  console.log(s);
})().catch(e => {console.error(e); process.exit(1);});