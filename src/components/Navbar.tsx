import React from 'react';
import { Bell, MessageSquare, User, Wallet } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-indigo-600">SolveHub</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
              <Wallet className="h-5 w-5 text-gray-500 mr-2" />
              <span className="text-gray-700 font-medium">$250.00</span>
            </div>
            
            <button className="relative p-2 hover:bg-gray-100 rounded-full">
              <Bell className="h-6 w-6 text-gray-600" />
              <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                3
              </span>
            </button>
            
            <button className="relative p-2 hover:bg-gray-100 rounded-full">
              <MessageSquare className="h-6 w-6 text-gray-600" />
              <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-xs text-white flex items-center justify-center">
                2
              </span>
            </button>
            
            <button className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded-full">
              <div className="relative">
                <User className="h-6 w-6 text-gray-600" />
                <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}