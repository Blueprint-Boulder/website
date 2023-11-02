import React from 'react';

interface ThumbnailProps{
    children: React.ReactNode;
}

const Thumbnail: React.FC<ThumbnailProps> = ({children}) => {
    return(
        <div className="flex-1 max-[960px]:w-full max-[960px]:mb-8 img-100">{children}</div>
    );
};

export default Thumbnail;