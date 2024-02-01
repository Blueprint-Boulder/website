import React from "react";

interface ThumbnailProps {
  children: React.ReactNode;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ children }) => {
  return (
    <div className="flex-1 max-lg:w-full justify-end img-90">{children}</div>
  );
};

export default Thumbnail;
