import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import itemsRender from './itemsRenderSlice';

export default configureStore({
  reducer: {
    auth: authReducer,
    renderItems: itemsRender,
  },
});
