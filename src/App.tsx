import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import HRServicesPage from './pages/services/HRServicesPage';
import WhatsAppServicesPage from './pages/services/WhatsAppServicesPage';
import CallServicesPage from './pages/services/CallServicesPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import LoginPage from './pages/auth/LoginPage';
import SignupPage from './pages/auth/SignupPage';
import PhoneVerificationPage from './pages/auth/PhoneVerificationPage';
import ResetPasswordPage from './pages/auth/ResetPasswordPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const { i18n } = useTranslation();
  const location = useLocation();
  
  useEffect(() => {
    document.documentElement.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/services/hr" element={<HRServicesPage />} />
      <Route path="/services/whatsapp" element={<WhatsAppServicesPage />} />
      <Route path="/services/calls" element={<CallServicesPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/verify-phone" element={<PhoneVerificationPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/reset-password" element={<ResetPasswordPage />} />
      
      {/* 404 Route */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;