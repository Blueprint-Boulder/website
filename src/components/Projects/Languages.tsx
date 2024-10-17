import React from "react";

interface LanguagesProps {
  children: React.ReactNode;
}

export const Languages: React.FC<LanguagesProps> = ({ children }) => {
  return <div className="opacity-50 text-sm">{children}</div>;
};
