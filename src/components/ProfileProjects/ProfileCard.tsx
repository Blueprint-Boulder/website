import React from "react";

interface ProfileCardProps {
  children: React.ReactNode;
}

export const ProfileCard: React.FC<ProfileCardProps> = ({ children }) => (
  <div className="p-0 bg-white dark:bg-light-black h-full">{children}</div>
);
