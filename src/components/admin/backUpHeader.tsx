"use client";
import { FiSearch, FiMenu, FiBell, FiMoon } from "react-icons/fi";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-6 py-4 border-b bg-white text-black">
      <div className="flex items-center gap-4">
        <button className="p-2 rounded-lg border hover:bg-gray-100">
          <FiMenu className="text-lg" />
        </button>
        <div className="relative flex items-center bg-gray-100 rounded-md px-3 py-2 w-[280px]">
          <FiSearch className="text-gray-500 text-sm mr-2" />
          <input
            type="text"
            placeholder="Search or type command..."
            className="bg-transparent outline-none text-sm w-full"
          />
          <div className="ml-2 text-xs px-1 py-0.5 border rounded bg-white text-gray-400">
            ⌘K
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="w-9 h-9 flex items-center justify-center rounded-full border hover:bg-gray-100">
          <FiMoon />
        </button>
        <button className="w-9 h-9 flex items-center justify-center rounded-full border hover:bg-gray-100">
          <FiBell />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Image
              src="/images/avatar.png"
              alt="Avatar"
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-sm font-medium">Admin ANS</span>
        </div>
      </div>
    </header>
  );
}
