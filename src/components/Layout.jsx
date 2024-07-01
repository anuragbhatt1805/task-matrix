import React from 'react';
import { AdminLayout, Login } from '../components';
import { Routes, Route } from 'react-router-dom';

const Layout = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Layout;
