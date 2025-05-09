// components/FacebookNewsCard.tsx
"use client";

import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ShareActions from "./shareActions";
import Image from "next/image";

interface FacebookNewsCardProps {
  imageUrl: string;
  caption: string;
  date: string;
  shareUrl: string;
}

const NewsCard = ({ imageUrl, caption, shareUrl }: FacebookNewsCardProps) => {
  const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };
  const baseUrlImage = process.env.NEXT_PUBLIC_IMG || "";
  const imageUrlWithBase = `${baseUrlImage}${imageUrl}`;
  return (
    <div className="relative w-full max-w-full sm:max-w-[300px] md:max-w-[360px] lg:max-w-[228px] mx-auto">
      <div className="group/card relative rounded-2xl shadow-md overflow-hidden w-full">
        <Image
          src={imageUrlWithBase}
          alt="FaceBook News"
          width={800}
          height={230}
          className="w-full h-[230px] object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-[#354051] text-white opacity-0 group-hover/card:opacity-70 transition-opacity duration-300 flex justify-center items-center pointer-events-none">
          <p className="text-sm font-medium text-center px-2 pointer-events-auto">
            {truncateText(caption, 150)}
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
