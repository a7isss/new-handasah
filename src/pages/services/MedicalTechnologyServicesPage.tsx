import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from '../../components/layout/Layout';
import { Activity, Heart, Stethoscope, Shield, CheckCircle, ArrowRight, Smartphone, Monitor, Zap, Users } from 'lucide-react';

const MedicalTechnologyServicesPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              خدمات التقنية الطبية
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              نقدم حلولاً تقنية طبية متطورة لتحسين جودة الرعاية الصحية والتشخيص
            </p>
            <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-primary-50">
              استشارة طبية تقنية
            </Link>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">نظرة عامة على خدماتنا</h2>
            <p className="text-lg text-secondary-600 mb-8 text-center">
              نقدم خدمات تقنية طبية شاملة تشمل الأجهزة الطبية والبرمجيات الصحية والحلول الرقمية
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <FeatureCard
                icon={<Activity size={32} />}
                title="أجهزة المراقبة والتشخيص"
                description="أحدث أجهزة مراقبة المرضى والتشخيص الطبي بدقة عالية"
              />
              <FeatureCard
                icon={<Heart size={32} />}
                title="أنظمة القلب والأوعية الدموية"
                description="حلول متخصصة لتشخيص وعلاج أمراض القلب والأوعية الدموية"
              />
              <FeatureCard
                icon={<Stethoscope size={32} />}
                title="الأجهزة التشخيصية"
                description="معدات طبية متقدمة للفحص والتشخيص الدقيق"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">المميزات الرئيسية</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <BenefitItem
                icon={<CheckCircle size={20} />}
                text="تقنيات طبية معتمدة دولياً ومحليا"
              />
              <BenefitItem
                icon={<CheckCircle size={20} />}
                text="فريق فني متخصص في الصيانة والدعم الفني"
              />
              <BenefitItem
                icon={<CheckCircle size={20} />}
                text="التزام بمعايير السلامة والجودة الصحية"
              />
              <BenefitItem
                icon={<CheckCircle size={20} />}
                text="تدريب شامل للكوادر الطبية على استخدام الأجهزة"
              />
              <BenefitItem
                icon={<CheckCircle size={20} />}
                text="خدمات الصيانة الوقائية والإصلاحية"
              />
              <BenefitItem
                icon={<CheckCircle size={20} />}
                text="ضمان على جميع الأجهزة والمعدات"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">مجالات التطبيق</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <UseCaseCard
                title="المستشفيات والمراكز الطبية"
                description="تجهيز المستشفيات والمراكز الطبية بأحدث التقنيات الطبية والتشخيصية"
                examples={[
                  "غرف العناية المركزة",
                  "أقسام الطوارئ",
                  "العيادات الخارجية",
                  "المختبرات الطبية"
                ]}
              />
              <UseCaseCard
                title="العيادات الخاصة والممارسات الطبية"
                description="حلول طبية متخصصة للعيادات والممارسات الطبية الخاصة"
                examples={[
                  "عيادات الأسنان",
                  "عيادات العيون",
                  "عيادات الأمراض الباطنية",
                  "مراكز الأشعة"
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technology Features */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">التقنيات المتقدمة</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TechFeatureCard
                icon={<Smartphone size={32} />}
                title="التطبيب عن بعد"
                description="منصات للاستشارات الطبية عن بعد والمراقبة المستمرة للمرضى"
              />
              <TechFeatureCard
                icon={<Monitor size={32} />}
                title="أنظمة المعلومات الصحية"
                description="إدارة السجلات الطبية الإلكترونية والبيانات الصحية"
              />
              <TechFeatureCard
                icon={<Zap size={32} />}
                title="الذكاء الاصطناعي الطبي"
                description="مساعدة الأطباء في التشخيص والتنبؤ بالأمراض باستخدام الذكاء الاصطناعي"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">هل تبحث عن حلول تقنية طبية متطورة؟</h2>
          <p className="text-xl text-secondary-600 mb-8">
            تواصل معنا للحصول على استشارة متخصصة في التقنيات الطبية
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              طلب استشارة
            </Link>
            <a
              href="https://wa.me/966530628416"
              target="_blank"
              rel="noopener noreferrer"
              className="btn bg-green-600 text-white hover:bg-green-700"
            >
              واتساب مباشر
            </a>
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
    <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200 hover:shadow-md transition-shadow">
      <div className="inline-block p-3 bg-primary-100 text-primary-600 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-secondary-600">{description}</p>
    </div>
  );
};

interface BenefitItemProps {
  icon: React.ReactNode;
  text: string;
}

const BenefitItem: React.FC<BenefitItemProps> = ({ icon, text }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="text-green-600">
        {icon}
      </div>
      <span className="text-secondary-700">{text}</span>
    </div>
  );
};

interface UseCaseCardProps {
  title: string;
  description: string;
  examples: string[];
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ title, description, examples }) => {
  return (
    <div className="bg-secondary-50 p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-secondary-600 mb-4">{description}</p>
      <div className="space-y-2">
        <h4 className="font-semibold text-secondary-800">التطبيقات:</h4>
        <ul className="space-y-1">
          {examples.map((example, index) => (
            <li key={index} className="text-secondary-600 flex items-center gap-2">
              <ArrowRight size={16} className="text-primary-600" />
              {example}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

interface TechFeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const TechFeatureCard: React.FC<TechFeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200 text-center hover:shadow-md transition-shadow">
      <div className="inline-block p-3 bg-primary-100 text-primary-600 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-secondary-600">{description}</p>
    </div>
  );
};

export default MedicalTechnologyServicesPage;
