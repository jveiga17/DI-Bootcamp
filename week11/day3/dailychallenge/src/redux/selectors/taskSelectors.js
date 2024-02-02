import { createSelector } from 'reselect';

export const selectTasks = (state) => state.tasks.tasks;

export const selectTasksByCategory = createSelector(
  [selectTasks],
  (tasks) => tasks
);

export const selectCompletedTasks = createSelector(
  [selectTasks],
  (tasks) => tasks.filter((task) => task.completed)
);

export const selectTaskById = (state, taskId) => {
  const tasks = selectTasks(state);
  return tasks.find((task) => task.id === taskId);
};
