import React, { useState } from 'react';
import { Calculator } from './types';
import { CALCULATORS } from './constants';
import { CalculatorCard } from './CalculatorCard';
import { Search } from 'lucide-react';

export function RightPanel() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<Calculator['category'] | 'all'>('all');

  const filteredCalculators = CALCULATORS.filter(calc => {
    const matchesSearch = calc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         calc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || calc.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-80 bg-white border-l border-gray-200 h-screen overflow-y-auto">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-lg font-semibold mb-4">Medical Calculators</h2>
        
        {/* Search */}
        <div className="relative mb-4">
          <input
            type="text"
            placeholder="Search calculators..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
        </div>

        {/* Category Filter */}
        <div className="flex space-x-2 mb-4">
          {['all', 'medical', 'radiation', 'palliative'].map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category as Calculator['category'] | 'all')}
              className={`px-3 py-1 rounded-full text-sm ${
                selectedCategory === category
                  ? 'bg-blue-500 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Calculator List */}
      <div className="p-4 space-y-4">
        {filteredCalculators.map((calculator) => (
          <CalculatorCard key={calculator.id} calculator={calculator} />
        ))}
      </div>
    </div>
  );
}
