import Layout from "@/components/layout";
import HeroSection from "@/components/home/hero-section";
import WhoAreWeSection from "@/components/home/who-are-we-section";
import StatsSection from "@/components/home/stats-section";
import MusicMonetizedSection from "@/components/home/music-monetized-section";
import FindUsSection from "@/components/home/find-us-section";
import TT from "@/components/home/tt";
// import { PricingCards } from "@/components/ui/pricingCards";
import TiktokList from "@/components/ui/listData";
import TikTokCard from "@/components/ui/tiktokCard";
import FacebookNewsCard from "@/components/ui/newsCard";
import { Hello } from "@/components/ui/t2";
import { PricingCards } from "@/components/ui/t1";

export default function Home() {
  return (
    <Layout>
      <HeroSection />

      <WhoAreWeSection />
      <TiktokList />
      {/* 
      <TikTokCard
        videoUrl="https://www.tiktok.com/player/v1/7493954932547112199?autoplay=0&loop=1"
        caption="Sóc Trăng Drill rồi đến Cà Mau Drill tui hóng tỉnh miền tây tiếp theo :))) #camaudrill #jombie #sakh"
        date="April 16, 2025"
      />
      <FacebookNewsCard
        imageUrl="https://scontent-atl3-1.xx.fbcdn.net/v/t51.75761-15/491496733_17897505543187229_4704580110926162922_n.jpg?stp=dst-jpg_p720x720_tt6&_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_ohc=Scr1XJVhMMEQ7kNvwEiOjpc&_nc_oc=AdlY1cUwoZZwb7kg3ztlGQZUOMCusg_jyuNc5ETdj4v6bSRNLstfqiSRq_H3-3vOJoE&_nc_zt=23&_nc_ht=scontent-atl3-1.xx&edm=AKIiGfEEAAAA&_nc_gid=J8nLgIHbD2Vc9ktMJe8Gww&oh=00_AfEwy2f1ehifoy-qoieE-a4WZCMcovp8IQ1kMdfVNx5lFQ&oe=68066A0C"
        caption="Chúc mừng “Hoang Tưởng Đêm Khuya” (OST Quỷ Nhập Tràng) chính thức đạt 1 triệu view trên YOUTUBE"
        date="April 16, 2025"
        shareUrl="https://www.facebook.com/134402033403353_1403517994244939"
      /> */}
      {/* <PricingCards /> */}
      <StatsSection />
      {/* <Hello /> */}
      <MusicMonetizedSection />
      {/* 
      <StatsSection />
     
      <FindUsSection /> */}
    </Layout>
  );
}
