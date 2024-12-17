import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface PanelAccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
}

export function PanelAccordion({ title, children, defaultOpen = false }: PanelAccordionProps) {
  const [isExpanded, setIsExpanded] = useState(defaultOpen);

  return (
    <div className="border-3d rounded-lg overflow-hidden bg-white">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full p-2 flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
      >
        <span className="panel-text font-medium">{title}</span>
        {isExpanded ? (
          <ChevronDown className="h-4 w-4 text-gray-500" />
        ) : (
          <ChevronRight className="h-4 w-4 text-gray-500" />
        )}
      </button>
      
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-2 bg-gray-50">
          {children}
        </div>
      </div>
    </div>
  );
}
