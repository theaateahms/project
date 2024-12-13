import React from 'react';

interface PriceInputProps {
  value: number;
  onChange: (value: number) => void;
}

export function PriceInput({ value, onChange }: PriceInputProps) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
        Ticket Price
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <span className="text-gray-500">$</span>
        </div>
        <input
          type="number"
          min="0"
          step="0.01"
          value={value}
          onChange={e => onChange(parseFloat(e.target.value) || 0)}
          className="input-primary pl-7"
          placeholder="0.00"
          required
        />
      </div>
      <p className="text-sm text-gray-500">
        Set your ticket price (minimum $0.00)
      </p>
    </div>
  );
}