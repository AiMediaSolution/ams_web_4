"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type FormState = {
  type: string;
  content: string;
  video_url: string;
  caption: string;
  date: string;
  share_url: string;
  image: File | null;
};

const AddNewsPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormState>({
    type: "",
    content: "",
    video_url: "",
    caption: "",
    date: "",
    share_url: "",
    image: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, files } = e.target as HTMLInputElement;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null) {
        form.append(key, value instanceof File ? value : String(value));
      }
    });

    const res = await fetch("http://localhost:8080/admin", {
      method: "POST",
      body: form,
    });

    if (res.ok) {
      router.push("/admin/home");
    } else {
      alert("Failed to add news");
    }
  };

  return (
    <section className="max-w-3xl mx-auto p-8 bg-white shadow rounded-lg mt-10">
      <h1 className="text-2xl font-bold mb-6">Add News</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {["type", "content", "video_url", "caption", "date", "share_url"].map(
          (field) => (
            <div key={field}>
              <label className="block font-medium capitalize">{field}</label>
              <input
                type="text"
                name={field}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
                required
              />
            </div>
          )
        )}
        <div>
          <label className="block font-medium">Image</label>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold px-6 py-2 rounded"
        >
          Submit
        </button>
      </form>
    </section>
  );
};

export default AddNewsPage;
