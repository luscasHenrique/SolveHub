import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';

export default function FilterBar() {
  return (
    <div className="bg-white border-b">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex-1 max-w-2xl">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search questions by keyword..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              />
            </div>
          </div>
          
          <div className="flex items-center space-x-4 ml-6">
            <select className="border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
              <option>All Categories</option>
              <option>Programming</option>
              <option>Design</option>
              <option>Mathematics</option>
              <option>Writing</option>
            </select>
            
            <select className="border border-gray-300 rounded-lg px-4 py-2 bg-white focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500">
              <option>Price Range</option>
              <option>$0 - $50</option>
              <option>$50 - $100</option>
              <option>$100+</option>
            </select>
            
            <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
              <SlidersHorizontal className="h-5 w-5 mr-2" />
              More Filters
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}