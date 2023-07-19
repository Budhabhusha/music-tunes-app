import React, {useState } from 'react';
import { useNavigate } from 'react-router';
import { setToken } from '../../store/auth/autgSlice';
import { useDispatch } from 'react-redux';
import './style.css'
const LoginPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch=useDispatch()

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch( setToken(Math.random()))
     };

  return (
    <div
      className="min-h-screen bg-cover bg-center main-login"
    >
      
      <div className="flex justify-center items-center min-h-screen bg-black bg-opacity-50">
        <div className="max-w-md w-full p-6">
          <h1 className="text-white text-2xl font-semibold mb-6">Login to listen songs</h1>
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
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
