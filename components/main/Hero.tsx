// Hero.tsx
import React, { Suspense } from "react";

const HeroContent = React.lazy(() => import("../sub/HeroContent"));

const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full" id="home">
      <Suspense fallback={<div>Loading...</div>}>
        <HeroContent />
      </Suspense>
    </div>
  );
};

export default Hero;
