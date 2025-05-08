'use client';

import React, { useState } from 'react';
import { mockTransactions } from '@/data/mockTransactions';
import { TransactionItem } from './types';
import FilterBar from './FilterBar';
import Pagination from '../Pagination';

const ITEMS_PER_PAGE = 5;

const ActivityTable: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [page, setPage] = useState<number>(1);

  const filtered: TransactionItem[] = mockTransactions.filter(
    (tx) => filter === 'All' || tx.type === filter
  );

  const totalPages = Math.ceil(filtered.length / ITEMS_PER_PAGE);
  const paginated = filtered.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE
  );

  return (
    <div className="mt-10">
      <h2 className="text-xl font-semibold mb-4">Recent Transactions</h2>
      <FilterBar selected={filter} onChange={(type) => {
        setFilter(type); setPage(1);
      }} />
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto text-sm border border-gray-400/5">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">Username</th>
              <th className="px-4 py-2">Type</th>
              <th className="px-4 py-2">Token</th>
              <th className="px-4 py-2">Amount</th>
              <th className="px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {paginated.map((tx, index) => (
              <tr
                key={index}
                className={`transition-all duration-200 ${
                  index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                } hover:bg-teal-50 hover:scale-[1.005]`}
              >
                <td className="px-4 py-2">{tx.username}</td>
                <td className="px-4 py-2 text-center">{tx.type}</td>
                <td className="px-4 py-2 text-center">{tx.token}</td>
                <td className="px-4 py-2 text-center">{tx.amount}</td>
                <td className="px-4 py-2 text-center text-nowrap">{tx.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
};

export default ActivityTable;
