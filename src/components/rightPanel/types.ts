export interface BiochemistryReference {
  id: string;
  parameter: string;
  normalRange: string;
  unit: string;
  urgentAction: boolean;
  protocol: string;
}

export interface Calculator {
  id: string;
  name: string;
  description: string;
  category: 'medical' | 'radiation' | 'palliative';
}

export interface RedFlag {
  id: string;
  condition: string;
  symptoms: string[];
  urgency: 'immediate' | 'urgent' | 'semi-urgent';
  action: string;
}

export type PanelSection = 'calculators' | 'biochemistry' | 'redFlags';
