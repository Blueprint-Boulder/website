import React from "react";
import ReactPlayer from "react-player";

interface ProjectVideo {
  src: string;
}

const ProjectVideo: React.FC<ProjectVideo> = ({ src }) => {
  if (!src) return null;
  return (
    <>
      <ReactPlayer url={src} controls={true} />
      <div className="text-center italic w-full text-xs text-[#a9c1db]">
        Project Showcase Video
      </div>
    </>
  );
};

export default ProjectVideo;
