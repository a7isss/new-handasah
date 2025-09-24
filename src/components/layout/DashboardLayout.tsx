import React, { useState, useCallback } from 'react';
import { Link, useLocation, Navigate, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../contexts/AuthContext';
import { LayoutDashboard, Menu, X, LogOut, FileText, Activity, Plus, Calendar, TrendingDown } from 'lucide-react';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { t } = useTranslation();
  const { user, signOut, canManageTemplates } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  // Redirect if not logged in
  if (!user) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  const handleLogout = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  // Memoize menu items to avoid recreating the array on each render
  const menuItems = React.useMemo(() => [
    {
      id: 'main',
      icon: <LayoutDashboard size={20} />,
      label: 'لوحة التحكم',
      path: '/dashboard'
    },
    {
      id: 'templates',
      icon: <FileText size={20} />,
      label: 'القوالب',
      path: '/dashboard/templates'
    },
    {
      id: 'schedule',
      icon: <Activity size={20} />,
      label: 'الجدول الزمني',
      path: '/dashboard/schedule'
    },
    {
      id: 'schedule-vertical' as const,
      icon: <TrendingDown size={20} />,
      label: 'الجدول الزمني العمودي',
      path: '/dashboard/schedule-vertical'
    },
    {
      id: 'schedule-advanced',
      icon: <Calendar size={20} />,
      label: 'الجدول الزمني المتقدم',
      path: '/dashboard/schedule-advanced'
    }
  ], []);

  // Add template management link if user has permission
  const allMenuItems = React.useMemo(() => {
    if (canManageTemplates) {
      return [
        ...menuItems,
        {
          id: 'template-management' as const,
          icon: <Plus size={20} />,
          label: 'إدارة القوالب',
          path: '/dashboard/template-management'
        }
      ];
    }
    return menuItems;
  }, [menuItems, canManageTemplates]);
  
  // Memoize the isActive function
  const isActive = useCallback((path: string) => {
    return currentPath === path;
  }, [currentPath]);
  
  return (
    <div className="min-h-screen bg-secondary-50 flex">
      {/* Mobile sidebar */}
      <div className="md:hidden">
        {sidebarOpen && (
          <div className="fixed inset-0 z-40 flex">
            <div className="fixed inset-0 bg-secondary-900 bg-opacity-75" onClick={() => setSidebarOpen(false)}></div>
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-white">
              <div className="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  onClick={() => setSidebarOpen(false)}
                >
                  <X size={24} className="text-white" />
                </button>
              </div>
              <div className="flex-1 h-0 pt-5 pb-4 overflow-y-auto">
                <div className="flex-shrink-0 flex items-center px-4">
                  <span className="text-xl font-bold text-primary-600">{t('app.name')}</span>
                </div>
                <nav className="mt-5 px-2 space-y-1">
                  {allMenuItems.map(item => (
                    <Link
                      key={item.id}
                      to={item.path}
                      className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
                        isActive(item.path)
                          ? 'bg-primary-100 text-primary-600'
                          : 'text-secondary-700 hover:bg-secondary-100 hover:text-primary-600'
                      }`}
                    >
                      {item.icon}
                      <span className="mr-3 rtl:ml-3 rtl:mr-0">{item.label}</span>
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="flex-shrink-0 flex border-t border-secondary-200 p-4">
                <button
                  onClick={handleLogout}
                  className="flex items-center text-secondary-700 hover:text-primary-600"
                >
                  <LogOut size={20} className="ml-2 rtl:mr-2 rtl:ml-0" />
                  <span>{t('nav.logout')}</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      
      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64 border-l rtl:border-r rtl:border-l-0 border-secondary-200">
          <div className="flex flex-col h-0 flex-1 bg-white">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <span className="text-xl font-bold text-primary-600">{t('app.name')}</span>
              </div>
              <nav className="mt-5 flex-1 px-2 space-y-1">
                {allMenuItems.map(item => (
                  <Link
                    key={item.id}
                    to={item.path}
                    className={`group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive(item.path)
                        ? 'bg-primary-100 text-primary-600'
                        : 'text-secondary-700 hover:bg-secondary-100 hover:text-primary-600'
                    }`}
                  >
                    {item.icon}
                    <span className="mr-3 rtl:ml-3 rtl:mr-0">{item.label}</span>
                  </Link>
                ))}
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-secondary-200 p-4">
              <button
                onClick={handleLogout}
                className="flex items-center text-secondary-700 hover:text-primary-600"
              >
                <LogOut size={20} className="ml-2 rtl:mr-2 rtl:ml-0" />
                <span>{t('nav.logout')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex-1 overflow-auto">
        <div className="md:hidden flex items-center justify-between pl-1 pt-1 sm:pl-3 sm:pt-3 bg-white border-b border-secondary-200">
          <button
            className="p-2 rounded-md text-secondary-700 hover:text-primary-600 focus:outline-none"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={24} />
          </button>
          <div className="px-4 py-3">
            <span className="text-xl font-bold text-primary-600">{t('app.name')}</span>
          </div>
        </div>
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="py-6 px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;