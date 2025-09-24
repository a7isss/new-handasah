import React, { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { templateSubmissionService } from '../../services/templateSubmissionService';
import { DocumentTemplateInput, ScheduleTemplateInput } from '../../types/templates';
import { FileText, Calendar, Plus, Save, X, Upload } from 'lucide-react';
import FileUploader from '../admin/FileUploader';
import toast from 'react-hot-toast';
import { format } from 'date-fns';

interface TemplateSubmissionFormProps {
  onSuccess?: () => void;
}

const TemplateSubmissionForm: React.FC<TemplateSubmissionFormProps> = ({ onSuccess }) => {
  const queryClient = useQueryClient();
  const [activeTab, setActiveTab] = useState<'document' | 'schedule'>('document');
  
  // Document template form state
  const [documentForm, setDocumentForm] = useState<DocumentTemplateInput>({
    name: '',
    description: '',
    category: '',
    project_type: '',
    content_type: 'word',
    file_path: '',
    file_size: 0
  });

  // Schedule template form state
  const [scheduleForm, setScheduleForm] = useState<ScheduleTemplateInput>({
    name: '',
    description: '',
    category: '',
    project_type: '',
    start_date: format(new Date(), 'yyyy-MM-dd'),
    tasks: []
  });

  const [tasksJson, setTasksJson] = useState('[]');

  // Predefined options
  const categories = ['Construction', 'Infrastructure', 'Energy', 'Water'];
  const projectTypes = {
    'Construction': ['Residential', 'Commercial', 'Government'],
    'Infrastructure': ['Roads', 'Bridges', 'Tunnels'],
    'Energy': ['Solar', 'Power Plants', 'Distribution Networks'],
    'Water': ['Desalination Plants', 'Distribution Networks']
  };

  // Mutations
  const addDocumentMutation = useMutation({
    mutationFn: (data: DocumentTemplateInput) => templateSubmissionService.addDocumentTemplate(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['templates'] });
      queryClient.invalidateQueries({ queryKey: ['document-templates'] });
      toast.success('تم إضافة قالب المستند بنجاح');
      resetDocumentForm();
      onSuccess?.();
    },
    onError: (error: Error) => {
      toast.error(error.message || 'فشل في إضافة قالب المستند');
    }
  });

  const addScheduleMutation = useMutation({
    mutationFn: (data: ScheduleTemplateInput) => templateSubmissionService.addScheduleTemplate(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['schedule-templates'] });
      toast.success('تم إضافة قالب الجدول الزمني بنجاح');
      resetScheduleForm();
      onSuccess?.();
    },
    onError: (error: Error) => {
      console.error('Schedule template submission error:', error); // Add this line
      toast.error(error.message || 'فشل في إضافة قالب الجدول الزمني');
    }
  });

  const resetDocumentForm = () => {
    setDocumentForm({
      name: '',
      description: '',
      category: '',
      project_type: '',
      content_type: 'word',
      file_path: '',
      file_size: 0
    });
  };

  const resetScheduleForm = () => {
    setScheduleForm({
      name: '',
      description: '',
      category: '',
      project_type: '',
      start_date: format(new Date(), 'yyyy-MM-dd'),
      tasks: []
    });
    setTasksJson('[]');
  };

  const handleDocumentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!documentForm.name || !documentForm.category || !documentForm.project_type) {
      toast.error('يرجى ملء جميع الحقول المطلوبة');
      return;
    }

    if (!documentForm.file_path) {
      toast.error('يرجى رفع ملف القالب');
      return;
    }

    addDocumentMutation.mutate(documentForm);
  };

  const handleScheduleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!scheduleForm.name || !scheduleForm.category || !scheduleForm.project_type) {
      toast.error('يرجى ملء جميع الحقول المطلوبة');
      return;
    }

    try {
      console.log('Attempting to parse tasks JSON:', tasksJson); // Add this line
      const tasks = JSON.parse(tasksJson);
      if (!Array.isArray(tasks)) {
        throw new Error('المهام يجب أن تكون مصفوفة');
      }
      
      console.log('Tasks JSON parsed successfully. Calling mutation.'); // Add this line
      addScheduleMutation.mutate({
        ...scheduleForm,
        tasks
      });
    } catch (error: any) {
      console.error('JSON parsing error:', error); // Add this line
      toast.error(error.message || 'تنسيق JSON للمهام غير صحيح');
    }
  };

  const handleFileUpload = (url: string) => {
    setDocumentForm(prev => ({
      ...prev,
      file_path: url,
      file_size: 0 // You might want to get actual file size
    }));
  };

  const getProjectTypesForCategory = (category: string) => {
    return projectTypes[category as keyof typeof projectTypes] || [];
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-secondary-200">
      <div className="border-b border-secondary-200">
        <div className="flex">
          <button
            onClick={() => setActiveTab('document')}
            className={`flex-1 px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'document'
                ? 'border-primary-500 text-primary-600 bg-primary-50'
                : 'border-transparent text-secondary-600 hover:text-secondary-800 hover:bg-secondary-50'
            }`}
          >
            <FileText size={20} className="inline ml-2" />
            إضافة قالب مستند
          </button>
          <button
            onClick={() => setActiveTab('schedule')}
            className={`flex-1 px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'schedule'
                ? 'border-primary-500 text-primary-600 bg-primary-50'
                : 'border-transparent text-secondary-600 hover:text-secondary-800 hover:bg-secondary-50'
            }`}
          >
            <Calendar size={20} className="inline ml-2" />
            إضافة قالب جدول زمني
          </button>
        </div>
      </div>

      <div className="p-6">
        {activeTab === 'document' ? (
          <form onSubmit={handleDocumentSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  اسم القالب <span className="text-error-500">*</span>
                </label>
                <input
                  type="text"
                  value={documentForm.name}
                  onChange={(e) => setDocumentForm(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="أدخل اسم القالب"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  نوع الملف <span className="text-error-500">*</span>
                </label>
                <select
                  value={documentForm.content_type}
                  onChange={(e) => setDocumentForm(prev => ({ ...prev, content_type: e.target.value as 'word' | 'ppt' }))}
                  className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                >
                  <option value="word">Word Document</option>
                  <option value="ppt">PowerPoint Presentation</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  القطاع <span className="text-error-500">*</span>
                </label>
                <select
                  value={documentForm.category}
                  onChange={(e) => {
                    setDocumentForm(prev => ({ 
                      ...prev, 
                      category: e.target.value,
                      project_type: '' // Reset project type when category changes
                    }));
                  }}
                  className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                >
                  <option value="">اختر القطاع</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  نوع المشروع <span className="text-error-500">*</span>
                </label>
                <select
                  value={documentForm.project_type}
                  onChange={(e) => setDocumentForm(prev => ({ ...prev, project_type: e.target.value }))}
                  className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                  disabled={!documentForm.category}
                >
                  <option value="">اختر نوع المشروع</option>
                  {getProjectTypesForCategory(documentForm.category).map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                الوصف
              </label>
              <textarea
                value={documentForm.description}
                onChange={(e) => setDocumentForm(prev => ({ ...prev, description: e.target.value }))}
                className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                rows={3}
                placeholder="وصف مختصر للقالب"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                ملف القالب <span className="text-error-500">*</span>
              </label>
              <FileUploader
                onUploadComplete={handleFileUpload}
                accept={documentForm.content_type === 'word' ? '.doc,.docx' : '.ppt,.pptx'}
                maxSize={50 * 1024 * 1024} // 50MB
              />
              {documentForm.file_path && (
                <p className="mt-2 text-sm text-success-600">
                  تم رفع الملف بنجاح
                </p>
              )}
            </div>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={resetDocumentForm}
                className="btn-outline"
              >
                <X size={16} />
                مسح
              </button>
              <button
                type="submit"
                disabled={addDocumentMutation.isPending}
                className="btn-primary"
              >
                {addDocumentMutation.isPending ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    جاري الإضافة...
                  </>
                ) : (
                  <>
                    <Save size={16} />
                    إضافة القالب
                  </>
                )}
              </button>
            </div>
          </form>
        ) : (
          <form onSubmit={handleScheduleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  اسم القالب <span className="text-error-500">*</span>
                </label>
                <input
                  type="text"
                  value={scheduleForm.name}
                  onChange={(e) => setScheduleForm(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="أدخل اسم القالب"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  القطاع <span className="text-error-500">*</span>
                </label>
                <select
                  value={scheduleForm.category}
                  onChange={(e) => {
                    setScheduleForm(prev => ({ 
                      ...prev, 
                      category: e.target.value,
                      project_type: '' // Reset project type when category changes
                    }));
                  }}
                  className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                >
                  <option value="">اختر القطاع</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-secondary-700 mb-2">
                  نوع المشروع <span className="text-error-500">*</span>
                </label>
                <select
                  value={scheduleForm.project_type}
                  onChange={(e) => setScheduleForm(prev => ({ ...prev, project_type: e.target.value }))}
                  className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                  required
                  disabled={!scheduleForm.category}
                >
                  <option value="">اختر نوع المشروع</option>
                  {getProjectTypesForCategory(scheduleForm.category).map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                الوصف
              </label>
              <textarea
                value={scheduleForm.description}
                onChange={(e) => setScheduleForm(prev => ({ ...prev, description: e.target.value }))}
                className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                rows={3}
                placeholder="وصف مختصر للقالب"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                تاريخ بداية المشروع <span className="text-error-500">*</span>
              </label>
              <input
                type="date"
                value={scheduleForm.start_date || format(new Date(), 'yyyy-MM-dd')}
                onChange={(e) => setScheduleForm(prev => ({ ...prev, start_date: e.target.value }))}
                className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                required
              />
              <p className="mt-1 text-xs text-secondary-500">
                تاريخ بداية المشروع المخطط له (سيتم عرض المخطط الزمني بدءاً من هذا التاريخ)
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-secondary-700 mb-2">
                المهام (JSON) <span className="text-error-500">*</span>
              </label>
              <textarea
                value={tasksJson}
                onChange={(e) => setTasksJson(e.target.value)}
                className="w-full px-3 py-2 border border-secondary-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 font-mono text-sm"
                rows={10}
                placeholder='[{"id": "task-1", "name": "اسم المهمة", "start": "2024-01-01", "end": "2024-01-10", "progress": 0}]'
                required
              />
              <p className="mt-1 text-xs text-secondary-500">
                أدخل المهام بتنسيق JSON. كل مهمة يجب أن تحتوي على: id, name, start, end, progress
              </p>
            </div>

            <div className="flex justify-end gap-3">
              <button
                type="button"
                onClick={resetScheduleForm}
                className="btn-outline"
              >
                <X size={16} />
                مسح
              </button>
              <button
                type="submit"
                disabled={addScheduleMutation.isPending}
                className="btn-primary"
              >
                {addScheduleMutation.isPending ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    جاري الإضافة...
                  </>
                ) : (
                  <>
                    <Save size={16} />
                    إضافة القالب
                  </>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default TemplateSubmissionForm;