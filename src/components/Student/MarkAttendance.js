import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import Webcam from 'react-webcam';

const MarkAttendance = () => {
  const [message, setMessage] = useState('');
  const [student, setStudent] = useState('');
  const [subject, setSubject] = useState('');
  const [id, setId] = useState('');
  const [showCamera, setShowCamera] = useState(false);
  const webcamRef = useRef(null);

  useEffect(() => {
    axios.get('/api/student/markattendance')
      .then(response => {
        const { student, subject, id } = response.data;
        setStudent(student);
        setSubject(subject);
        setId(id);
      })
      .catch(error => {
        console.error('Error fetching student data:', error);
      });
  }, []);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    axios.post('/api/student/attendancemarked', {
      studentId: id,
      subject: subject,
      image: imageSrc
    })
    .then(response => {
      if (response.data.success) {
        setMessage('Attendance marked successfully');
      } else {
        setMessage('Failed to mark attendance');
      }
    })
    .catch(error => {
      console.error('Error marking attendance:', error);
      setMessage('Error marking attendance');
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Mark Attendance</h1>
      {showCamera && (
        <Webcam
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className="w-64 h-auto mb-4" // Adjust width to make it smaller
        />
      )}
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2" onClick={() => setShowCamera(true)}>Open Camera</button>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded" onClick={capture}>Capture Image</button>
      {message && <p className="mt-4">{message}</p>}
      <div className="mt-4">
        <p><span className="font-semibold">Student Name:</span> {student}</p>
        <p><span className="font-semibold">Subject:</span> {subject}</p>
      </div>
    </div>
  );
};

export default MarkAttendance;
