import React from "react";
import Image from "next/image";
import detailsIllustration from "@public/illustrations/details.svg";
import { relative } from "path";

interface WrapperProps {
  children: React.ReactNode;
  as?: React.ElementType;
  [key: string]: any;
}

const Wrapper: React.FC<WrapperProps> = ({
  children,
  as: AsComponent = "div",
  ...props
}) => {
  return (
    <AsComponent
      className="bg-contain bg-left-top bg-no-repeat absolute "
      {...props}
    >
      <Image
        className="skills-bg"
        alt="details"
        src={detailsIllustration}
        quality={100}
        width={0}
        height={0}
        style={{ zIndex: -1, objectFit: "fill", position: "absolute" }} // optional
      />

      <div>{children}</div>
    </AsComponent>
  );
};

export default Wrapper;
