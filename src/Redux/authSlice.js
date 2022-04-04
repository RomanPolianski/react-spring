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
        localStorage.removeItem('accessToken');
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
        dispatch(setSignUpSuccess(response.data));
      } else {
        dispatch(setSignUpError(response.data));
        console.log(response.data.message);
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
    message: null,
    accessToken: localStorage.getItem('accessToken'),
  },
  reducers: {
    setLoginSuccess(state) {
      state.isAuth = !state.isAuth;
    },
    setErrorLogin(state, action) {
      state.loginErr = !state.loginErr;
      state.message = action.payload;
    },
    setSignUpSuccess(state, action) {
      state.isSignedUp = !state.isSignedUp;
      state.message = action.payload.message;
    },
    setSignUpError(state, action) {
      state.message = action.payload.message;
    },
  },
});

export const {
  setLoginSuccess, setErrorLogin, setSignUpSuccess, setSignUpError,
} = authSlice.actions;

export default authSlice.reducer;
