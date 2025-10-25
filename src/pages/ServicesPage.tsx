import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from '../components/layout/Layout';
import { Users, MessageSquare, Phone, Bot, ArrowRight, CheckCircle, Star, Cpu, Zap } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const { t } = useTranslation();
  
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">خدماتنا المتطورة</h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              حلول ذكية مدعومة بالذكاء الاصطناعي والخبرة البشرية
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Services */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {/* Marketing Services */}
            <MainServiceCard
              icon={<Users size={48} />}
              title="التسويق & البيع بالعمولة"
              description="نحن نساعد شركاءنا على زيادة الإيرادات من خلال استراتيجيات تسويق موجهة ونماذج بيع بالعمولة."
              features={[
                'حملات التسويق بالعمولة',
                'شراكات البيع بالعمولة',
                'الترويج الرقمي والاستراتيجيات',
                'تتبع الأداء والتحليلات'
              ]}
              link="/services/marketing"
              color="bg-blue-500"
              badge="الأكثر طلباً"
            />
            
            
            {/* Revenue Cycle Management */}
            <MainServiceCard
              icon={<CheckCircle size={48} />}
              title="إدارة دورة الإيرادات الطبية (RCM)"
              description="حلول ذكية لإدارة دورة الإيرادات في القطاع الصحي باستخدام الذكاء الاصطناعي والتحليلات المتقدمة."
              features={[
                'ترميز إدارة المطالبات الطبية',
                'التوثيق السريري الآلي',
                'إدارة المطالبات والتحليلات',
                'دعم اتخاذ القرارات السريرية'
              ]}
              link="/services/hr-services"
              color="bg-blue-600"
            />

            {/* Medical Technology */}
            <MainServiceCard
              icon={<Phone size={48} />}
              title="خدمات التكنولوجيا الطبية"
              description="نقوم بدمج التكنولوجيا الحديثة في الرعاية الصحية لتحقيق الكفاءة والسلامة."
              features={[
                'تكامل الأجهزة الطبية',
                'أنظمة المعلومات الصحية (HIS)',
                'تدريب المستخدمين ونقل المعرفة',
                'الدعم الفني والصيانة'
              ]}
              link="/services/medical-technology"
              color="bg-purple-500"
            />

            {/* AI Engineering Services */}
            <MainServiceCard
              icon={<Cpu size={48} />}
              title="خدمات الهندسة الذكية"
              description="نطور حلول الذكاء الاصطناعي المخصصة والمتقدمة للتحليلات والأتمتة الذكية."
              features={[
                'تطوير نماذج الذكاء الاصطناعي المخصصة',
                'أنظمة التعلم الآلي والأتمتة',
                'حلول التحليلات المتقدمة والبيانات الكبيرة',
                'التكامل مع الأنظمة الموجودة والابتكار المستمر'
              ]}
              link="/services/ai-engineering"
              color="bg-red-500"
              badge="قريباً"
            />
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">لماذا الهندسة المبتكرة؟</h2>
            <p className="text-xl text-secondary-600">
              نحن نجمع بين أحدث تقنيات الذكاء الاصطناعي والخبرة البشرية المتخصصة
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <BenefitCard
              icon={<Bot />}
              title={t('home.features.ai.title')}
              description={t('home.features.ai.description')}
            />
            <BenefitCard
              icon={<Users />}
              title={t('home.features.human.title')}
              description={t('home.features.human.description')}
            />
            <BenefitCard
              icon={<CheckCircle />}
              title="توفير الوقت والتكلفة"
              description="تقليل الوقت والتكلفة مع الحفاظ على أعلى معايير الجودة"
            />
            <BenefitCard
              icon={<Star />}
              title="أمان وموثوقية"
              description="حماية البيانات وضمان الخصوصية مع خدمة موثوقة"
            />
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">ابدأ رحلتك معنا اليوم</h2>
          <p className="text-xl mb-8">
            اكتشف كيف يمكن للذكاء الاصطناعي والخبرة البشرية تحويل أعمالك
          </p>
          <Link to="/signup" className="btn bg-white text-primary-700 hover:bg-primary-50">
            {t('common.getStarted')}
          </Link>
        </div>
      </section>
    </Layout>
  );
};

interface MainServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  link: string;
  color: string;
  badge?: string;
}

const MainServiceCard: React.FC<MainServiceCardProps> = ({ 
  icon, title, description, features, link, color, badge 
}) => {
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
        to={link} 
        className="btn-primary w-full text-center flex items-center justify-center gap-2"
      >
        تعرف على المزيد
        <ArrowRight size={16} />
      </Link>
    </div>
  );
};

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => {
  return (
    <div className="text-center">
      <div className="inline-block p-3 bg-primary-100 text-primary-600 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-secondary-600">{description}</p>
    </div>
  );
};

export default ServicesPage;
