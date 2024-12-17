export interface AppConfig {
  apiPort: number;
  corsOrigins: string[];
  environment: 'development' | 'production' | 'test';
}

export interface Dependencies {
  db: any;
  aiAgent: any;
}

export interface ModuleConfig {
  enabled: boolean;
  features: string[];
}
