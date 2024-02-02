import { createAction } from '@reduxjs/toolkit';

export const addTask = createAction('tasks/addTask');
export const editTask = createAction('tasks/editTask');
export const deleteTask = createAction('tasks/deleteTask');
export const updateTaskProgress = createAction('tasks/updateTaskProgress');
