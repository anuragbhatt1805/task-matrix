import React from "react";
import { Button, Input } from "../index";
import Logo from "../../assets/logo.png";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Credentials } from "../sampleData";
import { login as authLogin } from "../../store/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    const { email, password } = data;
    let userType = null;

    if (
      email === Credentials.admin.email &&
      password === Credentials.admin.password
    ) {
      userType = "admin";
    } else if (
      email === Credentials.user.email &&
      password === Credentials.user.password
    ) {
      userType = "user";
    } else if (
      email === Credentials.manager.email &&
      password === Credentials.manager.password
    ) {
      userType = "manager";
    }

    if (userType) {
      console.log("User Type", userType);
      dispatch(authLogin({ userType }));
      localStorage.setItem("userType", userType);
      navigate("/"); 
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="bg-green-500 h-screen w-screen">
      <div className="flex justify-center items-center h-full bg-white bg-opacity-30">
        <div className="bg-white bg-opacity-70 border-4 border-white shadow-lg shadow-white/50 h-1/2 w-[40%] rounded-3xl flex flex-col justify-center items-center p-2">
          <div className="w-1/2 flex flex-col justify-center items-center gap-5">
            <img src={Logo} alt="Logo" className="w-1/2" />
            <h1 className="text-5xl font-semibold">Sign in</h1>
            <h1 className="text-xl">Use Your Domain Account</h1>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="w-[75%]">
            <Input
              label="Email:"
              type="email"
              placeholder="Enter your email address"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              })}
            />

            <Input
              label="Password:"
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters",
                },
              })}
            />

            <Button type="submit" action={()=>console.log("logged in")}>Login</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
