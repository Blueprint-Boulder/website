import React from "react";

interface IntroWrapperProps {
  as?: React.ElementType;
  children: React.ReactNode;
  [key: string]: any;
}

export const IntroWrapper: React.FC<IntroWrapperProps> = ({
  children,
  as: AsComponent = "div",
  ...props
}) => {
  return (
    <AsComponent
      {...props}
      className="py-16 flex items-center justify-between max-lg:flex-col"
    >
      {children}
    </AsComponent>
  );
};
