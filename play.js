const { connect } = require('./client');
const { handleUserInput } = require('./input');
console.log('Connecting ...');
connect();

setupInput();

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */



// stdin.on('data', (key) => {
//   process.stdout.write('.');
//   if(key === '\u0003') {
//     process.exit();
//   });