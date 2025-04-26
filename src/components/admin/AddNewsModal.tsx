"use client";

import { useState, useEffect } from "react";
import { FiUploadCloud } from "react-icons/fi";

export default function AddNewsModal({
  isOpen,
  onClose,
  onSubmit,
}: {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (formData: FormData) => void;
}) {
  const [form, setForm] = useState({
    share_url: "",
    caption: "",
    date: "",
  });

  const [errors, setErrors] = useState({
    share_url: "",
    caption: "",
    date: "",
    image: "",
  });

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  useEffect(() => {
    if (imageFile) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result as string);
      reader.readAsDataURL(imageFile);
    } else {
      setImagePreview(null);
    }
  }, [imageFile]);

  const formatsDate = () => {
    const now = new Date();
    return now.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setErrors((prev) => ({
          ...prev,
          image: "Image must be under 5MB.",
        }));
        return;
      }
      setImageFile(file);
      setErrors((prev) => ({ ...prev, image: "" }));
    }
  };

  const handleSubmit = () => {
    const { share_url, caption, date } = form;
    const newErrors = { share_url: "", caption: "", date: "", image: "" };

    if (!share_url) newErrors.share_url = "Share URL is required.";
    if (!caption) newErrors.caption = "Caption is required.";
    if (!date) newErrors.date = "Date is required.";
    if (!imageFile) newErrors.image = "Image is required.";

    if (Object.values(newErrors).some((e) => e !== "")) {
      setErrors(newErrors);
      return;
    }

    let type = "";
    let videoId = "";
    try {
      const url = new URL(share_url);

      if (url.hostname.includes("tiktok.com")) {
        type = "tiktok";
        const match = url.pathname.match(/\/video\/(\d+)/);
        if (match) videoId = match[1];
      } else if (url.hostname.includes("facebook.com")) {
        type = "facebook";
        const match = url.pathname.match(/\/(\d+)_(\d+)/);
        if (match) videoId = match[2];
      } else {
        alert("Only TikTok or Facebook URLs are supported.");
        return;
      }
    } catch {
      setErrors((prev) => ({
        ...prev,
        share_url: "Invalid URL format.",
      }));
      return;
    }

    const formData = new FormData();
    formData.append("type", type);
    formData.append("video_id", videoId);
    formData.append("date_update", formatsDate());
    Object.entries(form).forEach(([key, val]) => formData.append(key, val));
    if (imageFile) formData.append("image", imageFile);

    onSubmit(formData);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div className="bg-white w-full max-w-5xl rounded-lg overflow-hidden shadow-xl">
        <div className="grid md:grid-cols-2">
          {/* Upload Section */}
          <div className="bg-gray-50 flex flex-col items-center justify-center p-6 border-r border-gray-200">
            <div
              className="w-full border-2 border-dashed border-cyan-400 hover:border-cyan-600 rounded-lg flex flex-col items-center justify-center p-6 text-center transition cursor-pointer"
              onClick={() => document.getElementById("imageInput")?.click()}
            >
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="rounded-lg object-contain h-[200px] w-full mb-4"
                />
              ) : (
                <>
                  <FiUploadCloud className="text-5xl text-cyan-500 mb-3" />
                  <p className="text-gray-700 font-semibold">
                    Drag & Drop or click to upload image
                  </p>
                  <p className="text-xs text-gray-400 mt-1">
                    JPG, PNG, GIF | Max 5MB
                  </p>
                </>
              )}
            </div>
            {errors.image && (
              <p className="text-red-500 text-sm mt-2">{errors.image}</p>
            )}
            <input
              id="imageInput"
              type="file"
              accept="image/png, image/jpeg, image/jpg, image/gif"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>

          {/* Form Section */}
          <div className="p-6 space-y-4">
            <h2 className="text-2xl font-bold mb-2 text-center">Add News</h2>
            <div className="grid gap-3">
              <input
                type="text"
                name="share_url"
                placeholder="Share URL"
                value={form.share_url}
                onChange={handleChange}
                className="border px-4 py-2 rounded text-sm w-full"
              />
              {errors.share_url && (
                <p className="text-red-500 text-sm">{errors.share_url}</p>
              )}

              <textarea
                name="caption"
                placeholder="Caption"
                value={form.caption}
                onChange={handleChange}
                className="border px-4 py-2 rounded text-sm w-full"
                rows={5}
              />
              {errors.caption && (
                <p className="text-red-500 text-sm">{errors.caption}</p>
              )}

              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-gray-700">
                  Select Date
                </label>
                <input
                  type="date"
                  value={
                    form.date
                      ? new Date(form.date).toISOString().split("T")[0]
                      : ""
                  }
                  onChange={(e) => {
                    const newDate = new Date(e.target.value).toLocaleDateString(
                      "en-US",
                      {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      }
                    );
                    setForm((prev) => ({ ...prev, date: newDate }));
                  }}
                  className="border px-4 py-2 rounded text-sm w-full focus:ring-cyan-400"
                />
              </div>
            </div>
            <div className="flex justify-end gap-3 pt-4">
              <button
                onClick={onClose}
                className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="bg-cyan-600 text-white px-4 py-2 rounded hover:bg-cyan-700 transition"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
