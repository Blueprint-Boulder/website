import Image from "next/image";
import React from "react";

interface ProfileImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const ProfileImage: React.FC<ProfileImageProps> = ({
  src = "/profiles/empty.png",
  alt = "Empty",
  width,
  height,
}) => (
  <Image
    src={src}
    alt={alt}
    className="mb-0 w-full"
    width={width}
    height={height}
  />
);

export default ProfileImage;
