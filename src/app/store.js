import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import userReducer from '../features/User/UserSlice'
import boolReducer from '../features/Bool/boolSlice'
export const store = configureStore({
  reducer: {
    user: userReducer,
    bool: boolReducer,
  },
});
