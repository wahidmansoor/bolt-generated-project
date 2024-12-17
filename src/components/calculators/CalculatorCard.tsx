import React, { useState } from 'react';
import { Calculator } from './types';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface CalculatorCardProps {
  calculator: Calculator;
}

export function CalculatorCard({ calculator }: CalculatorCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border rounded-lg shadow-sm bg-white overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full px-4 py-3 flex items-center justify-between hover:bg-gray-50"
      >
        <div className="flex flex-col items-start">
          <h3 className="font-medium text-gray-900">{calculator.name}</h3>
          <span className="text-sm text-gray-500 capitalize">{calculator.category}</span>
        </div>
        {isExpanded ? (
          <ChevronUp className="h-5 w-5 text-gray-400" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-400" />
        )}
      </button>

      {isExpanded && (
        <div className="px-4 py-3 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-3">{calculator.description}</p>
          {calculator.formula && (
            <div className="bg-gray-50 p-2 rounded-md">
              <p className="text-xs font-mono text-gray-600">Formula: {calculator.formula}</p>
            </div>
          )}
          {/* Calculator-specific inputs and logic will be implemented here */}
        </div>
      )}
    </div>
  );
}
