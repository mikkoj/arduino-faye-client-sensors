var five = require('johnny-five');
var board = require('./board');
var common = require('./common');
var faye = require('faye');
var fayeClient = new faye.Client('http://nortal-faye-server.azurewebsites.net/faye');


board.on("ready", function() {

    var led = new five.Led(common.ShieldPort.O0);

    fayeClient.subscribe('/commands', function(message) {
        console.log(message);
        if (message.target === 'led') {
            if (message.data === 'on') {
                led.on();
            } else {
                led.off();
            }
        }
    });

    var linearPot = new five.Sensor({
        pin: common.ShieldPort.I5,
        freq: 500
    });

    linearPot.scale(0, 100).on('data', function() {
        var rawAnalogData = this.value;
        console.log('read: ' + rawAnalogData);
        fayeClient.publish('/sensors', {
            sensor: 'linearPot',
            rawAnalogData: rawAnalogData
        });
    });
});