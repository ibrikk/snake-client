let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', key => {
    handleUseInput(key);
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
  if (key === 'u0003') {
    stdout.write('Exited the snek game. Byeee!\n');
    process.exit();
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

};

module.exports = {setupInput};
