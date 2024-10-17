import React from "react";
import styles from "./theme-image.module.css";
import Image, { ImageProps } from "next/image";

type Props = Omit<ImageProps, "src" | "priority" | "loading"> & {
  srcLight: string;
  srcDark: string;
  lite?: boolean;
  alt: String;
  name: String;
};

export const ProfileProjectsItem: React.FC<Props> = ({
  lite,
  srcDark,
  srcLight,
  alt,
  name,
}) => (
  <div
    className={`flex flex-col bg-white bg-clip-content outline-light-blue dark:outline-darker-blue outline-1 text-light-blue items-center justify-center h-full overflow-hidden ${
      lite ? "rounded-[5px] w-full max-h-12" : "rounded-[10px] w-fit"
    }`}
  >
    <div
      className={`flex-1 overflow-hidden items-center justify-center ${
        lite ? "max-h-4" : "max-h-12"
      }`}
    >
      <Image
        alt={alt}
        src={srcLight}
        className={`mb-0 object-cover h-12 w-full ${styles.imgLight}`}
      />
      <Image
        alt={alt}
        src={srcDark}
        className={`mb-0 object-cover h-12 w-full ${styles.imgDark}`}
      />
    </div>
    <div
      className={`w-full bg-light-blue dark:bg-dark-blue text-white flex-1 text-center items-center justify-center flex ${
        lite ? "text-[0.5rem]" : "text-xs px-2"
      }`}
    >
      <div>{name}</div>
    </div>
  </div>
);
