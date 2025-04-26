"use client";
import { useEffect, useRef } from "react";

interface CircularTextProps {
  text: string;
}

export const CircularText = ({ text }: CircularTextProps) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      const chars = text.split("");
      textRef.current.innerHTML = chars
        .map(
          (char, i) =>
            `<span style="
              position: absolute;
              left: 50%;
              top: 50%;
              transform-origin: 0 120px;
              transform: rotate(${
                i * (360 / chars.length)
              }deg) translateX(-50%);
              white-space: pre;
            ">${char}</span>`
        )
        .join("");
    }
  }, [text]);

  return (
    <div className="relative w-[300px] h-[300px]">
      <div className="absolute top-1/2 left-1/2 w-[160px] h-[160px] rounded-full overflow-hidden transform -translate-x-1/2 -translate-y-1/2 z-10">
        <img
          src="/images/footer-logo1-removebg-preview.png"
          alt="Logo"
          className="object-cover w-full h-full"
        />
      </div>

      <div
        ref={textRef}
        className="absolute top-1/2 left-1/2 w-full h-full text-black text-[17px] font-mono animate-spin-slow transform -translate-x-1/2 -translate-y-1/2 pointer-events-none"
      ></div>
    </div>
  );
};
