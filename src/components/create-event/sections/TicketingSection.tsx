import React, { useState } from 'react';
import { EventFormData } from '../../../types/event';
import { PriceInput } from '../form-fields/PriceInput';
import { FreeEventOptions } from '../form-fields/FreeEventOptions';
import { PaidEventOptions } from '../form-fields/PaidEventOptions';

interface TicketingSectionProps {
  data: EventFormData;
  onUpdate: (updates: Partial<EventFormData>) => void;
  onNext: () => void;
  onBack: () => void;
}

export function TicketingSection({
  data,
  onUpdate,
  onNext,
  onBack
}: TicketingSectionProps) {
  const [isFree, setIsFree] = useState(data.price === 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onNext();
  };

  const handlePriceTypeChange = (free: boolean) => {
    setIsFree(free);
    if (free) {
      onUpdate({ price: 0 });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Ticket Information</h2>
      
      <div className="space-y-4">
        <label className="block text-sm font-medium text-gray-700">
          Is this a free event?
        </label>
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={() => handlePriceTypeChange(true)}
            className={`flex-1 py-3 px-4 rounded-xl border-2 transition-colors ${
              isFree
                ? 'border-[#7047EB] bg-[#7047EB]/5 text-[#7047EB]'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            Free Event
          </button>
          <button
            type="button"
            onClick={() => handlePriceTypeChange(false)}
            className={`flex-1 py-3 px-4 rounded-xl border-2 transition-colors ${
              !isFree
                ? 'border-[#7047EB] bg-[#7047EB]/5 text-[#7047EB]'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            Paid Event
          </button>
        </div>
      </div>
      
      {!isFree && (
        <PriceInput
          value={data.price}
          onChange={price => onUpdate({ price })}
        />
      )}
      
      {isFree ? <FreeEventOptions /> : <PaidEventOptions />}
      
      <div className="flex space-x-4 pt-4">
        <button
          type="button"
          onClick={onBack}
          className="flex-1 px-6 py-2.5 border border-gray-300 text-gray-700 font-semibold rounded-xl hover:bg-gray-50 transition-colors"
        >
          Back
        </button>
        <button type="submit" className="flex-1 btn-primary">
          Next: Preview
        </button>
      </div>
    </form>
  );
}