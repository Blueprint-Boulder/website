import React from "react";

interface DetailsProps {
  children: React.ReactNode;
  as?: React.ElementType;
  [key: string]: any;
}

const Details: React.FC<DetailsProps> = ({
  children,
  as: AsComponent = "div",
  ...props
}) => {
  return (
    <AsComponent className="flex-1 mb-8 md:mb-0 w-full" {...props}>
      <h1 className="text-4xl mb-8 text-blue-600 dark:text-white">Hi There!</h1>
      <h4 className="text-3xl mb-10 font-normal text-gray-500 dark:text-gray-300">
        We&apos;re Blueprint Boulder, and we&apos;ve been creating tech for
        social good since 2020.
      </h4>
      {children}
    </AsComponent>
  );
};

export default Details;
