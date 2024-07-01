// src/components/Login.js
import React from "react";
import { Button, Input } from "../index";
import Logo from "../../assets/logo.png";
import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from '../../components/features/userSlice';

const credentials = {
  admin: { email: "admin@example.com", password: "admin123" },
  user: { email: "user@example.com", password: "user123" },
  manager: { email: "manager@example.com", password: "manager123" },
};

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="bg-green-500 h-screen w-screen">
      <div className="flex justify-center items-center h-full bg-white bg-opacity-30">
        <div className="bg-white bg-opacity-70 border-4 border-white shadow-lg shadow-white/50 h-1/2 w-[40%] rounded-3xl flex flex-col justify-center items-center p-2">
          <div className="w-1/2 flex flex-col justify-center items-center gap-5">
            <img src={Logo} alt="Logo" className="w-1/2" />
            <h1 className="text-5xl font-semibold">Sign in</h1>
            <h1 className="text-xl">Use Your Domain Account</h1>
          </div>

          <Formik
            initialValues={{ email: "", password: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Email is required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              if (!values.password) {
                errors.password = "Password is required";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                const { email, password } = values;
                let userType = null;
                if (
                  email === credentials.admin.email &&
                  password === credentials.admin.password
                ) {
                  userType = "admin";
                } else if (
                  email === credentials.user.email &&
                  password === credentials.user.password
                ) {
                  userType = "user";
                } else if (
                  email === credentials.manager.email &&
                  password === credentials.manager.password
                ) {
                  userType = "manager";
                }

                if (userType) {
                  dispatch(login(userType));
                  navigate("/");
                } else {
                  alert("Invalid email or password");
                }
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
            }) => (
              <form onSubmit={handleSubmit} className="w-[75%]">
                <Input
                  label="Email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <div className="text-red-600">{errors.email}</div>
                )}
                <Input
                  label="Password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && (
                  <div className="text-red-600">{errors.password}</div>
                )}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  action={() => {
                    window.alert("Inkalab zindabad");
                    const options = {
                      title: "Notification",
                      body: `This is a notification ${values.email}`,
                      silent: true,
                    };

                    console.log(window?.username);
                    console.log(window?.notification);
                    // window.notification?.NotifyUser(options);
                    new window.Notification(options.title, {
                      body: options.body,
                    });
                  }}

                >
                  Login
                </Button>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Login;
