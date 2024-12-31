import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { apiLimiter } from './middlewares/rateLimiter.js';
import { sendError } from './utils/responseHandler.js';
import logger from './utils/logger.js';

const app = express();

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(apiLimiter);

// Routes
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy' });
});

// Error handling
app.use((err, req, res, next) => {
  logger.error(err);
  sendError(res, err);
});

export default app;