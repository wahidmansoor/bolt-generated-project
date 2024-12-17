export interface NLPResponse {
  entities: Array<{
    type: string;
    value: string;
    confidence: number;
  }>;
  intent: {
    name: string;
    confidence: number;
  };
}

export interface MLPrediction {
  outcome: string;
  probability: number;
  factors: string[];
}

export interface AIModelConfig {
  endpoint: string;
  apiKey: string;
  maxRetries: number;
  timeout: number;
}
