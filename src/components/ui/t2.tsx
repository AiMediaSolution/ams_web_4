// components/PricingCards.tsx
"use client";

import { useEffect } from "react";
// import "@/styles/pricing-cards.css";
import { FaVideo, FaPlayCircle, FaFileAlt, FaClock } from "react-icons/fa";

const statsData = [
  {
    icon: <FaVideo size={28} />, // FontAwesome icons via react-icons
    value: "600+",
    label: "CHANNELS",
  },
  {
    icon: <FaPlayCircle size={28} />,
    value: "1,000,000+",
    label: "VIDEOS",
  },
  {
    icon: <FaFileAlt size={28} />,
    value: "4,000,000+",
    label: "CLAIMS",
  },
  {
    icon: <FaClock size={28} />,
    value: "400B+",
    label: "MINUTES",
  },
];

export const Hello = () => {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 py-12 text-center">
      <div className="from-[#052925] to-black rounded-3xl border p-8 md:p-12 border-white">
        <h2 className="text-white text-2xl md:text-4xl font-bold mb-4">
          WHAT ARE WE CAPABLE OF DOING?
        </h2>
        <p className="text-gray-300 text-sm md:text-base mb-6 max-w-3xl mx-auto">
          Our Track Record Speaks For Itself, With Numerous Success Stories From
          People Who Have Achieved Remarkable Results With Our Solutions.
          <br />
          Connect With Us For A Come In!
        </p>
        <button className=" text-white font-semibold px-8 py-2 border-white rounded-full ">
          Connect now
        </button>
      </div>

      <div className="border-t border-dotted border-white my-10 w-full"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10 mt-10">
        {statsData.map((item, idx) => (
          <div
            key={idx}
            className="bg-black rounded-full px-8 py-10 flex flex-col items-center text-white border border-white "
          >
            <div className="mb-3">{item.icon}</div>
            <div className="text-3xl font-semibold mb-1">{item.value}</div>
            <div className="text-sm text-gray-300 tracking-wider">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};
