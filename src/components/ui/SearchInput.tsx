import React from 'react';
import { Search } from 'lucide-react';

interface SearchInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  onSearch?: (value: string) => void;
}

export function SearchInput({ onSearch, ...props }: SearchInputProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const value = (e.currentTarget as HTMLFormElement).search.value;
    onSearch?.(value);
  };

  return (
    <form onSubmit={handleSubmit} className="flex bg-white rounded-xl p-2 shadow-lg">
      <div className="flex-1 flex items-center px-4">
        <Search className="w-5 h-5 text-gray-400 flex-shrink-0" />
        <input
          {...props}
          name="search"
          type="text"
          className="w-full h-10 ml-3 text-gray-800 focus:outline-none placeholder:text-gray-400"
        />
      </div>
      <button type="submit" className="btn-primary">
        Search
      </button>
    </form>
  );
}