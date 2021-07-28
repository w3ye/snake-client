const net = require('net');

const connect = () => {
  const conn = net.createConnection({
    host: '135.23.223.133',
    port: 50542,
  });

  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log("Connected - Successful");
    conn.write("Name: REE");
  });
  conn.on('data', (data) => {
    console.log(data);
  });
};

module.exports = {connect};
