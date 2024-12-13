import React, { useState } from 'react';
import { EventRow } from './EventRow';
import { useEvents } from '../../../../hooks/useEvents';
import { TabButton } from '../../../../components/ui/TabButton';

export function EventsList() {
  const [activeTab, setActiveTab] = useState<'current' | 'past'>('current');
  const { events, deleteEvent } = useEvents();
  
  const currentEvents = events.filter(event => new Date(event.date) >= new Date());
  const pastEvents = events.filter(event => new Date(event.date) < new Date());

  const handleEdit = (id: string) => {
    // Navigate to edit page
    console.log('Edit event:', id);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      await deleteEvent(id);
    }
  };

  return (
    <div>
      <div className="flex space-x-4 mb-6">
        <TabButton
          active={activeTab === 'current'}
          onClick={() => setActiveTab('current')}
        >
          Current Events
        </TabButton>
        <TabButton
          active={activeTab === 'past'}
          onClick={() => setActiveTab('past')}
        >
          Past Events
        </TabButton>
      </div>

      <div className="space-y-4">
        {(activeTab === 'current' ? currentEvents : pastEvents).map(event => (
          <EventRow
            key={event.id}
            event={event}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
}