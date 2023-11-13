import React from "react";

interface InputFieldProps {
  children: React.ReactNode;
}

const InputField: React.FC<InputFieldProps> = ({ children }) => {
  return <div className="relative mb-4">{children}</div>;
};

export default InputField;
