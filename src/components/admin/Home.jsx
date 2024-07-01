// src/components/Home.js
import React from "react";
import { useSelector } from 'react-redux';

const Home = () => {
  const userType = useSelector((state) => state.user.userType);

  return (
    <div className="p-5">
      {userType === "admin" && <h1>Admin Logged in</h1>}
      {userType === "user" && <h1>User Logged in</h1>}
      {userType === "manager" && <h1>Manager Logged in</h1>}
    </div>
  );
};

export default Home;
