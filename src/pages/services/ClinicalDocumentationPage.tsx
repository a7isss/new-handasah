import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import { FileText, Brain, CheckCircle, ArrowRight, ArrowLeft, BookOpen, Zap, Clock, Users, Target } from 'lucide-react';

const ClinicalDocumentationPage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-green-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transform Raw Notes into Professional, Survey-Ready Documentation
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-green-100">
              Say goodbye to tedious documentation processes with Nathm Alhandasah's Ensure Documentation Builder. Our AI-powered platform instantly converts clinical notes into structured, standardized documentation that meets compliance requirements and enhances clinical workflows. Experience the efficiency of smart, searchable, and survey-ready medical records.
            </p>
            <Link to="/contact" className="btn bg-white text-green-700 hover:bg-green-50">
              Request Demo
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
            <span className="text-primary-600 font-medium">Clinical Documentation</span>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Service Description</h2>
            <p className="text-lg text-secondary-600 mb-8">
              Ensure Documentation Builder revolutionizes clinical documentation by leveraging advanced AI to automatically structure and standardize medical notes. Our platform transforms unstructured clinical narratives into clear, consistent SOAP templates that facilitate better patient care, research, and compliance reporting.
            </p>
            <p className="text-lg text-secondary-600">
              Built for healthcare professionals who value both quality and efficiency, our solution ensures that documentation never becomes a barrier to excellent patient care. By automating the tedious aspects of documentation, we enable clinical teams to focus on what matters most - their patients.
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
              Comprehensive documentation solutions powered by advanced AI.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <FeatureCard
              icon={<FileText size={32} />}
              title="SOAP Note Generation"
              description="Instant transformation of raw clinical notes into standardized SOAP format with Subjective, Objective, Assessment, and Plan sections."
            />
            <FeatureCard
              icon={<Brain size={32} />}
              title="Intelligent Note Structuring"
              description="Transformation of raw clinical notes into clear, searchable, and standardized formats that enhance clinical workflows."
            />
            <FeatureCard
              icon={<CheckCircle size={32} />}
              title="Survey-Ready Output"
              description="Documentation that meets regulatory and survey requirements with proper standards and compliance frameworks."
            />
            <FeatureCard
              icon={<BookOpen size={32} />}
              title="Clinical Narrative Analysis"
              description="Advanced AI analyzes and organizes clinical narratives, ensuring comprehensive information capture."
            />
            <FeatureCard
              icon={<Zap size={32} />}
              title="Medical Context Understanding"
              description="AI understands medical terminology and context to maintain information accuracy throughout transformation."
            />
            <FeatureCard
              icon={<Target size={32} />}
              title="Information Retrieval Enhancement"
              description="Structured documentation enables efficient information retrieval and supports better clinical decision-making."
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
              title="For Physicians & Clinicians"
              benefits={[
                "70% reduction in documentation time",
                "Consistent, standardized documentation format",
                "Focus on patient care instead of paperwork",
                "Minimized documentation errors",
                "Enhanced clinical workflow efficiency"
              ]}
            />
            <BenefitsGroup
              title="For Healthcare Organizations"
              benefits={[
                "Streamlined documentation processes",
                "Reduced administrative costs and overtime",
                "Consistent, high-quality medical records",
                "Guaranteed compliance with standards",
                "Improved operational efficiency across departments"
              ]}
            />
            <BenefitsGroup
              title="For Patients"
              benefits={[
                "Clear, comprehensive medical records",
                "Improved care continuity and coordination",
                "Reduced medical errors and miscommunication",
                "Better understanding of medical conditions",
                "Faster treatment decisions and care delivery"
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
              title="Documentation Standards"
              details={[
                "SOAP (Subjective, Objective, Assessment, Plan) format",
                "Problem-Oriented Medical Records",
                "Compliance formats meeting regulatory requirements",
                "Customizable to facility-specific preferences"
              ]}
            />
            <TechDetailCard
              title="Integration Capabilities"
              details={[
                "Direct EHR system integration",
                "Medical dictation system compatibility",
                "Practice management platform connectivity",
                "Automated documentation workflow integration"
              ]}
            />
            <TechDetailCard
              title="Output Formats & Security"
              details={[
                "Print-ready PDF medical records",
                "JSON/XML structured data integration",
                "Electronic system compatibility",
                "HIPAA-compliant data encryption and security"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Use Cases</h2>
            <p className="text-lg text-secondary-600">Transform documentation across various healthcare settings.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <UseCaseCard
              icon={<Users size={40} />}
              title="Primary Care Practices"
              scenarios={[
                "Physician can dictate informal notes during visits",
                "Instant conversion to comprehensive SOAP notes",
                "Appropriate medical terminology automatically applied"
              ]}
            />
            <UseCaseCard
              icon={<Target size={40} />}
              title="Specialty Clinics & Hospitals"
              scenarios={[
                "Specialized requirements for cardiology, oncology",
                "Multi-provider coordination in hospital systems",
                "Research activities with tagged clinical data"
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-green-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Clinical Documentation?</h2>
          <p className="text-xl text-secondary-600 mb-8">
            Experience the power of AI-driven clinical documentation that saves time and enhances care quality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Schedule Free Workflow Analysis
            </Link>
            <Link to="/contact" className="btn-secondary">
              Download Whitepaper
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
                <Link to="/services/ensure/medical-coding" className="text-primary-600 hover:text-primary-700 border-b border-primary-600 hover:border-primary-700">
                  Medical Coding
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
      <div className="inline-block p-3 bg-green-100 text-green-600 rounded-full mb-4">
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
      <h3 className="text-xl font-bold text-green-600">{title}</h3>
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
      <h3 className="text-lg font-bold mb-4 text-green-600">{title}</h3>
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start gap-2">
            <ArrowRight size={14} className="text-green-600 mt-1 flex-shrink-0" />
            <span className="text-secondary-700 text-sm">{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface UseCaseCardProps {
  icon: React.ReactNode;
  title: string;
  scenarios: string[];
}

const UseCaseCard: React.FC<UseCaseCardProps> = ({ icon, title, scenarios }) => {
  return (
    <div className="bg-white p-8 rounded-lg border border-secondary-200">
      <div className="flex items-center gap-4 mb-6">
        <div className="inline-block p-4 bg-green-100 text-green-600 rounded-full">
          {icon}
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <ul className="space-y-4">
        {scenarios.map((scenario, index) => (
          <li key={index} className="flex items-start gap-3">
            <ArrowRight size={16} className="text-green-600 mt-1 flex-shrink-0" />
            <span className="text-secondary-700">{scenario}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClinicalDocumentationPage;
