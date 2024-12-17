import { RedFlag } from '../types';

export const RED_FLAGS: RedFlag[] = [
  {
    id: 'scc',
    condition: 'Spinal Cord Compression',
    symptoms: [
      'New back pain',
      'Progressive weakness',
      'Sensory changes',
      'Bladder/bowel dysfunction'
    ],
    urgency: 'immediate',
    action: 'Immediate MRI and neurosurgical consultation required'
  },
  {
    id: 'neutropenic-fever',
    condition: 'Neutropenic Fever',
    symptoms: [
      'Temperature ≥38.3°C',
      'ANC <500/μL',
      'Chills/rigors'
    ],
    urgency: 'immediate',
    action: 'Immediate broad-spectrum antibiotics and hospitalization'
  },
  {
    id: 'tls',
    condition: 'Tumor Lysis Syndrome',
    symptoms: [
      'Acute kidney injury',
      'Cardiac arrhythmias',
      'Seizures',
      'Elevated uric acid'
    ],
    urgency: 'urgent',
    action: 'IV hydration, allopurinol/rasburicase, cardiac monitoring'
  }
];
