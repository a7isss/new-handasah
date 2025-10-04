import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import { DollarSign, Brain, CheckCircle, ArrowRight, ArrowLeft, Shield, TrendingUp, Settings, Database, Target, Zap } from 'lucide-react';

const ClaimsManagementPage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-purple-600 to-purple-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Optimize Claims Processing and Maximize Revenue Collection
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-purple-100">
              Streamline your healthcare revenue cycle with Nathm Alhandasah's Ensure Claims Management platform. Our comprehensive solution automates claims auditing, pre-authorization processing, and compliance validation to reduce administrative burden, minimize denials, and accelerate reimbursement cycles. Experience the power of intelligent RCM that works for your entire organization.
            </p>
            <Link to="/contact" className="btn bg-white text-purple-700 hover:bg-purple-50">
              Request Enterprise Demo
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
            <span className="text-primary-600 font-medium">Claims Management</span>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Service Description</h2>
            <p className="text-lg text-secondary-600 mb-8">
              Ensure Claims Management redefines revenue cycle efficiency by providing comprehensive auditing and optimization across the entire claims lifecycle. Our intelligent platform analyzes medical claims for technical accuracy, medical necessity, and regulatory compliance before submission, ensuring maximum reimbursement rates and minimizing costly denials.
            </p>
            <p className="text-lg text-secondary-600">
              Built for healthcare organizations of all sizes, our platform offers both API integration for seamless workflow embedding and intuitive web applications for standalone operation. Whether you're processing dozens or thousands of claims daily, Ensure scales to meet your organization's RCM requirements while maintaining the highest standards of accuracy and compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Value Propositions</h2>
            <p className="text-xl text-secondary-600">Comprehensive Records Audits for Enhanced Financial Performance</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <ValuePropositionCard
              icon={<DollarSign size={32} />}
              title="Financial Optimization"
              description="Systemic RCM audits identify and rectify billing and coding errors, maximizing reimbursement and minimizing financial losses."
              impacts={[
                "Identify and correct billing/coding errors",
                "Maximize eligible reimbursements",
                "Reduce revenue leakage",
                "Operating cost optimization"
              ]}
            />
            <ValuePropositionCard
              icon={<Shield size={32} />}
              title="Enhanced Compliance"
              description="Routine audits guarantee adherence to evolving healthcare regulations, mitigating penalties and ensuring smooth insurance relationships."
              impacts={[
                "Automated compliance monitoring",
                "Risk mitigation and penalty prevention",
                "Insurance relationship optimization",
                "Audit preparedness"
              ]}
            />
            <ValuePropositionCard
              icon={<TrendingUp size={32} />}
              title="Improved Quality of Care"
              description="Streamline pre-authorization processes to ensure timely access to necessary treatments and improve patient satisfaction."
              impacts={[
                "Accelerate treatment authorization",
                "Improve patient satisfaction",
                "Enhanced health outcomes",
                "Reduced administrative delays"
              ]}
            />
            <ValuePropositionCard
              icon={<Target size={32} />}
              title="Streamlined Operations"
              description="Empower RCM teams with intelligent workflow automation that pinpoint improvement opportunities and increase efficiency."
              impacts={[
                "Automated audit reporting",
                "Workflow efficiency improvements",
                "Administrative burden reduction",
                "Resource optimization"
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
            <p className="text-lg text-secondary-600">Comprehensive auditing and validation capabilities.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <FeatureGroup
              title="Core Audit Capabilities"
              features={[
                "Medical claim audit analysis",
                "Pre-authorization processing",
                "Technical validation checks",
                "Medical necessity assessment",
                "Regulatory compliance validation",
                "Historical analysis and patterns"
              ]}
            />
            <FeatureGroup
              title="Specialized Modules"
              features={[
                "CHI drug formulary compliance",
                "Medical device necessity validation",
                "Inpatient/outpatient support",
                "SFDA compliance monitoring",
                "Multi-specialty auditing"
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
            <p className="text-lg text-secondary-600">Choose the integration method that fits your workflow.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <AccessOptionCard
              title="Ensure Claims API"
              description="Enterprise-grade API integration for seamless system connectivity and real-time claims processing."
              features={[
                "FHIR and NPHIES compliance",
                "RESTful API architecture",
                "Scalable processing capacity",
                "Real-time validation"
              ]}
            />
            <AccessOptionCard
              title="Ensure PreAuth API"
              description="Intelligent pre-authorization processing and validation to ensure timely treatment approvals."
              features={[
                "Automated authorization workflow",
                "Real-time eligibility verification",
                "Clinical necessity assessment",
                "Processing cycle optimization"
              ]}
            />
            <AccessOptionCard
              title="Ensure Claim Web"
              description="Standalone web application for comprehensive RCM operations without complex technical integration."
              features={[
                "Intuitive web interface",
                "Real-time dashboard access",
                "Multi-user collaboration",
                "Secure cloud-based platform"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Technical Standards */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Technical Standards & Compliance</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ComplianceCard
              title="Healthcare Standards"
              standards={[
                "NPHIES compliance",
                "FHIR integration",
                "ICD-10-AM/CM support",
                "Regional compliance"
              ]}
            />
            <ComplianceCard
              title="Regulatory Compliance"
              standards={[
                "Ministry of Health standards",
                "SFDA requirements",
                "Insurance compliance",
                "Audit trail documentation"
              ]}
            />
            <ComplianceCard
              title="Data Security"
              standards={[
                "End-to-end encryption",
                "HIPAA compliance",
                "Role-based access control",
                "Secure data residency"
              ]}
            />
            <ComplianceCard
              title="Performance Metrics"
              standards={[
                "99.9% uptime SLA",
                "Sub-second response times",
                "Scalable processing",
                "24/7 monitoring"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Implementation & ROI */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Implementation & ROI</h2>
            <p className="text-lg text-secondary-600">Measurable results and rapid deployment.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ROIMetrics
              title="Financial Benefits"
              metrics={[
                "30-50% reduction in claim denials",
                "5-15% improvement in net revenue",
                "200-300% processing speed improvement",
                "Full ROI within 90 days"
              ]}
            />
            <ROIMetrics
              title="Operational Benefits"
              metrics={[
                "Reduced administrative burden",
                "Automated compliance monitoring",
                "Streamlined workflow processes",
                "Enhanced team productivity"
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-purple-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Maximize Your Revenue Cycle Performance?</h2>
          <p className="text-xl text-secondary-600 mb-8">
            Contact our healthcare technology experts for a customized ROI assessment and system demonstration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Schedule Enterprise Consultation
            </Link>
            <Link to="/contact" className="btn-secondary">
              Request System Pricing
            </Link>
            <Link to="/contact" className="btn-secondary">
              Download ROI Assessment
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
  impacts: string[];
}

const ValuePropositionCard: React.FC<ValuePropositionCardProps> = ({ icon, title, description, impacts }) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-secondary-200">
      <div className="flex items-center gap-3 mb-4">
        <div className="inline-block p-2 bg-purple-100 text-purple-600 rounded-full">
          {icon}
        </div>
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <p className="text-secondary-700 mb-4">{description}</p>
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-purple-600">Impact:</h4>
        <ul className="space-y-1">
          {impacts.map((impact, index) => (
            <li key={index} className="flex items-center gap-2 text-sm">
              <CheckCircle size={14} className="text-green-600 flex-shrink-0" />
              <span className="text-secondary-700">{impact}</span>
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
      <h3 className="text-lg font-bold mb-4 text-purple-600">{title}</h3>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2">
            <ArrowRight size={14} className="text-purple-600 mt-1 flex-shrink-0" />
            <span className="text-secondary-700">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface AccessOptionCardProps {
  title: string;
  description: string;
  features: string[];
}

const AccessOptionCard: React.FC<AccessOptionCardProps> = ({ title, description, features }) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-secondary-200 hover:shadow-md transition-shadow">
      <h3 className="text-lg font-bold mb-3 text-purple-600">{title}</h3>
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

interface ComplianceCardProps {
  title: string;
  standards: string[];
}

const ComplianceCard: React.FC<ComplianceCardProps> = ({ title, standards }) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-secondary-200">
      <h3 className="text-sm font-bold mb-4 text-purple-600 text-center">{title}</h3>
      <ul className="space-y-2">
        {standards.map((standard, index) => (
          <li key={index} className="flex items-center gap-2 text-xs">
            <div className="w-2 h-2 bg-purple-600 rounded-full flex-shrink-0"></div>
            <span className="text-secondary-700">{standard}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface ROIMetricsProps {
  title: string;
  metrics: string[];
}

const ROIMetrics: React.FC<ROIMetricsProps> = ({ title, metrics }) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-secondary-200">
      <h3 className="text-lg font-bold mb-4 text-purple-600">{title}</h3>
      <ul className="space-y-3">
        {metrics.map((metric, index) => (
          <li key={index} className="flex items-start gap-3">
            <TrendingUp size={16} className="text-green-600 mt-1 flex-shrink-0" />
            <span className="text-secondary-700 text-sm">{metric}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClaimsManagementPage;
