import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  pricing: string;
}

const AcademyCard = ({ src, title, description, pricing }: Props) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 overflow-hidden rounded-lg shadow-lg">
      <div className="w-full md:w-1/2">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <h1 className="text-4xl md:text-6xl font-semibold text-white">
          {title}
        </h1>
        <p className="mt-4 md:mt-8 text-gray-300">{description}</p>
        <button className="mt-4 md:mt-8 bg-purple-500 text-white py-2 px-4 rounded">
          {pricing}
        </button>
      </div>
    </div>
  );
};

export default AcademyCard;
