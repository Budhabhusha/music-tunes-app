import React from 'react'
import {useRoutes} from 'react-router-dom'
import PageNotFound from '../../pages/PageNotFound/PageNotFound'
import LoginPage from '../../pages/Login/Login'

const AuthRoutes = () => {
  
  let element = useRoutes([
    {path: '/' ,element: <LoginPage/> },
    {path: '*' ,element: <PageNotFound/> }
  ])
  return element
}

export default AuthRoutes