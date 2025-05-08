"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const MusicMonetizedSection = () => {
  return (
    <section className="py-12 md:py-24 bg-white px-16 text-black max-sm:px-3 ">
      <div className="container mx-auto px-4 -py-6">
        <div className="text-center mb-12">
          <h2 className="section-title max-sm:text-4xl mb-4 max-sm:font-semibold">
            Your Music Monetized On The Top UGC Platforms
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Earn revenue from YouTube, Facebook, and Instagram.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <div className="relative w-full h-[240px] sm:h-[300px] md:h-[400px]">
              <Image
                src="/images/music-monetized.png"
                alt="Music Monetization"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 2,
              scale: { type: "spring", bounce: 0.2 },
            }}
          >
            <h3 className="section-subtitle mb-4">YouTube Content ID</h3>
            <p className="text-gray-700 mb-6">
              A team of YouTube Certified Content ID specialists. Our UGC
              experts bring extensive industry knowledge and experience
              monetizing small and large music catalogs on YouTube. By
              partnering with Identifyy, you&rsquo;ll gain valuable insight into
              the usage of your music on YouTube and gain control over which
              third-party videos are allowed to remain up to be monetized and
              which videos you&rsquo;d like us to take down.
            </p>
            <div className="flex flex-wrap gap-2 mt-6">
              {[
                "YouTube",
                "Facebook",
                "Instagram",
                "Content ID",
                "Monetization",
              ].map((tag, i) => (
                <span
                  key={i}
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MusicMonetizedSection;
