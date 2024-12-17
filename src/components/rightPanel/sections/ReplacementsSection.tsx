import React from 'react';
import { Search } from 'lucide-react';
import { useSearch } from '../hooks/useSearch';
import { REPLACEMENTS } from '../constants/replacements';

export function ReplacementsSection() {
  const { searchTerm, setSearchTerm, filteredItems } = useSearch(REPLACEMENTS, ['original', 'replacement']);

  return (
    <div className="p-4">
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search replacements..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
      </div>

      <div className="space-y-3">
        {filteredItems.map((item) => (
          <div key={item.id} className="bg-white border rounded-lg p-3">
            <div className="text-sm font-medium text-gray-900">{item.original}</div>
            <div className="text-sm text-blue-600 mt-1">→ {item.replacement}</div>
            {item.notes && (
              <div className="text-xs text-gray-500 mt-1">{item.notes}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
