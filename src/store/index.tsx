
 import { configureStore } from '@reduxjs/toolkit';
import {setupListeners} from '@reduxjs/toolkit/query'
// import { songsApi } from './services/songsApi';
import songReducer from './features/songSlice';
import storage from 'redux-persist/lib/storage';
import authReducer from './auth/autgSlice'
import persistReducer from 'redux-persist/es/persistReducer';
import { persistStore } from 'redux-persist';

const persistConfig={
  key:'root',
  storage
}

const persistedReducer=persistReducer(persistConfig,authReducer)
export const store = configureStore({
  reducer: {
    // [songsApi.reducerPath] : songsApi.reducer,
    songs:songReducer,
    auth:persistedReducer
  },
  // middleware: (getDefaultMiddleware) =>
  // getDefaultMiddleware().concat(songsApi.middleware)
});
export const persistor = persistStore(store)
setupListeners(store.dispatch);
