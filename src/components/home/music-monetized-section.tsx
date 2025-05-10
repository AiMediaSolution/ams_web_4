"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const YourMusicMonetizedSection = () => {
  const tagList = [
    "YouTube",
    "Facebook",
    "Instagram",
    "Content ID",
    "Monetization",
  ];

  return (
    <section className="py-12 md:py-24 bg-white px-16 text-black max-sm:px-3">
      <div className="container mx-auto px-4 -py-6">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title max-sm:text-4xl mb-4 max-sm:font-semibold">
            Your Music Monetized On The Top UGC Platforms
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Earn revenue from YouTube, Facebook, and Instagram.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Left: Image Animation */}
          <motion.div
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="relative w-full h-[240px] sm:h-[300px] md:h-[400px]">
              <Image
                src="/images/music-monetized.png"
                alt="Music Monetization"
                fill
                className="object-contain"
              />
            </div>
          </motion.div>

          {/* Right: Content Animation */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <h3 className="section-subtitle mb-4">YouTube Content ID</h3>
            <p className="text-gray-700 mb-6">
              A team of YouTube Certified Content ID specialists. Our UGC
              experts bring extensive industry knowledge and experience
              monetizing small and large music catalogs on YouTube. By
              partnering with Identifyy, you’ll gain valuable insight into the
              usage of your music on YouTube and gain control over which
              third-party videos are allowed to remain up to be monetized and
              which videos you’d like us to take down.
            </p>

            {/* Tags with staggered animation */}
            <motion.div
              className="flex flex-wrap gap-2 mt-6"
              initial="hidden"
              whileInView="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.2,
                  },
                },
              }}
              viewport={{ once: true }}
            >
              {tagList.map((tag, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0 },
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default YourMusicMonetizedSection;
