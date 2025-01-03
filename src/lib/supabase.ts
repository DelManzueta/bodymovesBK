import { createClient } from '@supabase/supabase-js';
import { Database } from '../types/supabase';
import env from './env';

// Provide fallback values for development
const supabaseUrl = env.SUPABASE_URL || 'http://localhost:54321';
const supabaseAnonKey = env.SUPABASE_ANON_KEY || 'dummy-key';

export const supabase = createClient<Database>(
  supabaseUrl,
  supabaseAnonKey,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true
    }
  }
);