// basic data
const books = [
    {id: 1, title: 'Book 1', author: 'Author 1', publishedYear: 2020},
    {id:2, title: 'Book 2', author: 'Author 2', publishedYear: 2021}
];

// GET all books
const getAllBooks = (req, res) => {
    res.json(books);
};

// GET specific 
const getBookById = (req, res) => {
    const bookId = parseInt(req.params.booksId);
    const book = books.find(b => b.id === bookId);

    if (book) {
        res.json(book);
    }   else {
        res.status(404).send('Book nto found');
    }
};

// POST (creating) new book
const createBook = (req, res) => {
    const newBook = req.body;
    books.push(newBook);

    res.status(201).json(newBook);
};


// exporting
module.exports = {
    getAllBooks,
    getBookById,
    createBook
}