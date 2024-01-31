import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: {},
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    fetchUserSuccess: (state, action) => {
      state.user = action.payload;
      state.error = null;
    },
    fetchUserFailure: (state, action) => {
      state.user = {};
      state.error = action.payload;
    },
  },
});

export const { fetchUserSuccess, fetchUserFailure } = userSlice.actions;
export default userSlice.reducer;
