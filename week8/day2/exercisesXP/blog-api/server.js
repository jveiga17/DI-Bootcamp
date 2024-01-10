// importing the module
const express = require('express');

// setting up an express app
const app = express();

// req.body parsing middleware to handle JSON data
app.use(express.json()); 

// creating an array to simulate a db
const data = [
    {id: 1, title: 'title1', content: 'content1 blablabla'},
    {id:2, title: 'title2', content: 'content2 blablabla'}
];

// implementing routes

// GET all blog posts
app.get('/posts', (req, res) => {   // defining route for handling HTTP GET reqs to '/posts' endpoint  
    res.json(data); // sends the data array (blog posts) as a JSON res // req = request obj, w/ info on the incoming req
});                 // res = response obj, used to send res back to client

//GET specific post by id
app.get('/posts/:id', (req, res) => { // also def route, but w/ ':id' as a route paramater to specific post
    const postId = parseInt(req.params.id); //extracts the post ID from URL params
    const post = data.find(item => item.id === postId); // 'find' method to search for a blog post in the array w/ matching ID

    if (post) { // = if post === postId is found
        res.json(post); // send post as JSON res to client
    } else { // if no post is found = 404 error
        res.status(404).json({ error: 'Post not found'});
    }
});


// POST new blog post
app.post('/posts', (req, res) => {  // route def
    const newPost = req.body; // extracting data from req.body
    newPost.id = data.length + 1; // based on the current length of the 'data' array, it assigns a new ID to the new post
    data.push(newPost); // adds(pushes) post to array (db)
    res.status(201).json(newPost); // sends 201 status (successfully created smth)
});


// PUT (update) 
app.put('/posts/:id', (req, res) => {  // def route
    const postId = parseInt(req.params.id); 
    const updatedPost = req.body; // extracts data from req.body, w/ info on the update

    const index = data.findIndex(item => item.id === postId); // 'findIndex' method to locate the index of the post in 'data' === postId

    if (index !== -1) { // if post w/ id is found,
        data[index] = { ...data[index], ...updatedPost }; // it updates the existing post by merging the existing properties 
        res.json(data[index]); // sends the updated post as JSON
    }   else {
        res.status(404).json({ error: 'Post not found' });
    }
});

// DELETE blog by id
app.delete('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const index = data.findIndex(item => item.id === postId);

    if (index !== -1) {
        const deletedPost = data.splice(index, 1);
        res.json(deletedPost);
    }   else {
        res.status(404).json({ error: 'Invalid route' });
    }
});

// implementing error handling for invalid routes
app.use((req, res) => {  // middleware used to handle reqs for invalid routes
    res.status(404).json({ error: 'Invalid route'}); // res to a req to an undef route
});

// server error
app.use((err, req, res, next) => { // 
    console.error(err.stack); // logs err to the console, providing info on the err
    res.status(500).json({ error: 'Internal erver error'});
});

// starting the express app and setting it to listen on port 3000
const port = 3000; // sets port num
app.listen(port, () => { // starts the express app and listens on specf port
    console.log(`Server is running om http://localhost:${port}`);
});