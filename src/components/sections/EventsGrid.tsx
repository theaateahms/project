import React from 'react';
import { EventCard } from '../EventCard';
import { Event } from '../../types';

interface EventsGridProps {
  events: Event[];
  onEventClick: (id: string) => void;
}

export function EventsGrid({ events, onEventClick }: EventsGridProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-2xl font-bold text-gray-900 mb-8">Popular Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {events.map(event => (
          <EventCard 
            key={event.id} 
            event={event} 
            onClick={onEventClick}
          />
        ))}
      </div>
    </div>
  );
}