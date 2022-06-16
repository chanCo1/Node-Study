import { configureStore } from '@reduxjs/toolkit';
import loginSlice from './slice/loginSlice';
import registerSlice from './slice/registerSlice';

const store = configureStore({
  reducer: {
    login: loginSlice,
    register: registerSlice,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
  devTools: true,
});

export default store;