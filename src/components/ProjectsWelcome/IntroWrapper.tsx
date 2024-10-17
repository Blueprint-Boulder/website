import React from "react";

interface IntroWrapperProps {
  children: React.ReactNode;
  as?: React.ElementType;
  [key: string]: any;
}

export const IntroWrapper: React.FC<IntroWrapperProps> = ({
  children,
  as: AsComponent = "div",
  ...props
}) => {
  return (
    <AsComponent className="py-16 px-28 flex items-center justify-between max-lg:flex-col max-w-7xl sm:w-[9/10] lg:w-[8/10]">
      {children}
    </AsComponent>
  );
};
