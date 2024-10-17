import Image from "next/image";
import React from "react";

interface ProjectCardGHProps {
  github?: string;
  name: string;
  id: number;
}

export const ProjectCardGH: React.FC<ProjectCardGHProps> = ({
  github,
  name,
  id,
}) => (
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
      className="mb-0"
      width={17}
      height={17}
    />
  </a>
);
