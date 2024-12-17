import { NLPService } from './services/nlpService';
import { MLService } from './services/mlService';
import { AI_CONFIG } from './src/config';

export async function setupAiAgent() {
  const nlpService = new NLPService();
  const mlService = new MLService();

  return {
    nlpService,
    mlService,
    config: AI_CONFIG
  };
}
