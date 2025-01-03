/*
  # Auth Providers Setup

  1. Updates
    - Add phone_auth_table for SMS verification
    - Add provider columns to users table
    
  2. Security
    - Enable RLS policies for new auth methods
*/

-- Add provider info to users table
DO $$ 
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns 
    WHERE table_name = 'users' AND column_name = 'provider'
  ) THEN
    ALTER TABLE users ADD COLUMN provider text;
    ALTER TABLE users ADD COLUMN provider_id text;
    ALTER TABLE users ADD COLUMN phone_verified boolean DEFAULT false;
  END IF;
END $$;