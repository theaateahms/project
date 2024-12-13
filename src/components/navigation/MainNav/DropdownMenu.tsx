import React from 'react';
import { DropdownItem } from './DropdownItem';

interface DropdownMenuProps {
  items: Array<{
    label: string;
    action: string;
  }>;
  onItemClick: (action: string) => void;
}

export function DropdownMenu({ items, onItemClick }: DropdownMenuProps) {
  return (
    <div className="py-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100">
      {items.map((item) => (
        <DropdownItem
          key={item.action}
          label={item.label}
          onClick={() => onItemClick(item.action)}
        />
      ))}
    </div>
  );
}