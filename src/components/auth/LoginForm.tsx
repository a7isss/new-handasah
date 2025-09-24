import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../contexts/AuthContext';
import { Eye, EyeOff } from 'lucide-react';

const LoginForm: React.FC = () => {
  const { t } = useTranslation();
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Get the redirect path from location state or default to dashboard
  const from = location.state?.from || '/dashboard';
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!email) {
      setError(t('auth.validEmailRequired'));
      return;
    }
    
    if (!password) {
      setError(t('auth.passwordRequired'));
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
    <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">{t('auth.loginButton')}</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-error-50 text-error-700 rounded-md">
          {error}
        </div>
      )}
      
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="email" className="label">
            {t('auth.emailLabel')}
          </label>
          <input
            id="email"
            type="email"
            className="input"
            placeholder={t('auth.emailPlaceholder')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
        <div className="form-control">
          <label htmlFor="password" className="label">
            {t('auth.passwordLabel')}
          </label>
          <div className="relative">
            <input
              id="password"
              type={showPassword ? 'text' : 'password'}
              className="input pr-10"
              placeholder={t('auth.passwordPlaceholder')}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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
            {t('auth.forgotPassword')}
          </Link>
        </div>
        
        <button 
          type="submit" 
          className="btn-primary w-full"
          disabled={loading}
        >
          {loading ? 'جاري تسجيل الدخول...' : t('auth.loginButton')}
        </button>
      </form>
      
      <div className="mt-6 text-center">
        <p>
          {t('auth.noAccount')}{' '}
          <Link to="/signup" className="text-primary-600 hover:text-primary-700">
            {t('auth.signupNow')}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;