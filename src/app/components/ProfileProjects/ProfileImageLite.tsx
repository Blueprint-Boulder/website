import Image from "next/image";
import React from "react";

interface ProfileImageLiteProps {
  src: string;
  alt: string;
}

const ProfileImageLite: React.FC<ProfileImageLiteProps> = ({
  src = "/profiles/empty.png",
  alt = "Empty",
}) => (
  <div className="mb-0 max-w-[8rem] max-h-[14rem] flex-grow overflow-hidden">
    <Image src={src} alt={alt} className="mb-0 h-full object-cover" />
  </div>
);

export default ProfileImageLite;
