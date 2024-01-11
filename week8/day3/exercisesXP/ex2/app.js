// importing module 
const express = require('express');
const app = express(); 
const port = 3000;

// body parser middleware
app.use(express.json());

// mount the router
const todoRouter = require('./routes/todos');
app.use('/todos', todoRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});