import React, { useState, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Menu, X, ChevronDown, Globe, User, LogOut, Settings } from 'lucide-react';

const Header: React.FC = () => {
  const { t, i18n, ready } = useTranslation();
  const [uiState, setUiState] = useState({
    isMenuOpen: false,
    isProfileDropdownOpen: false
  });
  const location = useLocation();
  const navigate = useNavigate();

  // Don't render until translations are ready
  if (!ready) {
    return (
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container-custom py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-primary-600">{t('app.name')}</div>
            </div>
          </div>
        </div>
      </header>
    );
  }

  // Memoize the current path to avoid unnecessary re-renders
  const currentPath = location.pathname;

  const toggleLanguage = () => {
    const newLang = i18n.language === 'ar' ? 'en' : 'ar';
    i18n.changeLanguage(newLang);
    document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLang;
  };

  // Memoize the isActive function to avoid recalculating on every render
  const isActive = useCallback((path: string) => currentPath === path, [currentPath]);

  const toggleMenu = useCallback(() => {
    setUiState(prev => ({ ...prev, isMenuOpen: !prev.isMenuOpen }));
  }, []);

  const toggleProfileDropdown = useCallback(() => {
    setUiState(prev => ({ ...prev, isProfileDropdownOpen: !prev.isProfileDropdownOpen }));
  }, []);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
              <img 
                src="/logo & Icon.svg" 
                alt={t('app.logoAlt')} 
                className="h-10 w-10"
              />
              <span className="text-2xl font-bold text-secondary-800">
                {t('app.name')}
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 rtl:space-x-reverse">
            <Link to="/services/hr-services" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/services/hr-services') ? 'text-black' : 'text-black hover:text-gray-800'}`}>
              {t('nav.ensureServices')}
            </Link>
            <Link to="/services/ai-communication" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/services/ai-communication') ? 'text-black' : 'text-black hover:text-gray-800'}`}>
              {t('nav.aiCommunicationServices')}
            </Link>
            <Link to="/training" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/training') ? 'text-black' : 'text-black hover:text-gray-800'}`}>
              {t('nav.training')}
            </Link>
            <Link to="/about" className={`px-3 py-2 rounded-md text-sm font-medium ${isActive('/about') ? 'text-black' : 'text-black hover:text-gray-800'}`}>
              {t('nav.about')}
            </Link>
            
            <button 
              onClick={toggleLanguage} 
              className="px-3 py-2 rounded-md text-sm font-medium text-secondary-700 hover:text-primary-600 flex items-center"
            >
              <Globe size={18} className="ml-1 rtl:mr-1 rtl:ml-0" />
              <span className="mr-1 rtl:ml-1 rtl:mr-0">{t('nav.language')}</span>
            </button>
            
            <div className="flex items-center space-x-2 rtl:space-x-reverse ml-3 rtl:mr-3 rtl:ml-0">
              <Link to="/login" className="btn-outline">
                {t('nav.login')}
              </Link>
              <Link to="/verify-phone" className="btn-primary whitespace-nowrap">
                {t('nav.signup')}
              </Link>
            </div>
          </nav>
          
          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              className="p-2 rounded-md text-secondary-700"
              onClick={toggleMenu}
              aria-label={uiState.isMenuOpen ? "Close menu" : "Open menu"}
            >
              {uiState.isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {uiState.isMenuOpen && (
          <div className="md:hidden mt-4 pb-3 border-t border-secondary-200">
            <div className="pt-2 space-y-1">
              <Link to="/services/hr-services" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/services/hr-services') ? 'text-black' : 'text-black hover:bg-gray-100'}`}>
                {t('nav.ensureServices')}
              </Link>
              <Link to="/services/ai-communication" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/services/ai-communication') ? 'text-black' : 'text-black hover:bg-gray-100'}`}>
                {t('nav.aiCommunicationServices')}
              </Link>
              <Link to="/training" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/training') ? 'text-black' : 'text-black hover:bg-gray-100'}`}>
                {t('nav.training')}
              </Link>
              <Link to="/about" className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/about') ? 'text-black' : 'text-black hover:bg-gray-100'}`}>
                {t('nav.about')}
              </Link>
              
              <button 
                onClick={toggleLanguage} 
                className="w-full text-left flex items-center px-3 py-2 rounded-md text-base font-medium text-black hover:bg-gray-100"
              >
                <Globe size={18} className="ml-1 rtl:mr-1 rtl:ml-0" />
                <span className="mr-1 rtl:ml-1 rtl:mr-0">{t('nav.language')}</span>
              </button>
              
              <div className="mt-3 space-y-2">
                <Link to="/login" className="block w-full btn-outline text-center">
                  {t('nav.login')}
                </Link>
                <Link to="/verify-phone" className="block w-full btn-primary text-center">
                  {t('nav.signup')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
