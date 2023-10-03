import Image from "next/image";
import React from "react";

interface ProfileImageProps {
  src: string;
  alt: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({
  src = "/profiles/empty.png",
  alt = "Empty",
}) => <Image src={src} alt={alt} className="mb-0 w-full" />;

export default ProfileImage;
