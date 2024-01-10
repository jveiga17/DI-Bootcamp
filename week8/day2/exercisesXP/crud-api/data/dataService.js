// Part 2 
// import the module
const axios = require('axios'); // popular library for making HTTP reqs

// function that makes a GET req to the JSONplaceholder to fetch data for * posts
const fetchPosts = async () => { // async so that the exec of the code won't be blocked // HTTP reqs take some time to deliver a res
    try { // block that wraps the code that might raise an exception (errs)
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        return response.data; // if req is successful, return the data extracted from res
    }   catch (error) { // in case it does, they can be caught and handled by 'catch'
        console.error('Error fetching posts:', error.message);
        throw error;
    }
};

module.exports = { fetchPosts };
