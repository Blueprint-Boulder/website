import React from "react";

interface GridProps {
  children: React.ReactNode;
}

export const Grid: React.FC<GridProps> = ({ children }) => {
  return (
    <div className="grid grid-cols-4 gap-5 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3">
      {children}
    </div>
  );
};
