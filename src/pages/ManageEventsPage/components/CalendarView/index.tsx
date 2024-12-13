import React, { useState } from 'react';
import { CalendarHeader } from './CalendarHeader';
import { CalendarDay } from './CalendarDay';
import { Event } from '../../../../types';

interface CalendarViewProps {
  events: Event[];
}

export function CalendarView({ events }: CalendarViewProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    const days = [];
    const startPadding = firstDay.getDay();
    
    // Add padding days from previous month
    for (let i = 0; i < startPadding; i++) {
      const paddingDate = new Date(year, month, -startPadding + i + 1);
      days.push({ date: paddingDate, isCurrentMonth: false });
    }
    
    // Add days of current month
    for (let i = 1; i <= lastDay.getDate(); i++) {
      days.push({ 
        date: new Date(year, month, i),
        isCurrentMonth: true 
      });
    }
    
    // Add padding days from next month if needed
    const remainingDays = 42 - days.length; // 6 rows × 7 days
    for (let i = 1; i <= remainingDays; i++) {
      days.push({ 
        date: new Date(year, month + 1, i),
        isCurrentMonth: false 
      });
    }
    
    return days;
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <CalendarHeader
        currentMonth={currentMonth}
        onMonthChange={setCurrentMonth}
      />
      
      <div className="grid grid-cols-7 gap-px mb-px">
        {weekDays.map(day => (
          <div key={day} className="p-2 text-sm font-medium text-gray-600 text-center">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-px bg-gray-200">
        {getDaysInMonth(currentMonth).map(({ date, isCurrentMonth }, index) => (
          <CalendarDay
            key={index}
            date={date}
            events={events}
            isCurrentMonth={isCurrentMonth}
          />
        ))}
      </div>
    </div>
  );
}