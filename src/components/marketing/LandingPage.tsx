import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { FileText, Users, Bell, Zap, ArrowRight } from 'lucide-react';
import Layout from '../layout/Layout';

const LandingPage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 to-primary-800 text-white py-16 md:py-24">
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
              منصة إدارة المستندات الاستشارية
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              حل متكامل لإدارة وتنظيم المستندات والعروض الاستشارية بكفاءة عالية
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/signup" className="btn bg-white text-primary-700 hover:bg-primary-50">
                ابدأ الآن مجاناً
              </Link>
              <Link to="/demo" className="btn bg-transparent border border-white text-white hover:bg-primary-700">
                شاهد العرض التوضيحي
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">مميزات المنصة</h2>
            <p className="text-xl text-secondary-600">
              حلول متكاملة لتلبية احتياجات الاستشاريين
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<FileText />}
              title="قوالب احترافية"
              description="مجموعة متنوعة من القوالب الجاهزة للاستخدام"
            />
            <FeatureCard
              icon={<Users />}
              title="تعاون فعال"
              description="العمل الجماعي وتبادل المستندات بسهولة"
            />
            <FeatureCard
              icon={<Bell />}
              title="إشعارات فورية"
              description="تنبيهات WhatsApp للتحديثات والمراجعات"
            />
            <FeatureCard
              icon={<Zap />}
              title="معاينة مباشرة"
              description="معاينة المستندات وتحريرها في الوقت الفعلي"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">جاهز للبدء؟</h2>
            <p className="text-xl text-secondary-600 mb-8">
              انضم إلى مئات الاستشاريين الذين يستخدمون منصتنا لإدارة مستنداتهم بكفاءة
            </p>
            <Link to="/signup" className="btn-primary">
              سجل الآن وابدأ مجاناً
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200 transition-all duration-300 hover:shadow-md">
      <div className="inline-block p-3 bg-primary-50 text-primary-600 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-secondary-600">{description}</p>
    </div>
  );
};

export default LandingPage;