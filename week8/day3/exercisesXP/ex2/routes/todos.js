// importing 
const express = require('express');
const router = express.Router();

// storing to-do items (db)
const todos = [];

// get all to-do items
router.get('/', (req, res) => {
    res.json(todos);
});

// add a new to-do item
router.post('/', (req, res) => {
    const newTodo = req.body;
    todos.push(newTodo); // add newTodo to 'todos'
    res.json(newTodo);
});

// update a to-do item by id
router.put('/:id', (req, res) => {
    const todoId = req.params.id;
    const updatedTodo = req.body;

    // find and update the to-do in the db
    const todoIndex = todos.findIndex(todo => todo.id === todoId);
    if (todoIndex !== -1) {
        todos[todoIndex] = updatedTodo;
        res.json(updatedTodo);
    }   else {
        res.status(404).json({ error: 'To-do not found'});
    }
});

// delete a to-do item by id
router.delete('/:id', (req, res) => {
    const todoId = req.params.id;

    // find and remove
    const todoIndex = todos.findIndex(todo => todo.id === todoId);
    if (todoIndex !== -1) {
        const deletedTodo = todos.splice(todoIndex, 1);
        res.json(deletedTodo[0]);
    }   else {
        res.status(404).json({ error: 'To-do not found'});
    }
});

module.exports = router;

