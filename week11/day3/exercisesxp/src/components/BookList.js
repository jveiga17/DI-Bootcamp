// components/BookList.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { selectBooks, selectHorrorBooks, selectFantasyBooks } from '../redux/reducers/bookReducer';

const BookList = ({ selectedGenre }) => {
  const getBooksByGenre = () => {
    switch (selectedGenre) {
      case 'Horror':
        return useSelector(selectHorrorBooks);
      case 'Fantasy':
        return useSelector(selectFantasyBooks);
      default:
        return useSelector(selectBooks);
    }
  };

  const booksToDisplay = getBooksByGenre();

  return (
    <div>
      <h2>Book List</h2>
      <p>Selected Genre: {selectedGenre}</p>

      <ul>
        {booksToDisplay.map((book) => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author} - Genre: {book.genre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookList;
