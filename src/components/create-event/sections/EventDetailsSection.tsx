import React from 'react';
import { EventFormData } from '../../../types/event';
import { FormInput } from '../../ui/FormInput';
import { LocationInput } from '../form-fields/LocationInput';
import { DateTimeInputs } from '../form-fields/DateTimeInputs';
import { RichTextEditor } from '../form-fields/RichTextEditor';

interface EventDetailsSectionProps {
  data: EventFormData;
  onUpdate: (updates: Partial<EventFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export function EventDetailsSection({
  data,
  onUpdate,
  onNext,
  onBack
}: EventDetailsSectionProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Event Details</h2>
      
      <DateTimeInputs
        date={data.date}
        time={data.time}
        onDateChange={date => onUpdate({ date })}
        onTimeChange={time => onUpdate({ time })}
      />
      
      <LocationInput
        value={data.location}
        onChange={location => onUpdate({ location })}
      />
      
      <RichTextEditor
        value={data.description}
        onChange={description => onUpdate({ description })}
      />
      
      <FormInput
        label="Organizer"
        value={data.organizer}
        onChange={e => onUpdate({ organizer: e.target.value })}
        placeholder="Who's organizing this event?"
        required
      />
      
      <div className="flex space-x-4 pt-4">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 px-6 py-2.5 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <button type="submit" className="flex-1 btn-primary">
          Next: Tickets
        </button>
      </div>
    </form>
  );
}