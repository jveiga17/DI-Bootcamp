// copy-file.js
const fs = require('fs');

// read the content from source.txt and write to destination.txt
const sourcePath = 'source.txt';
const destinationPath = 'destination.txt';

const content = fs.readFileSync(sourcePath, 'utf-8');
fs.writeFileSync(destinationPath, content);

console.log(`Content from ${sourcePath} has been copied to ${destinationPath}.`);
