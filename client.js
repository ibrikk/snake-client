const net = require('net');
/**
 * Establishes connection with the game server
 */

const connect = function() {
  const conn = net.createConnection({ 
    host: '135.23.222.131',
    port: 50542
  },
  () => {
      console.log('Successfully connected to game server');
    });
  // interpret incoming data as text
  conn.on('data', (input) => {
    console.log(input);
  });

conn.on('connect',  () => {
  conn.write("Name: IBR")
});

conn.on('Move up: ', (data) => {
  conn.write(data) // up:  x: 0, y: -1 
});

  conn.setEncoding('utf8'); 

  return conn;
}

module.exports = { connect };