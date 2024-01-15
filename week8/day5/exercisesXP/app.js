// setting up new express.js

// import
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json()); // middleware

// routes
const taskRouter = require('./routes/routes');
app.use('/tasks', taskRouter);

// starting server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

