"use client";

import Masonry from "react-masonry-css";
import { useEffect, useState } from "react";
import TikTokCard from "./tiktokCard";
import NewsCard from "./newsCard";
import YouTubeCard from "./YoutubeCard";
interface SocialItem {
  type: "facebook" | "tiktok" | "news" | "youtube";
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
      const url = `${process.env.NEXT_PUBLIC_API_URL}/data`;
      if (!process.env.NEXT_PUBLIC_API_URL) {
        console.warn("Biến môi trường NEXT_PUBLIC_API_URL chưa được cấu hình.");
        return;
      }

      const response = await fetch(url, {
        method: "GET",
      }).catch((err) => {
        console.error("Fetch failed (CORS?):", err.message || err);
        return null;
      });

      if (!response || !response.ok) {
        console.warn("Response not OK or null (CORS fail?)");
        return;
      }

      const json = await response.json().catch((err) => {
        console.error("JSON parse error:", err.message || err);
        return null;
      });

      if (!json) {
        console.warn("No valid JSON data received");
        return;
      }

      const enhancedData = (json as SocialItem[]).map((item) => {
        try {
          if (item.type === "tiktok") {
            return {
              ...item,
              video_display: `https://www.tiktok.com/player/v1/${item.id_socialMedia}?autoplay=0&loop=1`,
            };
          } else if (item.type === "youtube") {
            return {
              ...item,
              video_display: `https://www.youtube.com/embed/${item.id_socialMedia}`,
            };
          }
          return item;
        } catch (mapError) {
          console.error(
            "Error mapping item:",
            mapError instanceof Error ? mapError.message : mapError,
            item
          );
          return item;
        }
      });

      setData(enhancedData);
    } catch (err) {
      console.error("Fetch error:", err instanceof Error ? err.message : err);
      setError("An error occurred while loading data.");
    }
  };

  const breakpointColumnsObj = {
    default: 6,
    1536: 5,
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
    <section className="px-4 sm:px-6 md:px-12 lg:px-28 xl:px-40 2xl:px-40 py-24 ">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Follow us at @vieentmusic
      </h1>
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
          } else if (item.type === "youtube") {
            return (
              <YouTubeCard
                key={index}
                videoUrl={item.video_display}
                caption={item.caption}
                date={item.date}
                share_url={item.link_share}
                imageUrl={item.image_url}
              />
            );
          } else {
            return null;
          }
        })}
      </Masonry>
    </section>
  );
};

export default DataList;
