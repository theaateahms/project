import React from 'react';

interface TabButtonProps {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}

export function TabButton({ children, active, onClick }: TabButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        px-4 py-2 rounded-lg font-medium transition-colors
        ${active 
          ? 'bg-[#7047EB] text-white' 
          : 'text-gray-600 hover:bg-[#7047EB]/5'
        }
      `}
    >
      {children}
    </button>
  );
}