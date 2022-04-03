/* eslint-disable no-param-reassign */
/* eslint-disable-next-line no-use-before-define */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import AuthService from '../services/AuthService';

export const sendLoginData = createAsyncThunk(
  'auth/sendLoginData',
  async (data, { dispatch }) => {
    try {
      const { userName, password } = data;
      const response = await AuthService.login(userName, password);
      localStorage.setItem('token', response.data.accessToken);
      if (response.status === 200) {
        dispatch(setLoginSuccess());
      }
    } catch (error) {
      console.log(error);
    }
  },
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false,
    username: null,
    password: null,
    loginErr: false,
    errMessage: null,
  },
  reducers: {
    setLoginSuccess(state) {
      state.isAuth = !state.isAuth;
    },
    setErrorLogin(state, action) {
      state.loginErr = !state.loginErr;
      state.errMessage = action.payload;
    },
  },
});

export const { setLoginSuccess, setErrorLogin } = authSlice.actions;

export default authSlice.reducer;
