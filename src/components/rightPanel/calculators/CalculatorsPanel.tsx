import React from 'react';
import { MEDICAL_CALCULATORS } from './constants';
import { SearchBar } from '../common/SearchBar';
import { useSearch } from '../hooks/useSearch';
import { Calculator } from './types';

export function CalculatorsPanel() {
  const { searchTerm, setSearchTerm, filteredItems } = useSearch(MEDICAL_CALCULATORS, ['name', 'description']);

  return (
    <div className="p-4">
      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Search calculators..."
      />
      
      <div className="mt-4 space-y-4">
        {filteredItems.map((calculator: Calculator) => (
          <div key={calculator.id} className="bg-white rounded-lg border p-4">
            <h3 className="font-medium text-gray-900">{calculator.name}</h3>
            <p className="text-sm text-gray-500 mt-1">{calculator.description}</p>
            
            <div className="mt-3 space-y-3">
              {calculator.inputs.map((input) => (
                <div key={input.id}>
                  <label className="block text-sm font-medium text-gray-700">
                    {input.label} {input.unit && `(${input.unit})`}
                  </label>
                  <input
                    type={input.type === 'number' ? 'number' : 'text'}
                    min={input.min}
                    max={input.max}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
