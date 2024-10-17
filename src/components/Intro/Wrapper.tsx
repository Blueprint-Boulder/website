import React from "react";
import Image from "next/image";
import overlayIllustration from "@public/illustrations/overlay.svg";

interface WrapperProps {
  children: React.ReactNode;
  as?: React.ElementType;
  [key: string]: any;
}

export const Wrapper: React.FC<WrapperProps> = ({
  children,
  as: AsComponent = "div",
  ...props
}) => {
  return (
    <AsComponent
      className="pb-16 bg-contain bg-left-top bg-no-repeat absolute"
      {...props}
    >
      <Image
        className="skills-bg"
        alt="details"
        src={overlayIllustration}
        quality={100}
        width={0}
        height={0}
        style={{ zIndex: -1, objectFit: "fill", position: "absolute" }}
      />

      <div>{children}</div>
    </AsComponent>
  );
};
