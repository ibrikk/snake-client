const setupInput = function() {
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
      conn.write(key);
    }, 100);
  };
}

module.exports = {setupInput};
