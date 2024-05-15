"use client";

import React, { useState } from "react";
import { Socials } from "@/constants";
import Image from "next/image";

const Navbar = () => {
  const [isToggleActive, setIsToggleActive] = useState(false);

  const toggleButtonClick = () => {
    setIsToggleActive(!isToggleActive);
  };

  const closeSidebar = () => {
    setIsToggleActive(false);
  };

  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#030014] backdrop-blur-md z-50 px-10 md:px-20 lg:px-50">
      <div className="w-full h-full flex flex-row items-center justify-between">
        {/* Toggle Button on the Left */}
        <button
          onClick={toggleButtonClick}
          className="text-white h-auto w-auto flex flex-row items-center md:hidden"
        >
          <Image
            src="/menu.png"
            alt="logo"
            width={40}
            height={40}
            className="cursor-pointer hover:scale-110"
          />
        </button>

        {/* Rest of the Navbar */}
        <div className="hidden md:flex flex-row items-center justify-between font-bold w-full max-w-screen-lg mx-auto gap-5">
          <a
            href="#home"
            className="cursor-pointer text-white hover:border-b-2"
            onClick={closeSidebar} // Close sidebar when clicked
          >
            Home
          </a>
          <a
            href="#about-me"
            className="cursor-pointer text-white hover:border-b-2"
            onClick={closeSidebar} // Close sidebar when clicked
          >
            About me
          </a>
          <a
            href="#academy"
            className="cursor-pointer text-white hover:border-b-2"
            onClick={closeSidebar} // Close sidebar when clicked
          >
            Academy
          </a>
          <a
            href="#contact"
            className="cursor-pointer text-white hover:border-b-2"
            onClick={closeSidebar} // Close sidebar when clicked
          >
            Contact
          </a>
        </div>

        {isToggleActive && (
          <div
            className={`fixed left-0 top-2 bg-white flex flex-col items-center p-12 ${
              isToggleActive ? "w-full h-[1000px]" : "w-0"
            } transition-all duration-300 ease-in-out md:hidden`}
          >
            {/* Cross Button */}
            <button
              onClick={closeSidebar}
              className="absolute left-5 top-5 text-black cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7 hover:scale-125"
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

            <a
              href="#home"
              className="cursor-pointer text-black text-lg mt-16 mb-4 hover:border-b-4 hover:scale-125"
              style={{ fontSize: "1.5rem" }}
              onClick={closeSidebar} // Close sidebar when clicked
            >
              Home
            </a>
            <a
              href="#about-me"
              className="cursor-pointer text-black text-lg mt-16 mb-4 hover:border-b-4 hover:scale-125"
              style={{ fontSize: "1.5rem" }}
              onClick={closeSidebar} // Close sidebar when clicked
            >
              About me
            </a>
            <a
              href="#academy"
              className="cursor-pointer text-black text-lg mt-16 mb-4 hover:border-b-4 hover:scale-125"
              style={{ fontSize: "1.5rem" }}
              onClick={closeSidebar} // Close sidebar when clicked
            >
              Academy
            </a>
            <a
              href="#contact"
              className="cursor-pointer text-black text-lg mt-16 mb-4 hover:border-b-4 hover:scale-125"
              style={{ fontSize: "1.5rem" }}
              onClick={closeSidebar} // Close sidebar when clicked
            >
              Contact
            </a>
          </div>
        )}

        <div className="flex flex-row gap-5 items-center">
          {Socials.map((social) => (
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              key={social.name}
              className={`cursor-pointer ${social.name} hover:scale-125`}
            >
              <Image
                src={social.src}
                alt={social.name}
                width={28}
                height={28}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
