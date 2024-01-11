const express = require('express');
const router = express.Router();

// db for storing books
const books = [];

// GET all books
router.get('/', (req, res) => {
    res.json(books);
});

// POST (add) a new book
router.post('/', (req, res) => {
    const newBook = req.body;
    books.push(newBook);
    res.status(201),json(newBook);
});

// PUT (update) a book by id
router.put('/:id', (req, res) => {
    const bookId = req.params.id;
    const updatedBook = req.body;

    // find the index of the book w/ given id
    const index = books.findIndex(book => book.id === bookId);

    if (index !== -1) {
        books[index] = { ...books[index], ...updatedBook };
        res.json(books[index]);
    }   else {
        res.status(404).json({ error: 'Book not found'});
    }
});

// DELETE a book id
router.delete('/:id', (req, res) => {
    const bookId = req.params.id;

    // find the index of the book w/ given id
    const index = books.findIndex(book => book.id === bookId);

    if (index !== -1) {
        const deletedBook = books.splice(index, 1);
        res.json(deletedBook[0]);
    }   else {
        res.status(404).json({ error: 'Book not found'});
    }
});

module.exports = router;