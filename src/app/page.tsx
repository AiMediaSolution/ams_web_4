import Layout from "@/components/layout";
import HeroSection from "@/components/home/hero-section";
import WhoAreWeSection from "@/components/home/who-are-we-section";
import StatsSection from "@/components/home/stats-section";
import MusicMonetizedSection from "@/components/home/music-monetized-section";
import SocialMedia from "@/components/ui/listData";

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <WhoAreWeSection />
      <SocialMedia />
      <StatsSection />
      <MusicMonetizedSection />
    </Layout>
  );
}
