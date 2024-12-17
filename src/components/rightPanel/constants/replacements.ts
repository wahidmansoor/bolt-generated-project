import { Replacement } from '../types';

export const REPLACEMENTS: Replacement[] = [
  {
    id: 'chemo-nausea',
    category: 'Side Effects',
    original: 'chemotherapy-induced nausea and vomiting',
    replacement: 'upset stomach from treatment',
    notes: 'More relatable term for patients'
  },
  {
    id: 'metastasis',
    category: 'Disease Status',
    original: 'metastasis',
    replacement: 'spread of cancer',
    notes: 'Clearer terminology for patient understanding'
  },
  {
    id: 'prognosis',
    category: 'Communication',
    original: 'prognosis',
    replacement: 'likely outcome',
    notes: 'More straightforward term for discussions'
  }
];
