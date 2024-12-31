import { createClient } from '@supabase/supabase-js';
import { env } from './env.js';

export const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_KEY);

// Initialize database schema
export async function initializeDatabase() {
  const { error } = await supabase.from('users').select('count');
  
  if (error && error.code === '42P01') {
    // Table doesn't exist, create schema
    await supabase.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        wallet_address TEXT UNIQUE NOT NULL,
        did TEXT UNIQUE NOT NULL,
        created_at TIMESTAMPTZ DEFAULT NOW()
      );

      CREATE TABLE IF NOT EXISTS credentials (
        id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
        user_id UUID REFERENCES users(id),
        type TEXT NOT NULL,
        issuer TEXT NOT NULL,
        claims JSONB NOT NULL,
        issued_at TIMESTAMPTZ DEFAULT NOW(),
        expires_at TIMESTAMPTZ,
        revoked BOOLEAN DEFAULT FALSE
      );

      -- Enable Row Level Security
      ALTER TABLE users ENABLE ROW LEVEL SECURITY;
      ALTER TABLE credentials ENABLE ROW LEVEL SECURITY;

      -- RLS Policies
      CREATE POLICY "Users can read own data"
        ON users FOR SELECT
        USING (auth.uid() = id);

      CREATE POLICY "Users can read own credentials"
        ON credentials FOR SELECT
        USING (user_id IN (
          SELECT id FROM users WHERE auth.uid() = id
        ));
    `;
  }
}