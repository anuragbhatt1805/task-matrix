import React from "react";
import { Button, Input } from "../index";
import Logo from "../../assets/logo.png";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Credentials } from "../sampleData";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  return (
    <div className="bg-green-500 h-screen w-screen">
      <div className="flex justify-center items-center h-full bg-white bg-opacity-30">
        <div className="bg-white bg-opacity-70 border-4 border-white shadow-lg shadow-white/50 h-1/2 w-[40%] rounded-3xl flex flex-col justify-center items-center p-2">
          <div className="w-1/2 flex flex-col justify-center items-center gap-5">
            <img src={Logo} alt="Logo" className="w-1/2" />
            <h1 className="text-5xl font-semibold">Sign in</h1>
            <h1 className="text-xl">Use Your Domain Account</h1>
          </div>

          <form onSubmit={handleSubmit} className="w-[75%]">
            <Input
              as={Input}
              label="Email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              
            />
           

            <Input
              as={Input}
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
             
            />
           

            <Button type="submit">Login</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
