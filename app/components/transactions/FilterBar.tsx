'use client';

import React from 'react';
import { TransactionType } from './types';

type Props = {
  selected: string;
  onChange: (value: string) => void;
};

const FilterBar: React.FC<Props> = ({ selected, onChange }) => {
  const options: (TransactionType | 'All')[] = ['All', 'Stake', 'Borrow', 'Lend'];

  return (
    <div className="flex gap-3 mb-4">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onChange(option)}
          className={`px-2 border rounded text-sm transition ${
            selected === option
              ? 'bg-teal-600 text-white'
              : 'bg-white text-teal-700 hover:bg-teal-100'
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default FilterBar;

