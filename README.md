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
