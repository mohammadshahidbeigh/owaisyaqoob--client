// import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Academy from "@/components/main/Academy";
import Aboutme from "@/components/main/Aboutme";
import Image from "next/image";
import Contact from "@/components/main/Contact";

export default function Home() {
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
