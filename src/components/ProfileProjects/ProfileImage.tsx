import Image from "next/image";
import React from "react";

interface ProfileImageProps {
  src?: string;
  alt?: string;
  fill?: boolean;
}

export const ProfileImage: React.FC<ProfileImageProps> = ({
  src = "/profiles/empty.png",
  alt = "Empty",
  fill = false,
}) => (
  <Image
    src={src}
    alt={alt}
    className="mb-0 w-full"
    width={0}
    height={0}
    fill={fill}
    quality={100}
  />
);
