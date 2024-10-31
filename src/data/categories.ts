import { Category } from '../types';
import { Code2, PenTool, Calculator, BookOpen, Briefcase, Wrench, Language, Camera, Music, Brain } from 'lucide-react';

export const categories: Category[] = [
  { id: 'prog', name: 'Programming & Development', icon: 'Code2' },
  { id: 'design', name: 'Design & Creative', icon: 'PenTool' },
  { id: 'math', name: 'Mathematics & Science', icon: 'Calculator' },
  { id: 'writing', name: 'Writing & Translation', icon: 'BookOpen' },
  { id: 'business', name: 'Business & Finance', icon: 'Briefcase' },
  { id: 'engineering', name: 'Engineering', icon: 'Wrench' },
  { id: 'languages', name: 'Languages', icon: 'Language' },
  { id: 'photo', name: 'Photography & Video', icon: 'Camera' },
  { id: 'music', name: 'Music & Audio', icon: 'Music' },
  { id: 'academic', name: 'Academic & Research', icon: 'Brain' },
];