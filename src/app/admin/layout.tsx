"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "@/components/admin/Sidebar";
import Header from "@/components/admin/Header";
import { fetchWithAuth } from "@/lib/auth";
import { SidebarProvider } from "@/components/admin/SidebarContext";
import { checkAdmin } from "@/lib/checkAdmin";
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(true);
  const [loading, setLoading] = useState(true);
  const [isAuthorized, setIsAuthorized] = useState(false);
  useEffect(() => {
    const protectAdmin = async () => {
      try {
        await checkAdmin();
        setIsAuthorized(true);
      } catch {
        router.replace("/login");
      } finally {
        setLoading(false);
      }
    };

    protectAdmin();
  }, []);

  if (loading) {
    return <div className="p-10 text-gray-500">Checking admin access...</div>;
  }

  if (!isAuthorized) return null;

  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col bg-gray-50">
          <Header />
          <main className="flex-1 p-6">{children}</main>
        </div>
      </div>
    </SidebarProvider>
  );
}
