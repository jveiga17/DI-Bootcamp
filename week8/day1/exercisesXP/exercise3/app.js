// importing 
const { readFile, writeFile } = require('./fileManager');

// reading content
const helloWorldContent = readFile('helloworld.txt');

// if ok, writeFile
if (helloWorldContent) {
    const newContent = 'Writing to the file';
    writeFile('byeworld.txt', newContent);
}