// Database types
export interface CancerType {
  id: string;
  name: string;
  description?: string;
  stagingGuidelines?: string[];
  investigations?: Investigation[];
}

export interface Investigation {
  id: string;
  name: string;
  required: boolean;
  completed?: boolean;
  results?: string;
}

export interface ChemotherapyProtocol {
  id: string;
  name: string;
  intent: 'curative' | 'palliative';
  cycles: number;
  frequency: string;
  medications: Medication[];
}

export interface Medication {
  id: string;
  name: string;
  dosage: string;
  route: string;
  timing: string;
}

export interface EmergencyGuideline {
  id: string;
  condition: string;
  symptoms: string[];
  immediateActions: string[];
  specialistReferral?: string[];
}

export interface SymptomManagement {
  id: string;
  symptom: string;
  severity: 'mild' | 'moderate' | 'severe';
  interventions: string[];
  medications?: Medication[];
}

export interface LabCorrection {
  id: string;
  parameter: string;
  normalRange: string;
  corrections: {
    level: string;
    action: string;
  }[];
}

export interface UserNote {
  id: string;
  title: string;
  content: string;
  timestamp: string;
  tags?: string[];
}
