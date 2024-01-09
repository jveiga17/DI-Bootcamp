// require the modules from previous tasks
const greet = require('./greeting');
const displayColorfulMessage = require('./colorful-message');
const readFileContent = require('./read-file');

// greet function
const userNameChallenge = 'Alice';
const greetingMessageChallenge = greet(userNameChallenge);
console.log(greetingMessageChallenge);

// Display the colorful message
displayColorfulMessage();

// Read and display the file's content
readFileContent();
