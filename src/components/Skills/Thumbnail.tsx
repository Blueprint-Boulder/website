import React from "react";

interface ThumbnailProps {
  children: React.ReactNode;
}

export const Thumbnail: React.FC<ThumbnailProps> = ({ children }) => {
  return (
    <div className="flex-1 max-lg:w-full max-lg:mb-8 img-100">{children}</div>
  );
};
