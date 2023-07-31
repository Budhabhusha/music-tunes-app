
 import { configureStore } from '@reduxjs/toolkit';
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
    songs:songReducer,
    auth:persistedReducer
  },
});
export const persistor = persistStore(store)
export default store
