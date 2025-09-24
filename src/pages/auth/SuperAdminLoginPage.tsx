import React, { useState } from 'react';
import { useNavigate, Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../contexts/AuthContext';
import { Eye, EyeOff } from 'lucide-react';
import Layout from '../../components/layout/Layout';

const SuperAdminLoginPage: React.FC = () => {
  const { t } = useTranslation();
  const { user, superAdminSignIn } = useAuth();
  const navigate = useNavigate();
  
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  // Redirect if already logged in as super admin
  if (user?.isSuperAdmin) {
    return <Navigate to="/spadmin" replace />;
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!id || !password) {
      setError('الرجاء إدخال معرف المشرف وكلمة المرور');
      return;
    }
    
    try {
      setLoading(true);
      await superAdminSignIn(id, password);
      navigate('/spadmin');
    } catch (error: any) {
      setError(error.message || 'بيانات تسجيل الدخول غير صحيحة');
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
              <h2 className="text-2xl font-bold text-center mb-6">تسجيل دخول المشرف</h2>
              
              {error && (
                <div className="mb-4 p-3 bg-error-50 text-error-700 rounded-md">
                  {error}
                </div>
              )}
              
              <form onSubmit={handleSubmit}>
                <div className="form-control">
                  <label htmlFor="id" className="label">
                    معرف المشرف
                  </label>
                  <input
                    id="id"
                    type="text"
                    className="input"
                    placeholder="أدخل معرف المشرف"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    required
                  />
                </div>
                
                <div className="form-control">
                  <label htmlFor="password" className="label">
                    كلمة المرور
                  </label>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      className="input pr-10"
                      placeholder="أدخل كلمة المرور"
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
                
                <button 
                  type="submit" 
                  className="btn-primary w-full mt-6"
                  disabled={loading}
                >
                  {loading ? 'جاري تسجيل الدخول...' : 'تسجيل الدخول'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default SuperAdminLoginPage;