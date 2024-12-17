export interface Calculator {
  id: string;
  name: string;
  category: 'medical' | 'radiation' | 'palliative';
  description: string;
  formula?: string;
}

export interface CalculationResult {
  value: number;
  unit?: string;
  interpretation?: string;
}

export interface CalculatorInput {
  id: string;
  label: string;
  type: 'number' | 'select';
  unit?: string;
  options?: { value: string; label: string }[];
  min?: number;
  max?: number;
  required?: boolean;
}
