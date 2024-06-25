// RootLayout.tsx
import type { Viewport } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import "./globals.css";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

// Define the generateViewport function
export function generateViewport(): Viewport {
  return {
    initialScale: 1,
    width: "device-width",
  };
}

export const metadata: Metadata = {
  title: {
    template: "%s | Owais Yaqoob",
    default: "Owais Yaqoob | MMA Fighter",
  },
  description: "Owais Yaqoob - MMA Fighter - Personal portfolio website",
  authors: [{ name: "Owais Yaqoob" }],
  applicationName: "Owais Yaqoob - Portfolio",
  generator: "Next.js",
  keywords: [
    "Owais Yaqoob",
    "Owais Yaqoob Pulwama",
    "Owais Yaqoob",
    "Owais Yaqoob J&K MMA Fighter",
    "Owais yaqoob MFN",
    "Owais Yaqoob MFN",
    "portfolio",
    "MMA KASHMIR",
    "MMA Fighter",
    "MMA Fighter Kashmir",
    "Jammu and Kashmir",
    "Kashmir",
    "Pulwama",
    "Srinagar",
  ],
  creator: "Owais Yaqoob - Owaisyaqoob534@gmail.com",
  publisher: "Owais Yaqoob",
  openGraph: {
    title: "Owais Yaqoob | MMA Fighter | Portfolio",
    description: "Owais Yaqoob | MMA Fighter |",
    url: "https://owaisyaqoob.com",
    siteName: "Owais Yaqoob - Portfolio",
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <body
          className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
        >
          <Navbar />
          {children}
          <Footer />
          <SpeedInsights />
          <Analytics />
        </body>
      </html>
    </>
  );
}
