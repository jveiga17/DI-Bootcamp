const express = require('express');
const router = express.Router();
const booksController = require('../controllers/booksController');

// GETs 
router.get('/', booksController.getAllBooks);

router.get('/:bookId', booksController.getBookById);

// POST
router.post('/', booksController.createBook);

module.exports = router;