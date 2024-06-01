import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ManageStudents = () => {
  const [students, setStudents] = useState([
    {
      name:'bashu',
      id:1
    },{
      name:'siddharth',
      id:2
    },{
      name:'dilip',
      id:3
    },{
      name:'deepak',
      id:4
    }
  ]);

  const [selectedStudent, setSelectedStudent] = useState();

  useEffect(() => {
    axios.get('/api/admin/managestudent')
      .then(response => {
        setStudents(response.data.students);
      })
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  const handleButtonClick = (student) => {
    setSelectedStudent(student);
  };

  useEffect(() => {
    if (selectedStudent) {
      axios.get(`/api/admin/managestudent/${selectedStudent.id}`)
        .then(response => {
          // Handle the response data if needed
          console.log(response.data);
        })
        .catch(error => console.error('Error fetching student details:', error));
    }
  }, [selectedStudent]);

  return (
    <div className='min-h-screen p-4'>
      <h1 className='text-4xl font-bold mb-4'>Students</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {students.map((student, index) => (
          <div key={index} className='border border-gray-300 p-4 rounded-lg shadow-lg'>
            <h2 className='text-2xl font-semibold mb-2'>Name : {student.name}</h2>
            <h2 className='text-2xl font-semibold mb-2'>Id : {student.id}</h2>
            <div className='flex justify-center'>
              <Link to={`/admin/managestudent/${student.id}`}>
                <button
                  className='bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600'
                  onClick={() => handleButtonClick(student)}
                >
                  View Student
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageStudents;
