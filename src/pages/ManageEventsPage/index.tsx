import React, { useState } from 'react';
import { EventsOverview } from './components/EventsOverview';
import { EventsList } from './components/EventsList';
import { CalendarView } from './components/CalendarView';
import { ViewToggle } from './components/ViewToggle';
import { useEvents } from '../../hooks/useEvents';

export function ManageEventsPage() {
  const [view, setView] = useState<'list' | 'calendar'>('list');
  const { events } = useEvents();

  return (
    <div className="bg-[#FAFAFA] min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">My Events</h1>
          <ViewToggle view={view} onViewChange={setView} />
        </div>
        
        <EventsOverview />
        
        {view === 'list' ? (
          <EventsList />
        ) : (
          <CalendarView events={events} />
        )}
      </div>
    </div>
  );
}