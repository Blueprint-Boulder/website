import React from "react";
import { useTheme } from "next-themes";

interface ItemProps {
  children: React.ReactNode;
}

export const Item: React.FC<ItemProps> = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className="w-full h-full overflow-hidden shadow-md">
      <div className={`${theme === "light" ? "text-gray-800" : "text-white"}`}>
        {children}
      </div>
    </div>
  );
};
