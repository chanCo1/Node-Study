import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './slice/loginSlice';

const store = configureStore({
  reducer: {
    login: loginSlice,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
  devTools: true,
});

export default store;