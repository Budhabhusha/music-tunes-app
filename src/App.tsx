import React from 'react';
import {BrowserRouter, Route, Routes,Link} from 'react-router-dom'
import './App.css';
import Login from './pages/Login/Login'
import Home from './pages/Home/Home';
import Logout from './pages/LogOut/Logout';
import NavBar from './componets/NavBar/NavBar';
import PageNotFound from './pages/PageNotFound/PageNotFound';
import User from './pages/User/User';
import Songs from './pages/Songs/Songs';
function App() {
  return (
    <>
     <BrowserRouter>
     <NavBar/>
       <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/logout' element={<Logout/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/*' element={<PageNotFound/>}/>
        <Route path='/user/:name' element={<User/>}/>
        <Route path='/songs' element={<Songs/>}></Route>
       </Routes>
     </BrowserRouter>
    </>
    // <div className="App">

    //   <h1 className="text-3xl font-bold underline bg-yellow-200">React with Netlify CI CD PipeLine</h1>
    //   <h1>New Feature adde</h1>
    //   <h1>React With the files and music with old and new sone</h1>
    // </div>
  );
}

export default App;
