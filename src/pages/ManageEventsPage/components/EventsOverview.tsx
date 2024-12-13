import React from 'react';
import { useEvents } from '../../../hooks/useEvents';

export function EventsOverview() {
  const { totalEvents, activeEvents, pastEvents } = useEvents();

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Events Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-4 bg-[#7047EB]/5 rounded-xl">
          <div className="text-3xl font-bold text-[#7047EB] mb-1">{totalEvents}</div>
          <div className="text-sm text-gray-600">Total Events</div>
        </div>
        
        <div className="p-4 bg-green-50 rounded-xl">
          <div className="text-3xl font-bold text-green-600 mb-1">{activeEvents}</div>
          <div className="text-sm text-gray-600">Active Events</div>
        </div>
        
        <div className="p-4 bg-gray-50 rounded-xl">
          <div className="text-3xl font-bold text-gray-600 mb-1">{pastEvents}</div>
          <div className="text-sm text-gray-600">Past Events</div>
        </div>
      </div>
    </div>
  );
}