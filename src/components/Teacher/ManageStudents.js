// src/components/Teacher/ManageStudents.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ManageStudents = () => {
  const [student, setStudent] = useState("Bashu Moulik");
  const [department, setDepartment] = useState("Information Technology");
  const [subjects, setSubjects] = useState(['Physics', 'Chemistry', 'Maths', 'Computers', 'Data Structures', 'Compiler Design']);
  const [image, setImage] = useState("https://wallpapers.com/images/high/cool-profile-pictures-monkey-face-0jxwmq6bpm3hs9cb.webp");

  useEffect(() => {
    axios.get('/api/teacher/students')
      .then(response => {
        setStudent(response.data.student);
        setDepartment(response.data.department);
        setImage(response.data.image);
        setSubjects(response.data.subjects);
      })
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  const markAttendance = async (subject) => {
    try {
      await axios.post('/api/teacher/managestudent/markattendance', {
        student: student,
        subject: subject
      });
      alert(`Attendance marked for ${subject}`);
    } catch (error) {
      console.error('Error marking attendance:', error);
      alert(`Error marking attendance for ${subject}`);
    }
  };

  const markAbsent = async (subject) => {
    try {
      await axios.post('/api/teacher/managestudent/markabsent', {
        student: student,
        subject: subject
      });
      alert(`Marked absent for ${subject}`);
    } catch (error) {
      console.error('Error marking absence:', error);
      alert(`Error marking absence for ${subject}`);
    }
  };

  return (
    <div className='min-h-screen'>
      <div className='flex items-center justify-center py-12'>
        <img src={image} alt="Student" className='rounded-full h-64 w-64' />
      </div>
      <h1 className='text-4xl font-bold px-4 py-2 pt-4'>
        Student's Name: {student}
      </h1>
      <h1 className='text-2xl font-lg px-4 py-2'>
        Student's Department: {department}
      </h1>
      <div className='px-4 py-4 grid grid-cols-1 sm:grid-cols-3 gap-4'>
        {subjects.map((subject, index) => (
          <div key={index} className='border border-gray-300 rounded-lg pt-4 pl-4 pb-4 mb-4 hover:bg-slate-100'>
            <h2 className='text-xl font-semibold mb-2'>{subject}</h2>
            <button 
              onClick={() => markAttendance(subject)} 
              className='bg-green-500 text-white px-4 py-2 rounded mr-8 hover:bg-green-600'
            >
              Mark Attendance
            </button>
            <button 
              onClick={() => markAbsent(subject)} 
              className='bg-red-500 text-white px-4 py-2 rounded w-[45%] hover:bg-red-600'
            >
              Mark Absent
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageStudents;
