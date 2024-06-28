import React from "react";
import { Route, Routes } from "react-router-dom";
import { Sidebar } from "../index";

const AdminLayout = () => {
  return (
    <div className="flex min-h-screen">
      <div className="w-52 h-screen flex-shrink-0">
        <Sidebar />
      </div>
      <div className="flex-1 overflow-y-auto p-5">
        <div className="rounded-lg h-auto pb-20">
          <Routes>
            <Route path="/" element={<div className="text-green-500">Admin Layout</div>} />
            
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
