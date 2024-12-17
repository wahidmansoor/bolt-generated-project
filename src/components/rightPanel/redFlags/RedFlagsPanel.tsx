import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { SearchBar } from '../common/SearchBar';
import { useSearch } from '../hooks/useSearch';

const RED_FLAGS = [
  {
    id: 'neutropenic-fever',
    condition: 'Neutropenic Fever',
    urgency: 'immediate',
    symptoms: ['Fever ≥38.3°C', 'ANC <500/μL'],
    action: 'Immediate hospitalization and broad-spectrum antibiotics'
  },
  {
    id: 'cord-compression',
    condition: 'Spinal Cord Compression',
    urgency: 'immediate',
    symptoms: ['New back pain', 'Progressive weakness', 'Bladder/bowel dysfunction'],
    action: 'Urgent MRI and neurosurgical consultation'
  }
];

export function RedFlagsPanel() {
  const { searchTerm, setSearchTerm, filteredItems } = useSearch(
    RED_FLAGS,
    ['condition', 'symptoms']
  );

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'immediate': return 'bg-red-50 text-red-700 border-red-200';
      case 'urgent': return 'bg-orange-50 text-orange-700 border-orange-200';
      default: return 'bg-yellow-50 text-yellow-700 border-yellow-200';
    }
  };

  return (
    <div className="p-4">
      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Search red flags..."
      />
      
      <div className="mt-4 space-y-4">
        {filteredItems.map((flag) => (
          <div key={flag.id} className={`rounded-lg border ${getUrgencyColor(flag.urgency)}`}>
            <div className="p-4">
              <div className="flex items-center gap-2 mb-2">
                <AlertTriangle className="h-5 w-5" />
                <h3 className="font-medium">{flag.condition}</h3>
              </div>
              
              <div className="space-y-2">
                <div>
                  <h4 className="text-sm font-medium mb-1">Symptoms:</h4>
                  <ul className="list-disc list-inside text-sm">
                    {flag.symptoms.map((symptom, index) => (
                      <li key={index}>{symptom}</li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-sm font-medium mb-1">Action Required:</h4>
                  <p className="text-sm">{flag.action}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
