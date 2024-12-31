import app from './app.js';
import { env } from './config/env.js';
import { initializeDatabase } from './config/db.js';
import logger from './utils/logger.js';

async function startServer() {
  try {
    // Initialize database
    await initializeDatabase();
    
    // Start server
    app.listen(env.PORT, () => {
      logger.info(`Server running on port ${env.PORT}`);
    });
  } catch (error) {
    logger.error('Failed to start server:', error);
    process.exit(1);
  }
}

startServer();