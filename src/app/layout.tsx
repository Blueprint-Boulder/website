import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import NextThemeProvider from "./providers/NextThemeProvider";

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

export const metadata: Metadata = {
  title: "Blueprint Boulder",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <NextThemeProvider>
      <html lang="en">
        <body className={`${roboto_mono.variable}`}>{children}</body>
      </html>
    </NextThemeProvider>
  );
}
