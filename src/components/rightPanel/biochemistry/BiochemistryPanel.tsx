import React from 'react';
import { SearchBar } from '../common/SearchBar';
import { useSearch } from '../hooks/useSearch';

const BIOCHEMISTRY_REFERENCES = [
  {
    id: 'electrolytes',
    category: 'Electrolytes',
    items: [
      { parameter: 'Sodium', range: '135-145', unit: 'mmol/L' },
      { parameter: 'Potassium', range: '3.5-5.0', unit: 'mmol/L' },
      { parameter: 'Calcium', range: '2.2-2.6', unit: 'mmol/L' }
    ]
  },
  {
    id: 'hematology',
    category: 'Hematology',
    items: [
      { parameter: 'Hemoglobin', range: '13.0-17.0', unit: 'g/dL' },
      { parameter: 'WBC', range: '4.0-11.0', unit: '×10⁹/L' },
      { parameter: 'Platelets', range: '150-400', unit: '×10⁹/L' }
    ]
  }
];

export function BiochemistryPanel() {
  const { searchTerm, setSearchTerm, filteredItems } = useSearch(
    BIOCHEMISTRY_REFERENCES,
    ['category']
  );

  return (
    <div className="p-4">
      <SearchBar
        value={searchTerm}
        onChange={setSearchTerm}
        placeholder="Search parameters..."
      />
      
      <div className="mt-4 space-y-6">
        {filteredItems.map((section) => (
          <div key={section.id}>
            <h3 className="font-medium text-gray-900 mb-2">{section.category}</h3>
            <div className="bg-white rounded-lg border overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Parameter</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Range</th>
                    <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase">Unit</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {section.items.map((item, index) => (
                    <tr key={index}>
                      <td className="px-4 py-2 text-sm text-gray-900">{item.parameter}</td>
                      <td className="px-4 py-2 text-sm text-gray-900">{item.range}</td>
                      <td className="px-4 py-2 text-sm text-gray-900">{item.unit}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
