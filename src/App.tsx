import React from 'react';
import {BrowserRouter} from 'react-router-dom'
import './App.css';
import AuthMiddleWareRoutes from './routes';

function App() {
  return (
    <>
     <BrowserRouter>
        {/* <AuthMiddleWareRoutes/> */}
     </BrowserRouter>
    </>
  );
}

export default App;
