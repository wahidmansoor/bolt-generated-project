import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface QuestionAccordionProps {
  title: string;
  questions: string[];
  onSelectQuestion: (question: string) => void;
}

export function QuestionAccordion({ title, questions, onSelectQuestion }: QuestionAccordionProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="border-3d rounded-lg overflow-hidden">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-2 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors duration-200"
      >
        <span className="panel-text font-medium">{title}</span>
        {isExpanded ? (
          <ChevronDown className="h-4 w-4 text-gray-500" />
        ) : (
          <ChevronRight className="h-4 w-4 text-gray-500" />
        )}
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-200 ${
          isExpanded ? 'max-h-[500px]' : 'max-h-0'
        }`}
      >
        <div className="p-2 bg-gray-50 space-y-1">
          {questions.map((question, index) => (
            <button
              key={index}
              onClick={() => onSelectQuestion(question)}
              className="w-full text-left p-2 panel-text-sm rounded hover:bg-white btn-animate"
            >
              {question}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
