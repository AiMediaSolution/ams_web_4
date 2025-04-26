// components/PricingCards.tsx
"use client";

import { useEffect } from "react";
import "@/styles/pricing-cards.css";
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

export const PricingCards = () => {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 py-12 text-center">
      <div className="bg-gradient-to-b from-[#052925] to-black rounded-3xl border border-[#3B7A74] shadow-[0_0_30px_#3B7A74] p-8 md:p-12">
        <h2 className="text-white text-2xl md:text-4xl font-bold mb-4">
          WHAT ARE WE CAPABLE OF DOING?
        </h2>
        <p className="text-gray-300 text-sm md:text-base mb-6 max-w-3xl mx-auto">
          Our Track Record Speaks For Itself, With Numerous Success Stories From
          People Who Have Achieved Remarkable Results With Our Solutions.
          <br />
          Connect With Us For A Come In!
        </p>
        <button className="bg-[#2B8B85] text-white font-semibold px-8 py-2 rounded-full hover:opacity-90 transition duration-200">
          Connect now
        </button>
      </div>

      <div className="border-t border-dotted border-white my-10 w-full"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-10 mt-10">
        {statsData.map((item, idx) => (
          <div
            key={idx}
            className="bg-black rounded-full px-8 py-10 flex flex-col items-center text-white border border-[#3B7A74] shadow-[0_0_40px_#3B7A74] hover:scale-105 transition duration-300"
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
