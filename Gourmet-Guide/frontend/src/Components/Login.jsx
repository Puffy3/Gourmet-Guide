import React, { useState } from 'react';
import axios from 'axios'
import {useCookies} from'react-cookie'
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 const navigate=useNavigate()
const[_,setCookies]=useCookies(["access_token"])
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        const response=await axios.post("http://localhost:5000/auth/login",{
            username,
            password
        })
        setCookies("access_token",response.data.token)
        window.localStorage.setItem("userID",response.data.userID)
        navigate("/")
    } catch (error) {
        console.error(error)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#414141]">
      <div className="bg-black p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-orange-500 text-center mb-6">Login</h2>
       
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-orange-500 text-sm font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label className="block text-orange-500 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
