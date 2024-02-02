import { createAsyncThunk } from '@reduxjs/toolkit';

export const ageUpAsync = createAsyncThunk('age/ageUpAsync', async (_, thunkAPI) => {
  thunkAPI.dispatch({ type: 'age/loading' });
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating async operation
  return 1;
});

export const ageDownAsync = createAsyncThunk('age/ageDownAsync', async (_, thunkAPI) => {
  thunkAPI.dispatch({ type: 'age/loading' });
  await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating async operation
  return -1;
});
