import React from "react";

interface DetailsProps {
  children: React.ReactNode;
}

export const Details: React.FC<DetailsProps> = ({ children }) => {
  return (
    <div className="flex-1 pr-8 max-lg:pr-unset max-lg:w-full max-lg:order-1 contact-details ">
      {children}
    </div>
  );
};
