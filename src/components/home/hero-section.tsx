"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Slider from "react-slick";
import { motion } from "framer-motion";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

const heroImages = ["/images/hero-bg1.jpg", "/images/hero-bg.jpeg"];

const HeroSection = () => {
  const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 1.5 }}
      className="absolute z-20 left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full cursor-pointer max-sm:hidden"
      onClick={onClick}
    >
      <BsChevronLeft className="text-white text-3xl" />
    </motion.div>
  );

  const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <motion.div
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: 1.5 }}
      className="absolute z-20 right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 p-2 rounded-full cursor-pointer max-sm:hidden"
      onClick={onClick}
    >
      <BsChevronRight className="text-white text-3xl" />
    </motion.div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    fade: true,
    pauseOnHover: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <section className="relative bg-background h-screen max-h-[800px] flex items-center overflow-hidden flex-col max-sm:max-h-[500px]">
      <div className="absolute inset-0 z-0">
        <Slider {...settings}>
          {heroImages.map((src, index) => (
            <div key={index} className="relative h-screen max-h-[800px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full h-full"
              >
                <Image
                  src={src}
                  alt={`Hero background ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/30" />
              </motion.div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="container mx-auto px-4 relative z-10 text-white flex flex-col items-center justify-center h-full">
        <div className="w-full max-w-4xl text-center">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            AI MEDIA SOLUTION
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            Ai Media Solution allows current YouTube channel owners as well as
            new video creators to expand their views and revenues.
          </motion.p>
          <motion.div
            className="text-primary-foreground flex gap-3 items-center justify-center text-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Link href="/youtube-network">
              <Button className="bg-accent/70 hover:bg-accent/90 text-white border-white rounded-xl font-semibold">
                NETWORK
              </Button>
            </Link>
            <Link href="/contact-us">
              <Button className="bg-accent/70 hover:bg-accent/90 text-white border-white rounded-xl font-semibold">
                CONTACT US
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
