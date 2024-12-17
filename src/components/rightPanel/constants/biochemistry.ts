import { BiochemistryReference } from '../types';

export const BIOCHEMISTRY_REFERENCES: BiochemistryReference[] = [
  {
    id: 'sodium',
    parameter: 'Sodium',
    normalRange: '135-145',
    unit: 'mmol/L',
    urgentAction: true,
    protocol: 'Urgent correction if <120 or >155 mmol/L'
  },
  {
    id: 'potassium',
    parameter: 'Potassium',
    normalRange: '3.5-5.0',
    unit: 'mmol/L',
    urgentAction: true,
    protocol: 'Urgent correction if <2.5 or >6.5 mmol/L'
  },
  {
    id: 'calcium',
    parameter: 'Calcium (Corrected)',
    normalRange: '2.2-2.6',
    unit: 'mmol/L',
    urgentAction: true,
    protocol: 'Urgent correction if <1.8 or >3.0 mmol/L'
  },
  {
    id: 'magnesium',
    parameter: 'Magnesium',
    normalRange: '0.7-1.0',
    unit: 'mmol/L',
    urgentAction: false,
    protocol: 'Replace if symptomatic'
  },
  {
    id: 'phosphate',
    parameter: 'Phosphate',
    normalRange: '0.8-1.5',
    unit: 'mmol/L',
    urgentAction: false,
    protocol: 'Replace if <0.5 mmol/L'
  }
];
