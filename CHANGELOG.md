# Change Log

### version 1.3.2
* Update analytics library
* Update lodash version - security advisory https://www.npmjs.com/advisories/1523

### version 1.3.0
* Support `ADB_SERVER_SOCKET`, `ANDROID_ADB_SERVER_ADDRESS` & `ANDROID_ADB_SERVER_PORT` env vars when connecting to ADB.
* Replace `adbPort` configuration option with a new `adbSocket` value to allow ADB server host to be overidden. (`adbPort` is now deprecated).
* Allow the JDWP local port to be fixed using a new `jdwpPort` configuration option.

### version 1.2.1
* Java Intellisense: automatically import dependencies of AndroidX libraries.
* Debugger: Warn about open instances of Android Studio

### version 1.2.0
* Java Intellisense beta.

### version 1.1.0
* App launch arguments overriden in a new `amStartArgs` launch configuration property.
* A new "attach" launch configuration allows the debugger to attach to running processes.
* A "${command:PickAndroidDevice}" value allows a deployment device to be chosen during each launch
* Watch and repl expressions now support format specifiers
* Small bug fixes and performance improvements

### version 1.0.0
* Update extension to support minimum version of node v10
* refactoring and improvement of type-checking using jsdocs

### version 0.8.0
* Try to extract Android manifest directly from APK
* Added `manifestFile` launch configuration property
* Allow `pm install` arguments to be customised as a launch configuration property
* Document `launchActivity` launch configuration property
* Fix critical security advisory https://www.npmjs.com/advisories/1118

### version 0.7.1
* Added the [Buy Me A Coffee](https://www.buymeacoffee.com/adelphes) link to the README

### version 0.7.0
* Fix logcat not displaying
* Fix breakpoints not triggering on Windows
* Added kotlin folder to list of known source locations
* Upgraded dependencies to resolve a number of security vulnerabilites
* Updated README with info about prelaunch build task
* Added MIT license file

### version 0.6.2
* Fix broken logcat command due to missing dependency

### version 0.6.1
* Regenerate package-lock.json to remove event-stream vulnerability - https://github.com/dominictarr/event-stream/issues/116

### version 0.6.0
* Fix issue with breakpoints not enabling correctly
* Fix issue with JDWP failure on breakpoint hit
* Added support for diagnostic logs using trace configuration option
* Updated default apkFile path to match current releases of Android Studio
* Updated package dependencies

### version 0.5.0
* Debugger support for Kotlin source files
* Exception UI
* Fixed some console display issues

### version 0.4.1
* One day I will learn to update the changelog **before** I hit publish
* Updated changelog

### version 0.4.0
* Debugger performance improvements
* Fixed exception details not being displayed in locals
* Fixed some logcat display issues

### version 0.3.1
* Bug fixes
* Fix issue with exception breaks crashing debugger
* Fix issue with Android sources not displaying in VSCode 1.9

## version 0.3.0
* Support for Logcat filtering using regular expressions
* Improved expression parsing with support for arithmetic, bitwise, logical and relational operators
* Multi-threaded debugging support (experimental)
* Hit count breakpoints
* Android source breakpoints
* Automatic adb server start
* Bug fixes

## version 0.2.0
* Support for Logcat viewing [ Command Palette -> Android: View Logcat ]
* Support for modifying local variables, object fields and array elements (literal values only)
* Break on exceptions
* Support for stepping through Android sources (using ANDROID_HOME location)
* Bug fixes

## version 0.1.0
Initial release  
* Support for deploying, launching and debugging Apps via ADB
* Single step debugging (step in, step over, step out)
* Local variable evaluation
* Simple watch expressions
* Breakpoints
* Large array chunking (performance)
* Stale build detection
