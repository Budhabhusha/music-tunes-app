import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { setToken } from '../../store/auth/autgSlice';
import { useDispatch } from 'react-redux';
// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
// import jwt_decode from "jwt-decode";

import './style.css'
const LoginPage = () => {
  const navigate = useNavigate()
  // const [loggedInUser,setLoggedInUser] = useState([])
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch()

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(setToken(Math.random()))
  };

  return (
    <div
      className="min-h-screen bg-cover bg-center main-login"
    >

      <div className="flex justify-center items-center min-h-screen bg-black bg-opacity-50">
        <div className="max-w-md w-full p-6 bg-opacity-50 shadow-lg shadow-cyan-500 md:shadow-xl md:shadow-cyan-500">
          <h1 className="text-white text-2xl font-semibold mb-6 text-center">Login to listen songs</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="mb-4">
              <label className="text-white block mb-2">Enter Email</label>
              <input
                className="w-full p-2 rounded bg-gray-800 text-white"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label className="text-white block mb-2">Enter Password</label>
              <input
                className="w-full p-2 rounded bg-gray-800 text-white"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </div>
            <button
              className="w-full py-2 px-4 bg-black-600 text-white rounded hover:bg-red-700 border-solid border-2 border-white-500 "
              type="submit"
            >
              Log In
            </button>
          </form>
          <div className='pt-5'>
          {/* <GoogleOAuthProvider clientId="590631228878-d6neh8eku7j8gn138ob5lh75lm6csncg.apps.googleusercontent.com">
            <GoogleLogin
              onSuccess={(credentialResponse:any) => {
                if(credentialResponse)
                var userinfo = jwt_decode(credentialResponse?.credential);
                console.log(userinfo);
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />
          </GoogleOAuthProvider>; */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
