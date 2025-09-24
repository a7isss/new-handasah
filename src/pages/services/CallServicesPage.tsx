import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from '../../components/layout/Layout';
import { Phone, Bot, Users, Heart, CheckCircle, ArrowRight, TrendingUp, Calendar } from 'lucide-react';

const CallServicesPage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {t('services.calls.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              {t('services.calls.description')}
            </p>
            <Link to="/signup" className="btn bg-white text-purple-700 hover:bg-purple-50">
              ابدأ مع الوكلاء الأذكياء
            </Link>
          </div>
        </div>
      </section>
      
      {/* AI Agents */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">وكلاؤنا الأذكياء</h2>
            <p className="text-xl text-secondary-600">
              ثلاثة وكلاء ذكيين متخصصين لتلبية احتياجاتك التجارية
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Sales Agent */}
            <AgentCard
              icon={<TrendingUp size={48} />}
              title={t('services.calls.agents.sales.title')}
              description={t('services.calls.agents.sales.description')}
              features={[
                'مكالمات صادرة للعملاء المحتملين',
                'تأهيل العملاء وتصنيفهم',
                'عروض مخصصة حسب الاحتياج',
                'متابعة دورية للعملاء',
                'تقارير مفصلة عن الأداء'
              ]}
              color="bg-orange-500"
              badge="الأكثر فعالية"
            />
            
            {/* Receptionist */}
            <AgentCard
              icon={<Users size={48} />}
              title={t('services.calls.agents.receptionist.title')}
              description={t('services.calls.agents.receptionist.description')}
              features={[
                'استقبال المكالمات الواردة',
                'حجز المواعيد التلقائي',
                'توجيه المكالمات للأقسام',
                'الرد على الاستفسارات الشائعة',
                'خدمة 24/7 بدون انقطاع'
              ]}
              color="bg-blue-500"
            />
            
            {/* Healthcare Survey */}
            <AgentCard
              icon={<Heart size={48} />}
              title={t('services.calls.agents.healthcare.title')}
              description={t('services.calls.agents.healthcare.description')}
              features={[
                'استطلاعات رضا المرضى',
                'متابعة ما بعد الزيارة',
                'تقييم جودة الخدمة',
                'تحليل مستوى الرضا',
                'تقارير للإدارة الطبية'
              ]}
              color="bg-green-500"
              badge="للقطاع الصحي"
            />
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">كيف تعمل الخدمة</h2>
            <p className="text-xl text-secondary-600">
              عملية بسيطة وفعالة لتشغيل الوكلاء الأذكياء
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ProcessStep
              step="1"
              title="اختيار الوكيل"
              description="حدد نوع الوكيل الذكي المناسب لاحتياجاتك"
              icon={<Bot size={24} />}
            />
            <ProcessStep
              step="2"
              title="التخصيص"
              description="قم بتخصيص النصوص والسيناريوهات حسب عملك"
              icon={<Calendar size={24} />}
            />
            <ProcessStep
              step="3"
              title="التشغيل"
              description="ابدأ تشغيل الوكيل الذكي وراقب الأداء"
              icon={<Phone size={24} />}
            />
            <ProcessStep
              step="4"
              title="التحليل"
              description="احصل على تقارير مفصلة وتحليلات الأداء"
              icon={<TrendingUp size={24} />}
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-purple-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">جاهز لتحويل خدمة العملاء؟</h2>
          <p className="text-xl text-secondary-600 mb-8">
            ابدأ مع الوكلاء الأذكياء وحسن من تجربة عملائك
          </p>
          <Link to="/signup" className="btn-primary">
            {t('common.getStarted')}
          </Link>
        </div>
      </section>
    </Layout>
  );
};

interface AgentCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color: string;
  badge?: string;
}

const AgentCard: React.FC<AgentCardProps> = ({ icon, title, description, features, color, badge }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-secondary-200 transition-all duration-300 hover:shadow-lg relative">
      {badge && (
        <div className="absolute -top-3 right-4 bg-accent-500 text-white text-sm py-1 px-3 rounded-full">
          {badge}
        </div>
      )}
      
      <div className={`inline-block p-4 ${color} text-white rounded-full mb-6`}>
        {icon}
      </div>
      
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-secondary-600 mb-6">{description}</p>
      
      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="text-primary-600 ml-2 mt-1 flex-shrink-0" size={16} />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
      
      <Link 
        to="/signup" 
        className="btn-primary w-full text-center flex items-center justify-center gap-2"
      >
        ابدأ الآن
        <ArrowRight size={16} />
      </Link>
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
        <div className="w-16 h-16 bg-purple-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
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

export default CallServicesPage;