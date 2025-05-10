// components/TiktokCard.tsx
"use client";
import React from "react";
import ShareActions from "./shareActions";

interface TiktokCardProps {
  videoUrl: string;
  caption: string;
  date: string;
  share_url: string;
  imageUrl: string;
}

const TikTokCard = ({
  videoUrl,
  caption,
  date,
  share_url,
  imageUrl,
}: TiktokCardProps) => {
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };
  const formatDate = (timestamp: string) => {
    const num = parseInt(timestamp);
    const date = new Date(num * 1000);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };
  return (
    <div
      className="relative flex flex-col bg-white shadow-lg rounded-2xl overflow-hidden 
    w-full max-w-full sm:max-w-[320px] md:max-w-[360px] lg:max-w-[230px] mx-auto"
    >
      <div className="relative w-full aspect-[9/16] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <iframe
            className="w-full h-full border-0"
            src={videoUrl}
            allow="accelerometer; gyroscope; autoplay; encrypted-media; fullscreen"
          ></iframe>

          <div className="absolute top-2 right-2 z-10">
            <ShareActions imageUrl={imageUrl} shareUrl={share_url} />
          </div>
        </div>
      </div>

      <div className="p-4 text-sm text-gray-800">
        <p className="mb-2 break-words">{truncateText(caption, 100)}</p>
        <div className="text-gray-500 text-xs">{formatDate(date)}</div>
      </div>
    </div>
  );
};

export default TikTokCard;
