'use client';

import React from 'react';

type Props = {
  page: number;
  totalPages: number;
  onPageChange: (newPage: number) => void;
};

const Pagination: React.FC<Props> = ({ page, totalPages, onPageChange }) => {
  return (
    <div className="flex justify-end gap-2 mt-6 text-sm">
      <button
        className="px-3 py-1 border rounded bg-white hover:bg-gray-100 disabled:opacity-50"
        onClick={() => onPageChange(Math.max(page - 1, 1))}
        disabled={page === 1}
      >
        ◀ Prev
      </button>
      <span className="px-3 py-1 border rounded bg-gray-50 text-gray-700">
        Page <strong>{page}</strong> of {totalPages}
      </span>
      <button
        className="px-3 py-1 border rounded bg-white hover:bg-gray-100 disabled:opacity-50"
        onClick={() => onPageChange(Math.min(page + 1, totalPages))}
        disabled={page === totalPages}
      >
        Next ▶
      </button>
    </div>
  );
};

export default Pagination;
