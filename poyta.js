var five = require("johnny-five");
var common = require('./common');
var board = require('./board');

board.on("ready", function() {

    var boardLed = new five.Led({
        pin: 13
    });

    var poyta = new five.Pin({
        pin: 11
    });

    console.log('writing high');
    poyta.high();
    poyta.query(function(state) {
        console.log(state);
    });

    (function loop() {
        setTimeout(function() {
            //console.log('writing low');
            //poyta.low();
            boardLed.toggle();


            loop();
        }, 1000);
    })();
});