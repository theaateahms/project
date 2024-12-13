import React from 'react';

interface CategoryItemProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

export function CategoryItem({ icon, label, onClick }: CategoryItemProps) {
  return (
    <button 
      onClick={onClick}
      className="flex flex-col items-center space-y-2 p-4 rounded-full hover:scale-105 transition-all duration-200 group"
    >
      <div className="w-16 h-16 rounded-full bg-[#7047EB]/10 flex items-center justify-center group-hover:bg-[#c69dff] transition-colors">
        {React.cloneElement(icon as React.ReactElement, { className: 'w-7 h-7 text-[#7047EB]' })}
      </div>
      <span className="text-sm font-medium text-gray-700 group-hover:text-[#7047EB]">
        {label}
      </span>
    </button>
  );
}