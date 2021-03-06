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
      dispatch(setErrorLogin(error.message));
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
        dispatch(setSignUpSuccess(response.data));
      }
    } catch (error) {
      dispatch(setSignUpError(error));
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
    message: null,
    messageLogin: null,
  },
  reducers: {
    setLoginSuccess(state) {
      state.isAuth = !state.isAuth;
    },
    setErrorLogin(state, action) {
      state.messageLogin = action.payload;
    },
    setSignUpSuccess(state, action) {
      state.message = action.payload.message;
    },
    setSignUpError(state, action) {
      state.message = action.payload.message;
    },
    removeErrorLogin(state) {
      state.messageLogin = null;
    },
    removeErrorSignUp(state) {
      state.message = null;
    },
  },
});

export const {
  setLoginSuccess,
  setErrorLogin,
  setSignUpSuccess,
  setSignUpError,
  removeErrorLogin,
  removeErrorSignUp,
} = authSlice.actions;

export default authSlice.reducer;
