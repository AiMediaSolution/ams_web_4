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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetchWithAuth(
        `${process.env.NEXT_PUBLIC_API_URL}/admin`,
        { method: "GET" }
      );

      if (response.ok) {
        const result = await response.json();
        setData(result);
        setError("");
      } else {
        if (response.status === 401) {
          setError(
            "Access forbidden: You do not have the required permissions."
          );
        } else {
          setError("Failed to fetch data from server.");
        }
      }
    } catch (err) {
      setError("Unable to connect to the server. Please try again later.");
    }
    setLoading(false);
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
        fetchData();
      } else {
        alert("Failed to upload news");
      }
    } catch (error) {
      alert("An error occurred.");
    }
  };

  return (
    <section className="bg-[#f5f7fc] min-h-screen text-black">
      <div className="flex items-center justify-between border-b border-gray-200 py-4 px-6">
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-[#0F172A] text-white px-4 py-2 rounded-lg font-semibold hover:opacity-90 transition"
        >
          <FiPlusCircle className="text-white text-base" />
          <span>Add News</span>
        </button>
      </div>

      <div className="p-6">
        {loading ? (
          <p className="text-gray-500">Loading...</p>
        ) : error ? (
          <p className="text-red-500 font-semibold">{error}</p>
        ) : data.length === 0 ? (
          <p className="text-gray-500">No data available.</p>
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
