import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [
    { id: 1, title: 'Book 1', author: 'Author 1', genre: 'Horror' },
    { id: 2, title: 'Book 2', author: 'Author 2', genre: 'Fantasy' },
  ],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
});

// Selectors
export const selectBooks = (state) => state.books.books;

export const selectHorrorBooks = createSelector(
  [selectBooks],
  (books) => books.filter((book) => book.genre === 'Horror')
);

export const selectFantasyBooks = createSelector(
  [selectBooks],
  (books) => books.filter((book) => book.genre === 'Fantasy')
);


export default bookSlice.reducer;
