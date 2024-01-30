import React from "react";

const BookCard = ({ book }) => {
    const { imageLinks, title, authors, publishedDate } = book.volumeInfo;

    return (
        <div className="book-card">
            <img src={imageLinks.thumbnail} alt={title} />
            <h2>{title}</h2>
            <p>Author: {authors ? authors.join(', ') : 'Unknown'}</p>
            <p>Published Year: {publishedDate ? publishedDate.substring(0, 4) : 'Unknown'}</p>
        </div>
    );
};

export default BookCard;