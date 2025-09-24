-- Create subscriptions table
CREATE TABLE IF NOT EXISTS subscriptions (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID NOT NULL,
    plan_id TEXT NOT NULL,
    status TEXT NOT NULL,
    valid_until TIMESTAMP WITH TIME ZONE NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create profiles table if it doesn't exist
CREATE TABLE IF NOT EXISTS profiles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID UNIQUE NOT NULL,
    full_name TEXT,
    avatar_url TEXT,
    subscription_tier TEXT DEFAULT 'free',
    subscription_status TEXT DEFAULT 'inactive',
    has_payment_method BOOLEAN DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Grant premium access to specific user
INSERT INTO subscriptions (user_id, plan_id, status, valid_until)
VALUES 
  ('5d5ddf4f-eb45-481f-92ac-8ae563e18d24', 'premium_yearly', 'active', NOW() + INTERVAL '1 year');

-- Create or update user profile with subscription info
INSERT INTO profiles (user_id, subscription_tier, subscription_status, has_payment_method)
VALUES (
    '5d5ddf4f-eb45-481f-92ac-8ae563e18d24',
    'premium',
    'active',
    true
)
ON CONFLICT (user_id) 
DO UPDATE SET
    subscription_tier = 'premium',
    subscription_status = 'active',
    has_payment_method = true,
    updated_at = NOW();