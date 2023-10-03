import React from "react";
import ProfileCardWebsite from "./ProfileCardWebsite";
import ProfileCardGH from "./ProfileCardGH";
import ProfileCardLinkedIn from "./ProfileCardLinkedIn";

interface ProfileCardNameProps {
  name: string;
  url?: string;
  github?: string;
  linkedin?: string;
  id: string;
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
    <ProfileCardWebsite url={url} name={name} id={id} />
    <ProfileCardGH github={github} name={name} id={id} />
    <ProfileCardLinkedIn linkedin={linkedin} name={name} id={id} />
  </h3>
);

export default ProfileCardName;
