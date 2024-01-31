import { configureStore } from "@reduxjs/toolkit";

import todoReducer from '../features/todoSlice';

// start redux store
const store = configureStore({
    reducer: {
        todos: todoReducer,
    },
});

export default store;