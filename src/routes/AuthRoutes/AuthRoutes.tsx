import React from 'react'
import {Routes,Route} from 'react-router-dom'
import PageNotFound from '../../pages/PageNotFound/PageNotFound'
import LoginPage from '../../pages/Login/Login'
import AuthLayout from '../../layouts/AuthLayout'
const AuthRoutes = () => {
  return (
    <Routes>
			{/* <Route element={<AuthLayout />}> */}
				<Route index element={<LoginPage />} />
				<Route path="*" element={<PageNotFound />} />
			{/* </Route> */}
		</Routes>
  )
}

export default AuthRoutes