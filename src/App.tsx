import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import './App.css';
import Login from './pages/Login/Login'
import Logout from './pages/LogOut/Logout';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import Songs from './pages/Songs/Songs';
function App() {
  return (
    <>
     <BrowserRouter>
       <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/*' element={<PageNotFound/>}/>
        <Route path='/songs' element={<Songs/>}></Route>
       </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
