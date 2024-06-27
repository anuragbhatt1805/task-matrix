import React, { useState } from "react";
import { Button, Input } from "../index";
import Logo from "../../assets/logo.png";

const Login = () => {
    const[loading,setLoading]=useState()
    // const[register,handleSubmit]=useForm()
  return (
    <div className="bg-green-500 h-screen w-screen">
      <div className="bg-white mx-auto my-auto h-1/2 w-1/2 rounded-xl flex flex-col gap-5 justify-between md:flex-row md:justify-around md:items-center p-5">
        <div className="1/2">
          <img src={Logo} alt="" />
        </div>
        {/* <form action={handleSubmit}></form> */}
        <div className="w-full md:w-1/2">
          <div className=" flex flex-col justify-center">
            <Input
              label="Username"
              placeholder="Enter your username"
              type="text"
              required
            />
            <Input
              label="Password"
              placeholder="Enter your password"
              type="text"
              required
            />
          </div>
          <Button>Login</Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
