// components/YoutubeCard.tsx
"use client";
import React from "react";
import ShareActions from "./shareActions";

interface YoutubeCardProps {
  videoUrl: string;
  caption: string;
  date: string;
  share_url: string;
  imageUrl: string;
}

const YouTubeCard = ({
  videoUrl,
  caption,
  date,
  share_url,
  imageUrl,
}: YoutubeCardProps) => {
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };
  console.log("YouTubeCard Props:", {
    videoUrl,
    caption,
    date,
    share_url,
    imageUrl,
  });
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
      {/* Video Container */}
      <div className="relative w-full aspect-video overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <iframe
            className="w-full h-full border-0"
            src={videoUrl}
            allow="accelerometer; gyroscope; autoplay; encrypted-media; fullscreen; picture-in-picture"
            allowFullScreen
          ></iframe>
          {/* Share Actions */}
          <div className="absolute top-2 right-2 z-10">
            <ShareActions imageUrl={imageUrl} shareUrl={share_url} />
          </div>
        </div>
      </div>

      {/* Content Container */}
      <div className="py-2 px-4 text-sm text-gray-800">
        {/* Title */}
        <h3 className="font-normal text-sm mb-2 break-words leading-tight">
          {truncateText(caption, 80)}
        </h3>
        {/* Views and Date */}
        <div className="flex items-center text-gray-500 text-xs mb-2 space-x-2">
          <span>{formatDate(date)}</span>
        </div>
      </div>
    </div>
  );
};

export default YouTubeCard;
