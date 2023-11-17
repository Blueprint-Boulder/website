import React from "react";

interface SkillsWrapperProps {
  children: React.ReactNode;
  as?: React.ElementType;
}

const SkillsWrapper: React.FC<SkillsWrapperProps> = ({
  children,
  as: AsComponent = "div",
}) => {
  return (
    <AsComponent className="py-16 px-28 flex items-center justify-between max-lg:flex-col">
      {children}
    </AsComponent>
  );
};

export default SkillsWrapper;
