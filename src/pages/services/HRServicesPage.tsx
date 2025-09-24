import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from '../../components/layout/Layout';
import { Users, Bot, Target, CheckCircle, ArrowRight, Star, Briefcase, TrendingUp } from 'lucide-react';

const HRServicesPage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('services.hr.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              {t('services.hr.description')}
            </p>
            <Link to="/signup" className="btn bg-white text-blue-700 hover:bg-blue-50">
              ابدأ التوظيف الذكي
            </Link>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('services.hr.process.title')}</h2>
            <p className="text-xl text-secondary-600">
              عملية توظيف متطورة تجمع بين الأتمتة والخبرة البشرية
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ProcessStep
              step="1"
              icon={<Bot size={32} />}
              title={t('services.hr.process.step1')}
              description={t('services.hr.process.step1Desc')}
              color="bg-blue-500"
            />
            <ProcessStep
              step="2"
              icon={<Users size={32} />}
              title={t('services.hr.process.step2')}
              description={t('services.hr.process.step2Desc')}
              color="bg-green-500"
            />
            <ProcessStep
              step="3"
              icon={<Target size={32} />}
              title={t('services.hr.process.step3')}
              description={t('services.hr.process.step3Desc')}
              color="bg-purple-500"
            />
          </div>
        </div>
      </section>
      
      {/* Target Profiles */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">{t('services.hr.targetProfiles.title')}</h2>
            <p className="text-xl text-secondary-600">
              نتخصص في توظيف المواهب عالية القيمة في هذه المجالات
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProfileCard
              title={t('services.hr.targetProfiles.engineers')}
              description="مهندسون في جميع التخصصات"
              icon={<Briefcase size={24} />}
            />
            <ProfileCard
              title={t('services.hr.targetProfiles.aiSpecialists')}
              description="خبراء AI وعلوم البيانات"
              icon={<Bot size={24} />}
            />
            <ProfileCard
              title={t('services.hr.targetProfiles.businessAnalysts')}
              description="محللون ومطورو العمليات"
              icon={<TrendingUp size={24} />}
            />
            <ProfileCard
              title={t('services.hr.targetProfiles.consultants')}
              description="محاسبون ومدققون ومستشارو أعمال"
              icon={<Users size={24} />}
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">جاهز لتحسين عملية التوظيف؟</h2>
          <p className="text-xl text-secondary-600 mb-8">
            ابدأ في توظيف أفضل المواهب بكفاءة أعلى وتكلفة أقل
          </p>
          <Link to="/signup" className="btn-primary">
            {t('common.getStarted')}
          </Link>
        </div>
      </section>
    </Layout>
  );
};

interface ProcessStepProps {
  step: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, icon, title, description, color }) => {
  return (
    <div className="text-center">
      <div className="relative mb-6">
        <div className={`w-16 h-16 ${color} text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4`}>
          {step}
        </div>
        <div className="absolute -top-2 -right-2 bg-white border-2 border-secondary-200 rounded-full p-2">
          {icon}
        </div>
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-secondary-600">{description}</p>
    </div>
  );
};

interface ProfileCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200 text-center hover:shadow-md transition-shadow">
      <div className="inline-block p-3 bg-blue-100 text-blue-600 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-secondary-600">{description}</p>
    </div>
  );
};

export default HRServicesPage;