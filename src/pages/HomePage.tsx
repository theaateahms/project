import React, { useState } from 'react';
import { HeroSection } from '../components/sections/HeroSection';
import { CategorySection } from '../components/sections/CategorySection';
import { EventsGrid } from '../components/sections/EventsGrid';
import { EventModal } from '../components/EventModal';
import { events } from '../data/events';
import { Event } from '../types';

export function HomePage() {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const handleEventClick = (id: string) => {
    const event = events.find(e => e.id === id);
    if (event) setSelectedEvent(event);
  };

  const handleSearch = (value: string) => {
    console.log('Searching for:', value);
    // Implement search logic here
  };

  return (
    <>
      <HeroSection onSearch={handleSearch} />
      <CategorySection />
      <EventsGrid events={events} onEventClick={handleEventClick} />
      
      {selectedEvent && (
        <EventModal 
          event={selectedEvent} 
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </>
  );
}