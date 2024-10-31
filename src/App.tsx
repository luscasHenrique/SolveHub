import React, { useState } from 'react';
import Navbar from './components/Navbar';
import FilterBar from './components/FilterBar';
import QuestionCard from './components/QuestionCard';
import type { Question } from './types';

const MOCK_QUESTIONS: Question[] = [
  {
    id: '1',
    title: 'Need help with React Performance Optimization',
    description: 'I have a React application that\'s experiencing performance issues with large lists. Looking for someone to help optimize rendering and implement virtualization.',
    price: 150,
    deadline: '3 days',
    authorId: 'user1',
    status: 'open',
    category: 'Programming',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Mathematics Tutor for Calculus II',
    description: 'Looking for an experienced math tutor to help with Calculus II concepts, specifically integration techniques and series.',
    price: 75,
    deadline: '2 days',
    authorId: 'user2',
    status: 'open',
    category: 'Mathematics',
    createdAt: new Date().toISOString(),
  },
];

function App() {
  const [questions] = useState<Question[]>(MOCK_QUESTIONS);

  const handleQuestionSelect = (id: string) => {
    console.log('Selected question:', id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <FilterBar />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Available Questions</h1>
          <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200">
            Ask a Question
          </button>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2">
          {questions.map((question) => (
            <QuestionCard
              key={question.id}
              question={question}
              onSelect={handleQuestionSelect}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;