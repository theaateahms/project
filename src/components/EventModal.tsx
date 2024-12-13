import React, { useRef, useEffect } from 'react';
import { X, Calendar, Clock, MapPin, User, Tag } from 'lucide-react';
import { Event } from '../types';
import { formatDate } from '../utils/date';

interface EventModalProps {
  event: Event;
  onClose: () => void;
}

export function EventModal({ event, onClose }: EventModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        onClose();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div 
        ref={modalRef}
        className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
      >
        {/* Image Container */}
        <div className="relative h-72">
          <img 
            src={event.imageUrl} 
            alt={event.title} 
            className="w-full h-full object-cover rounded-t-2xl"
          />
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/90 hover:bg-white rounded-full shadow-lg transition-colors"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        
        {/* Content Container */}
        <div className="p-8">
          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-[#7047EB]/10 text-[#7047EB]">
              <Tag className="w-4 h-4 mr-1" />
              {event.category}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-3xl font-bold text-gray-900 mb-6">{event.title}</h2>
          
          {/* Event Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <Calendar className="w-5 h-5 mr-3 text-[#7047EB]" />
                <span>{formatDate(event.date)}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="w-5 h-5 mr-3 text-[#7047EB]" />
                <span>{event.time}</span>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center text-gray-600">
                <MapPin className="w-5 h-5 mr-3 text-[#7047EB]" />
                <span>{event.location}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <User className="w-5 h-5 mr-3 text-[#7047EB]" />
                <span>{event.organizer}</span>
              </div>
            </div>
          </div>
          
          {/* Description */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">About This Event</h3>
            <p className="text-gray-600 leading-relaxed">{event.description}</p>
          </div>
          
          {/* Price and Action */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-100">
            <div>
              <span className="block text-sm text-gray-500 mb-1">Price</span>
              <span className="text-2xl font-bold text-[#7047EB]">
                {event.price === 0 ? 'Free' : `$${event.price.toFixed(2)}`}
              </span>
            </div>
            <button className="btn-primary">
              {event.price === 0 ? 'Register Now' : 'Get Tickets'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}