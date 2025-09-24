import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../contexts/AuthContext';
import { Eye, EyeOff, LogIn } from 'lucide-react';
import Layout from '../../components/layout/Layout';

const LoginPage: React.FC = () => {
  const { t } = useTranslation();
  const { signIn, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Get the redirect path from location state or default to home
  const from = location.state?.from || '/';
  
  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate(from);
    }
  }, [user, navigate, from]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email) {
      setError(t('auth.login.emailLabel') + ' مطلوب');
      return;
    }
    
    if (!password) {
      setError(t('auth.login.passwordLabel') + ' مطلوبة');
      return;
    }
    
    try {
      setLoading(true);
      await signIn(email, password);
      navigate(from);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <Layout>
      <div className="py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-md mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-center mb-6">
                <div className="inline-block p-3 bg-primary-100 text-primary-600 rounded-full mb-4">
                  <LogIn size={24} />
                </div>
                <h2 className="text-2xl font-bold mb-2">{t('auth.login.title')}</h2>
                <p className="text-secondary-600">{t('auth.login.subtitle')}</p>
              </div>
              
              {error && (
                <div className="mb-4 p-3 bg-error-50 text-error-700 rounded-md">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <label htmlFor="email" className="label">
                    {t('auth.login.emailLabel')}
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="input"
                    placeholder={t('auth.login.emailPlaceholder')}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                
                <div className="form-control">
                  <label htmlFor="password" className="label">
                    {t('auth.login.passwordLabel')}
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      className="input pr-10"
                      placeholder={t('auth.login.passwordPlaceholder')}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 rtl:left-0 rtl:right-auto pr-3 rtl:pl-3 rtl:pr-0 flex items-center text-secondary-500"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-2 mb-6">
                  <Link to="/reset-password" className="text-sm text-primary-600 hover:text-primary-700">
                    {t('auth.login.forgotPassword')}
                  </Link>
                </div>
                
                <button 
                  type="submit" 
                  className="btn-primary w-full"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white ml-2"></div>
                      جاري تسجيل الدخول...
                    </div>
                  ) : (
                    t('auth.login.loginButton')
                  )}
                </button>
              </form>
              
              <div className="mt-6 text-center">
                <p>
                  {t('auth.login.noAccount')}{' '}
                  <Link to="/verify-phone" className="text-primary-600 hover:text-primary-700">
                    {t('auth.login.signupNow')}
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LoginPage;