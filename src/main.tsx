import { StrictMode, useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { I18nextProvider } from 'react-i18next';
import { initI18n } from './i18n';
import App from './App';
import './index.css';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';

// Create a client
const queryClient = new QueryClient();

function Root() {
  const [i18nReady, setI18nReady] = useState(false);
  const [i18nInstance, setI18nInstance] = useState<any>(null);

  useEffect(() => {
    const initializeApp = async () => {
      try {
        const instance = await initI18n();
        setI18nInstance(instance);
        setI18nReady(true);
      } catch (error) {
        console.error('Failed to initialize i18n:', error);
        // Even if i18n fails, we should still render the app
        setI18nReady(true);
      }
    };

    initializeApp();
  }, []);

  if (!i18nReady || !i18nInstance) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '100vh',
        fontFamily: 'Tajawal, sans-serif',
        direction: 'rtl'
      }}>
        <div>جاري التحميل...</div>
      </div>
    );
  }

  return (
    <I18nextProvider i18n={i18nInstance}>
      <AuthProvider>
        <App />
        <Toaster 
          position="top-center"
          toastOptions={{
            duration: 3000,
            style: {
              fontFamily: 'Tajawal, sans-serif',
            },
          }} 
        />
      </AuthProvider>
    </I18nextProvider>
  );
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
