// import
const express = require('express');
const router = express.Router();
const { readTasks, writeTasks } = require('../utils/fileFunctions');
const { validateTask, validateTaskUpdate } = require('../utils/validation');

// GETs /tasks
router.get('/', (req, res) => {
  const tasks = readTasks(); 
  res.json(tasks); // sends the tasks as a JSON response
});

// /tasks/:id
router.get('/:id', (req, res) => {
  const taskId = req.params.id;
  const tasks = readTasks();
  const task = tasks.find(t => t.id === taskId);
  if (task) {
    res.json(task);
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});

// POST /tasks
router.post('/', (req, res) => {
  const newTask = req.body;
  if (validateTask(newTask)) {
    const tasks = readTasks(); // reads tasks from the JSON file
    tasks.push(newTask); // adds new task to the tasks array
    writeTasks(tasks); // writes the updated tasks array back to the JSON file
    res.status(201).json(newTask); // responds with the created task
  } else {
    res.status(400).json({ error: 'Invalid task data' });
  }
});

// PUT /tasks/:id
router.put('/:id', (req, res) => {
  const taskId = req.params.id;
  const updatedTask = req.body;
  if (validateTaskUpdate(updatedTask)) {
    const tasks = readTasks(); 
    const index = tasks.findIndex(t => t.id === taskId);
    if (index !== -1) {
      tasks[index] = { ...tasks[index], ...updatedTask }; // updates the task
      writeTasks(tasks);
      res.json(tasks[index]); 
    } else {
      res.status(404).json({ error: 'Task not found' });
    }
  } else {
    res.status(400).json({ error: 'Invalid task update data' });
  }
});

// DELETE /tasks/:id
router.delete('/:id', (req, res) => {
  const taskId = req.params.id;
  const tasks = readTasks(); 
  const filteredTasks = tasks.filter(t => t.id !== taskId);
  if (filteredTasks.length < tasks.length) {
    writeTasks(filteredTasks); // writes the filtered tasks array back to the JSON file
    res.json({ message: 'Task deleted successfully' });
  } else {
    res.status(404).json({ error: 'Task not found' });
  }
});

module.exports = router;
