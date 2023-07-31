import React from 'react'
import AuthRoutes from '../../routes/AuthRoutes/AuthRoutes'
import AppRoutes from '../../routes/AppRoutes'
interface AuthMiddleWareProps {
    isLoggedIn?: boolean
}

const AuthMiddleWare:React.FC<AuthMiddleWareProps> = ({isLoggedIn}) => {
  return (
    isLoggedIn ? <AppRoutes /> : <AuthRoutes /> 
  )
}

export default AuthMiddleWare