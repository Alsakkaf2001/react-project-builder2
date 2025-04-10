import { InputHTMLAttributes } from "react";

const Input = (props: InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <input
      className="mb-2 border-1 border-gray-300 shadow-md focus:border-indigo-400 focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded-md px-3 py-3 text-md"
      {...props}
    />
  );
};

export default Input;
