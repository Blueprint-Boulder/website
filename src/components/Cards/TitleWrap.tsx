import React from "react";

interface TitleWrapProps {
  children: React.ReactNode;
}

export const TitleWrap: React.FC<TitleWrapProps> = ({ children }) => (
  <div className={`flex flex-row justify-between`}>{children}</div>
);
