import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import { Zap, Brain, CheckCircle, ArrowRight, ArrowLeft, Shield, Target, Activity, FileText, Database, Clock, Heart } from 'lucide-react';

const ClinicalDecisionSupportPage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-orange-600 to-orange-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              AI-Powered Clinical Excellence for Modern Healthcare
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Empower your clinical teams with Nathm Alhandasah's Ensure Clinical Decision Support System (CDSS). Our advanced AI platform combines evidence-based medicine with real-time clinical insights to enhance diagnostic accuracy, reduce errors, and streamline clinical workflows. Experience precision medicine that adapts to individual patient needs while maintaining global healthcare standards.
            </p>
            <Link to="/contact" className="btn bg-white text-orange-700 hover:bg-orange-50">
              Schedule CDSS Demonstration
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
            <span className="text-primary-600 font-medium">Clinical Decision Support</span>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Service Description</h2>
            <p className="text-lg text-secondary-600 mb-8">
              Ensure Clinical Decision Support System redefines clinical practice by integrating advanced artificial intelligence with evidence-based medical knowledge. Our platform goes beyond basic alerts to provide comprehensive clinical intelligence, including differential diagnosis engines, personalized order sets, and real-time clinical guidance.
            </p>
            <p className="text-lg text-secondary-600">
              Designed to move beyond traditional CDS alerts, Ensure CDSS delivers intelligent, context-aware recommendations that account for patient history, clinical presentation, and regional medical practices. Whether integrated via API or accessed through our intuitive web interface, Ensure CDSS empowers clinicians to make confident, data-driven decisions that improve patient outcomes and operational efficiency.
            </p>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Value Propositions</h2>
            <p className="text-xl text-secondary-600">Moving beyond basic CDS alerts to comprehensive clinical intelligence.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <ValuePropositionCard
              icon={<Target size={32} />}
              title="Precision Diagnoses"
              description="Eliminate diagnostic ambiguities with advanced AI-powered analysis and natural language processing to provide precise diagnostic recommendations."
              benefits={[
                "Early diagnostic accuracy improvement",
                "Comprehensive differential diagnosis support",
                "Evidence-based recommendation engine",
                "Clinical reasoning enhancement"
              ]}
            />
            <ValuePropositionCard
              icon={<Shield size={32} />}
              title="Clinical Awareness"
              description="Proactive safeguards through intelligent alerting systems that prevent adverse events before they occur."
              benefits={[
                "Drug interaction prevention",
                "Allergy and contraindication alerts",
                "Patient safety enhancement",
                "Risk mitigation and prevention"
              ]}
            />
            <ValuePropositionCard
              icon={<Zap size={32} />}
              title="Boosting Efficiency"
              description="Streamline clinical workflows and automate routine tasks while maintaining care quality standards."
              benefits={[
                "Clinical task automation",
                "Time-saving workflow optimization",
                "Enhanced clinical productivity",
                "Reduced administrative burden"
              ]}
            />
            <ValuePropositionCard
              icon={<Heart size={32} />}
              title="Standardized Care Excellence"
              description="Evidence-based practice standardization using CHI-approved guidelines for consistent, high-quality care delivery."
              benefits={[
                "CHI-approved guideline compliance",
                "Care standardization implementation",
                "Quality assurance frameworks",
                "Regional practice alignment"
              ]}
            />
          </div>
        </div>
      </section>

      {/* System Features */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">System Features</h2>
            <p className="text-lg text-secondary-600">Comprehensive clinical intelligence capabilities.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FeatureGroup
              title="Core CDSS Capabilities"
              features={[
                "Differential diagnosis engine with confidence scores",
                "AI-powered medical record analysis",
                "Evidence-based order sets and recommendations",
                "Patient-tailored dynamic protocols",
                "Historical data analysis for predictions"
              ]}
            />
            <FeatureGroup
              title="Advanced Intelligence Features"
              features={[
                "Natural language processing for clinical data",
                "Machine learning algorithms for pattern recognition",
                "Real-time clinical guidance and alerts",
                "Multi-specialty clinical pathway support",
                "Integration with medical knowledge bases"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Solution Access Options */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Solution Access Options</h2>
            <p className="text-lg text-secondary-600">Flexible deployment options for different healthcare environments.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <AccessOptionCard
              title="DynSet API"
              subtitle="Enterprise-grade API integration for seamless EHR connectivity"
              description="Embed advanced clinical decision support directly within existing electronic health record systems, reducing medical errors and improving claims approval rates through NPHIES and FHIR standard compliance."
              features={[
                "EHR system integration",
                "Evidence-based order sets",
                "NPHIES/FHIR compliance",
                "Real-time clinical guidance"
              ]}
            />
            <AccessOptionCard
              title="Ensure Omni Web"
              subtitle="Intuitive web-based clinical decision support interface"
              description="A comprehensive clinical workstation providing real-time, evidence-based recommendations with an intelligent UI that enhances decision-making efficiency and patient care quality."
              features={[
                "Intuitive clinical interface",
                "Real-time recommendations",
                "Enhanced decision-making",
                "Multi-specialty support"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Bundled Services */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Bundled Services</h2>
            <p className="text-lg text-secondary-600">Complete support package for successful CDSS implementation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceBundleCard
              title="Clinical Pathways"
              description="Specialized care protocols tailored to medical specialties"
            />
            <ServiceBundleCard
              title="Physician Training"
              description="Hands-on training for maximizing CDSS utilization"
            />
            <ServiceBundleCard
              title="Technical Integration"
              description="Complete integration services for system deployment"
            />
            <ServiceBundleCard
              title="Pharmacy Integration"
              description="Pharmacy system connectivity for medication optimization"
            />
          </div>
        </div>
      </section>

      {/* Clinical Standards & Compliance */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Clinical Standards & Compliance</h2>
            <p className="text-lg text-secondary-600">Built to meet global healthcare standards and regional requirements.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ComplianceCard
              icon={<CheckCircle size={20} />}
              title="NPHIES Standards"
              description="Full National Platform for Health Information Exchange compliance"
            />
            <ComplianceCard
              icon={<Database size={20} />}
              title="FHIR Integration"
              description="Modern healthcare interoperability standards support"
            />
            <ComplianceCard
              icon={<Shield size={20} />}
              title="CHI Guidelines"
              description="Council of Health Insurance approved protocols"
            />
            <ComplianceCard
              icon={<Heart size={20} />}
              title="International Standards"
              description="Global healthcare best practice alignment"
            />
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Implementation & Support</h2>
            <p className="text-lg text-secondary-600">Comprehensive deployment and ongoing support services.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <ProcessStep step="1" title="Clinical Workflow Assessment" />
              <ProcessStep step="2" title="System Customization" />
              <ProcessStep step="3" title="Integration Testing" />
              <ProcessStep step="4" title="Clinical Validation" />
              <ProcessStep step="5" title="Go-Live Support" />
              <ProcessStep step="6" title="Training & Adoption" />
              <ProcessStep step="7" title="Performance Monitoring" />
              <ProcessStep step="8" title="Continuous Improvement" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Transform Your Clinical Practice with AI-Powered Decision Support</h2>
          <p className="text-xl text-secondary-600 mb-8">
            Experience the future of evidence-based clinical decision-making with Ensure CDSS.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Schedule Clinical Demo
            </Link>
            <Link to="/contact" className="btn-secondary">
              Download CDSS Whitepaper
            </Link>
            <Link to="/contact" className="btn-secondary">
              Request Free Trial
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
                <Link to="/services/ensure/clinical-documentation" className="text-primary-600 hover:text-primary-700 border-b border-primary-600 hover:border-primary-700">
                  Clinical Documentation
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

interface ValuePropositionCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

const ValuePropositionCard: React.FC<ValuePropositionCardProps> = ({ icon, title, description, benefits }) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-secondary-200">
      <div className="flex items-center gap-3 mb-4">
        <div className="inline-block p-2 bg-orange-100 text-orange-600 rounded-full">
          {icon}
        </div>
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <p className="text-secondary-700 mb-4">{description}</p>
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-orange-600">Benefits:</h4>
        <ul className="space-y-1">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              <CheckCircle size={14} className="text-green-600 flex-shrink-0" />
              <span className="text-secondary-700">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

interface FeatureGroupProps {
  title: string;
  features: string[];
}

const FeatureGroup: React.FC<FeatureGroupProps> = ({ title, features }) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-secondary-200">
      <h3 className="text-lg font-bold mb-4 text-orange-600">{title}</h3>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <ArrowRight size={14} className="text-orange-600 mt-1 flex-shrink-0" />
            <span className="text-secondary-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface AccessOptionCardProps {
  title: string;
  subtitle: string;
  description: string;
  features: string[];
}

const AccessOptionCard: React.FC<AccessOptionCardProps> = ({ title, subtitle, description, features }) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-secondary-200 hover:shadow-md transition-shadow">
      <h3 className="text-lg font-bold mb-2 text-orange-600">{title}</h3>
      <h4 className="text-sm text-secondary-600 mb-4">{subtitle}</h4>
      <p className="text-secondary-700 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <CheckCircle size={14} className="text-green-600 mt-1 flex-shrink-0" />
            <span className="text-secondary-600 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface ServiceBundleCardProps {
  title: string;
  description: string;
}

const ServiceBundleCard: React.FC<ServiceBundleCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white p-4 rounded-lg border border-secondary-200 text-center">
      <h3 className="text-sm font-bold text-orange-600 mb-2">{title}</h3>
      <p className="text-secondary-700 text-xs">{description}</p>
    </div>
  );
};

interface ComplianceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ComplianceCard: React.FC<ComplianceCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-4 rounded-lg border border-secondary-200 text-center">
      <div className="inline-block p-2 bg-orange-100 text-orange-600 rounded-full mb-2">
        {icon}
      </div>
      <h3 className="text-sm font-bold text-orange-600 mb-1">{title}</h3>
      <p className="text-secondary-700 text-xs">{description}</p>
    </div>
  );
};

interface ProcessStepProps {
  step: string;
  title: string;
}

const ProcessStep: React.FC<ProcessStepProps> = ({ step, title }) => {
  return (
    <div className="text-center">
      <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-lg font-bold mb-4 mx-auto">
        {step}
      </div>
      <p className="text-secondary-700 text-sm">{title}</p>
    </div>
  );
};

export default ClinicalDecisionSupportPage;
