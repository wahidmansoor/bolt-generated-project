export interface CancerType {
  id: string;
  name: string;
  guidelines: Record<string, any>;
  protocols: Record<string, any>;
}

export interface ChemotherapyProtocol {
  id: string;
  name: string;
  guidelines: Record<string, any>;
  protocols: any[];
}

export interface Emergency {
  id: string;
  guidelines: Record<string, any>;
  management: Record<string, any>;
}

export interface SymptomManagement {
  id: string;
  guidelines: Record<string, any>;
  medications?: Record<string, any>;
  management?: Record<string, any>;
}

export interface LabCorrection {
  id: string;
  guidelines: Record<string, any>;
  protocols: Record<string, any>;
}

export interface Note {
  id?: string;
  title: string;
  content: string;
  timestamp: Date;
  tags?: string[];
}
