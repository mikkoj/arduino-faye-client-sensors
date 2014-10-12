var five = require("johnny-five");

var PORT_DEV = '\\\\.\\COM5';
var PORT_YUN = '/dev/ttyATH0';

var boardPort = PORT_DEV;
var arguments = process.argv.slice(2);
if (arguments.length > 0 &&
    arguments[0].toLowerCase() === 'yun')
{
    boardPort = PORT_YUN;
}
console.log('Connecting to ' + boardPort);

var board = new five.Board({ port: boardPort });
module.exports = board;