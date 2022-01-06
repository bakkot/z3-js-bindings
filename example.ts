import { init } from './build/wrapper';

(async () => {
  let mod = await init();
  console.log(mod);
})().catch(e => {
  console.error(e);
  process.exit(1);
});
