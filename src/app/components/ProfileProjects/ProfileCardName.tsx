import React from "react";
import ProfileCardWebsite from "./ProfileCardWebsite";
import ProfileCardGH from "./ProfileCardGH";
import ProfileCardLinkedIn from "./ProfileCardLinkedIn";

interface ProfileCardNameProps {
  name: string;
  url?: string;
  github?: string;
  linkedin?: string;
  id: number;
}

const ProfileCardName: React.FC<ProfileCardNameProps> = ({
  name,
  url,
  github,
  linkedin,
  id,
}) => (
  <h3 className="text-light-blue w-fit">
    {name}
    <br />
    <div className="grid grid-cols-3 w-[80px]">
      <ProfileCardWebsite url={url} name={name} id={id} />
      <ProfileCardGH github={github} name={name} id={id} />
      <ProfileCardLinkedIn linkedin={linkedin} name={name} id={id} />
    </div>
  </h3>
);

export default ProfileCardName;
