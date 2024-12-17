import { useState, useMemo } from 'react';

export function useSearch<T extends Record<string, any>>(
  items: T[],
  searchFields: (keyof T)[]
) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = useMemo(() => {
    if (!searchTerm) return items;
    
    const lowercaseSearch = searchTerm.toLowerCase();
    return items.filter(item =>
      searchFields.some(field => {
        const value = item[field];
        if (Array.isArray(value)) {
          return value.some(v => v.toLowerCase().includes(lowercaseSearch));
        }
        return String(value).toLowerCase().includes(lowercaseSearch);
      })
    );
  }, [items, searchFields, searchTerm]);

  return { searchTerm, setSearchTerm, filteredItems };
}
