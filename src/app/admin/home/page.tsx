"use client";

import { useEffect, useState } from "react";
import { fetchWithAuth } from "@/lib/auth";
import AdminTable from "@/components/admin/AdminTable";
import AddNewsModal from "@/components/admin/AddNewsModal";
import { FiPlusCircle } from "react-icons/fi";

const AdminHome = () => {
  const [error, setError] = useState("");
  const [data, setData] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetchWithAuth(
      `${process.env.NEXT_PUBLIC_API_URL}/admin`,
      { method: "GET" }
    );
    if (response.ok) {
      const data = await response.json();
      setData(data);
    } else {
      if (response.status === 401) {
        setError("Access forbidden: You do not have the required permissions.");
      } else {
        setError("Failed to fetch accounts");
      }
    }
  };

  const handleSubmitNews = async (formData: FormData) => {
    try {
      const response = await fetchWithAuth(
        `${process.env.NEXT_PUBLIC_API_URL}/admin/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      if (response.ok) {
        setShowModal(false);
        fetchData(); // refresh table
      } else {
        alert("Failed to upload news");
      }
    } catch (error) {
      console.error("Error uploading news:", error);
      alert("An error occurred.");
    }
  };

  return (
    <section className="bg-[#f5f7fc] min-h-screen text-black">
      <div className="flex items-center justify-between border-b border-gray-200 py-4 px-6">
        <h1 className="text-2xl font-bold text-black">Admin Dashboard</h1>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-[#0F172A] text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition"
        >
          <FiPlusCircle className="text-white text-base" />
          <span>Add News</span>
        </button>
      </div>

      <div className="p-6">
        {error ? (
          <p className="text-red-500 font-semibold text-center">{error}</p>
        ) : (
          <AdminTable data={data} />
        )}
      </div>

      <AddNewsModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleSubmitNews}
      />
    </section>
  );
};

export default AdminHome;
