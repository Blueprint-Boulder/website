import React from "react";

interface ProfileCardContentsLiteProps {
  children: React.ReactNode;
}

const ProfileCardLiteContents: React.FC<ProfileCardContentsLiteProps> = ({
  children,
}) => (
  <div className="flex flex-row flex-wrap pl-4 pt-4 flex-grow">{children}</div>
);

export default ProfileCardLiteContents;
