/*
  # Add start_date to schedule templates

  1. New Columns
    - Add `start_date` column to schedule_templates table
    - Add `start_date` column to saved_schedules table if not already present

  2. Data Migration
    - Set default values for existing records
*/

-- Add start_date column to schedule_templates table if it doesn't exist
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'schedule_templates' AND column_name = 'start_date'
  ) THEN
    ALTER TABLE schedule_templates ADD COLUMN start_date DATE;
    
    -- Update existing records to have a start date 20 days before the first task
    UPDATE schedule_templates
    SET start_date = (
      SELECT to_date(tasks->0->>'start', 'YYYY-MM-DD') - INTERVAL '20 days'
      FROM schedule_templates AS st
      WHERE st.id = schedule_templates.id
      AND jsonb_array_length(tasks) > 0
    )
    WHERE start_date IS NULL;
  END IF;
END $$;

-- Make sure saved_schedules has start_date column (should already exist)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'saved_schedules' AND column_name = 'start_date'
  ) THEN
    ALTER TABLE saved_schedules ADD COLUMN start_date DATE NOT NULL DEFAULT CURRENT_DATE;
  END IF;
END $$;