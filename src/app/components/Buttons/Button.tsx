"use client";

import React from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  secondary?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  type = "submit",
  secondary,
  disabled,
  children,
}) => (
  <button
    className={`cursor-pointer rounded-[3px] py-2 px-10 border-none select-none text-white ${
      secondary ? "bg-button-light-blue" : "bg-button-blue"
    } focus:outline-none disabled:bg-gray-500`}
    disabled={disabled}
    type={type}
  >
    {children}
  </button>
);

export default Button;
