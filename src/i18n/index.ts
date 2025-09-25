import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationAR from './locales/ar.json';
import translationEN from './locales/en.json';

const resources = {
  ar: {
    translation: translationAR,
  },
  en: {
    translation: translationEN,
  },
};

// Initialize i18n with better error handling
const initI18n = async () => {
  try {
    await i18n
      .use(LanguageDetector)
      .use(initReactI18next)
      .init({
        resources,
        fallbackLng: 'ar',
        lng: 'ar',
        interpolation: {
          escapeValue: false,
        },
        react: {
          useSuspense: false, // Disable suspense to prevent async issues
        },
        detection: {
          order: ['localStorage', 'navigator'],
          caches: ['localStorage'],
          lookupLocalStorage: 'i18nextLng',
        },
      });

    // Set initial direction
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'ar';
    
    return i18n;
  } catch (error) {
    console.error('i18n initialization failed:', error);
    // Fallback initialization
    await i18n.init({
      resources,
      fallbackLng: 'ar',
      lng: 'ar',
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
      },
    });
    return i18n;
  }
};

export { initI18n };
export default i18n;
