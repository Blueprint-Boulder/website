import Image from "next/image";
import React from "react";
import { Tooltip } from "react-tooltip";

interface ProjectPersonImgProps {
  src: string;
  alt: string;
}

const ProjectPersonImg: React.FC<ProjectPersonImgProps> = ({ src, alt }) => {
  if (!src) return null;
  return (
    <>
      <Image className="rounded-25 mb-0 max-h-8" src={src} alt={alt} />;
      <Tooltip />
    </>
  );
};

export default ProjectPersonImg;
