import React from "react";

interface IntroWrapperProps {
  as?: React.ElementType;
  children: React.ReactNode;
  [key: string]: any;
}

const IntroWrapper: React.FC<IntroWrapperProps> = ({ children, }) => {
  return (
    <div
      className="p-16 flex items-center justify-between max-lg:flex-col max-w-screen-xl mx-auto w-[90%]"
    >
      {children}
    </div>
  );
};

export default IntroWrapper;
