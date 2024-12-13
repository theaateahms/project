import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { Event } from '../types';
import { Link } from 'react-router-dom';
import { formatDate } from '../utils/date';

interface EventCardProps {
  event: Event;
  onClick: (id: string) => void;
}

export function EventCard({ event, onClick }: EventCardProps) {
  return (
    <div 
      className="bg-white rounded-2xl shadow-sm overflow-hidden cursor-pointer card-hover"
      onClick={() => onClick(event.id)}
    >
      <img 
        src={event.imageUrl} 
        alt={event.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-sm font-medium px-3 py-1 rounded-full bg-[#7047EB]/10 text-[#7047EB]">
            {event.category}
          </span>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
        <div className="space-y-2 text-gray-600 mb-4">
          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-2 text-[#7047EB]" />
            <span>{formatDate(event.date)}</span>
            <Clock className="w-4 h-4 ml-4 mr-2 text-[#7047EB]" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2 text-[#7047EB]" />
            <span>{event.location}</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="font-bold text-[#7047EB] text-lg">
            {event.price === 0 ? 'Free' : `$${event.price.toFixed(2)}`}
          </span>
          <button className="btn-primary text-sm">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}