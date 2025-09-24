import React, { useState } from 'react';
import { Link, useLocation, Navigate, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../contexts/AuthContext';
import { LayoutDashboard, Users, CreditCard, Settings, Menu, X, LogOut, BarChart, Package, FileText } from 'lucide-react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const { t } = useTranslation();
  const { user, signOut, isAdmin } = useAuth();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  
  // Redirect if not logged in or not admin
  if (!user || !isAdmin) {
    return <Navigate to="/login\" state={{ from: location.pathname }} replace />;
  }

  const handleLogout = async () => {
    try {
      await signOut();
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <div className="min-h-screen bg-secondary-50 flex">
      {/* Mobile sidebar */}
      <div className="md:hidden">
        {sidebarOpen && (
          <div className="fixed inset-0 z-40 flex">
            <div className="fixed inset-0 bg-secondary-900 bg-opacity-75\" onClick={() => setSidebarOpen(false)}></div>
            <div className="relative flex-1 flex flex-col max-w-xs w-full bg-secondary-800">
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
                  <span className="text-xl font-bold text-white">{t('admin.title')}</span>
                </div>
                <nav className="mt-5 px-2 space-y-1">
                  <SidebarLinks isActive={isActive} />
                </nav>
              </div>
              <div className="flex-shrink-0 flex border-t border-secondary-700 p-4">
                <button
                  onClick={handleLogout}
                  className="flex items-center text-secondary-300 hover:text-white"
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
        <div className="flex flex-col w-64">
          <div className="flex flex-col h-0 flex-1 bg-secondary-800">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <span className="text-xl font-bold text-white">{t('admin.title')}</span>
              </div>
              <nav className="mt-5 flex-1 px-4 space-y-1">
                <SidebarLinks isActive={isActive} />
              </nav>
            </div>
            <div className="flex-shrink-0 flex border-t border-secondary-700 p-4">
              <button
                onClick={handleLogout}
                className="flex items-center text-secondary-300 hover:text-white"
              >
                <LogOut size={20} className="ml-2 rtl:mr-2 rtl:ml-0" />
                <span>{t('nav.logout')}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      
      {/* Main content */}
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="md:hidden flex items-center justify-between pl-1 pt-1 sm:pl-3 sm:pt-3 bg-secondary-800 text-white">
          <button
            className="p-2 rounded-md text-secondary-300 hover:text-white focus:outline-none"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu size={24} />
          </button>
          <div className="px-4 py-3">
            <span className="text-xl font-bold">{t('admin.title')}</span>
          </div>
        </div>
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

interface SidebarLinksProps {
  isActive: (path: string) => boolean;
}

const SidebarLinks: React.FC<SidebarLinksProps> = ({ isActive }) => {
  const { t } = useTranslation();
  
  return (
    <>
      <Link
        to="/spadmin"
        className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
          isActive('/spadmin')
            ? 'bg-secondary-700 text-white'
            : 'text-secondary-300 hover:bg-secondary-700 hover:text-white'
        }`}
      >
        <LayoutDashboard size={20} className="ml-3 rtl:mr-3 rtl:ml-0 text-secondary-300" />
        {t('admin.overview')}
      </Link>
      <Link
        to="/spadmin/users"
        className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
          isActive('/spadmin/users')
            ? 'bg-secondary-700 text-white'
            : 'text-secondary-300 hover:bg-secondary-700 hover:text-white'
        }`}
      >
        <Users size={20} className="ml-3 rtl:mr-3 rtl:ml-0 text-secondary-300" />
        {t('admin.users')}
      </Link>
      <Link
        to="/spadmin/templates"
        className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
          isActive('/spadmin/templates')
            ? 'bg-secondary-700 text-white'
            : 'text-secondary-300 hover:bg-secondary-700 hover:text-white'
        }`}
      >
        <FileText size={20} className="ml-3 rtl:mr-3 rtl:ml-0 text-secondary-300" />
        إدارة القوالب
      </Link>
      <Link
        to="/spadmin/services"
        className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
          isActive('/spadmin/services')
            ? 'bg-secondary-700 text-white'
            : 'text-secondary-300 hover:bg-secondary-700 hover:text-white'
        }`}
      >
        <Package size={20} className="ml-3 rtl:mr-3 rtl:ml-0 text-secondary-300" />
        {t('admin.services')}
      </Link>
      <Link
        to="/spadmin/subscriptions"
        className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
          isActive('/spadmin/subscriptions')
            ? 'bg-secondary-700 text-white'
            : 'text-secondary-300 hover:bg-secondary-700 hover:text-white'
        }`}
      >
        <CreditCard size={20} className="ml-3 rtl:mr-3 rtl:ml-0 text-secondary-300" />
        {t('admin.subscriptions')}
      </Link>
      <Link
        to="/spadmin/analytics"
        className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
          isActive('/spadmin/analytics')
            ? 'bg-secondary-700 text-white'
            : 'text-secondary-300 hover:bg-secondary-700 hover:text-white'
        }`}
      >
        <BarChart size={20} className="ml-3 rtl:mr-3 rtl:ml-0 text-secondary-300" />
        {t('admin.analytics')}
      </Link>
      <Link
        to="/spadmin/settings"
        className={`group flex items-center px-2 py-2 text-base font-medium rounded-md ${
          isActive('/spadmin/settings')
            ? 'bg-secondary-700 text-white'
            : 'text-secondary-300 hover:bg-secondary-700 hover:text-white'
        }`}
      >
        <Settings size={20} className="ml-3 rtl:mr-3 rtl:ml-0 text-secondary-300" />
        {t('admin.settings')}
      </Link>
    </>
  );
};

export default AdminLayout;