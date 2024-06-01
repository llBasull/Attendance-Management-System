import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const AdminDashboard = () => {
  const [admin, setAdmin] = useState({
    name: 'Bashu',
    email: 'bashumoulik@gmail.com',
  });
  const [teachers, setTeachers] = useState([{
    name:'Deepak',
    class:'8'
  }]);
  const [students, setStudents] = useState([
    {
      name: 'bashu',
      id: 1,
      department: 'Computer Science',
      email: 'bashu@student.com',
    },
    {
      name: 'siddharth',
      id: 2,
      department: 'Mechanical Engineering',
      email: 'siddharth@student.com',
    },
    {
      name: 'dilip',
      id: 3,
      department: 'Electrical Engineering',
      email: 'dilip@student.com',
    },
    {
      name: 'deepak',
      id: 4,
      department: 'Civil Engineering',
      email: 'deepak@student.com',
    },
  ]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch admin data
    axios.get('/api/admin/')
      .then(response => setAdmin(response.data.admins))
      .catch(error => {
        console.log(error);
        setError(null);
      });

    // Fetch teachers data
    axios.get('/api/teachers')
      .then(response => setTeachers(response.data.teachers))
      .catch(error => console.log(error));

    // Fetch students data
    axios.get('/api/students')
      .then(response => setStudents(response.data.students))
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-4">Admin Dashboard</h1>
      {error && <p className="text-red-500">{error}</p>}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Admin Details</h2>
        <div className="border border-gray-300 p-4 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">{admin.name}</h3>
          <p>Email: {admin.email}</p>
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Teachers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teachers.map((teacher, index) => ( 
            <div key={index} className="border border-gray-300 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{teacher.name}</h3>
              <div className='flex flex-row justify-center'>
                <Link to={`/admin/teacher/${teacher.id}`}>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-2">
                    View Teacher
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-2">Students</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((student, index) => (
            <div key={index} className="border border-gray-300 p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{student.name}</h3>
              <p>Department: {student.department}</p>
              <p>Email: {student.email}</p>
              <div className='flex flex-row justify-center'>
              <Link to={`/admin/student/${student.id}`}>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-2">
                  View Student
                </button>
              </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
