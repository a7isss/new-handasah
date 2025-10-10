import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from '../../components/layout/Layout';
import { Cpu, Brain, Zap, ArrowRight, CheckCircle, Star, Bot, BarChart3, Shield, Clock } from 'lucide-react';

const AIEngineeringServicesPage: React.FC = () => {
  const { t, i18n } = useTranslation();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-red-600 to-red-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/10 p-4 rounded-full">
                <Cpu size={48} className="text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {i18n.language === 'ar' ? 'خدمات الهندسة الذكية' : 'AI Engineering Services'}
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-red-100">
              {i18n.language === 'ar'
                ? 'نطور حلول الذكاء الاصطناعي المخصصة والمتقدمة للتحليلات والأتمتة الذكية'
                : 'Custom AI solutions and advanced automation for modern enterprises'
              }
            </p>
            <Link to="/contact" className="btn bg-white text-red-700 hover:bg-red-50 text-lg px-8 py-4">
              {i18n.language === 'ar' ? 'طلب استشارة' : 'Request Consultation'}
            </Link>
          </div>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="py-8 bg-yellow-50 border-b border-yellow-200">
        <div className="container-custom text-center">
          <div className="flex justify-center items-center space-x-4 rtl:space-x-reverse">
            <Star size={24} className="text-yellow-600" />
            <span className="text-lg font-semibold text-yellow-800">
              {i18n.language === 'ar' ? 'قريباً - قريباً جداً!' : 'Coming Soon - Very Soon!'}
            </span>
            <Star size={24} className="text-yellow-600" />
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {i18n.language === 'ar' ? 'ما نقدمه في خدمات الهندسة الذكية' : 'What We Offer in AI Engineering Services'}
            </h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              {i18n.language === 'ar'
                ? 'حلول الذكاء الاصطناعي المتطورة والتي تم تطويرها خصيصاً لاحتياجات عملك'
                : 'Advanced AI solutions customized specifically for your business needs'
              }
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">
            {i18n.language === 'ar' ? 'خدماتنا الأساسية' : 'Our Core Services'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Brain size={48} />}
              title={i18n.language === 'ar' ? 'تطوير نماذج الذكاء الاصطناعي المخصصة' : 'Custom AI Model Development'}
              description={i18n.language === 'ar'
                ? 'نماذج الذكاء الاصطناعي المصممة خصيصاً لحل تحديات عملك'
                : 'Custom AI models designed to solve your specific business challenges'
              }
              features={[
                i18n.language === 'ar' ? 'تحليل احتياجاتك بتفصيل' : 'Detailed needs assessment',
                i18n.language === 'ar' ? 'تصميم الحلول المخصصة' : 'Custom solution design',
                i18n.language === 'ar' ? 'التدريب والاختبار المتواصل' : 'Ongoing training and testing',
                i18n.language === 'ar' ? 'التشغيل والصيانة' : 'Deployment and maintenance'
              ]}
            />

            <ServiceCard
              icon={<BarChart3 size={48} />}
              title={i18n.language === 'ar' ? 'حلول الذكاء الاصطناعي المتقدمة' : 'Advanced AI Solutions'}
              description={i18n.language === 'ar'
                ? 'حلول الذكاء الاصطناعي المتطورة للأتمتة والتحليلات'
                : 'Advanced AI solutions for automation and analytics'
              }
              features={[
                i18n.language === 'ar' ? 'التعلم الآلي (Machine Learning)' : 'Machine Learning',
                i18n.language === 'ar' ? 'معالجة اللغات الطبيعية' : 'Natural Language Processing',
                i18n.language === 'ar' ? 'التحليل المرئي الحاسوبي' : 'Computer Vision',
                i18n.language === 'ar' ? 'الأتمتة الذكية' : 'Intelligent Automation'
              ]}
            />

            <ServiceCard
              icon={<Shield size={48} />}
              title={i18n.language === 'ar' ? 'التكامل مع الأنظمة الحالية' : 'System Integration'}
              description={i18n.language === 'ar'
                ? 'ربط حلول الذكاء الاصطناعي مع أنظمتك الموجودة'
                : 'Integrating AI solutions with your existing systems'
              }
              features={[
                i18n.language === 'ar' ? 'تكامل سلس وآمن' : 'Seamless and secure integration',
                i18n.language === 'ar' ? 'التدريب والدعم الفني' : 'Training and technical support',
                i18n.language === 'ar' ? 'الصيانة والتحديثات' : 'Maintenance and updates',
                i18n.language === 'ar' ? 'قياس الأداء والتحسين' : 'Performance monitoring and optimization'
              ]}
            />

            <ServiceCard
              icon={<Zap size={48} />}
              title={i18n.language === 'ar' ? 'الابتكار المستمر' : 'Continuous Innovation'}
              description={i18n.language === 'ar'
                ? 'البقاء في المقدمة مع أحدث تقنيات الذكاء الاصطناعي'
                : 'Staying ahead with the latest AI technologies'
              }
              features={[
                i18n.language === 'ar' ? 'تتبع أحدث التطورات' : 'Tracking latest developments',
                i18n.language === 'ar' ? 'التطبيقات العملية للابتكار' : 'Practical innovation applications',
                i18n.language === 'ar' ? 'التحسين والتطوير المستمر' : 'Continuous improvement and development',
                i18n.language === 'ar' ? 'دعم اتخاذ القرارات' : 'Decision-making support'
              ]}
            />

            <ServiceCard
              icon={<Bot size={48} />}
              title={i18n.language === 'ar' ? 'الحلول الآلية الذكية' : 'Intelligent Automation'}
              description={i18n.language === 'ar'
                ? 'أتمتة العمليات باستخدام الذكاء الاصطناعي'
                : 'Automating processes with AI'
              }
              features={[
                i18n.language === 'ar' ? 'تحليل العمليات الحالية' : 'Current process analysis',
                i18n.language === 'ar' ? 'تصميم مسارات العمل الذكية' : 'Intelligent workflow design',
                i18n.language === 'ar' ? 'التطبيق والاختبار' : 'Implementation and testing',
                i18n.language === 'ar' ? 'التدريب والتطوير' : 'Training and development'
              ]}
            />

            <ServiceCard
              icon={<Clock size={48} />}
              title={i18n.language === 'ar' ? 'البيانات الكبيرة والتحليلات' : 'Big Data & Analytics'}
              description={i18n.language === 'ar'
                ? 'استخراج رؤى قيمة من بياناتك الكبيرة'
                : 'Extracting valuable insights from your big data'
              }
              features={[
                i18n.language === 'ar' ? 'معالجة البيانات الكبيرة' : 'Big data processing',
                i18n.language === 'ar' ? 'التحليلات التنبؤية' : 'Predictive analytics',
                i18n.language === 'ar' ? 'التقارير والرؤى الذكية' : 'Smart insights and reporting',
                i18n.language === 'ar' ? 'تطبيقات العمل المباشرة' : 'Direct business applications'
              ]}
            />
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              {i18n.language === 'ar' ? 'الفوائد المحتملة' : 'Potential Benefits'}
            </h2>
            <p className="text-xl text-secondary-600">
              {i18n.language === 'ar'
                ? 'كيف سيغير الذكاء الاصطناعي نموذج أعمالك'
                : 'How AI will transform your business model'
              }
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard
              icon={<BarChart3 />}
              title={i18n.language === 'ar' ? 'زيادة الكفاءة' : 'Increased Efficiency'}
              description={i18n.language === 'ar'
                ? 'أتمتة العمليات المتكررة لتوفير الوقت والجهد'
                : 'Automate repetitive processes to save time and effort'
              }
            />
            <BenefitCard
              icon={<Brain />}
              title={i18n.language === 'ar' ? 'قرارات أفضل' : 'Better Decisions'}
              description={i18n.language === 'ar'
                ? 'اتخاذ قرارات مدعومة بالبيانات والتحليلات'
                : 'Make data-driven decisions with advanced analytics'
              }
            />
            <BenefitCard
              icon={<Shield />}
              title={i18n.language === 'ar' ? 'تقليل المخاطر' : 'Reduced Risk'}
              description={i18n.language === 'ar'
                ? 'الكشف المبكر عن المشاكل ومنعها'
                : 'Early problem detection and prevention'
              }
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-red-50 to-pink-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            {i18n.language === 'ar' ? 'كن من بين أوائل المستفيدين' : 'Be Among the First to Benefit'}
          </h2>
          <p className="text-xl text-secondary-600 mb-8">
            {i18n.language === 'ar'
              ? 'تواصل معنا لمعرفة المزيد عن خدمات الهندسة الذكية الجديدة لدينا'
              : 'Contact us to learn more about our new AI Engineering Services'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              {i18n.language === 'ar' ? 'احجز استشارتك الآن' : 'Book Your Consultation Now'}
            </Link>
            <Link to="/services" className="btn-outline text-lg px-8 py-4">
              {i18n.language === 'ar' ? 'عرض جميع الخدمات' : 'View All Services'}
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
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features }) => {
  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-secondary-200 hover:shadow-lg transition-all duration-300">
      <div className="inline-block p-4 bg-red-100 text-red-600 rounded-full mb-6">
        {icon}
      </div>

      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <p className="text-secondary-600 mb-6">{description}</p>

      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="text-primary-600 ml-2 mt-1 flex-shrink-0" size={16} />
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>
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
      <div className="inline-block p-4 bg-red-100 text-red-600 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-secondary-600">{description}</p>
    </div>
  );
};

export default AIEngineeringServicesPage;
