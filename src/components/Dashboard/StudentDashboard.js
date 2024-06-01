import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const StudentDashboard = () => {
  const [studentData, setStudentData] = useState({
    name: 'Bashu',
    subjects: [
      {
        name:'Physics',
        percentage:'68'
      },
      {
        name:'Chemistry',
        percentage:'73'
      }
    ]
  });

  useEffect(() => {
    // Fetch student data and subjects
    axios.get('/api/student')
      .then(response => setStudentData(response.data))
      .catch(error => console.log(error));
  }, []);

  const markAttendance = async (student , subject) => {
    try {
      await axios.get('/api/student/markAttendance', { student , subject });
    } catch (error) {
      console.error('Error marking attendance:', error);
    }
  };

  return (
    <div className="min-h-screen p-4">
      <h1 className="text-4xl font-bold mb-4">Student Dashboard - {studentData.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {studentData.subjects.map((subject, index) => (
          <div key={index} className="border border-gray-300 p-4 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-2">{subject.name}</h3>
            <p>Attendance: {subject.percentage}%</p>
            <div className='flex flex-row justify-center'>
              <Link to="/student/markattendance">
              <button
                onClick={() => markAttendance(studentData.name , subject.name)}
                className="bg-blue-500 text-white px-4 py-2 rounded mt-2 hover:bg-blue-600"
              >
                Mark Attendance
              </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StudentDashboard;
