import { createAction } from '@reduxjs/toolkit';

export const addCategory = createAction('categories/addCategory');
export const editCategory = createAction('categories/editCategory');
export const deleteCategory = createAction('categories/deleteCategory');
