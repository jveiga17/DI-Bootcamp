// require the greeting.js module
const greet = require('./greeting');

// greet a user
const userName = 'John';
const greetingMessage = greet(userName);
console.log(greetingMessage);
