import React from "react";

interface ContentProps {
  children: React.ReactNode;
}

export const Content: React.FC<ContentProps> = ({ children }) => {
  return <div className="py-4 min-h-[160px]">{children}</div>;
};
