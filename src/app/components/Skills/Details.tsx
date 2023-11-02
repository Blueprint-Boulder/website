import React from 'react';

interface DetailsProps{
    children: React.ReactNode;
    header: string;
    para:string;
}

const Details: React.FC<DetailsProps> = ({children,header,para}) =>{
    return(
        <div className={`flex-1 pl-8 mb-6 max-[960px]:w-full max-[960px]:pl-0`}>
            <h1 className="mb-8 font-sans-serif font-[1100] text-gray-900 dark:text-white` text-[29pt] max-[960px]:mix-blend-unset max-[960px]:dark:mix-blend-difference">
                {header}
            </h1>
            <p className="mb-10 text-3xl font-normal leading-[1.3] text-gray-500 dark:text-white max-[960px]:mix-blend-unset max-[960px]:dark:mix-blend-difference">
                {para}
            </p>
            {children}
        </div>

    );
};

export default Details;