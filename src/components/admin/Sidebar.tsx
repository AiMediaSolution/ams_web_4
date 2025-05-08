"use client";
import {
  MdDashboard,
  MdCalendarToday,
  MdPerson,
  MdInsertChart,
  MdViewList,
  MdTableChart,
  MdPages,
  MdLock,
  MdWidgets,
  MdExpandMore,
} from "react-icons/md";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type MenuItem = {
  label: string;
  icon?: React.ReactNode;
  href?: string;
  children?: MenuItem[];
};

const sidebarMenu: { title: string; items: MenuItem[] }[] = [
  {
    title: "MENU",
    items: [
      { label: "Dashboard", icon: <MdDashboard />, href: "/admin" },
      { label: "Calendar", icon: <MdCalendarToday />, href: "/admin/calendar" },
      {
        label: "Admin Profile",
        icon: <MdPerson />,
        href: "/admin/admin-profile",
      },
      {
        label: "Forms",
        icon: <MdViewList />,
        children: [
          { label: "Add News", href: "/admin/add-news" },
          { label: "Add data", href: "/admin/add-data" },
        ],
      },

      {
        label: "Tables",
        icon: <MdTableChart />,
        children: [{ label: "Basic Table", href: "#" }],
      },
      {
        label: "Pages",
        icon: <MdPages />,
        children: [{ label: "Home", href: "/admin/home" }],
      },
    ],
  },
  {
    title: "OTHERS",
    items: [
      {
        label: "Charts",
        icon: <MdInsertChart />,
        children: [{ label: "ChartJS", href: "#" }],
      },
      {
        label: "UI Elements",
        icon: <MdWidgets />,
        children: [{ label: "Buttons", href: "#" }],
      },
      {
        label: "Authentication",
        icon: <MdLock />,
        children: [{ label: "Login", href: "/login" }],
      },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  const toggleMenu = (label: string) => {
    setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <aside className="w-72 bg-white border-r border-gray-200 min-h-screen p-6">
      <Image
        src="/images/logo_admin.png"
        alt="Logo"
        width={180}
        height={90}
        className="mb-8"
      />

      {sidebarMenu.map((section) => (
        <div key={section.title} className="mb-6 text-sm">
          <p className="text-gray-400 text-xs font-semibold mb-2">
            {section.title}
          </p>
          <ul className="space-y-2">
            {section.items.map((item) => {
              const isActive =
                pathname === item.href ||
                item.children?.some((child) => child.href === pathname);

              return (
                <li key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => toggleMenu(item.label)}
                        className={`w-full flex items-center justify-between text-left px-2 py-2 rounded-md text-sm ${
                          isActive
                            ? "bg-brand-50 text-brand-500"
                            : "hover:bg-gray-100 text-[#344034]"
                        }`}
                      >
                        <span className="flex items-center gap-3">
                          <span className="text-2xl">{item.icon}</span>
                          {item.label}
                        </span>
                        <MdExpandMore
                          className={`transform transition-transform text-2xl font-extrabold ${
                            openMenus[item.label] ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {item.children && openMenus[item.label] && (
                          <motion.ul
                            key="submenu"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="pl-8 mt-1 space-y-1 text-sm text-gray-600 overflow-hidden"
                          >
                            {item.children.map((child) => {
                              const isChildActive = pathname === child.href;
                              return (
                                <li key={child.label}>
                                  <Link
                                    href={child.href || "#"}
                                    className={`block px-2 py-1 rounded ${
                                      isChildActive
                                        ? "bg-brand-50 text-brand-500"
                                        : "hover:text-indigo-600"
                                    }`}
                                  >
                                    {child.label}
                                  </Link>
                                </li>
                              );
                            })}
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <Link
                      href={item.href || "#"}
                      className={`flex items-center gap-3 px-2 py-2 rounded-md text-sm ${
                        isActive
                          ? "bg-brand-50 text-brand-500"
                          : "hover:bg-gray-100 text-[#344034]"
                      }`}
                    >
                      <span className="text-2xl">{item.icon}</span> {item.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </aside>
  );
}
