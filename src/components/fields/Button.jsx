import React from 'react'

const Button = ({
    children,
    type="button",
    bgColor="bg-green-500/50",
    padding="px-6 py-2",
    textColor="text-white",
    hover="hover:bg-green-700",
    borderRadius="rounded-xl",
    ...props
}) => {
  return (
    <button className={`${bgColor} ${textColor} ${hover} ${borderRadius} ${padding}`} {...props}>{children}</button>
  )
}

export default Button
