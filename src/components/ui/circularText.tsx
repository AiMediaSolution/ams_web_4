"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface CircularTextProps {
  text: string;
}

export const CircularText = ({ text }: CircularTextProps) => {
  const textContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textContainerRef.current) {
      const chars = text.split("");
      const degreeStep = 360 / chars.length;

      textContainerRef.current.innerHTML = chars
        .map(
          (char, i) =>
            `<span style="
              position: absolute;
              left: 50%;
              transform: rotate(${i * degreeStep}deg);
              transform-origin: 0 100px;
              font-size: 1.2em;
            ">${char}</span>`
        )
        .join("");
    }
  }, [text]);

  return (
    <div className="flex items-center justify-center bg-[#f7f7f7] w-[200px]">
      <div className="relative w-[200px] h-[200px] rounded-full flex items-center justify-center">
        <div
          className="absolute w-[180px] h-[180px] rounded-full bg-center
          bg-cover"
        >
          <Image
            src="/images/circularText_logo.png"
            alt="Logo"
            width={60}
            height={60}
            className="object-cover w-full h-full"
          />
        </div>
        <div
          className="absolute w-full h-full font-mono text-black text-[17px] animate-[spin_8s_linear_infinite]"
          ref={textContainerRef}
        ></div>
      </div>
    </div>
  );
};
