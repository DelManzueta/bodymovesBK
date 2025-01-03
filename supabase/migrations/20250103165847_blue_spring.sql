/*
  # Initial Schema Setup

  1. Tables
    - users
      - Custom user data and preferences
    - classes
      - Class information and schedules
    - bookings
      - Class booking records
    - memberships
      - User membership information
    
  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Users Table
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY REFERENCES auth.users(id),
  first_name text,
  last_name text,
  email text UNIQUE NOT NULL,
  phone text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own data"
  ON users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id);

-- Classes Table
CREATE TABLE IF NOT EXISTS classes (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text,
  duration interval NOT NULL,
  capacity int NOT NULL,
  instructor_id uuid REFERENCES users(id),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE classes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view classes"
  ON classes
  FOR SELECT
  TO authenticated
  USING (true);

-- Class Schedule Table
CREATE TABLE IF NOT EXISTS class_schedules (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  class_id uuid REFERENCES classes(id),
  start_time timestamptz NOT NULL,
  end_time timestamptz NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE class_schedules ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view schedules"
  ON class_schedules
  FOR SELECT
  TO authenticated
  USING (true);

-- Bookings Table
CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id),
  schedule_id uuid REFERENCES class_schedules(id),
  status text NOT NULL DEFAULT 'confirmed',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own bookings"
  ON bookings
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can create bookings"
  ON bookings
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

-- Memberships Table
CREATE TABLE IF NOT EXISTS memberships (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id),
  type text NOT NULL,
  start_date date NOT NULL,
  end_date date,
  status text NOT NULL DEFAULT 'active',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE memberships ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own memberships"
  ON memberships
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);