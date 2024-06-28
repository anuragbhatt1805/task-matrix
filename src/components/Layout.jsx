import React from 'react';

import { Route, Routes } from 'react-router-dom';
import { Login, AdminLayout } from '.';

const Layout = () => {
  return (
    <div>
        {/* <Routes>
            <Route path='/' element={<Login/>}/>
        </Routes> */}
      <AdminLayout />
    </div>
  );
};

export default Layout;
