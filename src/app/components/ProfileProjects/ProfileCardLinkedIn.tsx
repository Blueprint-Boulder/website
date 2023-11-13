import Image from "next/image";
import React from "react";

interface ProfileCardLinkedInProps {
  linkedin?: string;
  name: string;
  id: number;
}

const ProfileCardLinkedIn: React.FC<ProfileCardLinkedInProps> = ({
  linkedin,
  name,
  id,
}) => {
  if (!linkedin) return null;
  return (
    <a
      key={`${id}_LI`}
      href={`https://linkedin.com/in/${linkedin}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`follow ${name} on LinkedIn`}
    >
      &nbsp;
      <Image
        src="/icons/linkedin.svg"
        alt={name}
        className="mb-0 w-4"
        width={17}
        height={17}
      />
    </a>
  );
};

export default ProfileCardLinkedIn;
