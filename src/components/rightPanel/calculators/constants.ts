import { Calculator } from './types';

export const MEDICAL_CALCULATORS: Calculator[] = [
  {
    id: 'bsa',
    name: 'Body Surface Area',
    category: 'dosing',
    description: 'Calculate BSA for chemotherapy dosing using Mosteller formula',
    inputs: [
      { id: 'height', label: 'Height', type: 'number', unit: 'cm', min: 0 },
      { id: 'weight', label: 'Weight', type: 'number', unit: 'kg', min: 0 }
    ],
    calculate: (inputs) => ({
      value: Math.sqrt((inputs.height * inputs.weight) / 3600),
      unit: 'm²',
      interpretation: 'Used for chemotherapy dosing calculations'
    })
  },
  // Add other calculators here
];
