// logic behind handling all the diff actions about the posts


const getAllPosts = (req, res) => {
    // sql logic to fetch posts from db should be here
    res.json({ message: 'Get all posts'});
};

const getPostById = (req, res) => {
    // sql logic
    const postId = req.params.id;
    res,json({ message: `Get post with ID ${postId}`});
};

const createPost = (req, res) => {
    // sql logic
    const { title, content } = req.body;
    res.json({ message: 'Create a new post'});
};

const updatePost = (req, res) => {
    // sql logic
    const postId = req.params.id;
    const { title, content } = req.body;
    res.json({ message: `Update post with ID ${postId}`});
};

const deletePost = (req, res) => {
    const postId = req.params.id;
    res.json({ message: `Delete post with ID ${postId}`});
};

// module
module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
};



