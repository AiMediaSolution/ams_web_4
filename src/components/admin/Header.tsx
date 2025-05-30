"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  FiMenu,
  FiUser,
  FiSettings,
  FiLogOut,
  FiHelpCircle,
} from "react-icons/fi";
import { MdExpandMore } from "react-icons/md";
import { useSidebar } from "@/components/admin/SidebarContext";

export default function Header() {
  const { toggle } = useSidebar();
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

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
              unoptimized
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-sm font-medium">Admin ANS</span>
          <MdExpandMore
            className={`text-xl transition-transform ${
              openDropdown ? "rotate-180" : ""
            }`}
          />
        </button>

        {openDropdown && (
          <div className="absolute right-0 mt-2 z-40 w-[260px] p-3 flex flex-col rounded-xl border border-gray-200 bg-white shadow-theme-lg dark:bg-gray-dark dark:border-gray-800">
            <div className="mb-3">
              <p className="font-semibold text-sm">Admin ANS</p>
              <p className="text-sm text-gray-500">admin@email.com</p>
            </div>

            <ul className="space-y-2 text-sm text-gray-700 font-medium">
              <li>
                <Link
                  href="/admin/admin-profile"
                  className="flex items-center gap-4 p-2 rounded-md font-semibold hover:bg-gray-100 hover:text-gray-900"
                >
                  <FiUser className="text-gray-500 text-xl" /> Profile
                </Link>
              </li>
              <li>
                <Link
                  href="/account/settings"
                  className="flex items-center gap-4 p-2 rounded-md font-semibold hover:bg-gray-100 hover:text-gray-900"
                >
                  <FiSettings className="text-gray-500 text-xl" /> Account
                  settings
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="flex items-center gap-4 p-2 rounded-md font-semibold hover:bg-gray-100 hover:text-gray-900"
                >
                  <FiHelpCircle className="text-gray-500 text-xl" /> Support
                </Link>
              </li>

              <hr className="my-2" />

              <li
                onClick={handleLogout}
                className="flex items-center gap-2 p-2 rounded-md font-semibold text-red-500 hover:bg-gray-100 hover:text-gray-900 cursor-pointer"
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
