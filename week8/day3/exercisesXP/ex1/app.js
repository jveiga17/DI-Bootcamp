// import module
const express = require('express');
const app = express(); // set instance
const port = 3000; // define server port 

// set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// import and use the router module
const router = require('./routes/index');
app.use('/', router);

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
