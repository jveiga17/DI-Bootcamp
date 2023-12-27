// array of books
const allBooks = [
    {
        title: 'Harry Potter',
        author: 'JK Rowling',
        image: 'https://example.com/harry_potter.jpg',
        alreadyRead: true
    },
    {
        title: '1984',
        author: 'George Orwell',
        image: 'https://example.com/1984.jpg',
        alreadyRead: false
    }
];

// Step 2: Render each book inside a div and append to the section
const listBooksSection = document.querySelector('.listBooks');

allBooks.forEach(book => {
    // div for each book
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');

    //  book's title and author
    const bookDetails = document.createElement('p');
    bookDetails.textContent = `${book.title} written by ${book.author}`;
    bookDiv.appendChild(bookDetails);

    // image
    const bookImage = document.createElement('img');
    bookImage.src = book.image;
    bookImage.style.width = '100px';
    bookDiv.appendChild(bookImage);

    // book styling
    if (book.alreadyRead) {
        bookDetails.style.color = 'red';
    }

    // appending the book div to the section
    listBooksSection.appendChild(bookDiv);
});
