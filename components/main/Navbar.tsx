"use client";

import React, { useState } from "react";
import { Socials } from "@/constants";
import Image from "next/image";
import { FiHome, FiUser, FiBook, FiMail } from "react-icons/fi";

const Navbar = () => {
  const [isToggleActive, setIsToggleActive] = useState(false);

  const toggleButtonClick = () => {
    setIsToggleActive(!isToggleActive);
  };

  const closeSidebar = () => {
    setIsToggleActive(false);
  };

  return (
    <div className="w-full h-[65px] font-bold fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#030014] z-50 px-4 md:px-8 lg:px-12 flex items-center justify-between">
      <button onClick={toggleButtonClick} className="text-white md:hidden">
        <Image
          src="/menu.png"
          alt="menu icon"
          width={35}
          height={35}
          className="cursor-pointer hover:scale-110"
        />
      </button>

      {isToggleActive && (
        <div className="fixed inset-0 z-40 flex">
          <div className="bg-[#030014] w-64 h-full shadow-lg flex flex-col p-6 space-y-4">
            <button onClick={closeSidebar} className="text-white mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 hover:scale-125"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <nav className="flex flex-col space-y-4">
              <a
                href="#home"
                className="flex items-center p-4 text-white hover:bg-gray-700 rounded-lg"
              >
                <FiHome className="mr-2" /> Home
              </a>
              <a
                href="#about-me"
                className="flex items-center p-4 text-white hover:bg-gray-700 rounded-lg"
              >
                <FiUser className="mr-2" /> About me
              </a>
              <a
                href="#academy"
                className="flex items-center p-4 text-white hover:bg-gray-700 rounded-lg"
              >
                <FiBook className="mr-2" /> Academy
              </a>
              <a
                href="#contact"
                className="flex items-center p-4 text-white hover:bg-gray-700 rounded-lg"
              >
                <FiMail className="mr-2" /> Contact
              </a>
            </nav>
          </div>
          <div
            className="flex-1 bg-black bg-opacity-50"
            onClick={closeSidebar}
          ></div>
        </div>
      )}

      <div className="hidden md:flex items-center space-x-6">
        <a href="#home" className="text-white hover:underline">
          Home
        </a>
        <a href="#about-me" className="text-white hover:underline">
          About me
        </a>
        <a href="#academy" className="text-white hover:underline">
          Academy
        </a>
        <a href="#contact" className="text-white hover:underline">
          Contact
        </a>
      </div>

      <div className="flex items-center space-x-4">
        {Socials.map((social) => (
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            key={social.name}
            className="text-white hover:scale-125"
          >
            <Image src={social.src} alt={social.name} width={28} height={28} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
