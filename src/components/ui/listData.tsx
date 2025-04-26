// components/dataList.tsx
"use client";
import Masonry from "react-masonry-css";
import { useEffect } from "react";
import TikTokCard from "./tiktokCard";
import NewsCard from "./newsCard";
import { image } from "framer-motion/client";

const DataList = () => {
  const videoList = [
    {
      videoUrl:
        "https://www.tiktok.com/player/v1/7296729533951118594?autoplay=0&loop=1",
      type: "news",
      caption:
        "Sóc Trăng Drill rồi đến Cà Mau Drill tui hóng tỉnh miền tây tiếp theo :))) #camaudrill #jombie #sakh",
      date: "April 16, 2025",
      shareUrl: "https://www.facebook.com/134402033403353_1403517994244939",
      imageUrl:
        "https://scontent-atl3-1.xx.fbcdn.net/v/t51.75761-15/491496733_17897505543187229_4704580110926162922_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Scr1XJVhMMEQ7kNvwEiOjpc&_nc_oc=AdlY1cUwoZZwb7kg3ztlGQZUOMCusg_jyuNc5ETdj4v6bSRNLstfqiSRq_H3-3vOJoE&_nc_zt=23&_nc_ht=scontent-atl3-1.xx&edm=AKIiGfEEAAAA&_nc_gid=J8nLgIHbD2Vc9ktMJe8Gww&oh=00_AfEwy2f1ehifoy-qoieE-a4WZCMcovp8IQ1kMdfVNx5lFQ&oe=68066A0C",
    },
    {
      videoUrl:
        "https://www.tiktok.com/player/v1/7296729533951118594?autoplay=0&loop=1",
      type: "tiktok",
      caption:
        "Sóc Trăng Drill rồi đến Cà Mau Drill tui hóng tỉnh miền tây tiếp theo :))) #camaudrill #jombie #sakh",
      date: "April 16, 2025",
      shareUrl: "https://www.facebook.com/134402033403353_1403517994244939",
      imageUrl:
        "https://scontent-atl3-1.xx.fbcdn.net/v/t51.75761-15/491496733_17897505543187229_4704580110926162922_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Scr1XJVhMMEQ7kNvwEiOjpc&_nc_oc=AdlY1cUwoZZwb7kg3ztlGQZUOMCusg_jyuNc5ETdj4v6bSRNLstfqiSRq_H3-3vOJoE&_nc_zt=23&_nc_ht=scontent-atl3-1.xx&edm=AKIiGfEEAAAA&_nc_gid=J8nLgIHbD2Vc9ktMJe8Gww&oh=00_AfEwy2f1ehifoy-qoieE-a4WZCMcovp8IQ1kMdfVNx5lFQ&oe=68066A0C",
    },
    {
      videoUrl:
        "https://www.tiktok.com/player/v1/7296729533951118594?autoplay=0&loop=1",
      type: "tiktok",
      shareUrl: "https://www.facebook.com/134402033403353_1403517994244939",
      caption:
        "Sóc Trăng Drill rồi đến Cà Mau Drill tui hóng tỉnh miền tây tiếp theo :))) #camaudrill #jombie #sakh",
      date: "April 16, 2025",
      imageUrl:
        "https://scontent-atl3-1.xx.fbcdn.net/v/t51.75761-15/491496733_17897505543187229_4704580110926162922_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Scr1XJVhMMEQ7kNvwEiOjpc&_nc_oc=AdlY1cUwoZZwb7kg3ztlGQZUOMCusg_jyuNc5ETdj4v6bSRNLstfqiSRq_H3-3vOJoE&_nc_zt=23&_nc_ht=scontent-atl3-1.xx&edm=AKIiGfEEAAAA&_nc_gid=J8nLgIHbD2Vc9ktMJe8Gww&oh=00_AfEwy2f1ehifoy-qoieE-a4WZCMcovp8IQ1kMdfVNx5lFQ&oe=68066A0C",
    },
    {
      videoUrl:
        "https://www.tiktok.com/player/v1/7493954932547112199?autoplay=0&loop=1",
      type: "news",
      shareUrl: "https://www.facebook.com/134402033403353_1403517994244939",
      caption:
        "Sóc Trăng Drill rồi đến Cà Mau Drill tui hóng tỉnh miền tây tiếp theo :))) #camaudrill #jombie #sakh",
      date: "April 16, 2025",
      imageUrl:
        "https://scontent-atl3-1.xx.fbcdn.net/v/t51.75761-15/491496733_17897505543187229_4704580110926162922_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Scr1XJVhMMEQ7kNvwEiOjpc&_nc_oc=AdlY1cUwoZZwb7kg3ztlGQZUOMCusg_jyuNc5ETdj4v6bSRNLstfqiSRq_H3-3vOJoE&_nc_zt=23&_nc_ht=scontent-atl3-1.xx&edm=AKIiGfEEAAAA&_nc_gid=J8nLgIHbD2Vc9ktMJe8Gww&oh=00_AfEwy2f1ehifoy-qoieE-a4WZCMcovp8IQ1kMdfVNx5lFQ&oe=68066A0C",
    },
    {
      videoUrl:
        "https://www.tiktok.com/player/v1/7493954932547112199?autoplay=0&loop=1",
      type: "tiktok",
      shareUrl: "https://www.facebook.com/134402033403353_1403517994244939",
      caption:
        "Sóc Trăng Drill rồi đến Cà Mau Drill tui hóng tỉnh miền tây tiếp theo :))) #camaudrill #jombie #sakh",
      date: "April 16, 2025",
      imageUrl:
        "https://scontent-atl3-1.xx.fbcdn.net/v/t51.75761-15/491496733_17897505543187229_4704580110926162922_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Scr1XJVhMMEQ7kNvwEiOjpc&_nc_oc=AdlY1cUwoZZwb7kg3ztlGQZUOMCusg_jyuNc5ETdj4v6bSRNLstfqiSRq_H3-3vOJoE&_nc_zt=23&_nc_ht=scontent-atl3-1.xx&edm=AKIiGfEEAAAA&_nc_gid=J8nLgIHbD2Vc9ktMJe8Gww&oh=00_AfEwy2f1ehifoy-qoieE-a4WZCMcovp8IQ1kMdfVNx5lFQ&oe=68066A0C",
    },
    {
      videoUrl:
        "https://www.tiktok.com/player/v1/7493954932547112199?autoplay=0&loop=1",
      type: "news",
      shareUrl: "https://www.facebook.com/134402033403353_1403517994244939",
      caption:
        "Sóc Trăng Drill rồi đến Cà Mau Drill tui hóng tỉnh miền tây tiếp theo :))) #camaudrill #jombie #sakh",
      date: "April 16, 2025",
      imageUrl:
        "https://scontent-atl3-1.xx.fbcdn.net/v/t51.75761-15/491496733_17897505543187229_4704580110926162922_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Scr1XJVhMMEQ7kNvwEiOjpc&_nc_oc=AdlY1cUwoZZwb7kg3ztlGQZUOMCusg_jyuNc5ETdj4v6bSRNLstfqiSRq_H3-3vOJoE&_nc_zt=23&_nc_ht=scontent-atl3-1.xx&edm=AKIiGfEEAAAA&_nc_gid=J8nLgIHbD2Vc9ktMJe8Gww&oh=00_AfEwy2f1ehifoy-qoieE-a4WZCMcovp8IQ1kMdfVNx5lFQ&oe=68066A0C",
    },
    {
      videoUrl:
        "https://www.tiktok.com/player/v1/7493954932547112199?autoplay=0&loop=1",
      type: "tiktok",
      shareUrl: "https://www.facebook.com/134402033403353_1403517994244939",
      caption:
        "Sóc Trăng Drill rồi đến Cà Mau Drill tui hóng tỉnh miền tây tiếp theo :))) #camaudrill #jombie #sakh",
      date: "April 16, 2025",
      imageUrl:
        "https://scontent-atl3-1.xx.fbcdn.net/v/t51.75761-15/491496733_17897505543187229_4704580110926162922_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Scr1XJVhMMEQ7kNvwEiOjpc&_nc_oc=AdlY1cUwoZZwb7kg3ztlGQZUOMCusg_jyuNc5ETdj4v6bSRNLstfqiSRq_H3-3vOJoE&_nc_zt=23&_nc_ht=scontent-atl3-1.xx&edm=AKIiGfEEAAAA&_nc_gid=J8nLgIHbD2Vc9ktMJe8Gww&oh=00_AfEwy2f1ehifoy-qoieE-a4WZCMcovp8IQ1kMdfVNx5lFQ&oe=68066A0C",
    },
    {
      videoUrl:
        "https://www.tiktok.com/player/v1/7493954932547112199?autoplay=0&loop=1",
      type: "news",
      shareUrl: "https://www.facebook.com/134402033403353_1403517994244939",
      caption:
        "Sóc Trăng Drill rồi đến Cà Mau Drill tui hóng tỉnh miền tây tiếp theo :))) #camaudrill #jombie #sakh",
      date: "April 16, 2025",
      imageUrl:
        "https://scontent-atl3-1.xx.fbcdn.net/v/t51.75761-15/491496733_17897505543187229_4704580110926162922_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Scr1XJVhMMEQ7kNvwEiOjpc&_nc_oc=AdlY1cUwoZZwb7kg3ztlGQZUOMCusg_jyuNc5ETdj4v6bSRNLstfqiSRq_H3-3vOJoE&_nc_zt=23&_nc_ht=scontent-atl3-1.xx&edm=AKIiGfEEAAAA&_nc_gid=J8nLgIHbD2Vc9ktMJe8Gww&oh=00_AfEwy2f1ehifoy-qoieE-a4WZCMcovp8IQ1kMdfVNx5lFQ&oe=68066A0C",
    },
  ];
  const breakpointColumnsObj = {
    default: 5,
    1280: 5,
    768: 2,
    480: 1,
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="px-8 md:px-80 my-48">
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {videoList.map((data, index) => {
          if (data.type === "tiktok") {
            return (
              <TikTokCard
                key={index}
                videoUrl={data.videoUrl}
                caption={data.caption}
                date={data.date}
              />
            );
          } else if (data.type === "news") {
            return (
              <NewsCard
                key={index}
                imageUrl={data.imageUrl}
                caption={data.caption}
                date={data.date}
                shareUrl={data.shareUrl}
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
