import React from "react";
import Image from "next/image";
import overlayIllustration from "public/illustrations/overlay.svg";

interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="pb-16 lg:bg-contain lg:bg-no-repeat lg:bg-right-top">
      <Image
        className="projectswelcome-bg"
        alt="overlay"
        src={overlayIllustration}
        quality={100}
        width={0}
        height={0}
        style={{
          zIndex: -1,
          objectFit: "cover",
          position: "absolute",
          right: "-30px",
          top: 0,
        }}
      />
      <div>{children}</div>
    </div>
  );
};
