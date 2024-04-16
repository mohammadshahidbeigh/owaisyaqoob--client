// RootLayout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Owais Yaqoob",
  description: "This is my portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Add other meta tags or head elements here */}
      </Head>
      <html lang="en">
        {" "}
        {/* Add <html> tag here */}
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
