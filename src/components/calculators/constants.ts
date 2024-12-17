import { Calculator } from './types';

export const CALCULATORS: Calculator[] = [
  // Medical Oncology Calculators
  {
    id: 'bsa',
    name: 'Body Surface Area',
    category: 'medical',
    description: 'Calculate BSA for chemotherapy dosing',
    formula: 'sqrt((height * weight) / 3600)'
  },
  {
    id: 'carboplatin-auc',
    name: 'Carboplatin AUC Dose',
    category: 'medical',
    description: 'Calculate Carboplatin dose using Calvert formula'
  },
  {
    id: 'creatinine-clearance',
    name: 'Creatinine Clearance',
    category: 'medical',
    description: 'Calculate CrCl using Cockcroft-Gault equation'
  },
  
  // Radiation Oncology Calculators
  {
    id: 'bed',
    name: 'Biologically Effective Dose',
    category: 'radiation',
    description: 'Calculate BED for radiation therapy'
  },
  {
    id: 'eqd2',
    name: 'EQD2 Calculator',
    category: 'radiation',
    description: 'Convert radiation doses to EQD2'
  },
  
  // Palliative Care Calculators
  {
    id: 'opioid-converter',
    name: 'Opioid Dose Converter',
    category: 'palliative',
    description: 'Convert between different opioid medications'
  },
  {
    id: 'pps',
    name: 'Palliative Performance Scale',
    category: 'palliative',
    description: 'Assess functional status in palliative care'
  },
  {
    id: 'esas',
    name: 'Edmonton Symptom Assessment',
    category: 'palliative',
    description: 'Symptom severity assessment tool'
  }
];
