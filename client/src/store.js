import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './slice/loginSlice';
import registerSlice from './slice/registerSlice';
import authSlice from './slice/authSlice';

const store = configureStore({
  reducer: {
    login: loginSlice,
    register: registerSlice,
    auth: authSlice,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
  devTools: true,
});

export default store;