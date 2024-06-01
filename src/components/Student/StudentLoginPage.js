// src/components/Student/StudentLoginPage.js
import React, { useState } from 'react';
import axios from 'axios';

const StudentLoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async () => {
    try {
      // Replace with actual API call
      const response = await axios.post('/api/student/login', { email, password });
      if (response.data.success) {
        // Redirect to student dashboard or handle success login
        setMessage('Login successful');
      } else {
        setMessage('Invalid credentials');
      }
    } catch (error) {
      setMessage('Error logging in');
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center flex-col">
      <h1 className="text-3xl font-bold mb-4">Student Login</h1>
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
        onClick={handleLogin}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        Login
      </button>
      {message && <p className="text-red-500">{message}</p>}
    </div>
  );
};

export default StudentLoginPage;
