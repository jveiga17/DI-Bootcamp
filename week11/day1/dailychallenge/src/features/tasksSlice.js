import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  tasksByDay: {},
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      const { day, task } = action.payload;
      if (!state.tasksByDay[day]) {
        state.tasksByDay[day] = [];
      }
      state.tasksByDay[day].push(task);
    },
    editTask: (state, action) => {
      const { day, taskId, updatedTask } = action.payload;
      const tasks = state.tasksByDay[day];
      const taskIndex = tasks.findIndex(task => task.id === taskId);
      if (taskIndex !== -1) {
        tasks[taskIndex] = updatedTask;
      }
    },
    deleteTask: (state, action) => {
      const { day, taskId } = action.payload;
      const tasks = state.tasksByDay[day];
      state.tasksByDay[day] = tasks.filter(task => task.id !== taskId);
    },
  },
});

export const { addTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
