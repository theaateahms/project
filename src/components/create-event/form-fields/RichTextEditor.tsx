import React from 'react';

interface RichTextEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export function RichTextEditor({ value, onChange }: RichTextEditorProps) {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
        Event Description
      </label>
      <textarea
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="Describe your event, including any important details attendees should know..."
        rows={6}
        className="input-primary resize-none"
        required
      />
      <p className="text-sm text-gray-500">
        Tip: Include details about what attendees can expect, the schedule, and any special instructions.
      </p>
    </div>
  );
}