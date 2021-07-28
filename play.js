const net = require('net');
const setupInput = require('./input').setupInput;
const connect = require('./client').connect;

console.log("Connecting ... ");
setupInput(connect());
