"use client"

import { PaginationProps } from "@/interface/interface";

export default function Pagination({ page, totalPages, PageChange }: PaginationProps) {

    const maxVisible = 5;
    const start = Math.max(1, page - Math.floor(maxVisible / 2));
    const end = Math.min(totalPages, start + maxVisible - 1);

    const visiblePages = Array.from({ length: end - start + 1 }, (_, i) => start + i);

    return (
        <div className="flex justify-center mt-6 space-x-1">
            <button
                onClick={() => PageChange(1)}
                disabled={page === 1}
                className="px-3 py-2 border rounded-lg bg-gray-100 text-black hover:bg-gray-200 disabled:opacity-50"
            >
                ⏮
            </button>

            <button
                onClick={() => PageChange(page - 1)}
                disabled={page === 1}
                className="px-3 py-2 border rounded-lg bg-gray-100 text-black hover:bg-gray-200 disabled:opacity-50"
            >
                ◀
            </button>

            {visiblePages.map((p) => (
                <button
                    key={p}
                    onClick={() => PageChange(p)}
                    className={`px-4 py-2 rounded-lg border ${page === p
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-black hover:bg-gray-200"
                        }`}
                >
                    {p}
                </button>
            ))}

            <button
                onClick={() => PageChange(page + 1)}
                disabled={page === totalPages}
                className="px-3 py-2 border rounded-lg bg-gray-100 text-black hover:bg-gray-200 disabled:opacity-50"
            >
                ▶
            </button>

            <button
                onClick={() => PageChange(totalPages)}
                disabled={page === totalPages}
                className="px-3 py-2 border rounded-lg bg-gray-100 text-black hover:bg-gray-200 disabled:opacity-50"
            >
                ⏭
            </button>
        </div>
    );
}