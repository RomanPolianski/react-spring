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
      if (response.status === 200) {
        localStorage.setItem('accessToken', response.data.accessToken);
        dispatch(setLoginSuccess(response.data.accessToken));
      }
    } catch (error) {
      console.log(error);
    }
  },
);

export const sendSignUpData = createAsyncThunk(
  'auth/sendSignUpData',
  async (data, { dispatch }) => {
    try {
      const {
        userName, password, repeatPassword, firstName, lastName, age,
      } = data;
      const response = await AuthService.signUp(
        userName,
        password,
        repeatPassword,
        firstName,
        lastName,
        age,
      );
      if (response.status === 200) {
        dispatch(setSignUpSuccess());
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
    isSignedUp: false,
    username: null,
    password: null,
    loginErr: false,
    errMessage: null,
    accessToken: null,
  },
  reducers: {
    setLoginSuccess(state, action) {
      state.isAuth = !state.isAuth;
      state.accessToken = action.payload;
    },
    setErrorLogin(state, action) {
      state.loginErr = !state.loginErr;
      state.errMessage = action.payload;
    },
    setSignUpSuccess(state) {
      state.isSignedUp = !state.isSignedUp;
    },
  },
});

export const { setLoginSuccess, setErrorLogin, setSignUpSuccess } = authSlice.actions;

export default authSlice.reducer;
