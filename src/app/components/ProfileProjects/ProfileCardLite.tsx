import React from "react";

interface ProfileCardLiteProps {
  children: React.ReactNode;
}

const ProfileCardLite: React.FC<ProfileCardLiteProps> = ({ children }) => (
  <div className="flex h-full flex-row flex-nowrap p-0 bg-white dark:bg-light-black">
    {children}
  </div>
);

export default ProfileCardLite;
