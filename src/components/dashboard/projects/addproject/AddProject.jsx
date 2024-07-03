/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Button, Input, Select } from "../../../index";
import { IoMdPersonAdd } from "react-icons/io";

const AddProject = () => {
  const [addUser, setAddUser] = useState("");

  const handleAddUser = (e) => {
    e.preventDefault();
    setAddUser("");
  };

  return (
    <div>
      <div>
        <h1 className="text-2xl flex font-bold uppercase bg-slate-500 text-white px-5 py-2 justify-center items-center">Add Project</h1>
      </div>
      <form onSubmit={handleAddUser} className="w-full p-5">
        <div className="p-5 flex flex-col justify-between gap-5">
          <div className="flex rounded-lg flex-col shadow-lg shadow-black/15 p-8">
            <div className="mt-3">
              <Select
                label="Fabricator"
                options={["Select from option", "Admin", "User", "Manager"]}
                className="w-full"
              />
            </div>
            <div className="mt-5">
              <Input
                label="Project Name: "
                placeholder="Project"
                className="w-full"
              />
            </div>
            <div className="mt-5">
              <Input
                label="Description: "
                placeholder="Description"
                className="w-full h-44"
              />
            </div>
            <div className="mt-5">
              <Input
                label="Start Date:"
                type="date"
                placeholder="Date"
                className="w-full"
              />
            </div>
            <div className="mt-5">
              <Input
                label="End Date:"
                type="date"
                placeholder="Date"
                className="w-full"
              />
            </div>
            <div className="mt-5">
              <Select
                label="Select Team"
                options={["Select from option", "Admin", "User", "Manager"]}
                className="w-full"
              />
            </div>
            <div className="mt-5">
              <Select
                label="Stage"
                options={["Select from option", "IFA", "BFA", "R-IFA", "R-BFA"]}
                className="w-full"
              />
            </div>
            <div className="mt-5">
              <Select
                label="Status"
                options={[
                  "Select from option",
                  "On-Hold",
                  "In-Progress",
                  "Completed",
                  "Need Approval",
                ]}
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

export default AddProject;
