import { StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import App from './App';
import './index.css';
import { Toaster } from 'react-hot-toast';
import { AuthProvider } from './contexts/AuthContext';

// Create a client
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <AuthProvider>
            <Suspense fallback={<div>Loading...</div>}>
              <App />
            </Suspense>
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
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
