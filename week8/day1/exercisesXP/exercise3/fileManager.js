// import the built-in fs (file system) module
const { error } = require('console');
const fs = require('fs');                     // the 'fs' module provides an API for interacting with the file system


// function to read the content of file
function readFile(filename) {
    try {
        const content = fs.readFileSync(filename, 'utf-8');
        console.log(`File content of ${filename}:`);
        console.log(content);
        return content;
    }   catch (error) {
        console.error(`Error reading ${filename}:`, error.message);
        return null;
    }
}

// function to write content to a file
function writeFile(filename, content) {
    try {
        fs.writeFileSync(filename, content, 'utf8');
        console.log(`File ${filename} has been written successfully`);
    }   catch {
        console.error(`Error writing to file ${filename}:`, error.message);
    }
}

// export with commonjs
module.exports = {
    readFile,
    writeFile,
};