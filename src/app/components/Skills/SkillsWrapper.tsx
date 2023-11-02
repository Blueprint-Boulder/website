import React from 'react';

interface SkillsWrapperProps{
    children: React.ReactNode;
    as?: React.ElementType;
}

const SkillsWrapper: React.FC<SkillsWrapperProps> = ({children, as:AsComponent="div"}) => {
    return(
        <AsComponent className="p-16 flex items-center justify-between max-[960px]:flex-col max-w-7xl my-0 mx-auto w-full sm:w-[9/10] lg:w-[4/5]" >{children}</AsComponent>
    );
};

export default SkillsWrapper;