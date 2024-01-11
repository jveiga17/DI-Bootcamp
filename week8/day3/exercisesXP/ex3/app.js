// import module
const express = require('express');
const app = express();
const booksRouter = require('./routes/books');


app.use(express.json()); // parsing

// mount the router
app.use('/books', booksRouter);

const port = 3000;

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

