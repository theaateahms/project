import React from 'react';
import { List, Calendar } from 'lucide-react';

interface ViewToggleProps {
  view: 'list' | 'calendar';
  onViewChange: (view: 'list' | 'calendar') => void;
}

export function ViewToggle({ view, onViewChange }: ViewToggleProps) {
  return (
    <div className="flex bg-white rounded-lg p-1 shadow-sm">
      <button
        onClick={() => onViewChange('list')}
        className={`
          flex items-center px-4 py-2 rounded-md transition-colors
          ${view === 'list'
            ? 'bg-[#7047EB] text-white'
            : 'text-gray-600 hover:bg-gray-50'
          }
        `}
      >
        <List className="w-4 h-4 mr-2" />
        List
      </button>
      <button
        onClick={() => onViewChange('calendar')}
        className={`
          flex items-center px-4 py-2 rounded-md transition-colors
          ${view === 'calendar'
            ? 'bg-[#7047EB] text-white'
            : 'text-gray-600 hover:bg-gray-50'
          }
        `}
      >
        <Calendar className="w-4 h-4 mr-2" />
        Calendar
      </button>
    </div>
  );
}