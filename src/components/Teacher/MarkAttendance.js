// src/components/Teacher/MarkAttendance.js
import React, { useState } from 'react';
import { Container, Typography, FormControl, InputLabel, Select, MenuItem, Button } from '@mui/material';
import axios from 'axios';
import { TeacherContext } from '../../contexts/TeacherContext'; // Import TeacherContext

const MarkAttendance = () => {
  const [selectedClass, setSelectedClass] = useState('');
  const [date, setDate] = useState('');
  const [message, setMessage] = useState('');
  const { teacherData } = useContext(TeacherContext); // Use TeacherContext

  const handleMarkAttendance = async () => {
    try {
      // Replace with actual API call to mark attendance
      const response = await axios.post('/api/teacher/markAttendance', { selectedClass, date });
      if (response.data.success) {
        setMessage('Attendance marked successfully');
      } else {
        setMessage('Failed to mark attendance');
      }
    } catch (error) {
      setMessage('Error marking attendance');
    }
  };

  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Mark Attendance
      </Typography>
      <FormControl fullWidth margin="normal">
        <InputLabel id="class-select-label">Select Class</InputLabel>
        <Select
          labelId="class-select-label"
          id="class-select"
          value={selectedClass}
          onChange={(e) => setSelectedClass(e.target.value)}
        >
          {/* Render options dynamically based on teacher's classes */}
          {teacherData.classes.map((classItem, index) => (
            <MenuItem key={index} value={classItem}>{classItem}</MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        label="Date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button variant="contained" color="primary" onClick={handleMarkAttendance}>
        Mark Attendance
      </Button>
      {message && <Typography variant="body1">{message}</Typography>}
    </Container>
  );
};

export default MarkAttendance;
