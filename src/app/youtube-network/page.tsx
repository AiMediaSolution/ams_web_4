import {
  FaDollarSign,
  FaChartLine,
  FaPaperPlane,
  FaRegCircle,
} from "react-icons/fa";
import { FiCheckSquare } from "react-icons/fi";
import Layout from "@/components/layout";
import Image from "next/image";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function YouTubeNetworkPage() {
  const rightsData = [
    "Provides Full-Service Content ID (CID) to Broadcasters, Studios, Networks and Original Content Rights Holders",
    "Provides Branded Channel Management",
    "Provides Music Rights Management",
    "Allows maximization of Ad Revenue and Protection and Monitoring of Content on YouTube.",
  ];

  return (
    <Layout>
      <section className="bg-white text-black px-4 sm:px-6 md:px-8">
        <div className="relative h-48 sm:h-64 md:h-80 w-full">
          <Image
            src="/images/hero-bg.jpeg"
            alt="YouTube Network Header"
            fill
            className="object-cover object-center brightness-50"
          />
        </div>

        <div className="max-w-5xl mx-auto text-center pt-12 sm:pt-16">
          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold leading-tight">
            AI MEDIA SOLUTION YOUTUBE CONTENT <br /> CREATORS NETWORK
          </h2>
          <div className="flex justify-center items-center gap-2 mt-3 mb-6">
            <span className="w-20 sm:w-28 md:w-32 h-[1px] bg-[#333333]"></span>
            <FaRegCircle className="text-cyan-400 text-xs sm:text-sm" />
            <span className="w-20 sm:w-28 md:w-32 h-[1px] bg-[#333333]"></span>
          </div>

          <p className="text-gray-700 text-sm sm:text-base max-w-3xl mx-auto mb-3 leading-relaxed text-justify">
            <strong>Ai Media Solution Youtube Content Creators Network</strong>{" "}
            is a collection of over 500,000 videos that have served over 10
            Billion hours of video under{" "}
            <strong>our Managed CMS and Publishing CMS</strong>. Trending
            Digital allows current YouTube channel owners as well as new video
            creators to expand their views and revenues by joining the Trending
            Digital YouTube MCN.
          </p>
        </div>

        <div className="relative w-full max-w-6xl mx-auto mt-12 md:mt-20 mb-16 md:mb-20">
          <p className="text-gray-700 text-sm sm:text-base w-full mx-auto text-justify mb-8">
            If you are a content producer/owner and are looking to start earning
            revenue immediately from your video or music content, contact us to
            begin earning revenue in as little as 1 business day from today!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 text-center relative z-10">
            {[
              {
                icon: <FaDollarSign size={28} />,
                desc: "Provides immediate monetization of video views on your YouTube Channel – start earning today!",
              },
              {
                icon: <FaChartLine size={28} />,
                desc: "Provides video, tag and channel optimization for users who want to grow their views and monetization",
              },
              {
                icon: <FaPaperPlane size={28} />,
                desc: "Directs traffic from its existing Network of over 3B views/month to get new videos exposure",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <div className="flex items-center justify-center mb-6">
                  <span className="hidden sm:inline-block w-28  h-[1px] bg-gray-300"></span>
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-cyan-400 text-white rounded-full flex items-center justify-center shadow-md">
                    {item.icon}
                  </div>
                  <span className="hidden sm:inline-block w-28  h-[1px] bg-gray-300"></span>
                </div>
                <p className="text-gray-700 text-sm sm:text-base text-justify max-w-xs">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#f9f9f9] py-12 sm:py-16 px-4 sm:px-6 md:px-12">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
            <div className="md:col-span-2">
              <div className="pb-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 relative inline-block pb-2">
                  AI MEDIA SOLUTION RIGHTS MANAGEMENT SOLUTION
                  <span className="absolute left-0 bottom-0 w-20 sm:w-28 md:w-40 h-[3px] bg-cyan-400 mt-4"></span>
                </h2>
              </div>
              <div className="relative w-full">
                <ul className="">
                  {rightsData.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-4 sm:gap-6">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white text-cyan-400 clip-hexagon shadow-md flex items-center justify-center">
                          <FiCheckSquare className="text-base sm:text-xl" />
                        </div>
                        {idx < rightsData.length - 1 && (
                          <div className="w-px h-8 sm:h-10 border-l border-dashed border-gray-400" />
                        )}
                      </div>
                      <p className="text-sm sm:text-base text-gray-800 leading-relaxed max-w-full sm:max-w-md pt-1">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="text-center md:text-left flex flex-col items-center md:items-start md:col-span-1">
              <div className="relative w-60 h-32 sm:w-80 sm:h-40 md:w-96 md:h-60 mb-6">
                <Image
                  src="/images/youtube-certified.png"
                  alt="YouTube Certified"
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-gray-600 text-sm sm:text-base max-w-md">
                <strong>Ai Media Solution</strong> under one group, we provide
                multi-solutions and optimize revenue on digital platforms and
                YouTube.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
