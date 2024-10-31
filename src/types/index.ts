export interface User {
  id: string;
  name: string;
  email: string;
  skills: Skill[];
  rating: number;
  questionsAsked: number;
  questionsSolved: number;
  balance: number;
  avatar: string;
  badges: Badge[];
}

export interface Skill {
  id: string;
  name: string;
  category: Category;
  level: 'beginner' | 'intermediate' | 'expert';
  endorsements: number;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface Question {
  id: string;
  title: string;
  description: string;
  price: number;
  deadline: string;
  authorId: string;
  status: 'open' | 'negotiating' | 'in-progress' | 'resolved';
  category: string;
  tags: string[];
  createdAt: string;
  proposals: number;
  urgency: 'low' | 'medium' | 'high';
  attachments?: string[];
}

export interface Chat {
  id: string;
  questionId: string;
  messages: Message[];
  status: 'negotiating' | 'accepted' | 'completed';
  agreedPrice?: number;
  agreedDeadline?: string;
  participants: {
    questionerId: string;
    solverId: string;
  };
}

export interface Message {
  id: string;
  senderId: string;
  content: string;
  timestamp: string;
  type: 'text' | 'proposal' | 'acceptance' | 'system';
  metadata?: {
    proposedPrice?: number;
    proposedDeadline?: string;
    attachments?: string[];
  };
}