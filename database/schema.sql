-- Enable UUID support
CREATE EXTENSION IF NOT EXISTS "pgcrypto";

-- Optional ENUM for role
CREATE TYPE user_role AS ENUM ('admin', 'customer', 'driver');

CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  role user_role NOT NULL DEFAULT 'customer',
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
