var five = require("johnny-five");
var common = require('./common');
var board = require('./board');

board.on("ready", function() {

    console.log('ready');
    // Create a new `ping` hardware instance.
    var ping = new five.Ping(7);

    // Properties

    // ping.microseconds
    //
    // Roundtrip distance in microseconds
    //

    // ping.inches
    //
    // Calculated distance to object in inches
    //

    // ping.cm
    //
    // Calculated distance to object in centimeters
    //

    // Ping Event API

    // "data" get the current reading from the ping
    ping.on("data", function(err, value) {
        //console.log("data", value);
    });

    ping.on("change", function(err, value) {
        console.log("Joku siäl on {0} sentin pääs".format(this.cm));
    });
});
