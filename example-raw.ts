import { init } from './build/lib';

// demonstrates use of the raw API

(async () => {
  let { em, rawZ3: Z3 } = await init();

  console.log(Z3.global_param_get('verbose'));

  let config = Z3.mk_config();
  let context = Z3.mk_context_rc(config);
  Z3.del_config(config);

  let strAst = Z3.mk_u32string(context, [...'hello™'].map(x => x.codePointAt(0)!));
  Z3.inc_ref(context, strAst);

  console.log(Z3.is_string(context, strAst));
  console.log(Z3.get_string(context, strAst));


  Z3.dec_ref(context, strAst);
  Z3.del_context(context);

  em.PThread.terminateAllThreads();

})().catch(e => {
  console.error('error', e);
  process.exit(1);
});
