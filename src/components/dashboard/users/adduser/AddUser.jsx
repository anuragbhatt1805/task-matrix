/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Button, Input, Select } from "../../../index";
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
        <h1 className="text-2xl flex font-bold uppercase bg-slate-500 text-white px-5 py-2 justify-center items-center">Add User</h1>
      </div>
      <form onSubmit={handleAddUser} className="w-full p-5">
        <div className="flex flex-col justify-between gap-5 w-full">
          <div className=" rounded-lg flex-col shadow-lg shadow-black/15 p-8">
            <div className="flex flex-row w-full gap-5">
              <div className="flex flex-col w-full">
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
              </div>
              <div className="flex mt-3 rounded-lg shadow-lg shadow-black/15 p-5">
                <Button>
                  <IoMdPersonAdd className="md:text-5xl text-5xl" />
                </Button>
              </div>
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
                options={["Select from option", "Admin", "User", "Manager"]}
                className="w-full"
              />
            </div>
            <div className="mt-5 w-full">
              <Button action={handleAddUser}>Add User</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
