import React from "react";

interface ErrorProps {
  children: React.ReactNode;
}

export const Error: React.FC<ErrorProps> = ({ children }) => {
  return <span className="text-red-600">{children}</span>;
};
