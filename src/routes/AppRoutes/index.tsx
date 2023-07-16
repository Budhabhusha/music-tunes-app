import React from 'react'
import {Route,Routes, useRoutes} from 'react-router-dom'
import Logout from '../../pages/LogOut/Logout'
import PageNotFound from '../../pages/PageNotFound/PageNotFound'
import Home from '../../pages/Home/Home'

const AppRoutes = () => {
    let element = useRoutes([
        {path: '/', element: <Home/> },
        {path: '/logout', element: <Logout/> },
        {path: '*', element: <PageNotFound/> }
    ])
    return element
//   return (
//     <Routes>
//       <Route path='/songs' element={<Songs/>}></Route>
//       <Route path='/logout' element={<Logout/>}/>
//       {/* <Route path='/*' element={<PageNotFound/>}/> */}
//     </Routes>
//   )
}

export default AppRoutes
