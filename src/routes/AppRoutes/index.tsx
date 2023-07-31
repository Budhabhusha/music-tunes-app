import React from 'react'
import {Route,Routes} from 'react-router-dom'
import PageNotFound from '../../pages/PageNotFound/PageNotFound'
import Home from '../../pages/Home/Home'
import AppLayout from '../../layouts/AppLayout'
import SongDetails from '../../pages/Songs/SongDetails'
import Search from '../../pages/Search'
const AppRoutes = () => {
  return (
    <Routes>
       <Route element={<AppLayout/>}>
        <Route index element={<Home/>}></Route>
        <Route path='/songs/:songId' element={<SongDetails/>}/>
        <Route path="/search/:searchTerm" element={<Search />} />
        <Route path='/*' element={<PageNotFound/>}/>
      </Route>
    </Routes>
  )
}

export default AppRoutes
