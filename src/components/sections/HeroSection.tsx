import React from 'react';
import { SearchInput } from '../ui/SearchInput';

interface HeroSectionProps {
  onSearch?: (value: string) => void;
}

export function HeroSection({ onSearch }: HeroSectionProps) {
  return (
    <div className="bg-gradient-to-r from-[#7047EB] to-[#B47FFF] text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Discover Islamic Events Near You
        </h1>
        <p className="text-xl text-center mb-8 text-white/90">
          Connect with your community through meaningful events and gatherings
        </p>
        
        <div className="max-w-3xl mx-auto">
          <SearchInput
            placeholder="Search for Islamic events..."
            onSearch={onSearch}
          />
        </div>
      </div>
    </div>
  );
}