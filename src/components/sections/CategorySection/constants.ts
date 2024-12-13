import { 
  BookOpen, 
  GraduationCap, 
  Users, 
  Network, 
  Heart, 
  Baby,
  Calendar,
  Palette
} from 'lucide-react';

export const categories = [
  { icon: BookOpen, label: 'Lectures' },
  { icon: GraduationCap, label: 'Lessons' },
  { icon: Users, label: 'Activities' },
  { icon: Network, label: 'Networking' },
  { icon: Heart, label: 'Charity' },
  { icon: Baby, label: 'Kids' },
  { icon: Calendar, label: 'Social' },
  { icon: Palette, label: 'Arts' }
] as const;