import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from '../../components/layout/Layout';
import { MessageSquare, Zap, BarChart, Settings, CheckCircle, ArrowRight, Smartphone, TrendingUp } from 'lucide-react';

const WhatsAppServicesPage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('services.whatsapp.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              {t('services.whatsapp.description')}
            </p>
            <Link to="/signup" className="btn bg-white text-green-700 hover:bg-green-50">
              ابدأ التكامل الآن
            </Link>
          </div>
        </div>
      </section>
      
      {/* Service Categories */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">فئات الخدمة</h2>
            <p className="text-xl text-secondary-600">
              حلول شاملة للتسويق والإشعارات التجارية عبر واتساب
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCategory
              icon={<TrendingUp size={32} />}
              title={t('services.whatsapp.categories.marketing.title')}
              description={t('services.whatsapp.categories.marketing.description')}
              features={[
                'حملات جماعية مخصصة',
                'رسائل ترويجية تفاعلية',
                'متابعة شخصية للعملاء',
                'تحليلات الأداء المتقدمة'
              ]}
              color="bg-orange-500"
            />
            <ServiceCategory
              icon={<Settings size={32} />}
              title={t('services.whatsapp.categories.business.title')}
              description={t('services.whatsapp.categories.business.description')}
              features={[
                'تنبيهات المخزون التلقائية',
                'إشعارات الفواتير والمدفوعات',
                'موافقات الإجازات HR',
                'تحديثات العملاء الفورية'
              ]}
              color="bg-blue-500"
            />
          </div>
        </div>
      </section>
      
      {/* Integration Examples */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">أمثلة التكامل</h2>
            <p className="text-xl text-secondary-600">
              كيف يتكامل واتساب مع أنظمتك الحالية
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <IntegrationExample
              title="تحديثات الطلبات"
              description="نظام ERP → تحديث حالة الطلب → إشعار واتساب للعميل"
              steps={[
                'العميل يضع طلب في النظام',
                'تحديث حالة الطلب تلقائياً',
                'إرسال إشعار واتساب فوري للعميل'
              ]}
            />
            <IntegrationExample
              title="حملة تسويقية"
              description="قاعدة بيانات العملاء → تصفية ذكية → حملة واتساب مخصصة"
              steps={[
                'تحليل بيانات العملاء بالذكاء الاصطناعي',
                'تصفية العملاء المستهدفين',
                'إرسال رسائل مخصصة عبر واتساب'
              ]}
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-green-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">ابدأ التكامل اليوم</h2>
          <p className="text-xl text-secondary-600 mb-8">
            حول تفاعلك مع العملاء إلى تجربة استثنائية
          </p>
          <Link to="/signup" className="btn-primary">
            {t('common.getStarted')}
          </Link>
        </div>
      </section>
    </Layout>
  );
};

interface ServiceCategoryProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color: string;
}

const ServiceCategory: React.FC<ServiceCategoryProps> = ({ icon, title, description, features, color }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-secondary-200">
      <div className={`inline-block p-4 ${color} text-white rounded-full mb-6`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-secondary-600 mb-6">{description}</p>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="text-green-600 ml-2 mt-1 flex-shrink-0" size={16} />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface IntegrationExampleProps {
  title: string;
  description: string;
  steps: string[];
}

const IntegrationExample: React.FC<IntegrationExampleProps> = ({ title, description, steps }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-secondary-200">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-secondary-600 mb-6">{description}</p>
      <div className="space-y-4">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center text-sm font-bold ml-3">
              {index + 1}
            </div>
            <span className="text-sm">{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatsAppServicesPage;