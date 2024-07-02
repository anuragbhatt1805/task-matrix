/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Input ,Select } from "../../index";
import { IoMdPersonAdd } from "react-icons/io";

const AddUser = () => {
  const [addUser, setAddUser] = useState("");

  const handleAddUser = (e) => {
    e.preventDefault();
    setAddUser("");
  };

  return (
    <div>
      <div>
        <h1 className="text-2xl font-bold uppercase pl-5">Add User</h1>
      </div>
      <form onSubmit={handleAddUser} className="w-full p-5">
        <div className="p-5 mt-5 flex sm:flex-row flex-col justify-between gap-5">
          <div className="flex w-[85%] rounded-lg flex-col shadow-lg shadow-black/15 p-8">
            <div className="mt-5">
              <Input
                label="Employee User ID: "
                placeholder="Enter Employee User ID"
                className="w-full"
              />
            </div>
            <div className="mt-5">
              <Input
                label="Employee Code: "
                placeholder="Enter Employee Code"
                className="w-full"
              />
            </div>
            <div className="mt-5">
              <Input
                label="Full Name: "
                placeholder="Enter Employee Full Name"
                className="w-full"
              />
            </div>
            <div className="mt-3">
              <Input
                label="Email: "
                placeholder="Enter Employee Email"
                type="email"
                className="w-full"
              />
            </div>
            <div className="mt-3">
              <Input
                label="Phone Number: "
                placeholder="Enter Employee Phone Number"
                className="w-full"
              />
            </div>
            <hr className="border-2 mt-5" />
            <div className="mt-3">
              <Input
                label="Department Name: "
                placeholder="Enter Department Name"
                className="w-full"
              />
            </div>
            <div className="mt-3">
              <Input
                label="Designation: "
                placeholder="Designation"
                className="w-full"
              />
            </div>
            <div className="mt-3">
              <Select
              label="Role"
              options={["Select from option","Admin", "User","Manager"]}
              className="w-full"

              />
            </div>
          </div>
          <div className="flex h-[50%] w-[20%] rounded-lg shadow-lg shadow-black/15 px-2 md:p-5">
              <IoMdPersonAdd className="text-9xl" />
            </div>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
