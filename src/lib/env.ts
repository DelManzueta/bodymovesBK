import { z } from 'zod';

// Schema for environment variables
const envSchema = z.object({
  VITE_SUPABASE_URL: z.string().url(),
  VITE_SUPABASE_ANON_KEY: z.string().min(1)
});

// Default development values
const defaultEnv = {
  VITE_SUPABASE_URL: 'http://localhost:54321',
  VITE_SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0'
};

// Use environment variables or fallback to default values
const env = {
  SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL || defaultEnv.VITE_SUPABASE_URL,
  SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY || defaultEnv.VITE_SUPABASE_ANON_KEY
};

// Only validate in production
if (import.meta.env.PROD) {
  const result = envSchema.safeParse(import.meta.env);
  if (!result.success) {
    console.error('Environment validation failed:', result.error);
    throw new Error('Missing or invalid environment variables. Please check your .env file.');
  }
}

export default env;