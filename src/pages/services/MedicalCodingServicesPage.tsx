import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import { FileText, Brain, CheckCircle, ArrowRight, ArrowLeft, Globe, Zap, Shield, Settings, Code, Database } from 'lucide-react';

const MedicalCodingServicesPage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Precision ICD-10 Coding Automation for Healthcare Excellence
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Empower your coding team with Nathm Alhandasah's Ensure Coding Assistant - the intelligent solution that transforms complex medical coding processes into streamlined, accurate workflows. Our AI-powered platform eliminates manual coding errors and accelerates reimbursement cycles while ensuring compliance with global coding standards.
            </p>
            <Link to="/contact" className="btn bg-white text-blue-700 hover:bg-blue-50">
              Schedule a Demo
            </Link>
          </div>
        </div>
      </section>

      {/* Breadcrumb Navigation */}
      <section className="py-4 bg-secondary-50">
        <div className="container-custom">
          <div className="flex items-center space-x-2 text-sm">
            <Link to="/" className="text-secondary-600 hover:text-primary-600">Home</Link>
            <span className="text-secondary-400">{'>'}</span>
            <Link to="/services" className="text-secondary-600 hover:text-primary-600">Services</Link>
            <span className="text-secondary-400">{'>'}</span>
            <Link to="/services/hr-services" className="text-secondary-600 hover:text-primary-600">Ensure</Link>
            <span className="text-secondary-400">{'>'}</span>
            <span className="text-primary-600 font-medium">Medical Coding Services</span>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Service Description</h2>
            <p className="text-lg text-secondary-600 mb-8">
              Ensure Coding Assistant revolutionizes medical coding by leveraging advanced artificial intelligence to automatically translate clinical documentation into precise ICD-10 codes. Our system analyzes clinical notes, procedures, and patient records to provide accurate, compliant coding that reduces administrative burden and accelerates revenue cycles.
            </p>
            <p className="text-lg text-secondary-600">
              Built specifically for healthcare organizations seeking to optimize their coding operations, our platform integrates seamlessly with existing EHR systems and coding workflows. Whether you're a small practice or a large healthcare network, Ensure Coding Assistant scales to meet your coding volume and accuracy requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Key Features</h2>
            <p className="text-xl text-secondary-600">
              Powered by Ensure AI Engine for unparalleled coding accuracy and efficiency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <FeatureCard
              icon={<Code size={32} />}
              title="Automated ICD-10 Coding"
              description="Instant, accurate ICD-10-AM and ICD-10-CM code assignment powered by advanced algorithms that eliminate manual searching through complex databases."
            />
            <FeatureCard
              icon={<Brain size={32} />}
              title="Intelligent Code Mapping"
              description="Context-aware suggestions that learn from organizational coding patterns and provide recommendations based on patient histories and clinical specialties."
            />
            <FeatureCard
              icon={<Shield size={32} />}
              title="Compliance Monitoring"
              description="Built-in compliance checks identify potential coding errors and ensure adherence to coding guidelines and regulatory requirements."
            />
            <FeatureCard
              icon={<Settings size={32} />}
              title="Workflow Integration"
              description="API-first approach ensures compatibility with all major EHR systems and practice management platforms for seamless workflow integration."
            />
            <FeatureCard
              icon={<Zap size={32} />}
              title="Real-time Code Validation"
              description="Instant validation and guidance during the coding process with error prevention and audit trail documentation."
            />
            <FeatureCard
              icon={<Database size={32} />}
              title="Comprehensive Code Database"
              description="Up-to-date medical code databases with automatic updates to ensure compliance with the latest coding standards and regulations."
            />
          </div>
        </div>
      </section>

      {/* Benefits Summary */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits Summary</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <BenefitsGroup
              title="For Healthcare Organizations"
              benefits={[
                "Reduced Administrative Burden: Free up coding specialists to focus on complex cases",
                "Cost Savings: Lower outsourcing costs and reduce overtime requirements",
                "Revenue Optimization: Faster coding completion leads to accelerated claim submissions",
                "Improved Compliance: Consistent adherence to coding standards and regulations",
                "Quality Assurance: Enhanced coding accuracy and reduced audit risks"
              ]}
            />
            <BenefitsGroup
              title="For Coding Specialists"
              benefits={[
                "Increased Productivity: Handle greater coding volume without sacrificing accuracy",
                "Quality Assurance: AI-powered validation ensures coding consistency",
                "Professional Development: Focus on complex specialty cases and career advancement",
                "Reduced Stress: Eliminate repetitive manual searching through code databases",
                "Real-time Guidance: Instant support and validation during coding tasks"
              ]}
            />
            <BenefitsGroup
              title="For Patients"
              benefits={[
                "Faster Processing: Streamlined coding leads to quicker claim processing",
                "Accuracy Assurance: Reduced coding errors prevent unnecessary delays",
                "Cost Transparency: More accurate coding leads to better expense understanding",
                "Improved Care: Faster reimbursements enable better care delivery",
                "Reduced Errors: Precise coding minimizes billing disputes and delays"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Technical Details */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Technical Details</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TechDetailCard
              title="Supported Coding Systems"
              details={[
                "ICD-10-AM (Australian Modification) - Currently available",
                "ICD-10-CM (Clinical Modification) - Full support available",
                "Additional standards support upon request",
                "Automatic updates with latest coding changes"
              ]}
            />
            <TechDetailCard
              title="Global Coverage"
              details={[
                "Saudi Arabia, UAE, Qatar, Bahrain",
                "Australia, New Zealand, Singapore",
                "India, Philippines, Turkey, Ukraine",
                "Regional compliance and localization support"
              ]}
            />
            <TechDetailCard
              title="Integration Capabilities"
              details={[
                "RESTful API architecture for seamless integration",
                "Major EHR system compatibility (Epic, Cerner, Meditech)",
                "Practice management platform connectivity",
                "HIPAA-compliant data encryption and security"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Implementation Process</h2>
            <p className="text-lg text-secondary-600">
              Comprehensive support throughout your coding transformation journey.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <ProcessStep
                step="1"
                title="Assessment & Planning"
                description="Comprehensive evaluation of current workflows with our healthcare specialists."
              />
              <ProcessStep
                step="2"
                title="System Integration"
                description="Seamless connection with existing EHR and practice management systems."
              />
              <ProcessStep
                step="3"
                title="Training & Validation"
                description="Comprehensive training programs with real-world scenario testing."
              />
              <ProcessStep
                step="4"
                title="Go-Live Support"
                description="Dedicated technical support during initial system deployment."
              />
              <ProcessStep
                step="5"
                title="Performance Monitoring"
                description="Continuous monitoring with recommendation for workflow optimization."
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Revolutionize Your Coding Process?</h2>
          <p className="text-xl text-secondary-600 mb-8">
            Experience the power of AI-driven medical coding that saves time and ensures accuracy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Request Free Implementation Assessment
            </Link>
            <Link to="/contact" className="btn-secondary">
              Schedule Live Demonstration
            </Link>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="py-12 bg-secondary-50 border-t border-secondary-200">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Link to="/services/hr-services" className="flex items-center text-primary-600 hover:text-primary-700 font-medium">
                <ArrowLeft size={16} className="ml-2" />
                Back to Ensure Overview
              </Link>
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-secondary-800 mb-3">Explore Related Services</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/services/ensure/clinical-documentation" className="text-primary-600 hover:text-primary-700 border-b border-primary-600 hover:border-primary-700">
                  Clinical Documentation
                </Link>
                <Link to="/services/ensure/claims-management" className="text-primary-600 hover:text-primary-700 border-b border-primary-600 hover:border-primary-700">
                  Claims Management
                </Link>
                <Link to="/services/ensure/healthcare-analytics" className="text-primary-600 hover:text-primary-700 border-b border-primary-600 hover:border-primary-700">
                  Healthcare Analytics
                </Link>
              </div>
            </div>
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
    <div className="bg-white p-6 rounded-lg border border-secondary-200 hover:shadow-md transition-shadow">
      <div className="inline-block p-3 bg-blue-100 text-blue-600 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-3">{title}</h3>
      <p className="text-secondary-600">{description}</p>
    </div>
  );
};

interface BenefitsGroupProps {
  title: string;
  benefits: string[];
}

const BenefitsGroup: React.FC<BenefitsGroupProps> = ({ title, benefits }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-bold text-blue-600">{title}</h3>
      <ul className="space-y-3">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" />
            <span className="text-secondary-700 text-sm">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface TechDetailCardProps {
  title: string;
  details: string[];
}

const TechDetailCard: React.FC<TechDetailCardProps> = ({ title, details }) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-secondary-200">
      <h3 className="text-lg font-bold mb-4 text-blue-600">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start gap-2">
            <ArrowRight size={14} className="text-blue-600 mt-1 flex-shrink-0" />
            <span className="text-secondary-700 text-sm">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface ProcessStepProps {
  step: string;
  title: string;
  description: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, title, description }) => {
  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mb-4 mx-auto">
        {step}
      </div>
      <h4 className="text-lg font-bold mb-2">{title}</h4>
      <p className="text-secondary-600 text-sm">{description}</p>
    </div>
  );
};

export default MedicalCodingServicesPage;
