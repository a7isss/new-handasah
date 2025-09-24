-- Add unique constraint to subscriptions table to ensure one active subscription per user
ALTER TABLE subscriptions
ADD CONSTRAINT subscriptions_user_id_status_key UNIQUE (user_id, status);

-- Add index to improve query performance
CREATE INDEX idx_subscriptions_user_id_status ON subscriptions(user_id, status);