import React from "react";

interface InputProps {
  error?: boolean;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ error = false, placeholder = "" }) => (
  <input
    type="text"
    className={`w-full box-border border-2 ${
      error ? "border-red-500" : "border-blue-500"
    } py-3 px-4 rounded-lg mb-2 transition duration-300 placeholder-gray-400`}
    placeholder={placeholder}
  />
);

export default Input;
