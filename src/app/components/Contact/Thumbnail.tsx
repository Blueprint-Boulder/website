import React from "react";

interface ThumbnailProps {
  children: React.ReactNode;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ children }) => {
  return <div className="flex-1 lg:w-full lg:mb-8 img-100">{children}</div>;
};

export default Thumbnail;
