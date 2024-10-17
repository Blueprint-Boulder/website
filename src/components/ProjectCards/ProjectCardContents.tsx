import React from "react";

interface ProjectCardContentsProps {
  children: React.ReactNode;
}

export const ProjectCardContents: React.FC<ProjectCardContentsProps> = ({
  children,
}) => <div className="px-4 pb-4 p-0">{children}</div>;
