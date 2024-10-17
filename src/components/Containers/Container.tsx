import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => (
  <div className="max-w-7xl my-0 mx-auto w-full max-sm:w-{9/10} max-lg:w-{4/5}">
    {children}
  </div>
);
