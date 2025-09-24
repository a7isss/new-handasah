-- Create schedule_templates table
CREATE TABLE IF NOT EXISTS schedule_templates (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    description TEXT,
    category TEXT NOT NULL,
    project_type TEXT NOT NULL,
    tasks JSONB NOT NULL DEFAULT '[]',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create saved_schedules table
CREATE TABLE IF NOT EXISTS saved_schedules (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    template_id UUID REFERENCES schedule_templates(id) ON DELETE CASCADE,
    user_id UUID NOT NULL,
    name TEXT NOT NULL,
    start_date DATE NOT NULL,
    tasks JSONB NOT NULL DEFAULT '[]',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_schedule_templates_category ON schedule_templates(category);
CREATE INDEX IF NOT EXISTS idx_schedule_templates_project_type ON schedule_templates(project_type);
CREATE INDEX IF NOT EXISTS idx_saved_schedules_user_id ON saved_schedules(user_id);
CREATE INDEX IF NOT EXISTS idx_saved_schedules_template_id ON saved_schedules(template_id);

-- Enable RLS
ALTER TABLE schedule_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE saved_schedules ENABLE ROW LEVEL SECURITY;

-- Create policies for schedule_templates (public read, admin write)
CREATE POLICY "Anyone can read schedule templates"
    ON schedule_templates
    FOR SELECT
    TO public
    USING (true);

CREATE POLICY "Authenticated users can create schedule templates"
    ON schedule_templates
    FOR INSERT
    TO authenticated
    WITH CHECK (true);

CREATE POLICY "Authenticated users can update schedule templates"
    ON schedule_templates
    FOR UPDATE
    TO authenticated
    USING (true);

-- Create policies for saved_schedules (user-specific)
CREATE POLICY "Users can read own saved schedules"
    ON saved_schedules
    FOR SELECT
    TO authenticated
    USING (auth.uid() = user_id);

CREATE POLICY "Users can create own saved schedules"
    ON saved_schedules
    FOR INSERT
    TO authenticated
    WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update own saved schedules"
    ON saved_schedules
    FOR UPDATE
    TO authenticated
    USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own saved schedules"
    ON saved_schedules
    FOR DELETE
    TO authenticated
    USING (auth.uid() = user_id);

-- Create trigger for updated_at
CREATE TRIGGER update_schedule_templates_updated_at
    BEFORE UPDATE ON schedule_templates
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_saved_schedules_updated_at
    BEFORE UPDATE ON saved_schedules
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Insert sample schedule templates
INSERT INTO schedule_templates (name, description, category, project_type, tasks) VALUES 
(
    'مشروع بناء سكني',
    'جدول زمني نموذجي لمشروع بناء سكني متوسط الحجم',
    'Construction',
    'Residential',
    '[
        {
            "id": "task-1",
            "name": "التخطيط والتصميم",
            "start": "2024-01-01",
            "end": "2024-01-30",
            "progress": 0,
            "dependencies": ""
        },
        {
            "id": "task-2",
            "name": "الحصول على التصاريح",
            "start": "2024-01-31",
            "end": "2024-02-15",
            "progress": 0,
            "dependencies": "task-1"
        },
        {
            "id": "task-3",
            "name": "أعمال الحفر والأساسات",
            "start": "2024-02-16",
            "end": "2024-03-15",
            "progress": 0,
            "dependencies": "task-2"
        },
        {
            "id": "task-4",
            "name": "أعمال الخرسانة المسلحة",
            "start": "2024-03-16",
            "end": "2024-05-15",
            "progress": 0,
            "dependencies": "task-3"
        },
        {
            "id": "task-5",
            "name": "أعمال البناء والجدران",
            "start": "2024-05-16",
            "end": "2024-07-15",
            "progress": 0,
            "dependencies": "task-4"
        },
        {
            "id": "task-6",
            "name": "أعمال التشطيبات",
            "start": "2024-07-16",
            "end": "2024-09-15",
            "progress": 0,
            "dependencies": "task-5"
        },
        {
            "id": "task-7",
            "name": "التسليم النهائي",
            "start": "2024-09-16",
            "end": "2024-09-30",
            "progress": 0,
            "dependencies": "task-6"
        }
    ]'
),
(
    'مشروع طريق سريع',
    'جدول زمني لإنشاء طريق سريع بطول 50 كم',
    'Infrastructure',
    'Roads',
    '[
        {
            "id": "road-1",
            "name": "المسح والتصميم",
            "start": "2024-01-01",
            "end": "2024-02-29",
            "progress": 0,
            "dependencies": ""
        },
        {
            "id": "road-2",
            "name": "إزالة العوائق",
            "start": "2024-03-01",
            "end": "2024-03-31",
            "progress": 0,
            "dependencies": "road-1"
        },
        {
            "id": "road-3",
            "name": "أعمال الحفر والردم",
            "start": "2024-04-01",
            "end": "2024-06-30",
            "progress": 0,
            "dependencies": "road-2"
        },
        {
            "id": "road-4",
            "name": "طبقة الأساس",
            "start": "2024-07-01",
            "end": "2024-08-31",
            "progress": 0,
            "dependencies": "road-3"
        },
        {
            "id": "road-5",
            "name": "طبقة الأسفلت",
            "start": "2024-09-01",
            "end": "2024-10-31",
            "progress": 0,
            "dependencies": "road-4"
        },
        {
            "id": "road-6",
            "name": "اللوحات والإشارات",
            "start": "2024-11-01",
            "end": "2024-11-30",
            "progress": 0,
            "dependencies": "road-5"
        }
    ]'
),
(
    'مشروع محطة طاقة شمسية',
    'جدول زمني لإنشاء محطة طاقة شمسية بقدرة 100 ميجاوات',
    'Energy',
    'Solar',
    '[
        {
            "id": "solar-1",
            "name": "دراسة الجدوى والتصميم",
            "start": "2024-01-01",
            "end": "2024-03-31",
            "progress": 0,
            "dependencies": ""
        },
        {
            "id": "solar-2",
            "name": "تحضير الموقع",
            "start": "2024-04-01",
            "end": "2024-05-31",
            "progress": 0,
            "dependencies": "solar-1"
        },
        {
            "id": "solar-3",
            "name": "تركيب الهياكل الداعمة",
            "start": "2024-06-01",
            "end": "2024-08-31",
            "progress": 0,
            "dependencies": "solar-2"
        },
        {
            "id": "solar-4",
            "name": "تركيب الألواح الشمسية",
            "start": "2024-09-01",
            "end": "2024-11-30",
            "progress": 0,
            "dependencies": "solar-3"
        },
        {
            "id": "solar-5",
            "name": "التوصيلات الكهربائية",
            "start": "2024-12-01",
            "end": "2025-01-31",
            "progress": 0,
            "dependencies": "solar-4"
        },
        {
            "id": "solar-6",
            "name": "الاختبار والتشغيل",
            "start": "2025-02-01",
            "end": "2025-02-28",
            "progress": 0,
            "dependencies": "solar-5"
        }
    ]'
);