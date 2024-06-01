import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AdminRegistrationPage = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async () => {
    try {
      // Replace with actual API call
      const response = await axios.post('/api/admin/register', { email, password });
      if (response.data.success) {
        setMessage('Registration successful');
      } else {
        setMessage('Registration failed');
      }
    } catch (error) {
      setMessage('Error registering admin');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <h1 className="text-3xl font-bold mb-4">Admin Register</h1>
      <input 
        type="text"
        placeholder='Name'
        value={name} 
        onChange={(e)=> setName(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full max-w-md"
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full max-w-md"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border border-gray-300 rounded-md px-3 py-2 mb-4 w-full max-w-md"
      />
      <button
        onClick={handleRegister}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Register
      </button>
      <Link to="/adminlogin">Already Having an Account? Login</Link>
      {message && <p className="text-red-500">{message}</p>}
    </div>
  );
};

export default AdminRegistrationPage;
