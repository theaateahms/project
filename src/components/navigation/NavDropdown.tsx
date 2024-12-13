import React from 'react';

interface NavDropdownProps {
  isOpen: boolean;
  children: React.ReactNode;
}

export function NavDropdown({ isOpen, children }: NavDropdownProps) {
  if (!isOpen) return null;

  return (
    <div className="absolute top-full left-0 mt-1 py-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 z-50">
      {children}
    </div>
  );
}