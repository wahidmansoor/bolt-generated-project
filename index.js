import { initializeApp } from './src/app';
import { setupAiAgent } from './AiAgent';
import { setupDatabase } from './Database';
import { setupOncoAssistant } from './OncoAssistant';

async function bootstrap() {
  try {
    // Initialize core components
    const db = await setupDatabase();
    const aiAgent = await setupAiAgent();
    const oncoAssistant = await setupOncoAssistant({ db, aiAgent });

    // Start the application
    await initializeApp({
      db,
      aiAgent,
      oncoAssistant
    });

    console.log('OncoAssist system successfully initialized');
  } catch (error) {
    console.error('Failed to initialize OncoAssist system:', error);
    process.exit(1);
  }
}

bootstrap();
