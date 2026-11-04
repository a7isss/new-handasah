import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Pages
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import HRServicesPage from './pages/services/HRServicesPage';
import AcquisitionGuidePage from './pages/services/AcquisitionGuidePage';
import VendorsPage from './pages/VendorsPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CompanyProfilePage from './pages/CompanyProfilePage';
import StationProfilePage from './pages/StationProfilePage';
import StationProfilePageAr from './pages/StationProfilePageAr';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/services/acquisition-guide" element={<AcquisitionGuidePage />} />
      <Route path="/services/hr" element={<HRServicesPage />} />
      <Route path="/vendors" element={<VendorsPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/company-profile" element={<CompanyProfilePage />} />
      <Route path="/station" element={<StationProfilePage />} />
      <Route path="/station-ar" element={<StationProfilePageAr />} />

      {/* 404 Route */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
