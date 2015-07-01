# HackTimer
Avoid timers throttling by browser when tab is inactive

# Usage:
Place script reference to HackTimer.js (or HackTimer.min.js) before any other JavaScript

# Notes
Loader code HackTimer.js (or HackTimer.min.js) may be placed in separate file or in script tag.
Worker code HackTimerWorker.js (or HackTimerWorker.min.js) must be placed in separate file.
To change worker code script name go to the end of HackTimer.js (or HackTimer.min.js) file and replace script name.

# Warning
Full code (HackTimer.js and HackTimerWorker.js) must not be used with minified (HackTimer.min.js and HackTimerWorker.min.js), i.e. HackTimer.js must use only HackTimerWorker.js and HackTimer.min.js must only use HackTimerWorker.min.js .
