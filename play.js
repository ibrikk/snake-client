const { connect } = require('./client');
const { setupInput } = require('./input');
console.log('Connecting ...');
const connection = connect();


setupInput(connection);

module.exports = {connect};
/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */



// stdin.on('data', (key) => {
//   process.stdout.write('.');
//   if(key === '\u0003') {
//     process.exit();
//   });