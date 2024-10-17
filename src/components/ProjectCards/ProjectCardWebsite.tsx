import Image from "next/image";
import React from "react";

interface ProjectCardWebsiteProps {
  url?: string;
  name: string;
  id: number;
}

export const ProjectCardWebsite: React.FC<ProjectCardWebsiteProps> = ({
  url,
  name,
  id,
}) => {
  if (!url || url === "") {
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
