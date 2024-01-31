import { fetchUserSuccess, fetchUserFailure } from './userSlice';  // Update the import path

export const fetchUserData = () => async (dispatch) => {
  try {
    const response = await fetch('https://api.example.com/user');
    const data = await response.json();
    dispatch(fetchUserSuccess(data));
  } catch (error) {
    dispatch(fetchUserFailure('Error fetching user data'));
  }
};
