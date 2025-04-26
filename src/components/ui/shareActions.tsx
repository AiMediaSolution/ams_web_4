"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import "@fortawesome/fontawesome-free/css/all.min.css";

interface ShareActionsProps {
  imageUrl: string;
  shareUrl: string;
}

const ShareActions = ({ imageUrl, shareUrl }: ShareActionsProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const icons = [
    {
      href: `https://twitter.com/share?url=${encodeURIComponent(shareUrl)}`,
      icon: "fab fa-x-twitter opacity-30 hover:opacity-100",
    },
    {
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
        shareUrl
      )}`,
      icon: "fab fa-facebook-f opacity-30 hover:opacity-100",
    },
    {
      href: `mailto:?subject=Check this out&body=${encodeURIComponent(
        shareUrl
      )}`,
      icon: "fas fa-envelope opacity-30 hover:opacity-100",
    },
    {
      href: `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(
        shareUrl
      )}&media=${encodeURIComponent(imageUrl)}`,
      icon: "fab fa-pinterest opacity-30 hover:opacity-100",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const iconVariants = {
    hidden: { opacity: 0, x: 30 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.25,
      },
    },
  };

  return (
    <div
      className="relative group/share"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.i
        className="fas fa-share-alt fa-lg cursor-pointer text-white"
        animate={{ opacity: isHovered ? 0 : 1 }}
        transition={{ duration: 0.2 }}
      ></motion.i>

      <motion.div
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-white bg-opacity-60 px-2 py-1 rounded-full flex gap-2"
        variants={containerVariants}
        initial="hidden"
        animate={isHovered ? "show" : "hidden"}
      >
        {icons.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#354051] hover:text-black"
            variants={iconVariants}
          >
            <i className={item.icon}></i>
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default ShareActions;
