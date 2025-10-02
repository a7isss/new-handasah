import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from '../../components/layout/Layout';
import { Wrench, Cog, Lightbulb, Shield, CheckCircle, ArrowRight, Building, CircuitBoard, Settings, Users } from 'lucide-react';

const IntegratedEngineeringSolutionsPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-primary-900 to-primary-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              الحلول الهندسية المتكاملة
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              نقدم حلولاً هندسية شاملة ومبتكرة لتلبية احتياجات مشاريعكم المتنوعة
            </p>
            <Link to="/contact" className="btn bg-white text-primary-700 hover:bg-primary-50">
              طلب استشارة هندسية
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
              نقدم خدمات هندسية متكاملة تشمل التصميم والتنفيذ والصيانة لمختلف المشاريع الصناعية والتجارية
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              <FeatureCard
                icon={<Building size={32} />}
                title="الهندسة المدنية والإنشائية"
                description="تصميم وتنفيذ المباني والمنشآت بأحدث المعايير الهندسية"
              />
              <FeatureCard
                icon={<CircuitBoard size={32} />}
                title="الهندسة الكهربائية والإلكترونية"
                description="حلول كهربائية متطورة وأنظمة إلكترونية ذكية"
              />
              <FeatureCard
                icon={<Settings size={32} />}
                title="الهندسة الميكانيكية"
                description="تصميم وصيانة الأنظمة الميكانيكية والمعدات الصناعية"
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
                text="فريق هندسي متخصص ومعتمد"
              />
              <BenefitItem
                icon={<CheckCircle size={20} />}
                text="استخدام أحدث التقنيات والبرمجيات الهندسية"
              />
              <BenefitItem
                icon={<CheckCircle size={20} />}
                text="الالتزام بالمعايير السعودية والدولية"
              />
              <BenefitItem
                icon={<CheckCircle size={20} />}
                text="خدمات ما بعد البيع والصيانة الدورية"
              />
              <BenefitItem
                icon={<CheckCircle size={20} />}
                text="حلول مخصصة حسب احتياجات العميل"
              />
              <BenefitItem
                icon={<CheckCircle size={20} />}
                text="أسعار تنافسية مع ضمان الجودة"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">أمثلة على التطبيقات</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <UseCaseCard
                title="المشاريع الصناعية"
                description="تصميم وتنفيذ المنشآت الصناعية والمصانع بما يتوافق مع المتطلبات التشغيلية والسلامة"
                examples={[
                  "مصانع التصنيع",
                  "مستودعات التخزين",
                  "محطات المعالجة"
                ]}
              />
              <UseCaseCard
                title="المباني التجارية"
                description="تطوير المباني التجارية والمكاتب بأحدث المعايير المستدامة والذكية"
                examples={[
                  "المجمعات التجارية",
                  "المباني المكتبية",
                  "الفنادق والمطاعم"
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">هل تحتاج إلى حلول هندسية متكاملة؟</h2>
          <p className="text-xl text-secondary-600 mb-8">
            تواصل معنا للحصول على استشارة مجانية ودراسة احتياجات مشروعك
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
        <h4 className="font-semibold text-secondary-800">أمثلة:</h4>
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

export default IntegratedEngineeringSolutionsPage;
