import React from 'react';
import { Calendar, Users, Edit2, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Event } from '../../../../types';
import { formatDate } from '../../../../utils/date';

interface EventRowProps {
  event: Event;
  onEdit: (id: string) => void;
  onDelete: (id: string) => void;
}

export function EventRow({ event, onEdit, onDelete }: EventRowProps) {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/edit-event/${event.id}`);
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow-sm mb-4">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
          
          <div className="flex flex-wrap gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2 text-[#7047EB]" />
              {formatDate(event.date)}
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-2 text-[#7047EB]" />
              {event.category}
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-2">
          <button
            onClick={handleEdit}
            className="p-2 text-gray-600 hover:text-[#7047EB] hover:bg-[#7047EB]/5 rounded-lg transition-colors"
          >
            <Edit2 className="w-5 h-5" />
          </button>
          <button
            onClick={() => onDelete(event.id)}
            className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}