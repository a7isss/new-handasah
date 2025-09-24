import { supabase } from '../lib/supabase';
import { ScheduleTemplate, SavedSchedule, Task } from '../types/schedule';

/**
 * Service for managing schedule templates and saved schedules with save-as functionality
 */
export class ScheduleService {
  /**
   * Fetch all schedule templates from Supabase
   */
  async getTemplates(): Promise<ScheduleTemplate[]> {
    try {
      const { data, error } = await supabase
        .from('schedule_templates')
        .select('*')
        .eq('is_shared', true) // Only get shared templates
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      // Mark all fetched templates as site templates
      return (data || []).map(template => ({
        ...template,
        is_site_template: true
      }));
    } catch (error) {
      console.error('Error fetching schedule templates:', error);
      throw new Error('Failed to fetch schedule templates');
    }
  }

  /**
   * Get a specific template by ID
   */
  async getTemplate(id: string): Promise<ScheduleTemplate | null> {
    try {
      const { data, error } = await supabase
        .from('schedule_templates')
        .select('*')
        .eq('id', id)
        .eq('is_shared', true) // Only get shared templates
        .single();

      if (error) throw error;
      
      return data ? {
        ...data,
        is_site_template: true
      } : null;
    } catch (error) {
      console.error('Error fetching template:', error);
      return null;
    }
  }

  /**
   * Save a new schedule template (template managers only)
   */
  async saveTemplate(template: Omit<ScheduleTemplate, 'id' | 'created_at' | 'updated_at'>): Promise<ScheduleTemplate> {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        throw new Error('يجب تسجيل الدخول لحفظ القوالب');
      }

      const { data, error } = await supabase
        .from('schedule_templates')
        .insert([{
          name: template.name,
          description: template.description,
          category: template.category,
          project_type: template.project_type,
          tasks: template.tasks,
          start_date: template.start_date,
          created_by: user.id,
          is_shared: true
        }])
        .select()
        .single();

      if (error) throw error;
      
      return {
        ...data,
        is_site_template: true
      };
    } catch (error) {
      console.error('Error saving template:', error);
      throw new Error('Failed to save template');
    }
  }

  /**
   * Update an existing template (template managers only)
   */
  async updateTemplate(id: string, updates: Partial<ScheduleTemplate>): Promise<ScheduleTemplate> {
    try {
      const { data, error } = await supabase
        .from('schedule_templates')
        .update({
          ...(updates.name && { name: updates.name }),
          ...(updates.description && { description: updates.description }),
          ...(updates.category && { category: updates.category }),
          ...(updates.project_type && { project_type: updates.project_type }),
          ...(updates.tasks && { tasks: updates.tasks }),
          ...(updates.start_date && { start_date: updates.start_date })
        })
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      
      return {
        ...data,
        is_site_template: true
      };
    } catch (error) {
      console.error('Error updating template:', error);
      throw new Error('Failed to update template');
    }
  }

  /**
   * Save a user's schedule (including template copies)
   */
  async saveSchedule(schedule: Omit<SavedSchedule, 'id' | 'created_at' | 'updated_at'>): Promise<SavedSchedule> {
    try {
      const { data, error } = await supabase
        .from('saved_schedules')
        .insert([{
          template_id: schedule.template_id,
          user_id: schedule.user_id,
          name: schedule.name,
          start_date: schedule.start_date,
          tasks: schedule.tasks
        }])
        .select()
        .single();

      if (error) throw error;
      
      return {
        ...data,
        is_template_copy: schedule.is_template_copy || false,
        original_template_id: schedule.original_template_id
      };
    } catch (error) {
      console.error('Error saving schedule:', error);
      throw new Error('Failed to save schedule');
    }
  }

  /**
   * Get user's saved schedules
   */
  async getUserSchedules(userId: string): Promise<SavedSchedule[]> {
    try {
      const { data, error } = await supabase
        .from('saved_schedules')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Error fetching user schedules:', error);
      throw new Error('Failed to fetch user schedules');
    }
  }

  /**
   * Update a saved schedule with auto-save functionality
   */
  async updateSchedule(id: string, updates: Partial<SavedSchedule>): Promise<SavedSchedule> {
    try {
      const updateData: any = {};
      
      if (updates.name) updateData.name = updates.name;
      if (updates.start_date) updateData.start_date = updates.start_date;
      if (updates.tasks) updateData.tasks = updates.tasks;

      const { data, error } = await supabase
        .from('saved_schedules')
        .update(updateData)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Error updating schedule:', error);
      throw new Error('Failed to update schedule');
    }
  }

  /**
   * Delete a schedule
   */
  async deleteSchedule(id: string): Promise<void> {
    try {
      const { error } = await supabase
        .from('saved_schedules')
        .delete()
        .eq('id', id);

      if (error) throw error;
    } catch (error) {
      console.error('Error deleting schedule:', error);
      throw new Error('Failed to delete schedule');
    }
  }

  /**
   * Create a copy of a template for user editing
   */
  async createTemplateCopy(
    templateId: string, 
    userId: string, 
    name: string, 
    startDate: string,
    tasks: Task[]
  ): Promise<SavedSchedule> {
    try {
      const scheduleData = {
        template_id: templateId,
        user_id: userId,
        name,
        start_date: startDate,
        tasks,
        is_template_copy: true,
        original_template_id: templateId
      };

      return await this.saveSchedule(scheduleData);
    } catch (error) {
      console.error('Error creating template copy:', error);
      throw new Error('Failed to create template copy');
    }
  }
}

export const scheduleService = new ScheduleService();