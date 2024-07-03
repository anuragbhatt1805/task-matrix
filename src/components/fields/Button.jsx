import React from "react";

const Button = ({
  children,
  type = "button",
  className = "bg-gray-500 text-white mx-auto my-2 text-2xl",
  action = () => {},
  ...props
}) => {

  const handleClick =(e)=>{
    e.preventDefault();
    action();
  }
  return (
    <button
    type={type}
      className={`flex flex-row justify-start items-center rounded-xl px-6 py-2  ${className}`}
      {...props}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
