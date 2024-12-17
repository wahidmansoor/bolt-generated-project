export interface RedFlag {
  id: string;
  condition: string;
  symptoms: string[];
  urgency: 'immediate' | 'urgent' | 'semi-urgent';
  action: string;
  timeframe: string;
  specialtyConsult?: string;
}
