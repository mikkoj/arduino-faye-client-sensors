Arduino Yún sensors - faye pub/sub in the cloud - browser-client
---

This repository contains code for reading sensor data from Arduino Yún with [johnny-five](https://github.com/rwaldron/johnny-five/),
and publishing it to a [Faye](http://faye.jcoglan.com/)-server in the cloud.


Run by connecting through a COM port (see **board.js** for settings)

    node ledAndPotInTheCloud.js
Run on Atheros OpenWrt on the Yun:

    node ledAndPotInTheCloud.js yun

Also see other repositories related to this one:

- [arduino-faye-server] (https://github.com/mikkoj/arduino-faye-server) - A pub/sub server for relaying messages between Arduino and other clients. 
- [arduino-faye-client-browser] (https://github.com/mikkoj/arduino-faye-client-browser) - A client that subscribes to sensor data from Faye-server in the cloud.
