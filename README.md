# HackTimer
Avoid timers throttling by browser when tab is inactive

# Usage:
Place script reference to **HackTimer.js** (or HackTimer.min.js) before any other JavaScript.
This includes library's such as jQuery as otherwise timed events such as fadeOut and fadeIn will break.

# NPM
Command: `npm install hacktimer`

Latest version is 1.1.0

Registry URL: https://www.myget.org/F/hack-timer/npm

# Bower
Command: `bower install hacktimer`

Latest version is 1.1.0

Registry: https://www.myget.org/F/hack-timer/bower/

You can specify bower registry in file `.bowerrc` in your working directory
```json
{
  "registry": {
      "search": [
          "https://www.myget.org/F/hack-timer/bower/",
          "https://bower.herokuapp.com"
      ]
  }
}
```

# Notes
Loader code **HackTimer.js** (or HackTimer.min.js) may be placed in separate file or in script tag.

Worker code **HackTimerWorker.js** (or HackTimerWorker.min.js) must be placed in separate file. It is used to fallback if Blob is not supported

To **change** worker code **script name** or path go to the end of **HackTimer.js** (or HackTimer.min.js) file and replace script name.

**HackTimer.silent.min.js** writes to log only if initialisation failed. Use it with **HackTimerWorker.min.js** .

# Warning
Full code (HackTimer.js and HackTimerWorker.js) must not be used with minified (HackTimer.min.js and HackTimerWorker.min.js), i.e. **HackTimer.js** must use **only HackTimerWorker.js** and **HackTimer.min.js** must use **only HackTimerWorker.min.js** .
