"use client";

import Masonry from "react-masonry-css";
import { useEffect, useState } from "react";
import TikTokCard from "./tiktokCard";
import NewsCard from "./newsCard";
interface SocialItem {
  type: "facebook" | "tiktok" | "news";
  id_socialMedia: string;
  caption: string;
  date: string;
  image_url: string;
  video_display: string;
  link_share: string;
}
const DataList = () => {
  const [data, setData] = useState<SocialItem[]>([]);
  const [error, setError] = useState<string | undefined>();

  const fetchData = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/data`, {
        method: "GET",
      });

      if (response.ok) {
        const json = await response.json();
        const enhancedData = (json as SocialItem[]).map((item) => {
          if (item.type === "tiktok") {
            return {
              ...item,
              video_display: `https://www.tiktok.com/player/v1/${item.id_socialMedia}?autoplay=0&loop=1`,
            };
          }
          return item;
        });
        setData(enhancedData);
      } else {
        if (response.status === 401) {
          console.error(
            "Access forbidden: You do not have the required permissions."
          );
        } else {
          console.error("Failed to fetch accounts");
        }
      }
    } catch (err) {
      setError("Failed to load data.");
      console.error(err);
    }
  };

  const breakpointColumnsObj = {
    default: 6,
    1536: 6,
    1280: 4,
    1024: 3,
    768: 2,
    480: 1,
  };

  useEffect(() => {
    fetchData();
  }, []);
  if (error) {
    return (
      <div className="text-red-500 text-center font-semibold mt-10">
        {error}
      </div>
    );
  }
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-28 xl:px-40 2xl:px-60 my-24">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {data.map((item, index) => {
          if (item.type === "tiktok") {
            return (
              <TikTokCard
                key={index}
                videoUrl={item.video_display}
                caption={item.caption}
                date={item.date}
                share_url={item.link_share}
                imageUrl={item.image_url}
              />
            );
          } else if (item.type === "facebook" || item.type === "news") {
            return (
              <NewsCard
                key={index}
                imageUrl={item.image_url}
                caption={item.caption}
                date={item.date}
                shareUrl={item.link_share}
              />
            );
          } else {
            return null;
          }
        })}
      </Masonry>
    </div>
  );
};

export default DataList;
