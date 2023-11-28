import React from 'react';

interface DetailsProps {
    children: React.ReactNode;
}

const Details: React.FC<DetailsProps> = ({ children }) => {
    return (
        <div
            className='flex-1 max-lg:w-full max-lg:mb-8 projectswelcome-details'
        >{children}</div>
    );
};

export default Details;