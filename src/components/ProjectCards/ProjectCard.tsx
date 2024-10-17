import React from "react";

interface ProjectCardProps {
  children: React.ReactNode;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ children }) => (
  <div className="p-0 bg-white dark:bg-light-black h-full">{children}</div>
);
