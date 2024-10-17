import React from "react";

interface ProfileCardContentsProps {
  children: React.ReactNode;
}

export const ProfileCardContents: React.FC<ProfileCardContentsProps> = ({
  children,
}) => <div className="pb-4 px-4 pt-0">{children}</div>;
