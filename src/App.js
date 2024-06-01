// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './components/Common/Footer';
// import AdminPage from './pages/AdminPage';
import TeacherPage from './pages/TeacherPage';
import StudentPage from './pages/StudentPage';
import Navbar from './components/Common/Navbar';
import AdminLoginPage from './components/Admin/AdminLoginPage';
import AdminRegistrationPage from './components/Admin/AdminRegisterationPage';
import StudentLoginPage from './components/Student/StudentLoginPage';
import TeacherLoginPage from './components/Teacher/TeacherLoginPage'
import ManageStudent from './components/Teacher/ManageStudents';
import AddTeacher from './components/Admin/AddTeacher';
import ManageStudents from './components/Admin/ManageStudents';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import StudentDashboard from './components/Dashboard/StudentDashboard';
import MarkAttendance from './components/Student/MarkAttendance';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<StudentLoginPage/>}/>
        <Route path="/adminlogin" element={<AdminLoginPage/>} />
        <Route path="/teacherlogin" element={<TeacherLoginPage/>} />
        <Route path="/admindashboard" element={<AdminDashboard/>} />
        <Route path="/studentdashboard" element={<StudentDashboard/>}/>
        <Route path="/teacher" element={<TeacherPage/>} />
        <Route path="/student" element={<StudentPage/>} />       
        <Route path="/adminregister" element={<AdminRegistrationPage/>} />
        <Route path="/teacher/managestudent" element={<ManageStudent/>}/>
        <Route path="/admin/addteacher" element={<AddTeacher/>}/>
        <Route path="/admin/managestudent" element={<ManageStudents/>}/>   
        <Route path="/student/markattendance" element={<MarkAttendance/>}/>   
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
