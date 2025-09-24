import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from '../components/layout/Layout';

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-9xl font-bold text-primary-600">404</h1>
          <p className="text-2xl font-semibold mb-4">{t('errors.pageNotFound')}</p>
          <p className="text-secondary-600 mb-8">الصفحة التي تبحث عنها غير موجودة أو تم نقلها</p>
          <Link to="/" className="btn-primary">
            العودة إلى الصفحة الرئيسية
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFoundPage;