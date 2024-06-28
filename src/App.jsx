import React from 'react';
import { Route, Routes } from 'react-router-dom';
// import Layout from './components/Layout';
import { AdminLayout } from './components/index';

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<AdminLayout />} />
    </Routes>
  );
};

export default App;
