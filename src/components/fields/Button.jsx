import React from "react";

const Button = ({
  children,
  type = "button",
  className = "bg-gray-500 text-white mx-auto my-2 text-2xl",
  action = () => {},
  ...props
}) => {
  return (
    <button
      className={`flex flex-row justify-start items-center rounded-xl px-6 py-2  ${className}`}
      {...props}
      onClick={(e) => {
        e.preventDefault();
        action();
      }}
    >
      {children}
    </button>
  );
};

export default Button;
