const net = require('net');
const connect = require('./client').connect;
const setupInput = require('input').setUpInput;

console.log("Connecting ... ");
connect();
