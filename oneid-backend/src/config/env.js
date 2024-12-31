import { config } from 'dotenv';
import { z } from 'zod';

// Load environment variables
config();

// Schema for environment variables
const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  PORT: z.string().transform(Number).default('3000'),
  SUPABASE_URL: z.string().url(),
  SUPABASE_KEY: z.string().min(1),
  JWT_SECRET: z.string().min(32),
  RPC_URL: z.string().url(),
});

// Validate and export environment variables
export const env = envSchema.parse({
  NODE_ENV: process.env.NODE_ENV,
  PORT: process.env.PORT,
  SUPABASE_URL: process.env.SUPABASE_URL,
  SUPABASE_KEY: process.env.SUPABASE_KEY,
  JWT_SECRET: process.env.JWT_SECRET,
  RPC_URL: process.env.RPC_URL,
});