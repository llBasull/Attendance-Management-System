import React, { useState } from 'react';
import axios from 'axios';

const AddTeacher = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [standard, setStandard] = useState('');
  const [subjects, setSubjects] = useState([]);
  const [currentSubject, setCurrentSubject] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleAddTeacher = async () => {
    try {
      const response = await axios.post('/api/admin/addTeacher', { name, email, password, standard, subjects });
      if (response.data.success) {
        setMessage('Teacher added successfully');
      } else {
        setMessage('Failed to add teacher');
      }
    } catch (error) {
      setMessage('Error adding teacher');
    }
  };

  const handleAddSubject = () => {
    if (currentSubject) {
      setSubjects([...subjects, currentSubject]);
      setCurrentSubject('');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4">Add Teacher</h1>
      <div className="flex w-full max-w-4xl">
        <div className="flex flex-col w-2/3">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <input
            type="text"
            placeholder="Add Class"
            value={standard}
            onChange={(e) => setStandard(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <div className="flex mb-4">
            <input
              type="text"
              placeholder="Add Subject"
              value={currentSubject}
              onChange={(e) => setCurrentSubject(e.target.value)}
              className="flex-grow p-2 border border-gray-300 rounded-l"
            />
            <button
              onClick={handleAddSubject}
              className="bg-blue-500 text-white px-4 py-2 rounded-r"
            >
              Add
            </button>
          </div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <input
            type="password"
            placeholder="Add Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded mb-4"
          />
          <button
            onClick={handleAddTeacher}
            className="bg-green-500 text-white font-bold px-4 py-2 rounded"
          >
            Add Teacher
          </button>
          {message && <p className="mt-4 text-md text-red-600">Error : {message}</p>}
        </div>
        {subjects.length > 0 && (
          <div className="w-1/3 pl-4">
            <h2 className="text-2xl font-semibold mb-2">Subjects Added:</h2>
            {subjects.map((subject, index) => (
              <div key={index} className="bg-gray-200 p-2 mb-2 rounded">
                {subject}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default AddTeacher;
