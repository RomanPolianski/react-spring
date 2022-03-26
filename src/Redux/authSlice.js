/* eslint-disable no-param-reassign */
/* eslint-disable-next-line no-use-before-define */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const sendLoginData = createAsyncThunk(
  'auth/sendLoginData',
  async (data, { dispatch }) => {
    try {
      const response = await fetch(
        'https://server-react-spring.herokuapp.com/login',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        },
      );
      const dataResponse = await response.json();
      if (response.status === 200) {
        dispatch(setLoginSuccess());
      } else if (response.status === 401) {
        dispatch(setErrorLogin(dataResponse.status));
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
