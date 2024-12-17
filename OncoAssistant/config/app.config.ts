import { AppConfig } from '../src/types';

export const appConfig: AppConfig = {
  apiPort: parseInt(process.env.API_PORT || '3000'),
  corsOrigins: (process.env.CORS_ORIGINS || 'http://localhost:3000').split(','),
  environment: (process.env.NODE_ENV || 'development') as AppConfig['environment'],
};
