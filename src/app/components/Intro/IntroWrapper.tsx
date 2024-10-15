import React from "react";

interface IntroWrapperProps {
  children: React.ReactNode;
  as?: React.ElementType;
  [key: string]: any;
}

const IntroWrapper: React.FC<IntroWrapperProps> = ({
  children,
  as: AsComponent = "div",
  ...props
}) => {
  return (
    <AsComponent
      className="py-16 flex items-center justify-between md:flex-col"
      {...props}
    >
      {children}
    </AsComponent>
  );
};

export default IntroWrapper;
