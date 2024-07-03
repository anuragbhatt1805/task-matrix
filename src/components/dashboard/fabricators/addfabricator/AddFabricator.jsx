/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Button, Input, Select } from "../../../index";
const AddFabricator = () => {
  const [addFabricator, setAddFabricator] = useState("");

  const handleAddFabricator = (e) => {
    e.preventDefault();
    setAddFabricator("");
  };

  return (
    <div>
      <div>
        <h1 className="text-2xl flex font-bold uppercase bg-slate-500 text-white px-5 py-2 justify-center items-center">
          Add Fabricator
        </h1>
      </div>
      <form onSubmit={handleAddFabricator} className="w-full p-5">
        <div className="p-5 flex flex-col justify-between gap-5">
          <div className="flex rounded-lg flex-col shadow-lg shadow-black/15 p-8">
            <div className="mt-5">
              <Input
                label="Contact Person Name"
                placeholder="Contact Person Name"
                className="w-full "
              />
            </div>

            <div className="mt-5">
              <Input
                label="Phone Number"
                placeholder="Phone Number"
                className="w-full "
              />
            </div>
            <div className="flex flew-wrap gap-5 mt-5">
              <Input
                label="Country: "
                placeholder="Country"
                className="w-full"
              />
              <Input label="State: " placeholder="State" className="w-full" />
              <Input label="City: " placeholder="City" className="w-full" />
            </div>
            <div className="mt-5">
              <Input
                label="File"
                type="file"
                placeholder="File"
                className="w-full "
              />
            </div>

            <div className="mt-5 w-full">
              <Button action={handleAddFabricator}>Add User</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddFabricator;
