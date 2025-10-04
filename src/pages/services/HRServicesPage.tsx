import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Layout from '../../components/layout/Layout';
import { Users, Bot, Target, CheckCircle, ArrowRight, Star, Briefcase, TrendingUp, Stethoscope, FileText, DollarSign, BarChart3, Brain } from 'lucide-react';

const HRServicesPage: React.FC = () => {
  const { t, i18n } = useTranslation();

  const getServiceAreas = () => {
    if (i18n.language === 'ar') {
      return [
        {
          title: 'الخدمات الطبية للترميز',
          description: 'الأتمتة الدقيقة لترميز ICD-10-مدعومة بمحرك إيشر AI.',
          icon: <FileText size={24} />,
          link: '/services/ensure/medical-coding'
        },
        {
          title: 'التوثيق السريري',
          description: 'تحويل الملاحظات السريرية إلى وثائق منظمة جاهزة للمسح.',
          icon: <Stethoscope size={24} />,
          link: '/services/ensure/clinical-documentation'
        },
        {
          title: 'إدارة المطالبات',
          description: 'تدقيق المطالبات الشامل، معالجة التفويض المسبق، والتحسين لدورة RCM.',
          icon: <DollarSign size={24} />,
          link: '/services/ensure/claims-management'
        },
        {
          title: 'تحليلات الرعاية الصحية',
          description: 'تحليلات داتا مزودة للتخذيذ القرارات، تحسين الإيرادات، والتمييز العملياتي.',
          icon: <BarChart3 size={24} />,
          link: '/services/ensure/healthcare-analytics'
        },
        {
          title: 'دعم اتخاذ القرارات السريرية',
          description: 'أدوات دعم الطبيب المدفوع بالذكاء الاصطناعي لتعزيز دقة التشخيص وتحسين نتائج المرضى.',
          icon: <Brain size={24} />,
          link: '/services/ensure/clinical-decision-support'
        }
      ];
    } else {
      return [
        {
          title: 'Medical Coding Services',
          description: 'Precision ICD-10-AM and ICD-10-CM coding automation powered by Ensure AI.',
          icon: <FileText size={24} />,
          link: '/services/ensure/medical-coding'
        },
        {
          title: 'Clinical Documentation',
          description: 'Transform raw clinical notes into structured, survey-ready documentation instantly.',
          icon: <Stethoscope size={24} />,
          link: '/services/ensure/clinical-documentation'
        },
        {
          title: 'Claims Management',
          description: 'Comprehensive claims auditing, pre-authorization processing, and RCM optimization.',
          icon: <DollarSign size={24} />,
          link: '/services/ensure/claims-management'
        },
        {
          title: 'Healthcare Analytics',
          description: 'Data-driven insights for strategic decision-making, revenue optimization, and operational excellence.',
          icon: <BarChart3 size={24} />,
          link: '/services/ensure/healthcare-analytics'
        },
        {
          title: 'Clinical Decision Support',
          description: 'AI-powered clinical decision support tools that enhance diagnostic accuracy and improve patient outcomes.',
          icon: <Brain size={24} />,
          link: '/services/ensure/clinical-decision-support'
        }
      ];
    }
  };

  const serviceAreas = getServiceAreas();

  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Elevate Your Healthcare Revenue Cycle with Nathm Alhandasah's Ensure
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Transform your healthcare operations with Nathm Alhandasah Company's comprehensive RCM solutions. Our advanced technology streamlines financial workflows, optimizes revenue capture, and ensures compliance while allowing your clinical teams to focus on patient care.
            </p>
            <Link to="/contact" className="btn bg-white text-blue-700 hover:bg-blue-50">
              Schedule a Demo Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Ensure - Revenue Cycle Management Platform</h2>
            <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
              Welcome to Nathm Alhandasah's Ensure - a revolutionary Revenue Cycle Management platform designed to optimize healthcare financial operations. Our comprehensive suite of solutions addresses every aspect of the RCM lifecycle, from accurate medical coding to claims management and sophisticated analytics.
            </p>
          </div>
        </div>
      </section>

      {/* Core Service Areas */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Core Service Areas</h2>
            <p className="text-xl text-secondary-600">
              Our AI-powered platform integrates seamlessly with existing healthcare systems to minimize administrative burden while maximizing revenue potential.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Ensure */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Ensure by Nathm Alhandasah?</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ValueProposition
              icon={<Star size={32} />}
              title="Proven Healthcare Expertise"
              description="Built by Nathm Alhandasah Company with deep industry knowledge and regulatory compliance expertise."
            />
            <ValueProposition
              icon={<Bot size={32} />}
              title="AI-Powered Efficiency"
              description="Advanced artificial intelligence algorithms ensure unprecedented accuracy and workflow optimization."
            />
            <ValueProposition
              icon={<TrendingUp size={32} />}
              title="Seamless Integration"
              description="Works seamlessly with existing EHR systems, practice management platforms, and healthcare workflows."
            />
            <ValueProposition
              icon={<CheckCircle size={32} />}
              title="Compliance-First Approach"
              description="Built to meet global healthcare standards including NPHIES, FHIR, and regional regulatory requirements."
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            <FAQItem
              question="What is Revenue Cycle Management?"
              answer="Revenue Cycle Management (RCM) encompasses all administrative and clinical functions that contribute to the capture, management, and collection of patient service revenue. Ensure automates and optimizes every stage of this complex process."
            />
            <FAQItem
              question="How does Ensure improve revenue capture?"
              answer="Through automated claims auditing, intelligent coding assistance, pre-authorization processing, and predictive analytics, Ensure helps healthcare organizations maximize reimbursement while minimizing denials and administrative costs."
            />
            <FAQItem
              question="Is Ensure suitable for my practice size?"
              answer="Yes, our platform is designed to scale - from solo practitioners to multi-facility healthcare systems. Our modular approach allows you to implement only the solutions you need, with the flexibility to expand as your practice grows."
            />
            <FAQItem
              question="How long does implementation take?"
              answer="Most implementations are completed within 2-4 weeks, depending on your existing systems and the specific modules you choose to deploy. Our team provides comprehensive training and ongoing support throughout the process."
            />
            <FAQItem
              question="What kind of results can I expect?"
              answer="Clients typically see improvements in revenue capture rates, reduced claim denials, and significant time savings in administrative tasks within the first 90 days of implementation."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Healthcare Revenue Cycle?</h2>
          <p className="text-xl text-secondary-600 mb-8">
            Contact our healthcare technology specialists today for a personalized demonstration and implementation plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Request Demo
            </Link>
            <Link to="/services" className="btn-secondary">
              Learn More
            </Link>
            <Link to="/contact" className="btn-secondary">
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link }) => {
  return (
    <Link to={link} className="bg-white p-6 rounded-lg border border-secondary-200 hover:shadow-lg hover:border-blue-300 transition-all duration-300 text-center group">
      <div className="inline-block p-3 bg-blue-100 text-blue-600 rounded-full mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-secondary-600 text-sm">{description}</p>
      <div className="mt-4 flex items-center justify-center text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity">
        <ArrowRight size={16} className="ml-2" />
      </div>
    </Link>
  );
};

interface ValuePropositionProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ValueProposition: React.FC<ValuePropositionProps> = ({ icon, title, description }) => {
  return (
    <div className="text-center">
      <div className="inline-block p-4 bg-blue-100 text-blue-600 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-2">{title}</h3>
      <p className="text-secondary-600 text-sm">{description}</p>
    </div>
  );
};

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-secondary-200">
      <h3 className="text-lg font-bold text-blue-600 mb-2">{question}</h3>
      <p className="text-secondary-600">{answer}</p>
    </div>
  );
};

export default HRServicesPage;
