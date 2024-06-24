import React from "react";

interface Props {
  title: string;
  description: string;
}

const AcademyCard = ({ title, description }: Props) => {
  return (
    <div className="relative flex items-center gap-6 overflow-hidden rounded-lg shadow-lg">
      <div className="w-full relative z-10">
        <div className="w-full h-full p-12 bg-opacity-75 rounded-lg">
          <h1 className="mt-4 text-2xl md:text-5xl font-serif text-white">
            {title}
          </h1>
          <p className="mt-8 text-lg text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AcademyCard;
