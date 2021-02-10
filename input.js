const { upkey, leftkey, downkey, rightkey } = require('./moves');

let connection;

const message = 'Say: ';
const hello = 'Hello there!';
const stay = 'Stay a while...';
const listen = '...and listen!';


const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', key => {
    handleUserInput(key);
  });
  return stdin;
}


let func;

const handleUserInput = (key) => {
  const stdout = process.stdout;
  const interval = (key) => {
    func = setInterval(() => {
      connection.write(key);
    }, 100);
  };
  if (key === '\u0003') {
    stdout.write('Exited the snek game. Byeee!\n');
    process.exit();
  }
    if (key === 'w') {
      clearInterval(func);
      interval(upkey);
  }
  if (key === 'a') {
    clearInterval(func);
    interval(leftkey);
    }
  
    if (key === 's') {
      clearInterval(func);
      interval(downkey);
    }
    if (key === 'd') {
      clearInterval(func);
      interval(rightkey);
  }
  if (key === "h") {
    connection.write(message + hello);
  }
  if (key === "j") {
    connection.write(message + stay);
  }
  if (key === 'k') {
    connection.write(message + listen);
  }

};

module.exports = {setupInput};
