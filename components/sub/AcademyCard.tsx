// components/sub/AcademyCard.tsx
import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  pricing: number;
  onToggleExpand: () => void;
  isExpanded: boolean;
  onPayment: () => void;
}

const AcademyCard = ({
  src,
  title,
  description,
  pricing,
  onToggleExpand,
  isExpanded,
  onPayment,
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
        <button
          onClick={onPayment}
          className="mt-4 bg-purple-500 text-white py-2 px-4 rounded ext-white hover:bg-purple-400 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg w-full px-4 py-2 dark:focus:ring-purple-400/55 mt-4"
        >
          {`Pricing: ₹${pricing}`}
        </button>
      </div>
    </div>
  );
};

export default AcademyCard;
