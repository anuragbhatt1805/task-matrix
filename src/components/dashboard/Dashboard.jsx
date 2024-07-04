// src/components/AdminLayout.js
import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Sidebar, Home, AddUser, AddProject,AddTask, Calendar, AddFabricator, RadialChart, ManageTeam, SessionRecode, TaskRecord, MyTask } from '../index';

const Dashboard = () => {
  
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

 
  return (
    <div className="flex min-h-screen">
      <div className={`${isSubMenuOpen ? 'w-16' : 'w-20'} h-screen flex-shrink-0`}>
        <Sidebar isSubMenuOpen={isSubMenuOpen} setIsSubMenuOpen={setIsSubMenuOpen} />
      </div>
      <div className={`flex-1 overflow-y-auto p-5 transition-all duration-300 ${isSubMenuOpen ? 'ml-60' : ''}`}>
        <div className="rounded-lg h-auto pb-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-user" element={<AddUser />} />
            <Route path="/calendar" element={<Calendar />} />
            <Route path="/add-project" element={<AddProject />} />
            <Route path="/add-task" element={<AddTask />} />
            <Route path="/all-project" element={<RadialChart />} />
            <Route path="/add-fabricator" element={<AddFabricator />} />
            <Route path="/manage-team" element={<ManageTeam />} />
            <Route path="/session-record" element={<SessionRecode />} />
            <Route path="/task-record" element={<TaskRecord />} />
            <Route path="/my-task" element={<MyTask />} />

          </Routes>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
