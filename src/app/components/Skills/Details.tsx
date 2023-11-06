import React from 'react';

interface DetailsProps{
    children: React.ReactNode;
}

const Details: React.FC<DetailsProps> = ({children}) =>{
    return(
        <div className="flex-1 pl-8 mb-6 max-lg:w-full max-lg:pl-0 skills-details font-sans-serif">
            {children}
        </div>
    );
};

export default Details;