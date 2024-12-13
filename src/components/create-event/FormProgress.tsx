import React from 'react';
import { EventFormSection } from '../../types/event';
import { ClipboardList, MapPin, Ticket, Eye } from 'lucide-react';

interface FormProgressProps {
  currentSection: EventFormSection;
}

const steps = [
  { id: 'basic', label: 'Basic Info', icon: ClipboardList },
  { id: 'details', label: 'Event Details', icon: MapPin },
  { id: 'tickets', label: 'Tickets', icon: Ticket },
  { id: 'preview', label: 'Preview', icon: Eye },
] as const;

export function FormProgress({ currentSection }: FormProgressProps) {
  const currentIndex = steps.findIndex(step => step.id === currentSection);

  return (
    <div className="flex justify-between">
      {steps.map((step, index) => {
        const Icon = step.icon;
        const isActive = index <= currentIndex;
        
        return (
          <div
            key={step.id}
            className={`flex-1 ${index !== steps.length - 1 ? 'relative' : ''}`}
          >
            <div className="flex flex-col items-center">
              <div
                className={`
                  w-10 h-10 rounded-full flex items-center justify-center
                  ${isActive ? 'bg-[#7047EB] text-white' : 'bg-gray-100 text-gray-400'}
                `}
              >
                <Icon className="w-5 h-5" />
              </div>
              <span
                className={`
                  mt-2 text-sm font-medium
                  ${isActive ? 'text-[#7047EB]' : 'text-gray-500'}
                `}
              >
                {step.label}
              </span>
            </div>
            
            {index !== steps.length - 1 && (
              <div
                className={`
                  absolute top-5 left-1/2 w-full h-[2px]
                  ${isActive ? 'bg-[#7047EB]' : 'bg-gray-200'}
                `}
              />
            )}
          </div>
        );
      })}
    </div>
  );
}