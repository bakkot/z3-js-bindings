import { init } from './build/lib';

// demonstrates use of the raw API

(async () => {
  let { em, rawZ3 } = await init();

  console.log(rawZ3.global_param_get('verbose'));

  em.PThread.terminateAllThreads();

})().catch(e => {
  console.error('error', e);
  process.exit(1);
});
