import React from "react";

interface DetailsProps {
  children: React.ReactNode;
}

const Details: React.FC<DetailsProps> = ({ children }) => {
  return <div className="flex-1 people-welcome-details">{children}</div>;
};

export default Details;
