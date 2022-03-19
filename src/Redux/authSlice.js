/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    username: null,
    password: null,
    loginErr: false,
    errMessage: 'Wrong username or password! Try again',
  },
  reducers: {
    validateData(state, action) {
      if (action.payload.username.trim() === 'admin' && action.payload.password.trim() === '1234') {
        state.isAuth = !state.isAuth;
      } else {
        state.loginErr = true;
      }
    },
  },
});

export const { validateData } = authSlice.actions;

export default authSlice.reducer;
