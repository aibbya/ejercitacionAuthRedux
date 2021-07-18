import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/services/authSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
