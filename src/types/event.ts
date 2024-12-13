export interface EventFormData {
  title: string;
  description: string;
  category: string;
  date: string;
  time: string;
  location: string;
  price: number;
  imageUrl: string;
  organizer: string;
}

export interface EventFormErrors {
  [key: string]: string;
}

export type EventFormSection = 'basic' | 'details' | 'tickets' | 'preview';