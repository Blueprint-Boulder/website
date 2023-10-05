import Image from "next/image";
import React from "react";

interface ProfileCardGHProps {
  github?: string;
  name: string;
  id: string;
}

const ProfileCardGH: React.FC<ProfileCardGHProps> = ({ github, name, id }) => (
  <a
    key={`${id}_GH`}
    href={`https://github.com/${github}`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`follow ${name} on github`}
  >
    &nbsp;
    <Image
      src="/icons/github.svg"
      alt={name}
      className="mb-0 w-4"
      width={17}
      height={17}
    />
  </a>
);

export default ProfileCardGH;
