// src/components/admin/AdminTable.tsx
"use client";

import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  getFilteredRowModel,
  flexRender,
  getPaginationRowModel,
} from "@tanstack/react-table";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
function formatTimestampToDate(timestamp: number): string {
  const date = new Date(timestamp * 1000); // nhân lại 1000 vì timestamp đang ở giây
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}
type DataType = {
  account_Id: number;
  caption: string;
  content: string;
  data_Id: number;
  date: string;
  image_url: string;
  is_deleted: number;
  share_url: string;
  type: string;
  video_url: string;
};

export default function AdminTable({ data }: { data: DataType[] }) {
  const [globalFilter, setGlobalFilter] = useState("");
  const [pagination, setPagination] = useState({ pageIndex: 0, pageSize: 10 });
  const columns = useMemo(
    () => [
      {
        header: "#",
        cell: ({ row }: any) =>
          pagination.pageIndex * pagination.pageSize + row.index + 1,
      },
      {
        accessorKey: "image_url",
        header: "Image",
        cell: ({ getValue }: any) => {
          const baseUrl = process.env.NEXT_PUBLIC_API_URL || "";
          const imageUrl = `${baseUrl}${getValue()}`;
          return (
            <img
              src={imageUrl}
              alt="Preview"
              className="w-28 h-16 object-cover rounded"
            />
          );
        },
      },
      {
        accessorKey: "caption",
        header: "Caption",
        cell: ({ getValue }: any) => (
          <div className="max-w-[250px] truncate">{getValue()}</div>
        ),
      },
      {
        accessorKey: "date", // timestamp (seconds)
        header: "Date",
        cell: ({ getValue }) => {
          const timestamp = Number(getValue()); // ép kiểu thủ công
          const date = new Date(timestamp * 1000);
          const formatted = date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          });
          return formatted;
        },
      },
      {
        accessorKey: "type",
        header: "Type",
      },
      {
        accessorKey: "share_url",
        header: "Link",
        cell: ({ getValue }: any) => (
          <a
            href={getValue()}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            View
          </a>
        ),
      },
    ],
    [pagination.pageIndex, pagination.pageSize]
  );
  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
      pagination,
    },
    onPaginationChange: setPagination,
    onGlobalFilterChange: setGlobalFilter,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: false,
    pageCount: Math.ceil(data.length / pagination.pageSize),
  });
  return (
    <div className="p-6">
      <div className="flex justify-end items-center mb-4 flex-wrap gap-3">
        <input
          placeholder="Search..."
          value={globalFilter}
          onChange={(e) => setGlobalFilter(e.target.value)}
          className="border px-4 py-2 rounded-lg shadow-sm w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-cyan-500 text-black"
        />
      </div>
      <div className="overflow-x-auto border rounded-lg shadow-sm bg-white">
        <table className="min-w-full text-sm text-left text-gray-800">
          <thead className="bg-gray-100">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="px-4 py-3 font-semibold">
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <motion.tr
                key={row.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="border-t hover:bg-gray-50"
              >
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-3">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center gap-4 mt-4 flex-wrap">
        <div className="flex items-center gap-x-4">
          <span className="text-black">Result per page</span>
          <select
            value={pagination.pageSize}
            onChange={(e) =>
              setPagination((p) => ({
                ...p,
                pageSize: Number(e.target.value),
                pageIndex: 0,
              }))
            }
            className="border px-3 py-2 rounded-md text-sm text-gray-700 focus:ring-cyan-400"
          >
            {[5, 10, 30, 50].map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>{" "}
          <div className="text-sm text-gray-500">
            Showing {pagination.pageIndex * pagination.pageSize + 1}-
            {Math.min(
              (pagination.pageIndex + 1) * pagination.pageSize,
              data.length
            )}{" "}
            of {data.length}
          </div>
        </div>
        <div className="gap-8 flex items-center">
          <button
            onClick={() =>
              setPagination((p) => ({
                ...p,
                pageIndex: Math.max(p.pageIndex - 1, 0),
              }))
            }
            disabled={pagination.pageIndex === 0}
            className={`flex items-center gap-1 text-base h-9 px-4 rounded-sm transition duration-200 ease-in-out ${
              pagination.pageIndex === 0
                ? "text-gray-400 cursor-not-allowed"
                : "text-black hover:bg-[#e5e7eb]"
            }`}
          >
            <HiChevronLeft className="text-lg" />
            Previous
          </button>
          <button
            onClick={() =>
              setPagination((p) => ({
                ...p,
                pageIndex: p.pageIndex + 1,
              }))
            }
            disabled={
              (pagination.pageIndex + 1) * pagination.pageSize >= data.length
            }
            className={`flex items-center gap-1 text-base h-9 px-4 rounded-sm transition duration-200 ease-in-out ${
              (pagination.pageIndex + 1) * pagination.pageSize >= data.length
                ? "text-gray-400 cursor-not-allowed"
                : "text-black hover:bg-[#e5e7eb] "
            }`}
          >
            Next
            <HiChevronRight className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
}
