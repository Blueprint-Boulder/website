import React from "react";

interface ProfileCardProps {
  children: React.ReactNode;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ children }) => (
  <div className="p-0 bg-white dark:bg-light-black h-full">{children}</div>
);

export default ProfileCard;
