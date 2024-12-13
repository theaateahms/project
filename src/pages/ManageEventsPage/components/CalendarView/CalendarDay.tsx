import React from 'react';
import { Event } from '../../../../types';

interface CalendarDayProps {
  date: Date;
  events: Event[];
  isCurrentMonth: boolean;
}

export function CalendarDay({ date, events, isCurrentMonth }: CalendarDayProps) {
  const isToday = new Date().toDateString() === date.toDateString();
  const dayEvents = events.filter(event => new Date(event.date).toDateString() === date.toDateString());

  return (
    <div className={`min-h-[120px] p-2 border border-gray-200 ${isCurrentMonth ? 'bg-white' : 'bg-gray-50'}`}>
      <div className={`
        text-sm font-medium mb-1
        ${isToday ? 'text-[#7047EB]' : isCurrentMonth ? 'text-gray-900' : 'text-gray-400'}
      `}>
        {date.getDate()}
      </div>
      <div className="space-y-1">
        {dayEvents.map(event => (
          <div
            key={event.id}
            className="text-xs p-1 rounded bg-[#7047EB]/10 text-[#7047EB] truncate"
            title={event.title}
          >
            {event.time} - {event.title}
          </div>
        ))}
      </div>
    </div>
  );
}