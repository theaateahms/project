import React from 'react';
import { CreateEventForm } from '../components/create-event/CreateEventForm';

export function CreateEventPage() {
  return (
    <div className="bg-[#FAFAFA] min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Post Your Event</h1>
        <CreateEventForm />
      </div>
    </div>
  );
}