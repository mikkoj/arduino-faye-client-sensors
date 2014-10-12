var five = require('johnny-five');
var board = require('./board');
var common = require('./common');

board.on("ready", function() {

    var lightSensor = new five.Sensor({
        pin: common.ShieldPort.I0,
        freq: 700
    });

    lightSensor.on('change', function() {
        var brightness = Math.round(((this.value / 1023.00) * 100) * 100 / 100);
        console.log("brightness: " + brightness + "%");
    });
});