import React from 'react';
import { Code2, PenTool, Calculator, BookOpen, Briefcase, Wrench, Language, Camera, Music, Brain } from 'lucide-react';

const icons = {
  Code2,
  PenTool,
  Calculator,
  BookOpen,
  Briefcase,
  Wrench,
  Language,
  Camera,
  Music,
  Brain,
};

interface CategoryBadgeProps {
  category: string;
  iconName: keyof typeof icons;
  size?: 'sm' | 'md' | 'lg';
}

export default function CategoryBadge({ category, iconName, size = 'md' }: CategoryBadgeProps) {
  const Icon = icons[iconName];
  
  const sizeClasses = {
    sm: 'text-xs px-2 py-1 space-x-1',
    md: 'text-sm px-2.5 py-1.5 space-x-1.5',
    lg: 'text-base px-3 py-2 space-x-2',
  };

  const iconSizes = {
    sm: 'h-3 w-3',
    md: 'h-4 w-4',
    lg: 'h-5 w-5',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full bg-indigo-100 text-indigo-800 font-medium ${sizeClasses[size]}`}
    >
      <Icon className={iconSizes[size]} />
      <span>{category}</span>
    </span>
  );
}