/*
  # Create template_metadata view

  1. New View
    - `template_metadata` view that combines data from:
      - templates
      - template_categories
      - project_types
      - sectors
    
  2. View Structure
    - Maps the existing table structure to match the expected interface in the frontend
    - Combines data from multiple tables into a single queryable view
    
  3. Security
    - Enable RLS on the view
    - Add policy for public read access
*/

-- Create the view combining data from related tables
CREATE VIEW template_metadata AS
SELECT 
  t.id,
  t.name as "fileName",
  t.file_url as "filePath",
  s.name as "projectCategory",
  pt.name as "projectType",
  CASE 
    WHEN t.content_type = 'pdf' THEN 'word'::text
    ELSE 'ppt'::text
  END as format,
  t.description,
  t.created_at,
  t.updated_at
FROM templates t
JOIN template_categories tc ON t.category_id = tc.id
JOIN project_types pt ON tc.project_type_id = pt.id
JOIN sectors s ON pt.sector_id = s.id;

-- Grant access to the view
GRANT SELECT ON template_metadata TO authenticated, anon;

-- Enable RLS on the view
ALTER VIEW template_metadata SECURITY ENABLE ROW LEVEL SECURITY;

-- Add a policy to allow public read access
CREATE POLICY "Allow public read access"
  ON template_metadata
  FOR SELECT
  TO public
  USING (true);