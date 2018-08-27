# Deprecated
## Use [chrisguttandin/worker-timers](https://github.com/chrisguttandin/worker-timers) instead
Use monkey-patching to replace default `window.setInterval`, `window.clearInterval`, `window.setTimeout`, `window.clearTimeout`.

```js
import * as workerTimers from 'worker-timers';
window.setInterval = workerTimers.setInterval;
window.clearInterval = workerTimers.clearInterval;
window.setTimeout = workerTimers.setTimeout;
window.clearTimeout = workerTimers.clearTimeout;
```
