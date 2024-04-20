// RootLayout.tsx
import type { Viewport } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// Define the generateViewport function
export function generateViewport(): Viewport {
  return {
    initialScale: 1,
    width: "device-width",
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <body
          className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
        >
          <Navbar />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
