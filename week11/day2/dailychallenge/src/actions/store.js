import { configureStore } from "@reduxjs/toolkit";
import ageReducer from './reducers/ageReducer';

const store = configureStore({
    reducer: {
        age: ageReducer,
    },
});

export default store;