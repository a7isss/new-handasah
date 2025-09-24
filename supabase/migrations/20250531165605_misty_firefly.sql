-- Add index to improve query performance
CREATE INDEX IF NOT EXISTS idx_subscriptions_user_id_status ON subscriptions(user_id, status);

-- Add trigger to prevent multiple active subscriptions
CREATE OR REPLACE FUNCTION check_active_subscription()
RETURNS TRIGGER AS $$
BEGIN
  IF NEW.status = 'active' THEN
    -- If there's an existing active subscription for this user, update it to inactive
    UPDATE subscriptions
    SET status = 'inactive',
        valid_until = NOW()
    WHERE user_id = NEW.user_id
      AND status = 'active'
      AND id != NEW.id;
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER enforce_single_active_subscription
BEFORE INSERT OR UPDATE ON subscriptions
FOR EACH ROW
EXECUTE FUNCTION check_active_subscription();