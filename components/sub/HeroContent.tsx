"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  sliderVariants,
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="relative flex flex-col md:flex-row items-center justify-center px-6 mt-24 md:mt-12 w-full z-[20] overflow-x-hidden"
    >
      {/* Main Content */}
      <div className="h-full w-full flex flex-col gap-8 md:ml-16 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h2 className="text-transparent bg-clip-text text-3xl font-bold max-w-[500px] w-auto h-auto bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            OWAIS YAQOOB{" "}
          </h2>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 text-2xl md:text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Mixed Martial Artist and
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Fitness Trainer{" "}
            </span>
            <br />
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg md:text-xl text-gray-400 max-w-[600px]"
        >
          I&apos;m a professional Mixed Martial Artist with a passion for
          fitness and training. Explore my journey in the world of martial arts
          and discover the art of discipline, dedication, and determination.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          href="#about-me"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] mb-10 z-0"
        >
          Learn More!
        </motion.a>
      </div>

      {/* Image */}
      <motion.div
        variants={slideInFromRight(0)}
        className="w-full h-full flex justify-end items-center z-0 md:mt-0"
      >
        <Image
          src="/hero.png"
          alt="Picture of the fighter"
          priority={true}
          height={650}
          width={650}
        />
      </motion.div>

      {/* Text */}
      <motion.div
        style={{ fontSize: "16vw" }} // Adjust the value to your desired size
        className="absolute bottom-[-10%] whitespace-nowrap text-white text-opacity-5 font-bold z-[-1]"
        initial="initial"
        animate="animate"
        variants={sliderVariants(0)}
      >
        J&K&rsquo;s First Professional MMA Fighter
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
