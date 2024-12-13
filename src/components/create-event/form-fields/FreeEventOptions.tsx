import React from 'react';
import { AlertCircle } from 'lucide-react';

export function FreeEventOptions() {
  return (
    <div className="space-y-4">
      <div className="p-4 bg-[#7047EB]/5 rounded-xl">
        <h3 className="font-medium text-gray-900 mb-2">
          Free Event Options
        </h3>
        <div className="space-y-3">
          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              className="mt-1"
            />
            <div>
              <span className="block text-sm font-medium text-gray-700">
                Registration Required
              </span>
              <span className="block text-sm text-gray-500">
                Require attendees to register in advance
              </span>
            </div>
          </label>
          
          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              className="mt-1"
            />
            <div>
              <span className="block text-sm font-medium text-gray-700">
                Limited Capacity
              </span>
              <span className="block text-sm text-gray-500">
                Set a maximum number of attendees
              </span>
            </div>
          </label>
          
          <label className="flex items-start space-x-3">
            <input
              type="checkbox"
              className="mt-1"
            />
            <div>
              <span className="block text-sm font-medium text-gray-700">
                Waitlist
              </span>
              <span className="block text-sm text-gray-500">
                Enable waitlist when capacity is reached
              </span>
            </div>
          </label>
        </div>
      </div>
      
      <div className="flex items-start space-x-3 p-4 border border-yellow-200 bg-yellow-50 rounded-xl">
        <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0" />
        <p className="text-sm text-yellow-700">
          Additional registration options can be configured after creating your event
        </p>
      </div>
    </div>
  );
}