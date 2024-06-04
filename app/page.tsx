"use client";

import Hero from "@/components/main/Hero";
import Academy from "@/components/main/Academy";
import Aboutme from "@/components/main/Aboutme";
import Contact from "@/components/main/Contact";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Aboutme />
        <Academy />
        <Contact />
      </div>
    </main>
  );
}
