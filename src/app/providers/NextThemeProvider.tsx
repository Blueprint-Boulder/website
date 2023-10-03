"use client";
import { ThemeProvider } from "next-themes";
import React from "react";

interface NextThemeProviderProps {
  children: React.ReactNode;
}

const NextThemeProvider: React.FC<NextThemeProviderProps> = ({ children }) => (
  <ThemeProvider attribute="class">{children}</ThemeProvider>
);

export default NextThemeProvider;
