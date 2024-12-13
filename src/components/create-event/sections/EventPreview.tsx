import React from 'react';
import { Calendar, Clock, MapPin, User } from 'lucide-react';
import { EventFormData } from '../../../types/event';

interface EventPreviewProps {
  data: EventFormData;
  onBack: () => void;
  onSubmit: () => void;
}

export function EventPreview({ data, onBack, onSubmit }: EventPreviewProps) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Preview Your Event</h2>
      
      {/* Rest of the component remains the same until the buttons */}
      
      <div className="flex space-x-4">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 px-6 py-2.5 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <button
          type="button"
          onClick={onSubmit}
          className="flex-1 btn-primary"
        >
          Post Event
        </button>
      </div>
    </div>
  );
}