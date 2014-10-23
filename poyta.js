var async = require('async');
var five = require("johnny-five");
var board = require('./board');

board.on("ready", function () {

    console.log('board ready');

    var poytaAlas = new five.Pin({
        pin: 10
    });

    var poytaYlos = new five.Pin({
        pin: 11
    });

    poytaAlas.low();
    poytaYlos.low();

    var poytaYlosAlas =
    [
        function (callback) {
            console.log('poytä alas start');
            poytaAlas.high();

            setTimeout(function () {
                console.log('pöytä alas stop');
                poytaAlas.low();
                callback();
            }, 2000);
        },
        function (callback) {
            setTimeout(function () {
                callback();
            }, 50);
        },
        function (callback) {
            console.log('poytä ylös start');
            poytaYlos.high();

            setTimeout(function () {
                console.log('pöytä ylös stop');
                poytaYlos.low();
                callback();
            }, 2000);
        },
        function (callback) {
            setTimeout(function () {
                callback();
            }, 50);
        }
    ];

    var tasks = poytaYlosAlas.concat(poytaYlosAlas, poytaYlosAlas);
    async.series(tasks);
});