// App.js
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import BookList from './components/BookList';

const App = () => {
  const [selectedGenre, setSelectedGenre] = useState('All');

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <Provider store={store}>
      <div>
        <h1>Book Inventory Management</h1>

        <div>
          <label>Select Genre:</label>
          <select onChange={(e) => handleGenreChange(e.target.value)}>
            <option value="All">All</option>
            <option value="Horror">Horror</option>
            <option value="Fantasy">Fantasy</option>
            {/* Add more genres as needed */}
          </select>
        </div>

        <BookList selectedGenre={selectedGenre} />
      </div>
    </Provider>
  );
};

export default App;
