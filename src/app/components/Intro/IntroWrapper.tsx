import React from "react";

interface IntroWrapperProps {
  children: React.ReactNode;
  as?: React.ElementType;
}

const IntroWrapper: React.FC<IntroWrapperProps> = ({
  children,
  as: AsComponent = "div",
}) => {
  return (
    <AsComponent className="py-16 px-28 flex items-center justify-between max-lg:flex-col">
      {children}
    </AsComponent>
  );
};

export default IntroWrapper;
