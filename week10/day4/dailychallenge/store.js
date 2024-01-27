// store from redux
import { configureStore, createSlice } from '@reduxjs/toolkit';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {},
  reducers: {
    addTask: (state, action) => {
      const { day, task } = action.payload;
      state[day] = [...(state[day] || []), task];
    },
    editTask: (state, action) => {
      const { day, updatedTask } = action.payload;
      state[day] = state[day].map((task) => (task.id === updatedTask.id ? updatedTask : task));
    },
    deleteTask: (state, action) => {
      const { day, taskId } = action.payload;
      state[day] = state[day].filter((task) => task.id !== taskId);
    },
  },
});

const store = configureStore({
  reducer: tasksSlice.reducer,
});

export const { addTask, editTask, deleteTask } = tasksSlice.actions;
export default store;
