"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { FaUser, FaLock, FaUserCircle } from "react-icons/fa";
import { refreshToken } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ username: "", password: "" });
  const [errors, setErrors] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("accessToken");

      if (!token) {
        const refreshed = await refreshToken();
        if (refreshed && pathname !== "/admin/home") {
          router.push("/admin/home");
        }
      }
    };

    checkAuth();
  }, [pathname, router]);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));

    if (value.trim() === "") {
      setErrors((prev) => ({ ...prev, [name]: `${name} is required` }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      username: form.username ? "" : "Username is required",
      password: form.password ? "" : "Password is required",
    };
    setErrors(newErrors);

    if (newErrors.username || newErrors.password) return;

    try {
      setLoading(true);
      const res = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      console.log("Response status:", res);
      if (res.ok) {
        const data = await res.json();
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        toast.success("Login successful!");
        setTimeout(() => router.push("/admin/home"), 1500);
      } else {
        const errData = await res.json();
        toast.error(errData.message || "Login failed!");
      }
    } catch (err) {
      toast.error("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <ToastContainer position="top-right" />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#dbeafe] via-white to-[#f0f9ff] px-4">
        <div className="backdrop-blur-lg bg-white/80 border border-blue-200 rounded-2xl shadow-xl w-full max-w-md p-8 sm:p-10">
          <div className="flex justify-center mb-6">
            <FaUserCircle className="text-blue-400 text-6xl drop-shadow" />
          </div>
          <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">
            Admin Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="relative text-black">
                <FaUser className="absolute top-3.5 left-3 text-blue-300" />
                <input
                  name="username"
                  placeholder="Username"
                  value={form.username}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-2 rounded-md border ${
                    errors.username
                      ? "border-red-400"
                      : "border-gray-300 focus:border-blue-400"
                  } focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all`}
                />
              </div>
              {errors.username && (
                <p className="text-red-500 text-xs mt-1">{errors.username}</p>
              )}
            </div>

            <div>
              <div className="relative text-black">
                <FaLock className="absolute top-3.5 left-3 text-blue-300" />
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={form.password}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-2 rounded-md border ${
                    errors.password
                      ? "border-red-400"
                      : "border-gray-300 focus:border-blue-400"
                  } focus:outline-none focus:ring-2 focus:ring-blue-200 transition-all`}
                />
              </div>
              {errors.password && (
                <p className="text-red-500 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-2 rounded-md bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 text-white font-semibold shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              {loading ? "Logging in..." : "Log In"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
