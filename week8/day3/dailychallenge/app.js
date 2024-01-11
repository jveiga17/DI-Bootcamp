// importing modules
const express = require('express');
const routes = require('./routes/index');

const app = express(); // instance 
const port = 3000; // setting port

// starting server
app.listen(port, () => {
    console.log(`Server running on http://localhost${port}`);
});

const bodyParser = require('body-parser');

app.use('/quiz', routes); // mounting quiz router at '/quiz'