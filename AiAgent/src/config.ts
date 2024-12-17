export const AI_CONFIG = {
  modelEndpoint: process.env.AI_MODEL_ENDPOINT || 'http://localhost:5000',
  apiKey: process.env.AI_API_KEY,
  maxRetries: 3,
  timeout: 30000, // 30 seconds
};
