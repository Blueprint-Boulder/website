import React from 'react';
import detailsIllustration from 'public/illustrations/details.svg';

interface WrapperProps{
    children: React.ReactNode;
    as?:React.ElementType;
    [key:string]:any;
}

const Wrapper: React.FC<WrapperProps> = ({children,as:AsComponent="div",...props})=> {
    return(
        <AsComponent
            className = "bg-contain bg-left-top bg-no-repeat" {...props}
            style={{backgroundImage: `url(${detailsIllustration.src})`}}
        >{children}</AsComponent>
    );
};

export default Wrapper;
