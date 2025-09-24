import React from 'react';
import { Navigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from '../../components/layout/Layout';
import ResetPasswordForm from '../../components/auth/ResetPasswordForm';
import { useAuth } from '../../contexts/AuthContext';

const ResetPasswordPage: React.FC = () => {
  const { t } = useTranslation();
  const { user } = useAuth();
  
  // Redirect if already logged in
  if (user) {
    return <Navigate to="/dashboard" replace />;
  }
  
  return (
    <Layout>
      <div className="py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-md mx-auto">
            <ResetPasswordForm />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResetPasswordPage;