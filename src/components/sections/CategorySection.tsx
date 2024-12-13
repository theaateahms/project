import React from 'react';
import { 
  BookOpen, 
  GraduationCap, 
  Users, 
  Network, 
  Heart, 
  Baby,
  Calendar,
  Palette
} from 'lucide-react';

interface CategoryItemProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

function CategoryItem({ icon, label, onClick }: CategoryItemProps) {
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

export function CategorySection() {
  const categories = [
    { icon: <BookOpen />, label: 'Lectures' },
    { icon: <GraduationCap />, label: 'Lessons' },
    { icon: <Users />, label: 'Activities' },
    { icon: <Network />, label: 'Networking' },
    { icon: <Heart />, label: 'Charity' },
    { icon: <Baby />, label: 'Kids' },
    { icon: <Calendar />, label: 'Social' },
    { icon: <Palette />, label: 'Arts' }
  ];

  const handleCategoryClick = (category: string) => {
    console.log('Selected category:', category);
    // Implement category filtering logic here
  };

  return (
    <div className="py-12 -mt-8 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8">
          {categories.map((category) => (
            <CategoryItem
              key={category.label}
              icon={category.icon}
              label={category.label}
              onClick={() => handleCategoryClick(category.label)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}