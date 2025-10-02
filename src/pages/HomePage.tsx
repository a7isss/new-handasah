import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from '../components/layout/Layout';
import { Bot, Users, MessageSquare, Phone, ArrowRight, CheckCircle, Zap, Shield, Clock, Building, Activity } from 'lucide-react';

const HomePage: React.FC = () => {
  const { t, ready } = useTranslation();
  
  // Don't render until translations are ready
  if (!ready) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary-600">جاري التحميل...</div>
          </div>
        </div>
      </Layout>
    );
  }
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-100 to-white text-black py-16 md:py-24">
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black">
              {t('home.hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-black">
              {t('home.hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services" className="btn bg-accent-600 text-white hover:bg-accent-700">
                {t('home.hero.cta')}
              </Link>
              <Link to="/signup" className="btn bg-transparent border border-accent-600 text-accent-600 hover:bg-accent-50">
                {t('home.hero.getStarted')}
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Main Services Overview */}
      <section className="py-16 bg-primary-100">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black">خدماتنا الرئيسية</h2>
            <p className="text-xl text-black">
              حلول متكاملة تجمع بين الابتكار والخبرة
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Users size={32} />}
              title="خدمات الموارد البشرية"
              description="حلول ذكية للتوظيف والإدارة"
              link="/services/hr"
              color="bg-accent-600"
            />
            <ServiceCard
              icon={<MessageSquare size={32} />}
              title="قنوات التواصل الموحدة"
              description="خدمة عملاء متكاملة بالذكاء الاصطناعي"
              link="/services/communication-channels"
              color="bg-royal-600"
            />
            <ServiceCard
              icon={<Building size={32} />}
              title="الحلول الهندسية المتكاملة"
              description="خدمات هندسية شاملة ومبتكرة"
              link="/services/integrated-engineering"
              color="bg-accent-700"
            />
            <ServiceCard
              icon={<Activity size={32} />}
              title="خدمات التقنية الطبية"
              description="حلول تقنية طبية متطورة"
              link="/services/medical-technology"
              color="bg-royal-700"
            />
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black">{t('home.features.title')}</h2>
            <p className="text-xl text-black">
              الجمع بين قوة الذكاء الاصطناعي والخبرة البشرية المتخصصة
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard
              icon={<Bot />}
              title={t('home.features.ai.title')}
              description={t('home.features.ai.description')}
            />
            <FeatureCard
              icon={<Users />}
              title={t('home.features.human.title')}
              description={t('home.features.human.description')}
            />
            <FeatureCard
              icon={<Zap />}
              title={t('home.features.integration.title')}
              description={t('home.features.integration.description')}
            />
            <FeatureCard
              icon={<Shield />}
              title={t('home.features.support.title')}
              description={t('home.features.support.description')}
            />
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 bg-primary-100">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-black">كيف نعمل</h2>
            <p className="text-xl text-black">
              عملية بسيطة ومؤتمتة لتحقيق أفضل النتائج
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProcessStep
              step="1"
              title="تحليل الاحتياجات"
              description="الذكاء الاصطناعي يحلل متطلباتك ويحدد أفضل الحلول"
              icon={<Bot size={24} />}
            />
            <ProcessStep
              step="2"
              title="التنفيذ الذكي"
              description="أتمتة العمليات مع إشراف بشري متخصص"
              icon={<Zap size={24} />}
            />
            <ProcessStep
              step="3"
              title="النتائج والمتابعة"
              description="تسليم النتائج مع متابعة مستمرة لضمان الجودة"
              icon={<CheckCircle size={24} />}
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4 text-black">جاهز للبدء؟</h2>
            <p className="text-xl text-black mb-8">
              انضم إلى مئات الشركات التي تستخدم خدماتنا المدعومة بالذكاء الاصطناعي
            </p>
            <Link to="/signup" className="btn bg-accent-600 text-white hover:bg-accent-700">
              {t('common.getStarted')}
            </Link>
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
  link: string;
  color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, link, color }) => {
  const { t } = useTranslation();
  
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-secondary-200 transition-all duration-300 hover:shadow-md group">
      <div className={`inline-block p-4 ${color} text-white rounded-full mb-6 group-hover:scale-110 transition-transform`}>
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-4 text-black">{title}</h3>
      <p className="text-black mb-6">{description}</p>
      <Link 
        to={link} 
        className="inline-flex items-center text-black hover:text-gray-800 font-medium"
      >
        {t('common.learnMore')}
        <ArrowRight size={16} className="mr-2" />
      </Link>
    </div>
  );
};

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="text-center">
      <div className="inline-block p-3 bg-primary-100 text-primary-600 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2 text-black">{title}</h3>
      <p className="text-black">{description}</p>
    </div>
  );
};

interface ProcessStepProps {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, title, description, icon }) => {
  return (
    <div className="text-center">
      <div className="relative mb-6">
        <div className="w-16 h-16 bg-primary-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
          {step}
        </div>
        <div className="absolute -top-2 -right-2 bg-primary-100 text-primary-600 rounded-full p-2">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2 text-black">{title}</h3>
      <p className="text-black">{description}</p>
    </div>
  );
};

export default HomePage;
