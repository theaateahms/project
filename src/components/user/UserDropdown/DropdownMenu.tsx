import React from 'react';
import { userMenuItems } from './constants';

interface DropdownMenuProps {
  onItemClick: (action: string) => void;
}

export function DropdownMenu({ onItemClick }: DropdownMenuProps) {
  return (
    <div className="absolute right-0 mt-2 w-48 py-2 bg-white rounded-xl shadow-lg border border-gray-100 z-50">
      {userMenuItems.map((item) => (
        <button
          key={item.action}
          onClick={() => onItemClick(item.action)}
          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#7047EB] transition-colors"
        >
          {item.label}
        </button>
      ))}
    </div>
  );
}