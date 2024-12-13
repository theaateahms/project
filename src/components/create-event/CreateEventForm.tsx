import React, { useState } from 'react';
import { EventFormData, EventFormSection } from '../../types/event';
import { FormProgress } from './FormProgress';
import { BasicInfoSection } from './sections/BasicInfoSection';
import { EventDetailsSection } from './sections/EventDetailsSection';
import { TicketingSection } from './sections/TicketingSection';
import { EventPreview } from './sections/EventPreview';

const initialFormData: EventFormData = {
  title: '',
  description: '',
  category: '',
  date: '',
  time: '',
  location: '',
  price: 0,
  imageUrl: '',
  organizer: ''
};

export function CreateEventForm() {
  const [currentSection, setCurrentSection] = useState<EventFormSection>('basic');
  const [formData, setFormData] = useState<EventFormData>(initialFormData);

  const handleUpdateForm = (updates: Partial<EventFormData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  const handleNext = () => {
    const sections: EventFormSection[] = ['basic', 'details', 'tickets', 'preview'];
    const currentIndex = sections.indexOf(currentSection);
    if (currentIndex < sections.length - 1) {
      setCurrentSection(sections[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    const sections: EventFormSection[] = ['basic', 'details', 'tickets', 'preview'];
    const currentIndex = sections.indexOf(currentSection);
    if (currentIndex > 0) {
      setCurrentSection(sections[currentIndex - 1]);
    }
  };

  const handleSubmit = async () => {
    try {
      // Implement form submission logic here
      console.log('Form submitted:', formData);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <FormProgress currentSection={currentSection} />
      
      <div className="mt-8 bg-white rounded-2xl p-8 shadow-sm">
        {currentSection === 'basic' && (
          <BasicInfoSection
            data={formData}
            onUpdate={handleUpdateForm}
            onNext={handleNext}
          />
        )}
        
        {currentSection === 'details' && (
          <EventDetailsSection
            data={formData}
            onUpdate={handleUpdateForm}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        
        {currentSection === 'tickets' && (
          <TicketingSection
            data={formData}
            onUpdate={handleUpdateForm}
            onNext={handleNext}
            onBack={handleBack}
          />
        )}
        
        {currentSection === 'preview' && (
          <EventPreview
            data={formData}
            onBack={handleBack}
            onSubmit={handleSubmit}
          />
        )}
      </div>
    </div>
  );
}