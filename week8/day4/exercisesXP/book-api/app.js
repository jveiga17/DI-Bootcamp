// module
const express = require('express')
// instance
const app = express();

// port
const port = 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// routing
app.use('/api/books', require('./routes/books'));