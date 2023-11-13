import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  as?: React.ElementType;
  [key: string]: any;
}

const Wrapper: React.FC<WrapperProps> = ({
  children,
  as: AsComponent = "div",
  ...props
}) => {
  return (
    <AsComponent
      className="py-16 flex items-start justify-between max-lg:flex-col"
      {...props}
    >
      {children}
    </AsComponent>
  );
};

export default Wrapper;
