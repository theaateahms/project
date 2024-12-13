import React from 'react';
import { CategoryItem } from './CategoryItem';
import { categories } from './constants';

export function CategorySection() {
  const handleCategoryClick = (category: string) => {
    console.log('Selected category:', category);
    // Implement category filtering logic here
  };

  return (
    <div className="py-12 -mt-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8">
          {categories.map(({ icon: Icon, label }) => (
            <CategoryItem
              key={label}
              icon={<Icon />}
              label={label}
              onClick={() => handleCategoryClick(label)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}