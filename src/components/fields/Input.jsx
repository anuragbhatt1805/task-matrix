import React, { useId } from 'react'

function Input({
    label,
    type="text",
    placeholder="Enter your name",
    className,
    ...props
},ref) {
    const id=useId()
  return (
    <div className="w-full">
    {label && (
      <label className="block mb-1" htmlFor={id}>
        {label}
      </label>
    )}
    <input
      type={type}
      className={` px-3 py-2 rounded-lg bg-white text-black border-2 border-green-950 focus:bg-green-200/50 focus:bg-opacity-60 duration-200 w-full ${className}`}
      ref={ref}
      {...props}
      id={id}
    />
  </div>
  )
}

export default React.forwardRef(Input)
