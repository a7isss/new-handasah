/*
  # Template Management Feature

  1. Schema Updates
    - Add `can_manage_templates` column to profiles table
    - Add `created_by` and `is_shared` columns to templates table
    - Add `created_by` and `is_shared` columns to schedule_templates table
    - Update RLS policies for template management

  2. Security
    - Enable RLS on all tables
    - Add policies for template management permissions
    - Grant specific user template management permissions

  3. Data Migration
    - Set default values for new columns
    - Grant permission to specific user
*/

-- Add can_manage_templates column to profiles table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'profiles' AND column_name = 'can_manage_templates'
  ) THEN
    ALTER TABLE profiles ADD COLUMN can_manage_templates BOOLEAN DEFAULT FALSE;
  END IF;
END $$;

-- Add created_by and is_shared columns to templates table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'templates' AND column_name = 'created_by'
  ) THEN
    ALTER TABLE templates ADD COLUMN created_by UUID REFERENCES auth.users(id);
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'templates' AND column_name = 'is_shared'
  ) THEN
    ALTER TABLE templates ADD COLUMN is_shared BOOLEAN DEFAULT TRUE;
  END IF;
END $$;

-- Add created_by and is_shared columns to schedule_templates table
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'schedule_templates' AND column_name = 'created_by'
  ) THEN
    ALTER TABLE schedule_templates ADD COLUMN created_by UUID REFERENCES auth.users(id);
  END IF;
  
  IF NOT EXISTS (
    SELECT 1 FROM information_schema.columns
    WHERE table_name = 'schedule_templates' AND column_name = 'is_shared'
  ) THEN
    ALTER TABLE schedule_templates ADD COLUMN is_shared BOOLEAN DEFAULT TRUE;
  END IF;
END $$;

-- Update existing templates to be shared by default
UPDATE templates SET is_shared = TRUE WHERE is_shared IS NULL;
UPDATE schedule_templates SET is_shared = TRUE WHERE is_shared IS NULL;

-- Grant template management permission to specific user
INSERT INTO profiles (user_id, can_manage_templates, subscription_tier, subscription_status, has_payment_method)
VALUES (
    '04c8df23-bd9d-401a-a79e-eece5ad7152b',
    TRUE,
    'premium',
    'active',
    TRUE
)
ON CONFLICT (user_id) 
DO UPDATE SET
    can_manage_templates = TRUE,
    updated_at = NOW();

-- Update RLS policies for templates table
DROP POLICY IF EXISTS "Anyone can read templates" ON templates;
DROP POLICY IF EXISTS "Authenticated users can create templates" ON templates;
DROP POLICY IF EXISTS "Authenticated users can update templates" ON templates;
DROP POLICY IF EXISTS "Authenticated users can delete templates" ON templates;

-- Templates policies: Read for all, write for template managers only
CREATE POLICY "Anyone can read shared templates"
    ON templates
    FOR SELECT
    TO public
    USING (is_shared = TRUE);

CREATE POLICY "Template managers can create templates"
    ON templates
    FOR INSERT
    TO authenticated
    WITH CHECK (
        auth.uid() IN (
            SELECT user_id FROM profiles WHERE can_manage_templates = TRUE
        )
    );

CREATE POLICY "Template managers can update templates"
    ON templates
    FOR UPDATE
    TO authenticated
    USING (
        auth.uid() IN (
            SELECT user_id FROM profiles WHERE can_manage_templates = TRUE
        )
    );

CREATE POLICY "Template managers can delete templates"
    ON templates
    FOR DELETE
    TO authenticated
    USING (
        auth.uid() IN (
            SELECT user_id FROM profiles WHERE can_manage_templates = TRUE
        )
    );

-- Update RLS policies for schedule_templates table
DROP POLICY IF EXISTS "Anyone can read schedule templates" ON schedule_templates;
DROP POLICY IF EXISTS "Authenticated users can create schedule templates" ON schedule_templates;
DROP POLICY IF EXISTS "Authenticated users can update schedule templates" ON schedule_templates;

-- Schedule templates policies: Read for all, write for template managers only
CREATE POLICY "Anyone can read shared schedule templates"
    ON schedule_templates
    FOR SELECT
    TO public
    USING (is_shared = TRUE);

CREATE POLICY "Template managers can create schedule templates"
    ON schedule_templates
    FOR INSERT
    TO authenticated
    WITH CHECK (
        auth.uid() IN (
            SELECT user_id FROM profiles WHERE can_manage_templates = TRUE
        )
    );

CREATE POLICY "Template managers can update schedule templates"
    ON schedule_templates
    FOR UPDATE
    TO authenticated
    USING (
        auth.uid() IN (
            SELECT user_id FROM profiles WHERE can_manage_templates = TRUE
        )
    );

CREATE POLICY "Template managers can delete schedule templates"
    ON schedule_templates
    FOR DELETE
    TO authenticated
    USING (
        auth.uid() IN (
            SELECT user_id FROM profiles WHERE can_manage_templates = TRUE
        )
    );

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_templates_created_by ON templates(created_by);
CREATE INDEX IF NOT EXISTS idx_templates_is_shared ON templates(is_shared);
CREATE INDEX IF NOT EXISTS idx_schedule_templates_created_by ON schedule_templates(created_by);
CREATE INDEX IF NOT EXISTS idx_schedule_templates_is_shared ON schedule_templates(is_shared);
CREATE INDEX IF NOT EXISTS idx_profiles_can_manage_templates ON profiles(can_manage_templates);