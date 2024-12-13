import React from 'react';
import { ChevronDown } from 'lucide-react';

interface NavLinkProps {
  label: string;
  showDropdownIcon?: boolean;
  className?: string;
}

export function NavLink({ label, showDropdownIcon = false, className = '' }: NavLinkProps) {
  return (
    <div 
      className={`flex items-center space-x-1.5 text-gray-600 font-medium transition-colors duration-200 cursor-default ${className}`}
    >
      <span>{label}</span>
      {showDropdownIcon && <ChevronDown className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" />}
    </div>
  );
}