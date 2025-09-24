import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../contexts/AuthContext';
import { Eye, EyeOff, User } from 'lucide-react';
import Layout from '../../components/layout/Layout';

const SignupPage: React.FC = () => {
  const { t } = useTranslation();
  const { signUp, user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Get verified phone from location state
  const verifiedPhone = location.state?.verifiedPhone || '';
  
  // Redirect if already logged in
  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user, navigate]);
  
  // Redirect to phone verification if no verified phone
  useEffect(() => {
    if (!verifiedPhone) {
      navigate('/verify-phone', { state: { from: location.state?.from } });
    }
  }, [verifiedPhone, navigate, location.state?.from]);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!formData.fullName.trim()) {
      setError('يرجى إدخال الاسم الكامل');
      return;
    }
    
    if (!formData.email) {
      setError(t('auth.signup.emailLabel') + ' مطلوب');
      return;
    }
    
    if (!formData.password) {
      setError(t('auth.signup.passwordLabel') + ' مطلوبة');
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setError('كلمات المرور غير متطابقة');
      return;
    }
    
    try {
      setLoading(true);
      await signUp(formData.email, formData.password, formData.fullName, verifiedPhone);
      navigate('/');
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  
  if (!verifiedPhone) {
    return null; // Will redirect to phone verification
  }
  
  return (
    <Layout>
      <div className="py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-md mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-center mb-6">
                <div className="inline-block p-3 bg-primary-100 text-primary-600 rounded-full mb-4">
                  <User size={24} />
                </div>
                <h2 className="text-2xl font-bold mb-2">{t('auth.signup.title')}</h2>
                <p className="text-secondary-600">{t('auth.signup.subtitle')}</p>
                <div className="mt-2 text-sm text-success-600">
                  ✓ تم تأكيد رقم الهاتف: {verifiedPhone}
                </div>
              </div>
              
              {error && (
                <div className="mb-4 p-3 bg-error-50 text-error-700 rounded-md">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <label htmlFor="fullName" className="label">
                    {t('auth.signup.fullNameLabel')}
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    className="input"
                    placeholder={t('auth.signup.fullNamePlaceholder')}
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    required
                  />
                </div>
                
                <div className="form-control">
                  <label htmlFor="email" className="label">
                    {t('auth.signup.emailLabel')}
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="input"
                    placeholder={t('auth.signup.emailPlaceholder')}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                
                <div className="form-control">
                  <label htmlFor="password" className="label">
                    {t('auth.signup.passwordLabel')}
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      className="input pr-10"
                      placeholder={t('auth.signup.passwordPlaceholder')}
                      value={formData.password}
                      onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                      required
                      minLength={6}
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
                
                <div className="form-control">
                  <label htmlFor="confirmPassword" className="label">
                    {t('auth.signup.confirmPasswordLabel')}
                  </label>
                  <input
                    id="confirmPassword"
                    type={showPassword ? 'text' : 'password'}
                    className={`input ${formData.password !== formData.confirmPassword && formData.confirmPassword ? 'border-error-500' : ''}`}
                    placeholder={t('auth.signup.confirmPasswordPlaceholder')}
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    required
                    minLength={6}
                  />
                  {formData.password !== formData.confirmPassword && formData.confirmPassword && (
                    <p className="text-error-500 text-sm mt-1">كلمات المرور غير متطابقة</p>
                  )}
                </div>
                
                <button 
                  type="submit" 
                  className="btn-primary w-full mt-6"
                  disabled={loading}
                >
                  {loading ? (
                    <div className="flex items-center justify-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white ml-2"></div>
                      جاري إنشاء الحساب...
                    </div>
                  ) : (
                    t('auth.signup.createAccount')
                  )}
                </button>
              </form>
              
              <div className="mt-6 text-center">
                <p>
                  {t('auth.signup.haveAccount')}{' '}
                  <Link to="/login" className="text-primary-600 hover:text-primary-700">
                    {t('auth.signup.loginNow')}
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

export default SignupPage;