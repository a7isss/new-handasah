import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Facebook, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">{t('app.name')}</h3>
            <p className="text-secondary-300 mb-4">{t('app.tagline')}</p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              <a href="#" className="text-secondary-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-secondary-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-secondary-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-secondary-300 hover:text-white transition-colors">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-300 hover:text-white transition-colors">
                  {t('nav.services')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-secondary-300 hover:text-white transition-colors">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-300 hover:text-white transition-colors">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">خدماتنا</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/services" className="text-secondary-300 hover:text-white transition-colors">
                  {t('home.services.service1.title')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-300 hover:text-white transition-colors">
                  {t('home.services.service2.title')}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-300 hover:text-white transition-colors">
                  {t('home.services.service3.title')}
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">اتصل بنا</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="mt-1 ml-2 rtl:mr-0 text-secondary-300" />
                <span className="text-secondary-300">حائل، حي الشفا، الرمز البريدي 55437، مبنى رقم 5646، 7217</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="ml-2 rtl:mr-0 text-secondary-300" />
                <span className="text-secondary-300">+966530628416</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="ml-2 rtl:mr-0 text-secondary-300" />
                <span className="text-secondary-300">info@example.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-secondary-700 text-center text-secondary-400">
          <p>&copy; {currentYear} {t('app.name')}. كل الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
