import React from "react";

interface ThumbnailProps {
  children: React.ReactNode;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ children }) => {
  return (
    <div className="flex flex-1 justify-end max-lg:w-full people-welcome-thumbnail">
      {children}
    </div>
  );
};

export default Thumbnail;
