# Redundant Files After Gantt Chart Implementation

Based on the current project structure and the newly created Gantt chart functionality, the following files appear to be redundant:

## Removed Files
- `public/vertical_gantt_with_dependencies.html` - Standalone HTML Gantt chart that's superseded by the React-based `VerticalGanttPage` component

## Potentially Redundant Files
The following files may be redundant depending on your project requirements:

### Dashboard Pages
- `src/pages/dashboard/SchedulePage.tsx` - Basic schedule page that may be superseded by:
  - `src/pages/dashboard/IntegratedSchedulePage.tsx`
  - `src/pages/dashboard/AdvancedSchedulePage.tsx`
  - `src/pages/dashboard/VerticalGanttPage.tsx`

### Template Files
- `src/templates/scheduleTemplate.json` - Basic template that may be redundant if using more specific templates:
  - `src/templates/waterTemplate.json`
  - `src/templates/energyTemplate.json`
  - `src/templates/infrastructureTemplate.json`
  - `src/templates/largeProjectTemplate.json`

### Unused Dashboard Pages
- `src/pages/dashboard/TenderingDashboardPage.tsx` - Not referenced in App.tsx routes
- `src/pages/admin/AdminDashboardPage.tsx` - Potentially superseded by `SuperAdminDashboardPage.tsx`

### Test Files (if not actively maintained)
- `src/__tests__/setup.ts`
- `src/__tests__/useSchedule.test.ts`
- `src/__tests__/scheduleService.test.ts`

### Consultant Pages (if consultant functionality is not needed)
- `src/pages/consultant/ConsultantDashboard.tsx`
- `src/pages/consultant/DocumentPreview.tsx`
- `src/components/consultant/TemplateSelector.tsx`
- `src/components/consultant/ConsultantSidebar.tsx`

## Recommendations
1. Review each file to ensure it's not providing unique functionality
2. Consider consolidating similar schedule/dashboard pages
3. Remove unused routes and their corresponding components
4. Keep test files if you plan to maintain them, otherwise remove them
5. Evaluate if consultant functionality is needed for your use case

## Files to Keep
- `src/pages/dashboard/VerticalGanttPage.tsx` - Main Gantt chart implementation
- `src/components/schedule/VerticalGanttChart.tsx` - Core Gantt chart component
- All Supabase migrations and functions
- Core authentication and layout components