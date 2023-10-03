import React from "react";

interface CardProps {
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children }) => (
  <div className={`p-4 bg-white dark:bg-[#181717] h-full`}>{children}</div>
);

export default Card;
