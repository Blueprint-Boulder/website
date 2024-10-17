import React from "react";
import { ProjectCardWebsite } from "./ProjectCardWebsite";
import { ProjectCardGH } from "./ProjectCardGH";

interface ProjectCardNameProps {
  id: number;
  name: string;
  github: string;
  url: string;
}

export const ProjectCardName: React.FC<ProjectCardNameProps> = ({
  id,
  name,
  github,
  url,
}) => (
  <h3 className="text-light-blue w-fit">
    {name}
    <br />
    <div className="grid grid-cols-3 w-[80px]">
      <ProjectCardWebsite url={url} name={name} id={id} />
      <ProjectCardGH github={github} name={name} id={id} />
    </div>
  </h3>
);
