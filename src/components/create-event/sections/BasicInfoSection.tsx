import React from 'react';
import { EventFormData } from '../../../types/event';
import { FormInput } from '../../ui/FormInput';
import { CategorySelect } from '../form-fields/CategorySelect';
import { ImageUpload } from '../form-fields/ImageUpload';

interface BasicInfoSectionProps {
  data: EventFormData;
  onUpdate: (updates: Partial<EventFormData>) => void;
  onNext: () => void;
}

export function BasicInfoSection({ data, onUpdate, onNext }: BasicInfoSectionProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Basic Information</h2>
      
      <FormInput
        label="Event Title"
        value={data.title}
        onChange={e => onUpdate({ title: e.target.value })}
        placeholder="Give your event a clear, catchy title"
        required
      />
      
      <CategorySelect
        value={data.category}
        onChange={category => onUpdate({ category })}
      />
      
      <ImageUpload
        value={data.imageUrl}
        onChange={url => onUpdate({ imageUrl: url })}
      />
      
      <div className="pt-4">
        <button type="submit" className="btn-primary w-full">
          Next: Event Details
        </button>
      </div>
    </form>
  );
}