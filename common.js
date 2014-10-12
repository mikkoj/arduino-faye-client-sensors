
exports.ShieldPort = {
    O0: "11",
    O1: "10",
    O2: "9",
    O3: "6",
    O4: "5",
    O5: "3",
    I0: "A0",
    I1: "A1",
    I2: "A2",
    I3: "A3",
    I4: "A4",
    I5: "A5"
};

exports.thermistorValueToCelsius = function(raw) {
    var adcres = 1023;
    // Beta parameter
    var beta = 3950;
    // 0°C = 273.15 K
    var kelvin = 273.15;
    // 10 kOhm
    var rb = 10000;
    // Ginf = 1/Rinf
    var ginf = 120.6685;

    var rthermistor = rb * (adcres / raw - 1);
    var tempc = beta / (Math.log(rthermistor * ginf));

    return tempc - kelvin;
};

exports.roundNumber = function(value, decimals) {
    var tens = Math.pow(10, decimals);
    return parseFloat(Math.round(value * tens) / tens).toFixed(decimals);
};

// "{0}, {1}".format("Foo", "Bar")
// --> Foo, Bar
if (!String.prototype.format) {
    String.prototype.format = function() {
        var args = arguments;
        return this.replace(/{(\d+)}/g, function(match, number) {
            return typeof args[number] != 'undefined' ? args[number] : match;
        });
    };
}