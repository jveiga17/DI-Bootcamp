const fs = require('fs');
const path = require('path');

const dataFilePath = path.join(__dirname, '../data/tasks.json');

const readTasks = () => {
  try {
    const data = fs.readFileSync(dataFilePath, 'utf-8'); // reads the content of JSON file
    return JSON.parse(data); 
  } catch (error) {
    console.error('Error reading tasks file:', error);
    return [];
  }
};

const writeTasks = tasks => {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(tasks, null, 2), 'utf-8'); // Write tasks as formatted JSON to the file
  } catch (error) {
    console.error('Error writing tasks file:', error);
  }
};

module.exports = { readTasks, writeTasks };
