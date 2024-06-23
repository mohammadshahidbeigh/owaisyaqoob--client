import React from "react";
import Image from "next/image";

interface ImageCardProps {
  src: string;
  alt: string;
  description: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, alt, description }) => {
  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg">
      <div className="relative w-full h-80">
        <Image
          src={src}
          alt={alt}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-t-lg"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default ImageCard;
