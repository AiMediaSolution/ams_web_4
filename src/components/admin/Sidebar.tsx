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
import { CiCalendar, CiViewTable } from "react-icons/ci";
import { RxDashboard } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSidebar } from "@/components/admin/SidebarContext";

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
      { label: "Dashboard", icon: <RxDashboard />, href: "/admin" },
      { label: "Calendar", icon: <CiCalendar />, href: "/admin/calendar" },
      {
        label: "Admin Profile",
        icon: <MdPerson />,
        href: "/admin/admin-profile",
      },
      {
        label: "Forms",
        icon: <CiViewTable />,
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
  const { collapsed, toggle } = useSidebar();
  const pathname = usePathname();
  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});
  useEffect(() => {
    const saved = localStorage.getItem("sidebarCollapsed");
    if (saved === "true") toggle();
  }, []);

  useEffect(() => {
    localStorage.setItem("sidebarCollapsed", collapsed.toString());
  }, [collapsed]);

  const toggleMenu = (label: string) => {
    setOpenMenus((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <aside
      className={`${
        collapsed ? "w-22" : "w-72"
      } transition-all duration-300 bg-white border-r border-gray-200 min-h-screen p-4`}
    >
      <div className="flex justify-center mb-6">
        <Image
          src="/images/logo_admin.png"
          alt="Logo"
          width={collapsed ? 40 : 160}
          height={collapsed ? 40 : 80}
          className="transition-all duration-300"
        />
      </div>

      {sidebarMenu.map((section) => (
        <div key={section.title} className="mb-6 text-sm">
          {!collapsed && (
            <p className="text-gray-400 text-xs font-semibold mb-2 w-">
              {section.title}
            </p>
          )}
          <ul className="space-y-2">
            {section.items.map((item) => {
              const isActive =
                pathname === item.href ||
                item.children?.some((child) => child.href === pathname);

              const iconWrapperClass = `
                flex items-center justify-center 
                ${collapsed ? "w-10 h-10" : "w-10 h-10"} 
                rounded
                ${
                  isActive
                    ? "bg-brand-50 text-brand-500"
                    : "hover:bg-gray-100 text-[#344034]"
                }
              `;

              return (
                <li key={item.label}>
                  {item.children ? (
                    <>
                      <motion.button
                        onClick={() => toggleMenu(item.label)}
                        whileHover={{ scale: collapsed ? 1.1 : 1 }}
                        className={`group relative w-full flex items-center gap-3 text-left px-2 py-2 rounded-md font-semibold ${
                          isActive
                            ? "bg-brand-50 text-brand-500"
                            : "hover:bg-gray-100 text-[#344054]"
                        } ${!collapsed ? "justify-between" : "justify-center"}`}
                      >
                        <span className={iconWrapperClass}>
                          <span className="text-2xl">{item.icon}</span>
                        </span>

                        {!collapsed && (
                          <span className="flex-1">{item.label}</span>
                        )}

                        {!collapsed && (
                          <MdExpandMore
                            className={`transform transition-transform text-2xl font-extrabold  ${
                              openMenus[item.label] ? "rotate-180" : ""
                            }`}
                          />
                        )}

                        {collapsed && (
                          <span className="absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 text-xs rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                            {item.label}
                          </span>
                        )}
                      </motion.button>

                      <AnimatePresence initial={false}>
                        {!collapsed &&
                          item.children &&
                          openMenus[item.label] && (
                            <motion.ul
                              key="submenu"
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.2, ease: "easeOut" }}
                              className="pl-10 mt-1 space-y-1 text-sm text-gray-600 overflow-hidden"
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
                    <motion.div whileHover={{ scale: collapsed ? 1.1 : 1 }}>
                      <Link
                        href={item.href || "#"}
                        className={`group relative flex items-center gap-3 px-2 py-2 rounded-md justify-start ${
                          isActive
                            ? "bg-brand-50 text-brand-500"
                            : "hover:bg-gray-100 text-[#344054]"
                        }`}
                      >
                        <span className={iconWrapperClass}>
                          <span className="text-2xl">{item.icon}</span>
                        </span>
                        {!collapsed && (
                          <span className="flex-1 text-[#344054] font-semibold ">
                            {item.label}
                          </span>
                        )}

                        {collapsed && (
                          <span className=" absolute left-full top-1/2 -translate-y-1/2 ml-2 px-2 py-1 text-xs rounded bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                            {item.label}
                          </span>
                        )}
                      </Link>
                    </motion.div>
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
