// src/components/Common/CommonFooter.js
import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography variant="body1" color="inherit">
          &copy; 2024 Attendance Management System
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
