import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../contexts/AuthContext';

const ResetPasswordForm: React.FC = () => {
  const { t } = useTranslation();
  const { resetPassword } = useAuth();
  
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess(false);
    
    if (!email) {
      setError(t('auth.validEmailRequired'));
      return;
    }
    
    try {
      setLoading(true);
      await resetPassword(email);
      setSuccess(true);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  
  return (
    <div className="max-w-md w-full mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center mb-6">{t('auth.resetPassword')}</h2>
      
      {error && (
        <div className="mb-4 p-3 bg-error-50 text-error-700 rounded-md">
          {error}
        </div>
      )}
      
      {success ? (
        <div className="text-center">
          <div className="mb-4 p-3 bg-success-50 text-success-700 rounded-md">
            {t('auth.resetSuccess')}
          </div>
          <Link to="/login" className="btn-primary inline-block mt-4">
            {t('auth.backToLogin')}
          </Link>
        </div>
      ) : (
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
              required
            />
          </div>
          
          <button 
            type="submit" 
            className="btn-primary w-full mt-6"
            disabled={loading}
          >
            {loading ? 'جاري إرسال الرابط...' : t('auth.resetPasswordButton')}
          </button>
          
          <div className="mt-6 text-center">
            <Link to="/login" className="text-primary-600 hover:text-primary-700">
              {t('auth.backToLogin')}
            </Link>
          </div>
        </form>
      )}
    </div>
  );
};

export default ResetPasswordForm;