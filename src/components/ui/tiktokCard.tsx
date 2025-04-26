// components/TiktokCard.tsx
"use client";
import React from "react";
import ShareActions from "./shareActions";

interface TiktokCardProps {
  videoUrl: string;
  caption: string;
  date: string;
}

const TikTokCard = ({ videoUrl, caption, date }: TiktokCardProps) => {
  return (
    <div className="relative flex flex-col bg-white shadow-lg rounded-2xl overflow-hidden w-full max-w-[230px] mx-auto h-[451px]">
      <div className="relative h-[356px]">
        <iframe
          className="w-full h-full border-0"
          src={videoUrl}
          allow="accelerometer; gyroscope; autoplay; encrypted-media; fullscreen"
        ></iframe>
      </div>
      <div className="absolute top-2 right-2 z-10">
        <ShareActions imageUrl={"imageUrl"} shareUrl={"shareUrl"} />
      </div>
      <div className="p-4 text-sm text-gray-800">
        <p className="mb-2">{caption}</p>
        <div className="text-gray-500 text-xs">{date}</div>
      </div>
    </div>
  );
};

export default TikTokCard;
