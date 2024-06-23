import React from "react";
import Image from "next/image";

const FighterProfile: React.FC = () => {
  return (
    <div className="container mx-auto px-4">
      {/* Fighter Profile Section */}
      <div className="bg-[#030018] text-teal-400 p-6 rounded-md shadow-lg w-full mb-8">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">
          Fight Stats
        </h2>
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-between items-center">
          <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 p-2">
            <span className="font-semibold">Name:</span>
            <span>Owais Yaqoob</span>
          </div>
          <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 p-2">
            <span className="font-semibold">Nationality:</span>
            <span className="flex items-center">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg"
                alt="India"
                width={24}
                height={16}
                className="mr-2"
              />
              India
            </span>
          </div>
          <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 p-2">
            <span className="font-semibold">Position:</span>
            <span>Lightweight</span>
          </div>
          <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 p-2">
            <span className="font-semibold">Born:</span>
            <span>Kashmir, India</span>
          </div>
          <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 p-2">
            <span className="font-semibold">Profile:</span>
            <span>Pro</span>
          </div>
          <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 p-2">
            <span className="font-semibold">Pro MMA Record:</span>
            <span>1-1-0 (Win-Loss-Draw)</span>
          </div>
          <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 p-2">
            <span className="font-semibold">Current Streak:</span>
            <span>1 Win - 1 Loss</span>
          </div>
          <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 p-2">
            <span className="font-semibold">Fighting out of:</span>
            <span>Kashmir, India</span>
          </div>
          <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 p-2">
            <span className="font-semibold">Regional Rankings:</span>
            <p className="text-sm">
              Owais Yaqoob is the 72nd ranked of 80 active Asia South Pro
              Lightweights.
            </p>
          </div>
          <div className="flex flex-col w-full sm:w-1/2 md:w-1/3 p-2">
            <span className="font-semibold">MFN Seasons:</span>
            <span>March 2023, 2024</span>
          </div>
        </div>
      </div>

      {/* PRO RESULT Section */}
      <div className="bg-[#030018] text-teal-400 p-6 rounded-md shadow-lg w-full">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">
          PRO RESULT
        </h2>
        <div className="bg-gray-900 rounded-md shadow-lg w-full overflow-x-auto">
          <table className="min-w-full text-teal-400">
            <thead className="bg-teal-600">
              <tr>
                <th className="text-white py-2 px-4">SEASON</th>
                <th className="text-white py-2 px-4">TEAM</th>
                <th className="text-white py-2 px-4">RESULTS</th>
                <th className="text-white py-2 px-4">OPPONENTS</th>
                <th className="text-white py-2 px-4">BOUT</th>
                <th className="text-white py-2 px-4">DATE</th>
                <th className="text-white py-2 px-4">BILLING</th>
                <th className="text-white py-2 px-4">DURATION</th>
                <th className="text-white py-2 px-4">WEIGHT</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-teal-600">
                <td className="text-white py-2 px-4">March 2023</td>
                <td className="text-white py-2 px-4">MFN 11</td>
                <td className="text-white py-2 px-4">Loss</td>
                <td className="text-white py-2 px-4">Neeraj Panghal</td>
                <td className="text-white py-2 px-4">Guillotine Choke</td>
                <td className="text-white py-2 px-4">31-03-2023</td>
                <td className="text-white py-2 px-4">Main Card</td>
                <td className="text-white py-2 px-4">Round 3</td>
                <td className="text-white py-2 px-4">Lightweight</td>
              </tr>
            </tbody>
          </table>
          <table className="mt-8 min-w-full text-teal-400">
            <thead className="bg-teal-600">
              <tr>
                <th className="text-white py-2 px-4">SEASON</th>
                <th className="text-white py-2 px-4">TEAM</th>
                <th className="text-white py-2 px-4">RESULTS</th>
                <th className="text-white py-2 px-4">OPPONENTS</th>
                <th className="text-white py-2 px-4">BOUT</th>
                <th className="text-white py-2 px-4">DATE</th>
                <th className="text-white py-2 px-4">BILLING</th>
                <th className="text-white py-2 px-4">DURATION</th>
                <th className="text-white py-2 px-4">WEIGHT</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-teal-600">
                <td className="text-white py-2 px-4">March 2024</td>
                <td className="text-white py-2 px-4">MFN 14</td>
                <td className="text-white py-2 px-4">Win</td>
                <td className="text-white py-2 px-4">Mohammad Azim Mokhlis</td>
                <td className="text-white py-2 px-4">Unanimous Decision</td>
                <td className="text-white py-2 px-4">9-03-2024</td>
                <td className="text-white py-2 px-4">Main Card</td>
                <td className="text-white py-2 px-4">Round 3</td>
                <td className="text-white py-2 px-4">Lightweight</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FighterProfile;
