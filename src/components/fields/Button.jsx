import React from 'react'

const Button = ({
    children,
    type="button",
    className="bg-green-500 text-white",
    action=() => {},
    ...props
}) => {
  return (
    <button className={`flex flex-row items-center rounded-xl px-6 py-2  ${className}`} {...props}
    onClick={(e) => {
      e.preventDefault();
      action();
    }}>{children}</button>
  )
}

export default Button
