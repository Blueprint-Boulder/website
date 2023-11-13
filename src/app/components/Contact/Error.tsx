import React from "react";

interface ErrorProps {
  children: React.ReactNode;
}

const Error: React.FC<ErrorProps> = ({ children }) => {
  return <span className="text-red-600">{children}</span>;
};

export default Error;
