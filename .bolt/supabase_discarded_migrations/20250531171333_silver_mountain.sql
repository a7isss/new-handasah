-- Check if trigger exists and drop if needed
DROP TRIGGER IF EXISTS enforce_single_active_subscription ON subscriptions;
DROP FUNCTION IF EXISTS check_active_subscription();

-- Recreate the function with updated logic
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

-- Create the trigger
CREATE TRIGGER enforce_single_active_subscription
BEFORE INSERT OR UPDATE ON subscriptions
FOR EACH ROW
EXECUTE FUNCTION check_active_subscription();