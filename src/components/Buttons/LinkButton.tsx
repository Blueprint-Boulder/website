"use client";

import React from "react";

interface LinkButtonProps {
  secondary?: boolean;
  disabled?: boolean;
  href: string;
  children: React.ReactNode;
}

export const LinkButton: React.FC<LinkButtonProps> = ({
  secondary,
  disabled,
  href,
  children,
}) => (
  <button
    className={`cursor-pointer rounded-[3px] py-2 px-10 border-none select-none text-button-blue bg-white border border-button-blue visited:text-button-blue focus:text-button-blue focus:outline-none disabled:text-button-blue disabled:bg-gray-500 ${
      secondary ? "bg-button-light-blue" : ""
    }`}
    disabled={disabled}
  >
    <a href={href} aria-disabled={disabled}>
      {children}
    </a>
  </button>
);
