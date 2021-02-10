const net = require('net');
const {ip, port} = require('./moves');
/**
 * Establishes connection with the game server
 */

const connect = function() {
  const conn = net.createConnection({ 
    host: ip,
    port: port
  });
  // interpret incoming data as text
  conn.on('data', (data) => {
    console.log(data);
  });


  conn.setEncoding('utf8'); 

  conn.on('connect', () => {
    console.log('Successfully connected to the server!');
    conn.write("Name: IKH")
  });

  return conn;
}

module.exports = { connect };