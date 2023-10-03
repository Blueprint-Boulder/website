import Image from "next/image";
import React from "react";

interface ProfileCardWebsiteProps {
  url?: string;
  name: string;
  id: string;
}

const ProfileCardWebsite: React.FC<ProfileCardWebsiteProps> = ({
  url,
  name,
  id,
}) => {
  if (!url) {
    return null;
  }
  <a
    key={`${id}_url`}
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`${name}'s website`}
  >
    &nbsp;
    <Image src="/icons/link.svg" alt={name} className="mb-0 w-4" />
  </a>;
};

export default ProfileCardWebsite;