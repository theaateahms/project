import React from 'react';

interface DropdownItemProps {
  label: string;
  onClick: () => void;
}

export function DropdownItem({ label, onClick }: DropdownItemProps) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-[#7047EB] transition-colors duration-200"
    >
      {label}
    </button>
  );
}