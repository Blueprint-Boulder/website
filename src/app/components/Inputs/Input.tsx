import React from "react";

interface InputProps {
  id: string;
  error?: boolean;
  placeholder?: string;
  type?: string;
  name?: string;
  aria_label?: string;
  required?: boolean;
  autoComplete?: string;
}

const Input: React.FC<InputProps> = ({
  id,
  error = false,
  placeholder = "",
  type = "text",
  name = "",
  aria_label = "",
  required = false,
  autoComplete = "off",
}) => (
  <input
    id={id}
    type={type}
    name={name}
    aria-label={aria_label}
    autoComplete={autoComplete}
    className={`w-full box-border border-2 ${
      error ? "border-red-500" : "border-blue-500"
    } py-3 px-4 rounded-lg mb-2 transition duration-300 placeholder-gray-400`}
    placeholder={placeholder}
    required={required}
  />
);

export default Input;
