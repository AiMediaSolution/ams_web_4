import Layout from "@/components/layout";
import Image from "next/image";
import { FiCheckSquare } from "react-icons/fi";

export default function DigitalDistributionPage() {
  const platforms = [
    "Apple Music / iTunes",
    "Spotify",
    "YouTube Music",
    "Facebook",
    "Instagram",
    "TikTok",
    "Amazon Music",
    "Deezer",
    "KKBOX",
    "and many more…",
  ];

  return (
    <Layout>
      <section className="bg-white pb-10">
        <div className="relative h-48 sm:h-64 md:h-80 w-full">
          <Image
            src="/images/hero-bg.jpeg"
            alt="Header"
            fill
            className="object-cover object-center brightness-50"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-12 py-16 grid grid-cols-1 md:grid-cols-4 gap-10 items-center">
          <div className="md:col-span-1 flex justify-center">
            <Image
              src="/images/logo_digital.png"
              alt="JJ Digital Music Logo"
              width={570}
              height={344}
              className="max-w-full h-auto"
            />
          </div>
          <div className="md:col-span-3">
            <h2 className="text-xl md:text-2xl font-bold text-blue-700 flex flex-wrap gap-2 items-center mb-4">
              <a href="#" className="no-underline text-blue-700">
                JJ Digital Music
              </a>
              <span className="text-black font-semibold">
                : Digital Music Distribution
              </span>
            </h2>
            <p className="text-gray-700 text-base leading-relaxed font-medium text-justify">
              <strong>AI MEDIA SOLUTION&rsquo;s</strong> boutique digital music
              distribution service,{" "}
              <a href="#" className="text-blue-700 no-underline font-semibold">
                JJ Digital Music
              </a>{" "}
              &ndash; As a music distribution and label services company, always
              accompanies and helps artists so they can achieve their goals in
              the best way.
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-6">
              <a href="#" className="text-blue-700">
                JJ Digital Music
              </a>{" "}
              flies your albums to:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base text-gray-700">
              {platforms.map((platform, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <FiCheckSquare className="text-cyan-400 mt-1" />
                  <span>{platform}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="relative w-full h-64 sm:h-80 md:h-[420px]">
              <Image
                src="/images/music-disrtribution.jpeg"
                alt="Music Distribution"
                fill
                className="object-cover rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
