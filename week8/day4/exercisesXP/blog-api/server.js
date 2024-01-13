// import module 
const express = require('express'); 
const app = express(); // instance
// importing routes
const postsRouter = require('./routes/posts');

// port
const port = 3000;

// setting up port 
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// JSON parsing middleware
app.use(express.json());

// connect routes 
app.use('/', postsRouter);


// error handling
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use((req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message,
        },
    }); 
});

