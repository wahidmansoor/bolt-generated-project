export interface Calculator {
  id: string;
  name: string;
  category: 'dosing' | 'assessment' | 'conversion';
  description: string;
  inputs: CalculatorInput[];
  calculate: (inputs: Record<string, number>) => CalculatorResult;
}

export interface CalculatorInput {
  id: string;
  label: string;
  type: 'number' | 'select';
  unit?: string;
  min?: number;
  max?: number;
  required?: boolean;
  options?: { value: number; label: string }[];
}

export interface CalculatorResult {
  value: number;
  unit: string;
  interpretation?: string;
}
