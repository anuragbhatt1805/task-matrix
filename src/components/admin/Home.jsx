// src/components/Home.js
import React from "react";

const Home = () => {
  const userType = localStorage.getItem("userType");

  return (
    <div className="p-5">
      {userType === "admin" && (
        <div className=" flex-col flex h-screen w-screen justify-center items-center">
          <h1 className="text-black text-2xl bg-green-500/40 px-5 py-2 rounded-xl">Admin Logged in Successfully!</h1> 
          <br />
          <h1 className="text-black text-2xl bg-green-500/40 px-5 py-2 rounded-xl">WELCOME TO TASK MATRIX</h1>
        </div>
      )}
      {userType === "user" && (
       <div className="flex flex-col h-screen w-screen justify-center items-center">
       <h1 className="text-black text-2xl bg-green-500/40 px-5 py-2 rounded-xl">User Logged in Successfully!</h1>
       <h1 className="text-black text-2xl bg-green-500/40 px-5 py-2 rounded-xl">WELCOME TO TASK MATRIX</h1>
     </div>
      )}
      {userType === "manager" && (
     <div className="flex flex-col h-screen w-screen justify-center items-center">
     <h1 className="text-black text-2xl bg-green-500/40 px-5 py-2 rounded-xl">Manager Logged in Successfully!</h1>
     <h1 className="text-black text-2xl bg-green-500/40 px-5 py-2 rounded-xl">WELCOME TO TASK MATRIX</h1>
   </div>
      )}
    </div>
  );
};

export default Home;
