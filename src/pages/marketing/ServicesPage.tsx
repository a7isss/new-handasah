import React from 'react';
import { useTranslation } from 'react-i18next';
import Layout from '../../components/layout/Layout';
import { FileText, Settings, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SubscriptionPlans from '../../components/subscription/SubscriptionPlans';

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Layout>
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-4">خدماتنا</h1>
            <p className="text-xl text-secondary-600">
              حلول متكاملة لإدارة وإعداد وثائق المناقصات بكفاءة عالية
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <ServiceCard
              icon={<FileText size={24} />}
              title="قوالب المناقصات"
              description="مجموعة شاملة من القوالب المعتمدة والمتوافقة مع متطلبات منصة اعتماد"
              features={[
                'قوالب للقطاعات المختلفة',
                'تحديث مستمر حسب المتطلبات',
                'سهولة التخصيص والتعديل'
              ]}
            />
            
            <ServiceCard
              icon={<Settings size={24} />}
              title="إدارة المستندات"
              description="نظام متكامل لإدارة وتنظيم مستندات المناقصات"
              features={[
                'تتبع حالة المستندات',
                'إدارة الإصدارات',
                'مشاركة وتعاون الفريق'
              ]}
            />
          </div>
          
          <div className="bg-primary-50 rounded-lg p-8 text-center mb-16">
            <h2 className="text-2xl font-bold mb-4">باقات الاشتراك</h2>
            <p className="text-lg text-secondary-600 mb-8">
              اختر الباقة المناسبة لاحتياجاتك
            </p>
            
            <SubscriptionPlans />
          </div>
          
          <div className="bg-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-center">الخدمات الفردية</h2>
            <p className="text-lg text-secondary-600 mb-8 text-center">
              خدمات متخصصة لتلبية احتياجاتك المحددة
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <IndividualServiceCard
                title="خطة HSSE"
                price="399"
                description="وثيقة جاهزة بصيغة PDF تتوافق مع متطلبات الصحة والسلامة والبيئة"
              />
              
              <IndividualServiceCard
                title="خطة الجودة"
                price="399"
                description="خطة جودة مهنية بصيغة PDF مصممة لتلبية متطلبات المشاريع المختلفة"
              />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200 transition-all duration-300 hover:shadow-md">
      <div className="inline-block p-3 bg-primary-50 text-primary-600 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-secondary-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <CheckCircle className="text-primary-600 ml-2" size={16} />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface IndividualServiceCardProps {
  title: string;
  price: string;
  description: string;
}

const IndividualServiceCard: React.FC<IndividualServiceCardProps> = ({ title, price, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200 transition-all duration-300 hover:shadow-md">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <div className="text-2xl font-bold mb-4">
        {price} <span className="text-lg font-normal">ريال</span>
      </div>
      <p className="text-secondary-600 mb-6">{description}</p>
      <Link to="/signup" className="btn-outline w-full text-center">
        اطلب الآن
      </Link>
    </div>
  );
};

export default ServicesPage;