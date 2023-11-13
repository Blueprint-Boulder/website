import Image from "next/image";
import React from "react";

interface ProfileImageProps {
  src?: string;
  alt?: string;
  width?: number;
  height?: number;
  fill?: boolean;
}

const ProfileImage: React.FC<ProfileImageProps> = ({
  src = "/profiles/empty.png",
  alt = "Empty",
  width,
  height,
  fill = false,
}) => (
  <Image
    src={src}
    alt={alt}
    className="mb-0 w-full"
    width={width}
    height={height}
    fill={fill}
  />
);

export default ProfileImage;
