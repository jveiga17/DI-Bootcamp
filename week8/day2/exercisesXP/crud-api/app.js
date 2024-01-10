// Part 1
// importing module and creating instance of it
const express = require('express');

const app = express();

// setting up the app to listen on port 5000 and loggin it
const port = 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});


// Part 3
// importing the dataService mod
const { fetchPosts } = require('./data/dataService');

// creating endpoint that uses the function, to retrieve data from jsonplaceholder
app.get('/posts', async (req, res) => {
    try {
        const posts = await fetchPosts();
        res.json(posts);
    }   catch (error) {
        res.status(500).json({ error: 'Internal Server Error'});
    }
});

// console.logging inidicating that data's been successfully retrieved
app.get('/posts', async (req, res) => {
    try {
        const posts = await fetchPosts();
        res.json(posts);
        console.log('Data successfully retrieved');
    }   catch (error) {
        res.status(500).json({ error: 'Internal server error'});
    };
});

