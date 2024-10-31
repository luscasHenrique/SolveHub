import React from 'react';
import { Clock, DollarSign, MessageSquare, Paperclip } from 'lucide-react';
import type { Question } from '../types';
import CategoryBadge from './CategoryBadge';

interface QuestionCardProps {
  question: Question;
  onSelect: (id: string) => void;
}

export default function QuestionCard({ question, onSelect }: QuestionCardProps) {
  const getUrgencyColor = (urgency: Question['urgency']) => {
    switch (urgency) {
      case 'high':
        return 'text-red-600';
      case 'medium':
        return 'text-yellow-600';
      default:
        return 'text-green-600';
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200">
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {question.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              <CategoryBadge 
                category={question.category}
                iconName="Code2"
                size="sm"
              />
              {question.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <span className="flex items-center text-green-600 font-semibold">
            <DollarSign className="h-5 w-5 mr-1" />
            {question.price.toFixed(2)}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {question.description}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <span className={`flex items-center text-sm ${getUrgencyColor(question.urgency)}`}>
              <Clock className="h-4 w-4 mr-1" />
              {question.deadline}
            </span>
            <span className="flex items-center text-sm text-gray-500">
              <MessageSquare className="h-4 w-4 mr-1" />
              {question.proposals} proposals
            </span>
            {question.attachments && question.attachments.length > 0 && (
              <span className="flex items-center text-sm text-gray-500">
                <Paperclip className="h-4 w-4 mr-1" />
                {question.attachments.length} files
              </span>
            )}
          </div>
          
          <button
            onClick={() => onSelect(question.id)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
          >
            Solve This
          </button>
        </div>
      </div>
    </div>
  );
}