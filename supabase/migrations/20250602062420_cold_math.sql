-- Drop existing tables and views
DROP TABLE IF EXISTS documents;
DROP TABLE IF EXISTS templates;
DROP TABLE IF EXISTS template_categories;
DROP TABLE IF EXISTS project_types;
DROP TABLE IF EXISTS sectors;
DROP VIEW IF EXISTS template_metadata;

-- Create simplified templates table
CREATE TABLE templates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    description TEXT,
    category TEXT NOT NULL,
    project_type TEXT NOT NULL,
    content_type TEXT NOT NULL CHECK (content_type IN ('word', 'ppt')),
    file_path TEXT,
    file_size INTEGER,
    display_order INTEGER DEFAULT 0,
    version TEXT DEFAULT '1.0',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create documents table referencing simplified templates
CREATE TABLE documents (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    template_id UUID NOT NULL REFERENCES templates(id) ON DELETE CASCADE,
    user_id UUID NOT NULL,
    data JSONB NOT NULL DEFAULT '{}',
    status TEXT NOT NULL DEFAULT 'draft',
    version TEXT DEFAULT '1.0',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes
CREATE INDEX idx_templates_category ON templates(category);
CREATE INDEX idx_templates_project_type ON templates(project_type);
CREATE INDEX idx_documents_template_id ON documents(template_id);
CREATE INDEX idx_documents_user_id ON documents(user_id);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Add triggers
CREATE TRIGGER update_templates_updated_at
    BEFORE UPDATE ON templates
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_documents_updated_at
    BEFORE UPDATE ON documents
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Insert sample templates
INSERT INTO templates (name, description, category, project_type, content_type, file_path, version)
VALUES 
    ('Project Proposal Template', 'Standard proposal template for construction projects', 'Construction', 'Residential', 'word', 'templates/proposal.docx', '1.0'),
    ('Cost Estimation Sheet', 'Detailed cost breakdown template', 'Construction', 'Commercial', 'ppt', 'templates/cost-estimation.pptx', '1.0'),
    ('Technical Specifications', 'Infrastructure project specifications template', 'Infrastructure', 'Roads', 'word', 'templates/tech-specs.docx', '1.0');