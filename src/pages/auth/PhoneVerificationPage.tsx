import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../contexts/AuthContext';
import { Phone, ArrowRight } from 'lucide-react';
import Layout from '../../components/layout/Layout';
import toast from 'react-hot-toast';

const PhoneVerificationPage: React.FC = () => {
  const { t } = useTranslation();
  const { verifyPhone, confirmPhoneVerification } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  
  const [step, setStep] = useState<'phone' | 'code'>('phone');
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [verificationId, setVerificationId] = useState('');
  const [loading, setLoading] = useState(false);
  
  const handleSendCode = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!phone || phone.length < 10) {
      toast.error(t('auth.phoneVerification.invalidPhone'));
      return;
    }
    
    try {
      setLoading(true);
      const id = await verifyPhone(phone);
      setVerificationId(id);
      setStep('code');
    } catch (error) {
      console.error('Phone verification error:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleVerifyCode = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!code || code.length !== 6) {
      toast.error(t('auth.phoneVerification.invalidCode'));
      return;
    }
    
    try {
      setLoading(true);
      const isValid = await confirmPhoneVerification(phone, code);
      
      if (isValid) {
        // Pass phone number to signup page
        navigate('/signup', { 
          state: { 
            verifiedPhone: phone,
            from: location.state?.from 
          } 
        });
      }
    } catch (error) {
      console.error('Code verification error:', error);
    } finally {
      setLoading(false);
    }
  };
  
  const handleResendCode = async () => {
    try {
      setLoading(true);
      const id = await verifyPhone(phone);
      setVerificationId(id);
      toast.success(t('auth.phoneVerification.codeSent'));
    } catch (error) {
      console.error('Resend code error:', error);
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
                  <Phone size={24} />
                </div>
                <h2 className="text-2xl font-bold mb-2">{t('auth.phoneVerification.title')}</h2>
                <p className="text-secondary-600">{t('auth.phoneVerification.subtitle')}</p>
              </div>
              
              {step === 'phone' ? (
                <form onSubmit={handleSendCode}>
                  <div className="form-control">
                    <label htmlFor="phone" className="label">
                      {t('auth.phoneVerification.phoneLabel')}
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      className="input"
                      placeholder={t('auth.phoneVerification.phonePlaceholder')}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      maxLength={10}
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn-primary w-full"
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white ml-2"></div>
                        جاري الإرسال...
                      </div>
                    ) : (
                      <>
                        {t('auth.phoneVerification.sendCode')}
                        <ArrowRight size={16} className="mr-2" />
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <form onSubmit={handleVerifyCode}>
                  <div className="form-control">
                    <label htmlFor="code" className="label">
                      {t('auth.phoneVerification.codeLabel')}
                    </label>
                    <input
                      id="code"
                      type="text"
                      className="input text-center text-2xl tracking-widest"
                      placeholder={t('auth.phoneVerification.codePlaceholder')}
                      value={code}
                      onChange={(e) => setCode(e.target.value.replace(/\D/g, ''))}
                      required
                      maxLength={6}
                    />
                    <p className="text-sm text-secondary-500 mt-2">
                      تم إرسال الرمز إلى {phone}
                    </p>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn-primary w-full mb-4"
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white ml-2"></div>
                        جاري التحقق...
                      </div>
                    ) : (
                      <>
                        {t('auth.phoneVerification.verifyCode')}
                        <ArrowRight size={16} className="mr-2" />
                      </>
                    )}
                  </button>
                  
                  <button
                    type="button"
                    onClick={handleResendCode}
                    className="btn-outline w-full"
                    disabled={loading}
                  >
                    {t('auth.phoneVerification.resendCode')}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PhoneVerificationPage;