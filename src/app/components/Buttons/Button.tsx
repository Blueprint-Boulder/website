"use client";

import React from "react";

interface ButtonProps {
  secondary?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ secondary, disabled, children }) => (
  <button
    className={`cursor-pointer rounded-[3px] py-2 px-10 border-none select-none text-white ${
      secondary ? "bg-button-blue" : "bg-button-light-blue"
    } focus:outline-none disabled:bg-gray-500`}
    disabled={disabled}
  >
    {children}
  </button>
);

export default Button;
