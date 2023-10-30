import React from "react";

interface DetailsProps {
  children: React.ReactNode;
}

export const Details: React.FC<DetailsProps> = ({ children }) => {
  return (
    <div className="flex-1 pr-8 lg:pr-unset lg:w-full lg:order-1 contact-details ">
      {children}
    </div>
  );
};
