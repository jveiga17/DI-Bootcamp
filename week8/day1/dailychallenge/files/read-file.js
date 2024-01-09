// fs module
const fs = require('fs');

// read the content from the .txt file and display it
function readFileContent() {
  const filePath = './file-data.txt';
  try {
    const content = fs.readFileSync(filePath, 'utf-8');
    console.log(`Content of ${filePath}:\n${content}`);
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error.message);
  }
}

// export
module.exports = readFileContent;
