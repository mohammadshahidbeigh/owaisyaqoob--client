import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  pricing: string;
  onToggleExpand: () => void;
  isExpanded: boolean;
}

const AcademyCard = ({
  src,
  title,
  description,
  pricing,
  onToggleExpand,
  isExpanded,
}: Props) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 overflow-hidden rounded-lg shadow-lg bg-[#030014] p-0">
      <div className="w-full md:w-1/2 ">
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 p-4">
        <h1 className="text-2xl md:text-5xl font-semibold text-white">
          {title}
        </h1>
        <p className="mt-6 text-gray-300">
          {isExpanded ? description : `${description.substring(0, 100)}...`}
          <button onClick={onToggleExpand} className="text-purple-500 ml-2">
            {isExpanded ? "Show Less" : "Learn More"}
          </button>
        </p>
        <button className="mt-4 bg-purple-500 text-white py-2 px-4 rounded">
          {pricing}
        </button>
      </div>
    </div>
  );
};

export default AcademyCard;
