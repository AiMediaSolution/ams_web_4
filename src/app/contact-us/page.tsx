"use client";

import { useState } from "react";
import Layout from "@/components/layout";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    const newErrors = { ...errors };

    if (field === "name") {
      newErrors.name =
        value.trim().length < 3 ? "Name must be at least 3 characters." : "";
    }
    if (field === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      newErrors.email = !emailRegex.test(value) ? "Invalid email format." : "";
    }
    if (field === "message") {
      newErrors.message =
        value.trim().length < 10
          ? "Message must be at least 10 characters."
          : "";
    }

    setErrors(newErrors);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const hasErrors = Object.values(errors).some((err) => err !== "");
    const hasEmpty = Object.values(formData).some((val) => val.trim() === "");

    if (hasErrors || hasEmpty) {
      toast.error("Please fix the errors before submitting.");
      return;
    }
    setIsSending(true);
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/mail`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast.error(data.error || "Something went wrong.");
      }
    } catch (err) {
      toast.error("Failed to connect to server.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Layout>
      <Toaster position="top-right" />
      <section className="bg-white text-black">
        <div className="relative h-64 md:h-80 w-full">
          <Image
            src="/images/hero-bg.jpeg"
            alt="Contact Header"
            fill
            className="object-cover object-center brightness-50"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Info */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <p className="text-gray-700 mb-6">
              We&rsquo;d love to hear from you! Please fill out the form below
              with your details, and our team will get back to you as soon as
              possible. Whether you have questions, feedback, or business
              inquiries, we&rsquo;re here to help. Your information is secure
              and will only be used to respond to your request. Thank you for
              reaching out!
            </p>
            <ul className="space-y-4 text-sm text-gray-700">
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:pm@mediasolution.ai" className="text-blue-600 ">
                  pm@mediasolution.ai
                </a>
              </li>
              <li>
                <strong>Phone:</strong> +84 123 456 789
              </li>
              <li>
                <strong>Address:</strong> 206/40 Dong Den, Phuong 13, Tan Binh,
                Ho Chi Minh, Viet Nam
              </li>
            </ul>
          </div>
          {/* Form */}
          <form
            className="bg-[#f9f9f9] rounded-lg p-6 shadow-md space-y-4"
            onSubmit={handleSubmit}
          >
            {["name", "email", "message"].map((field) => (
              <div key={field}>
                <label className="block text-sm font-medium mb-1 capitalize">
                  {field}
                </label>
                {field === "message" ? (
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    className={`w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 ${
                      errors.message
                        ? "border-red-500 focus:ring-red-400"
                        : "border-gray-300 focus:ring-cyan-400"
                    }`}
                  />
                ) : (
                  <input
                    type={field === "email" ? "email" : "text"}
                    value={formData[field as keyof typeof formData]}
                    onChange={(e) => handleChange(field, e.target.value)}
                    className={`w-full border px-4 py-2 rounded focus:outline-none focus:ring-2 ${
                      errors[field as keyof typeof errors]
                        ? "border-red-500 focus:ring-red-400"
                        : "border-gray-300 focus:ring-cyan-400"
                    }`}
                  />
                )}
                {errors[field as keyof typeof errors] && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors[field as keyof typeof errors]}
                  </p>
                )}
              </div>
            ))}

            <button
              type="submit"
              disabled={isSending}
              className="bg-cyan-500 text-white px-6 py-2 rounded hover:bg-cyan-600 transition flex items-center gap-2 justify-center"
            >
              {isSending && (
                <svg
                  className="animate-spin h-4 w-4 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  />
                </svg>
              )}
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
        <div className="px-4 sm:px-6 md:px-12 pb-20">
          <div className="max-w-7xl mx-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2848847828473!2d106.6417977!3d10.789479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f003b5c888f%3A0xa1d07e80736baa56!2sAI%20Media%20Solution!5e0!3m2!1svi!2s!4v1745227026734!5m2!1svi!2s"
              width="100%"
              height="500"
              className="rounded-lg border-none w-full"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </Layout>
  );
}
