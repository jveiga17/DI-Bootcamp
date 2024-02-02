import { configureStore } from '@reduxjs/toolkit';
import taskReducer from './reducers/taskReducer';
import categoryReducer from './reducers/categoryReducer';

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    categories: categoryReducer,
  },
});

export default store;
