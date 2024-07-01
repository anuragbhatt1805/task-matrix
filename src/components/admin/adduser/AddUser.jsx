/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Input } from "../../index";

const AddUser = () => {
  const [addUser, setAddUser] = useState("");

  const handleAddUser = (e) => {
    e.preventDefault();
    setAddUser("");
  };

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold uppercase">Add User</h1>
      </div>
      <div className="p-5 mt-5 flex flex-row justify-between gap-10">
        <div className="flex w-[60%] bg-slate-200  rounded-lg p-5">
          <form onSubmit={handleAddUser} className="w-full p-5">
            <div>
              <Input
                label="Full Name: "
                placeholder="Enter your full name"
                className="w-[75%]"
              />

              <Input
                label="Email: "
                placeholder="Enter your email"
                type="email"
                className="w-[75%]"
              />
            </div>
          </form>
        </div>
        <div className="flex w-1/3">Picture</div>
      </div>
    </div>
  );
};

export default AddUser;
