import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import { montserrat } from "./../components/fonts"
import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
