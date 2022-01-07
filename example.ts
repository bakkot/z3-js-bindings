import { init } from './build/lib';

(async () => {
  let mod = await init();
  console.log(mod);
})().catch(e => {
  console.error(e);
  process.exit(1);
});
