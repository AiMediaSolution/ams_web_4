"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "YouTube Network", href: "/youtube-network" },
    { label: "Digital Distribution", href: "/digital-distribution" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "bg-black/70 text-white" : "text-white"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between py-2 md:py-0">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <div
            className={`relative transition-all duration-700 ${
              scrolled ? "h-16 w-16" : "h-24 w-24"
            }`}
          >
            <motion.div
              animate={{ scale: scrolled ? 0.9 : 1 }}
              transition={{ duration: 0.7 }}
              className="relative w-full h-full"
            >
              <Image
                src="/images/ANS_noname.png"
                alt="Logo"
                fill
                className="object-contain"
              />
            </motion.div>
          </div>
          {!scrolled && (
            <span className="ml-2 font-bold text-xl hidden sm:inline-block">
              Music & Entertainment
            </span>
          )}
        </Link>
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${
                pathname === link.href
                  ? "nav-link-active font-semibold border-b-2 border-cyan-400"
                  : "nav-link hover:text-cyan-400"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={
                  menuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.4 }}
            className="fixed top-0 right-0 h-full w-64 bg-black text-white shadow-lg z-40 flex flex-col p-6 space-y-6 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-lg ${
                  pathname === link.href
                    ? "text-cyan-400 font-semibold"
                    : "hover:text-cyan-300"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
