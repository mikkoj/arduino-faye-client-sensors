var five = require("johnny-five");
var common = require('./common');
var board = require('./board');

board.on("ready", function() {
    var temperatureSensor = new five.Sensor({
        pin: common.ShieldPort.I2,
        freq: 500
    });

    temperatureSensor.on("change", function() {
        var temp = common.thermistorValueToCelsius(this.value);
        temp = common.roundNumber(temp, 4);
        console.log(temp + "°C");
    });
});