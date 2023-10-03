import React from "react";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => (
  <div className="max-w-7xl my-0 mx-auto w-full sm:w-{9/10} lg:w-{4/5}">
    {children}
  </div>
);

export default Container;
