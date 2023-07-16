import { configureStore } from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query'
import { songsApi } from './services/songsApi';
import songReducer from './features/songSlice';

export const store = configureStore({
  reducer: {
    [songsApi.reducerPath] : songsApi.reducer,
    songs:songReducer
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(songsApi.middleware)
});

setupListeners(store.dispatch);