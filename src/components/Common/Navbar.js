import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CloseIcon from '@mui/icons-material/Close';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="bg-blue-500 py-4 px-3">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-lg font-semibold">
          Attendance Management System
        </div>
        <div className="relative">
          {isDropdownOpen ? (
            <CloseIcon onClick={toggleDropdown} className="text-white cursor-pointer" />
          ) : (
            <ArrowDropDownIcon onClick={toggleDropdown} className="text-white cursor-pointer" />
          )}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 py-2 bg-blue-500 border border-gray-600 rounded shadow">
              <Link to="/adminlogin" className="block px-4 py-2 w-36 text-white hover:bg-blue-700">Admin Login</Link>
              <Link to="/teacherlogin" className="block px-4 py-2 text-white hover:bg-blue-700">Teacher Login</Link>
              <Link to="/" className="block px-4 py-2 text-white hover:bg-blue-700">Student Login</Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
