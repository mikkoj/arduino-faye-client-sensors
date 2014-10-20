var five = require("johnny-five");
var common = require('./common');
var board = require('./board');

var Ledi = function(pin, initialRate) {
    var self = this;
    self.led = new five.Led(pin);
    self.rate = initialRate;

    (function loop() {
        setTimeout(function() {
            self.led.toggle();
            loop();
        }, self.rate);
    })();
};

board.on("ready", function() {
    var initialRate = 500;
    var led1 = new Ledi(13, initialRate);
});
