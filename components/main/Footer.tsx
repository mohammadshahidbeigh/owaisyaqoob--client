import React from "react";
import { Socials } from "@/constants";

const Footer = () => {
  // Remove the Youtube and Twitter entries from the Socials array
  const filteredSocials = Socials.filter(
    (social) => social.name !== "Youtube" && social.name !== "Twitter"
  );

  return (
    <div className="w-full h-full bg-transparent text-gray-200 mt-16 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          {/* Community Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Community</div>
            {/* Move Youtube and Twitter links to the Community section */}
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a
                href="https://youtube.com/@Owaisyaqoob?si=8oq2uZOqhSvd9xiu"
                className="text-[15px] ml-[6px] transition-colors duration-300 hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Youtube
              </a>
            </p>
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a
                href="https://x.com/martialkashmir/"
                className="text-[15px] ml-[6px] transition-colors duration-300 hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </p>
          </div>

          {/* Social Media Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">Social Media</div>
            {/* Map over the filtered Socials array to generate social links */}
            {filteredSocials.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="flex flex-row items-center my-[15px] cursor-pointer"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="text-[15px] ml-[6px] transition-colors duration-300 hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                  {social.name}
                </span>
              </a>
            ))}
          </div>

          {/* About Section */}
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[16px]">About</div>
            {/* Use mailto link for the email address */}
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px] transition-colors duration-300 hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Become Sponsor
              </span>
            </p>
            {/* Display the email address without a link */}
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <a
                href="mailto:Owaisyaqoob534@gmail.com"
                className="text-[15px] ml-[6px] transition-colors duration-300 hover:text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
              >
                Email
              </a>
            </p>
          </div>
        </div>

        <div className="mb-[3px] text-[15px] text-center">
          &copy; Lions Den MMA 2024 Inc. All rights reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
