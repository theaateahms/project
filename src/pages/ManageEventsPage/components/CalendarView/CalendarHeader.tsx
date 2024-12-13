import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarHeaderProps {
  currentMonth: Date;
  onMonthChange: (date: Date) => void;
}

export function CalendarHeader({ currentMonth, onMonthChange }: CalendarHeaderProps) {
  const prevMonth = () => {
    const date = new Date(currentMonth);
    date.setMonth(date.getMonth() - 1);
    onMonthChange(date);
  };

  const nextMonth = () => {
    const date = new Date(currentMonth);
    date.setMonth(date.getMonth() + 1);
    onMonthChange(date);
  };

  return (
    <div className="flex items-center justify-between mb-4">
      <h3 className="text-lg font-semibold">
        {currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' })}
      </h3>
      <div className="flex space-x-2">
        <button
          onClick={prevMonth}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextMonth}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}