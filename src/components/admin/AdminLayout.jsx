import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Sidebar from "./Sidebar";

const AdminLayout = () => {
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      <div className="w-52 h-screen flex-shrink-0">
        <Sidebar isSubMenuOpen={isSubMenuOpen} setIsSubMenuOpen={setIsSubMenuOpen} />
      </div>
      <div className={`flex-1 overflow-y-auto p-5 transition-all duration-300 ${isSubMenuOpen ? ' ml-56' : 'ml'}`}>
        <div className="rounded-lg h-auto pb-20">
          <Routes>
            <Route path="/" element={<div className="text-green-500">Admin Layout</div>} />
            {/* Add other routes here */}
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
