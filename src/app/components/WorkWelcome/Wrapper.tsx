import React from "react";
import overlayIllustration from "@public/illustrations/overlay.svg";
import Image from "next/image";

interface WrapperProps {
    as?: React.ElementType;
    children: React.ReactNode;
    [key: string]: any;
}

const Wrapper: React.FC<WrapperProps> = ({
    children,
    as: AsComponent = "div",
    ...props
}) => {
    return (
        <AsComponent {...props} className="pb-16 fixed">
            <Image
                alt="overlay illustration"
                src={overlayIllustration}
                quality={100}
                width={0}
                height={0}
                fill
                style={{
                    objectFit: "contain",
                    objectPosition: "right top",
                    backgroundRepeat: "no-repeat",
                }}
            />
            {children}
        </AsComponent>
    );
};

export default Wrapper;
