import React from "react";
import {AdminTask, ManagerTask, UserTask} from '../../../index'
const MyTask = () => {
  const userType = localStorage.getItem("userType");
  return (
    <div className="main-container">
      <div>
        <h1 className="text-2xl flex font-bold uppercase bg-slate-500 text-white px-5 py-2 justify-center items-center">
          My Task
        </h1>
      </div>
      <div>
        {userType === "admin" && (
            <AdminTask />
        )}
        {userType === "manager" && (
            <ManagerTask />
        )}
        {userType === "user" && (
            <UserTask />
        )}

      </div>
    </div>
  );
};

export default MyTask;
