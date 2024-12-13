import React from 'react';
import { Upload } from 'lucide-react';

interface ImageUploadProps {
  value: string;
  onChange: (value: string) => void;
}

export function ImageUpload({ value, onChange }: ImageUploadProps) {
  // In a real app, this would handle file uploads to a storage service
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Simulate upload by using a placeholder URL
      onChange(`https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&q=80`);
    }
  };

  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
        Event Image
      </label>
      
      <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl">
        <div className="space-y-1 text-center">
          <Upload className="mx-auto h-12 w-12 text-gray-400" />
          <div className="flex text-sm text-gray-600">
            <label className="relative cursor-pointer rounded-md font-medium text-[#7047EB] hover:text-[#5F3DC4] focus-within:outline-none">
              <span>Upload a file</span>
              <input
                type="file"
                className="sr-only"
                accept="image/*"
                onChange={handleChange}
              />
            </label>
            <p className="pl-1">or drag and drop</p>
          </div>
          <p className="text-xs text-gray-500">
            PNG, JPG, GIF up to 10MB
          </p>
        </div>
      </div>
      
      {value && (
        <div className="mt-4">
          <img
            src={value}
            alt="Event preview"
            className="w-full h-48 object-cover rounded-xl"
          />
        </div>
      )}
    </div>
  );
}