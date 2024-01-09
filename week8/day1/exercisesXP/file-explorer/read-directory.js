// read-directory.js
const fs = require('fs');

// read the list of files 
const directoryPath = '.'; // You can change this to the directory you want to explore

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  console.log('List of files in the directory:');
  files.forEach(file => {
    console.log(file);
  });
});
