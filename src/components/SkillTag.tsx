import React from 'react';
import type { Skill } from '../types';

interface SkillTagProps {
  skill: Skill;
  size?: 'sm' | 'md' | 'lg';
  showEndorsements?: boolean;
}

const levelColors = {
  beginner: 'bg-green-100 text-green-800',
  intermediate: 'bg-blue-100 text-blue-800',
  expert: 'bg-purple-100 text-purple-800',
};

export default function SkillTag({ skill, size = 'md', showEndorsements = false }: SkillTagProps) {
  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5',
    md: 'text-sm px-2.5 py-1',
    lg: 'text-base px-3 py-1.5',
  };

  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ${sizeClasses[size]} ${levelColors[skill.level]}`}
    >
      {skill.name}
      {showEndorsements && skill.endorsements > 0 && (
        <span className="ml-1.5 px-1.5 py-0.5 bg-white bg-opacity-25 rounded-full text-xs">
          {skill.endorsements}
        </span>
      )}
    </span>
  );
}