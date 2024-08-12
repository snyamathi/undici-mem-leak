import { setImmediate } from "node:timers/promises";
import { AsyncLocalStorage } from "node:async_hooks";

const { UNDICI_VERSION = "6.19.7" } = process.env;
const { Response } = await import(`undici-${UNDICI_VERSION}`);
const asyncLocalStorage = new AsyncLocalStorage();

const res = new Response("hello world");
const format = (bytes) => Math.round(bytes / 1024 ** 2) + "MB";

for (let i = 0; ; ++i) {
  if (i % 100 === 0) {
    console.log(i, format(process.memoryUsage().heapUsed));
  }

  asyncLocalStorage.run(new Map(), async () => {
    const clone = res.clone();
    asyncLocalStorage.getStore().set("key", clone);
    await clone.text(); // consume body
  });

  await setImmediate(); // allow gc
}
