import { useState, useEffect } from 'react';
import { Event } from '../types';
import { events as mockEvents } from '../data/events';

export function useEvents() {
  const [events, setEvents] = useState<Event[]>(mockEvents);

  const totalEvents = events.length;
  const activeEvents = events.filter(event => new Date(event.date) >= new Date()).length;
  const pastEvents = events.filter(event => new Date(event.date) < new Date()).length;

  const deleteEvent = async (id: string) => {
    setEvents(events.filter(event => event.id !== id));
  };

  return {
    events,
    totalEvents,
    activeEvents,
    pastEvents,
    deleteEvent,
  };
}