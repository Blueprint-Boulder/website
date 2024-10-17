import React from "react";
import Image from "next/image";

interface ThumbnailProps {
  children?: React.ReactNode;
  src: string;
  alt: string;
  as?: React.ElementType;
  [key: string]: any;
}

export const Thumbnail: React.FC<ThumbnailProps> = ({
  src,
  alt,
  as: AsComponent = "div",
  ...props
}) => {
  return (
    <AsComponent className="flex-1 md:justify-right w-full" {...props}>
      <Image
        className="w-[90%]"
        src={src}
        alt={alt}
        layout="responsive"
        width={0}
        height={0}
      />
    </AsComponent>
  );
};
