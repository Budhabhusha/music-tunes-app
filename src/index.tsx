import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import {store} from './store';
// import { PersistGate } from 'redux-persist/integration/react'
// import {persistStore} from 'redux-persist'
import { RouterProvider } from 'react-router-dom';
import router from './routes';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
// let persistor = persistStore(store)

root.render(
  <>
    <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
      <RouterProvider router={router} />
      <App/>
      {/* </PersistGate> */}
    </Provider>
  </>
);

