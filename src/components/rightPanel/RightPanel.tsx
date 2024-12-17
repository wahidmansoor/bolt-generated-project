import React, { useState } from 'react';
import { Calculator, Activity, AlertTriangle, StickyNote } from 'lucide-react';
import { CalculatorsSection } from './sections/CalculatorsSection';
import { BiochemistrySection } from './sections/BiochemistrySection';
import { RedFlagsSection } from './sections/RedFlagsSection';
import { NotesSection } from './sections/NotesSection';

type PanelSection = 'calculators' | 'biochemistry' | 'redFlags' | 'notes';

export function RightPanel() {
  const [activeSection, setActiveSection] = useState<PanelSection>('calculators');

  const tabs = [
    { id: 'calculators', label: 'Calc', icon: Calculator },
    { id: 'biochemistry', label: 'Bio', icon: Activity },
    { id: 'redFlags', label: 'Flags', icon: AlertTriangle },
    { id: 'notes', label: 'Notes', icon: StickyNote }
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'calculators':
        return <CalculatorsSection />;
      case 'biochemistry':
        return <BiochemistrySection />;
      case 'redFlags':
        return <RedFlagsSection />;
      case 'notes':
        return <NotesSection />;
      default:
        return <CalculatorsSection />;
    }
  };

  return (
    <div className="w-[15%] bg-white border-l border-gray-200 h-screen overflow-hidden flex flex-col rounded-l-2xl border-3d">
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveSection(tab.id as PanelSection)}
              className={`flex-1 py-2 px-2 flex items-center justify-center gap-1 panel-text-sm font-medium transition-all duration-300 btn-animate
                ${activeSection === tab.id 
                  ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50 btn-pulse' 
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'}`}
            >
              <Icon className="h-3 w-3" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
      <div className="flex-1 overflow-y-auto p-3 border-3d-inset">
        {renderSection()}
      </div>
    </div>
  );
}
