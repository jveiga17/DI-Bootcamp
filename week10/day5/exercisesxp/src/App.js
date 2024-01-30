// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Book from './components/Book';
import BookList from './components/BookList';
import './App.css';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [books, setBooks] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&key=AIzaSyCdPcFlbzVb2u04mxVhpjP9Gpr44hEQhQ0`);
      const data = await response.json();
      setBooks(data.items || []);
    } catch (error) {
      console.error('Error fetching books:', error);
    }
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filterAndSortBooks = () => {
    return books
      .filter((book) => book.volumeInfo.imageLinks)
      .sort((a, b) => new Date(b.volumeInfo.publishedDate) - new Date(a.volumeInfo.publishedDate));
  };

  return (
    <div className="app">
      <Header title="eFinder" />
      <h4>Find your book below!</h4>
      <Book onSearch={handleSearch} onInputChange={handleInputChange} />
      <BookList books={filterAndSortBooks()} />
    </div>
  );
};

export default App;
