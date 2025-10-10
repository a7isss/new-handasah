import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import HRServicesPage from './pages/services/HRServicesPage';
import MedicalCodingServicesPage from './pages/services/MedicalCodingServicesPage';
import ClinicalDocumentationPage from './pages/services/ClinicalDocumentationPage';
import ClaimsManagementPage from './pages/services/ClaimsManagementPage';
import HealthcareAnalyticsPage from './pages/services/HealthcareAnalyticsPage';
import ClinicalDecisionSupportPage from './pages/services/ClinicalDecisionSupportPage';
import AICommunicationServicesPage from './pages/services/AICommunicationServicesPage';
import AIEngineeringServicesPage from './pages/services/AIEngineeringServicesPage';
import IntegratedEngineeringSolutionsPage from './pages/services/IntegratedEngineeringSolutionsPage';
import MedicalTechnologyServicesPage from './pages/services/MedicalTechnologyServicesPage';
import MedicalOperationsPage from './pages/services/MedicalOperationsPage';
import MarketingServicesPage from './pages/services/MarketingServicesPage';
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
      <Route path="/services/hr-services" element={<HRServicesPage />} />
      <Route path="/services/ensure/medical-coding" element={<MedicalCodingServicesPage />} />
      <Route path="/services/ensure/clinical-documentation" element={<ClinicalDocumentationPage />} />
      <Route path="/services/ensure/claims-management" element={<ClaimsManagementPage />} />
      <Route path="/services/ensure/healthcare-analytics" element={<HealthcareAnalyticsPage />} />
      <Route path="/services/ensure/clinical-decision-support" element={<ClinicalDecisionSupportPage />} />
      <Route path="/services/ai-communication" element={<AICommunicationServicesPage />} />
      <Route path="/services/ai-engineering" element={<AIEngineeringServicesPage />} />
      <Route path="/services/integrated-engineering" element={<IntegratedEngineeringSolutionsPage />} />
      <Route path="/services/medical-technology" element={<MedicalTechnologyServicesPage />} />
      <Route path="/services/medical-operations" element={<MedicalOperationsPage />} />
      <Route path="/services/marketing" element={<MarketingServicesPage />} />

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
