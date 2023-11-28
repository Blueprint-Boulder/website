import React from 'react';

interface ThumbnailProps {
    children: React.ReactNode;
}

const Thumbnail: React.FC<ThumbnailProps> = ({ children }) => {
    return (
        <div
            className='flex-1 justify-end max-lg:w-full img-projectswelcome'
        >{children}</div>
    );
};

export default Thumbnail;