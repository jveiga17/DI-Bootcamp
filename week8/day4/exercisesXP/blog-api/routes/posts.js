// importing module
const express = require('express');
const router = express.Router();
// imprting controller
const postsController = require('../controllers/postsController');

// GET all posts
router.get('/posts', postsController.getAllPosts);

// GET specific post
router.get('/posts/:id', postsController.getPostById);

// POST (create) new post
router.post('/posts', postsController.createPost);

// PUT (update) post
router.put('/posts', postsController.updatePost);

// DELETE post
router.delete('/posts', postsController.deletePost);

// setting exporty
module.exports = router;