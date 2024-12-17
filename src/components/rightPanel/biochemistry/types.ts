export interface BiochemistryReference {
  id: string;
  parameter: string;
  normalRange: string;
  unit: string;
  urgentAction: boolean;
  protocol: string;
}

export interface ReplacementProtocol {
  id: string;
  electrolyte: string;
  level: 'mild' | 'moderate' | 'severe';
  range: string;
  protocol: string;
  monitoring: string;
}
