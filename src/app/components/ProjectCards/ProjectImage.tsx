import Image from "next/image";
import React from "react";

interface ProjectImageProps {
  src: string;
  alt: string;
}

const ProjectImage: React.FC<ProjectImageProps> = ({ src, alt }) => {
  if (!src) {
    return (
      <Image
        className="mb-0  w-full"
        src="/nonprofit_logos/empty.png"
        alt="Empty"
      />
    );
  }
  return <Image className="mb-0  w-full" src={src} alt={alt} />;
};

export default ProjectImage;
