"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  FiMenu,
  FiUser,
  FiSettings,
  FiLogOut,
  FiHelpCircle,
} from "react-icons/fi";
import { MdExpandMore } from "react-icons/md";
import Image from "next/image";
import { useSidebar } from "@/components/admin/SidebarContext";

export default function Header() {
  const { toggle } = useSidebar();
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // Đóng dropdown nếu click ra ngoài
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    router.replace("/login");
  };

  return (
    <header className="flex justify-between items-center px-6 py-4 border-b bg-white text-black relative z-50">
      <div className="flex items-center gap-4">
        <button
          className="p-2 rounded-lg border hover:bg-gray-100"
          onClick={toggle}
        >
          <FiMenu className="text-lg" />
        </button>
      </div>

      {/* Avatar + Dropdown */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setOpenDropdown((prev) => !prev)}
          className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-lg"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Image
              src="/images/avatar.png"
              alt="Avatar"
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-sm font-medium">Admin AMS</span>
          <MdExpandMore
            className={`transform transition-transform text-xl ${
              openDropdown ? "rotate-180" : ""
            }`}
          />
        </button>

        {openDropdown && (
          <div className="absolute z-40 right-0 mt-2 rounded-xl border border-gray-200 bg-white  shadow-theme-lg  dark:bg-gray-dark  flex w-[260px] flex-col  p-3 shadow-theme-lg dark:border-gray-800 dark:bg-gray-dark">
            <div className="mb-3">
              <p className="font-semibold text-sm">Admin AMS</p>
              <p className="text-sm text-gray-500">admin@email.com</p>
            </div>
            <ul className="space-y-2 text-sm text-gray-700 font-medium">
              <li className="flex items-center gap-2 hover:bg-gray-100 hover:text-gray-900 p-2 rounded-md cursor-pointer font-semibold">
                <FiUser className="text-gray-500 text-xl" /> Edit profile
              </li>
              <li className="flex items-center gap-2 hover:bg-gray-100 p-2 hover:text-gray-900 rounded-md cursor-pointer font-semibold">
                <FiSettings className="text-gray-500 text-xl" /> Account
                settings
              </li>
              <li className="flex items-center gap-2 hover:bg-gray-100 p-2 hover:text-gray-900 rounded-md cursor-pointer font-semibold">
                <FiHelpCircle className="text-gray-500 text-xl" /> Support
              </li>
              <hr className="my-2" />
              <li
                onClick={handleLogout}
                className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-md hover:text-gray-900 cursor-pointer text-red-500 font-semibold"
              >
                <FiLogOut className="text-xl" /> Sign out
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
