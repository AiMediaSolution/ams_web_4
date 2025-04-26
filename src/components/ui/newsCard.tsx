// components/FacebookNewsCard.tsx
"use client";

import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ShareActions from "./shareActions";

interface FacebookNewsCardProps {
  imageUrl: string;
  caption: string;
  date: string;
  shareUrl: string;
}

const NewsCard = ({
  imageUrl,
  caption,
  date,
  shareUrl,
}: FacebookNewsCardProps) => {
  return (
    <div className="relative max-w-[228px] mx-auto">
      <div className="group/card relative rounded-2xl shadow-md overflow-hidden w-full">
        <img
          src={imageUrl}
          alt="FaceBook News"
          className="w-full h-[230px] object-cover"
        />
        <div className="absolute inset-0 bg-[#354051] text-white opacity-0 group-hover/card:opacity-70 transition-opacity duration-300 flex justify-center items-center pointer-events-none">
          <p className="text-sm font-medium text-center px-2 pointer-events-auto">
            {caption}
          </p>
        </div>
      </div>
      <div className="absolute top-2 right-2 z-10">
        <ShareActions imageUrl={imageUrl} shareUrl={shareUrl} />
      </div>
    </div>
  );
};

export default NewsCard;
