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
          layout="fill"
          objectFit="cover"
          className="rounded-t-lg"
        />
      </div>
      <div className="px-6 py-4">
        <p className="text-gray-700 text-base">{description}</p>
      </div>
    </div>
  );
};

export default ImageCard;

// import Image from "next/image";
// import React from "react";

// interface Props {
//   src: string;
//   title: string;
//   description: string;
// }

// const AcademyCardImg = ({ src, title, description }: Props) => {
//   return (
//     <div className="relative flex items-center gap-6 overflow-hidden rounded-lg shadow-lg">
//       <div className="w-full relative">
//         <div className="w-full h-full p-4 bg-opacity-75 rounded-lg">
//           <h1 className="text-4xl font-semibold text-white opacity-0 invisible">
//             {title}
//           </h1>
//           <p className="mt-4 text-gray-300 opacity-0 invisible">
//             {description}
//           </p>
//         </div>
//       </div>
//       <div className="absolute inset-0 overflow-hidden w-full mx-auto ">
//         <Image
//           src={src}
//           alt={title}
//           layout="fill"
//           // objectFit="cover"
//           // className="opacity-50 animate-slide"
//         />
//       </div>
//     </div>
//   );
// };

// export default AcademyCardImg;
