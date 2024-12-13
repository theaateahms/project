import React from 'react';

interface CategorySelectProps {
  value: string;
  onChange: (value: string) => void;
}

const categories = [
  'Community',
  'Education',
  'Celebration',
  'Charity',
  'Youth',
  'Family',
  'Wellness',
  'Business',
  'Art & Culture',
  'Quran & Prayer',
  'Social',
  'Other'
];

export function CategorySelect({ value, onChange }: CategorySelectProps) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
        Event Category
      </label>
      <select
        value={value}
        onChange={e => onChange(e.target.value)}
        className="input-primary"
        required
      >
        <option value="">Select a category</option>
        {categories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}