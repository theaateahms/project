import React from 'react';

interface DateTimeInputsProps {
  date: string;
  time: string;
  onDateChange: (date: string) => void;
  onTimeChange: (time: string) => void;
}

export function DateTimeInputs({
  date,
  time,
  onDateChange,
  onTimeChange
}: DateTimeInputsProps) {
  // Get tomorrow's date as the minimum allowed date
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDate = tomorrow.toISOString().split('T')[0];

  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          Event Date
        </label>
        <input
          type="date"
          value={date}
          onChange={e => onDateChange(e.target.value)}
          min={minDate}
          className="input-primary"
          required
        />
      </div>
      
      <div className="space-y-1">
        <label className="block text-sm font-medium text-gray-700">
          Start Time
        </label>
        <input
          type="time"
          value={time}
          onChange={e => onTimeChange(e.target.value)}
          className="input-primary"
          required
        />
      </div>
    </div>
  );
}