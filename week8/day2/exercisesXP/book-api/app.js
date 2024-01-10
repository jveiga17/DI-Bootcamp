// importing modules 
const express = require('express');

const app = express();

// definig array
const books = [
    { id: 1, title: 'Book 1', author: 'Author 1', publishedYear: 2020 },
    { id: 2, title: 'Book 2', author: 'Author 2', publishedYear: 2021 },
  ];
  
// setting up the app to listen on port 5000 and log message 
const port = 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// 7. implementing read 
app.get('/api/books', (req, res) => {
    res.json(books); // sends 'books' array as a JSON res
}); 

// 8. implementing read all
app.get('/api/books/:bookId', (req, res) => {
    const bookId = parseInt(req.params.id); // extracts the value of 'bookId' from the URL
    const book = books.find((b) => b.id === bookId); // searches for book w/ specific id

    if (book) { // if book is found
        res.json(book); // send it as a JSON res
    }   else {
        res.status(404).send('Book not found'); // otherwise, 404 not found err
    }
});

// 9. implementing create
app.use(express.json()); // enables the server to parse JSON data in req.body

app.post('/api/books', (req, res) => {
    const { title, author, publishedYear } = req.body;
    const newBook = {
        id: books.length + 1, // incremented id
        title,
        author,
        publishedYear,
    };

    books.push(newBook); // adds book to array
    res.status(201).json(newBook);
});