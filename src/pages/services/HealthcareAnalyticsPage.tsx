import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import { BarChart3, Brain, CheckCircle, ArrowRight, ArrowLeft, TrendingUp, Database, PieChart, Activity, Target, Zap } from 'lucide-react';

const HealthcareAnalyticsPage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-teal-600 to-teal-800 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Transform Healthcare Data into Strategic Intelligence
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-teal-100">
              Elevate your healthcare organization's decision-making with Nathm Alhandasah's Ensure Analytics Platform. Our comprehensive healthcare business analytics solution converts complex data into actionable insights, enabling strategic decision-making, revenue optimization, and operational excellence. Experience the power of data-driven healthcare transformation.
            </p>
            <Link to="/contact" className="btn bg-white text-teal-700 hover:bg-teal-50">
              Schedule Analytics Demo
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
            <span className="text-primary-600 font-medium">Healthcare Analytics</span>
          </div>
        </div>
      </section>

      {/* Service Description */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Service Description</h2>
            <p className="text-lg text-secondary-600 mb-8">
              Ensure Analytics Platform revolutionizes healthcare business intelligence by providing comprehensive analytical capabilities that transform raw healthcare data into strategic insights. Our platform combines descriptive, diagnostic, predictive, and prescriptive analytics to support evidence-based decision-making across all levels of healthcare organizations.
            </p>
            <p className="text-lg text-secondary-600">
              From individual physician performance to enterprise-wide strategic planning, Ensure Analytics delivers the intelligence needed to optimize operations, maximize revenue, and enhance patient outcomes. Our scalable solution adapts to organizations of all sizes while maintaining the highest standards of data security and privacy.
            </p>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Value Propositions</h2>
            <p className="text-xl text-secondary-600">Strategic advantages through data-driven insights.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <ValuePropositionCard
              icon={<Target size={32} />}
              title="Strategic Decision-Making"
              description="Utilize data analytics to craft evidence-based strategies aligned with organizational objectives and identify emerging opportunities."
              benefits={[
                "Evidence-based strategy development",
                "Market opportunity identification",
                "Competitive advantage assessment",
                "Organizational objective alignment"
              ]}
            />
            <ValuePropositionCard
              icon={<TrendingUp size={32} />}
              title="Revenue Optimization"
              description="RCM Analytics reveal actionable insights into claims performance and financial health for optimal reimbursement."
              benefits={[
                "Claims performance analytics",
                "Denial pattern identification",
                "Revenue optimization strategies",
                "Financial health assessment"
              ]}
            />
            <ValuePropositionCard
              icon={<Activity size={32} />}
              title="Competitive Advantage"
              description="Benchmark against competitors and optimize resource allocation through comprehensive market insights."
              benefits={[
                "Patient demographics analysis",
                "Service line performance evaluation",
                "Competitive benchmarking",
                "Market trend analysis"
              ]}
            />
            <ValuePropositionCard
              icon={<Zap size={32} />}
              title="Resource Utilization"
              description="Optimize resource allocation by analyzing utilization rates and identifying operational efficiency opportunities."
              benefits={[
                "Resource utilization rate analysis",
                "Operational waste identification",
                "Efficiency optimization",
                "Resource allocation guidance"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Analytics Features */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Analytics Features</h2>
            <p className="text-lg text-secondary-600">Comprehensive analytical capabilities for healthcare intelligence.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <AnalyticsFeatureCard
              title="Core Capabilities"
              icon={<Database size={24} />}
              features={[
                "Claims performance analysis and revenue distribution",
                "Clinical documentation quality assessment",
                "Validation error analysis and pattern recognition",
                "Services utilization rates by category and department",
                "Physician-level performance analytics",
                "Historical trends and predictive modeling"
              ]}
            />
            <AnalyticsFeatureCard
              title="Advanced Analytics"
              icon={<Brain size={24} />}
              features={[
                "Descriptive analytics with customizable dashboards",
                "Diagnostic analytics for root cause identification",
                "Predictive analytics with machine learning models",
                "Data visualization with interactive reporting",
                "Real-time dashboard monitoring",
                "Custom study design and analysis"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Solution Capabilities */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Solution Capabilities</h2>
            <p className="text-lg text-secondary-600">Four levels of analytical intelligence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <CapabilityCard
              title="Descriptive Analytics"
              description="Understand what happened through comprehensive reporting and trend analysis."
              icon={<BarChart3 size={40} />}
            />
            <CapabilityCard
              title="Diagnostic Analytics"
              description="Identify why events occurred through root cause analysis and correlations."
              icon={<Activity size={40} />}
            />
            <CapabilityCard
              title="Predictive Analytics"
              description="Forecast future outcomes using advanced machine learning algorithms."
              icon={<Brain size={40} />}
            />
            <CapabilityCard
              title="Data Visualization"
              description="Transform complex data into compelling visual stories for all stakeholders."
              icon={<PieChart size={40} />}
            />
          </div>
        </div>
      </section>

      {/* Implementation & Support */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Implementation & Support</h2>
            <p className="text-lg text-secondary-600">Professional services for seamless deployment.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ImplementationService
              title="Bundled Services"
              services={[
                "Service code mapping management for accurate data",
                "Customized analytics studies tailored to needs",
                "System setup and data migration assistance",
                "Training programs for staff and administrators"
              ]}
            />
            <ImplementationService
              title="Technical Features"
              services={[
                "High-performance data processing capabilities",
                "Advanced machine learning algorithms",
                "Natural language processing for clinical data",
                "Comprehensive statistical modeling tools"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Technical Integration */}
      <section className="py-16 bg-secondary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Technical Integration</h2>
            <p className="text-lg text-secondary-600">Seamless connectivity with healthcare systems.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <IntegrationCard
              title="EHR Systems"
              integrations={["Major EHR platforms", "Practice management systems", "Clinical workflow systems"]}
            />
            <IntegrationCard
              title="Financial Systems"
              integrations={["Billing platforms", "Reimbursement systems", "Claims processing workflows"]}
            />
            <IntegrationCard
              title="Data Warehouses"
              integrations={["Enterprise data consolidation", "Real-time data ingestion", "Automated ETL processes"]}
            />
          </div>
        </div>
      </section>

      {/* Security & Compliance */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Security & Compliance</h2>
            <p className="text-lg text-secondary-600">Enterprise-grade data protection and privacy.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <SecurityFeature
              title="HIPAA Compliance"
              description="Full healthcare data privacy compliance"
            />
            <SecurityFeature
              title="Data Encryption"
              description="End-to-end encryption for sensitive information"
            />
            <SecurityFeature
              title="Access Control"
              description="Role-based permissions and audit trails"
            />
            <SecurityFeature
              title="Data Residency"
              description="Flexible hosting options for regional compliance"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">Unlock the Power of Healthcare Data Analytics</h2>
          <p className="text-xl text-secondary-600 mb-8">
            Transform your organization's data into strategic advantage with Ensure Analytics Platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn-primary">
              Schedule Free Analytics Review
            </Link>
            <Link to="/contact" className="btn-secondary">
              Download Analytics Whitepaper
            </Link>
            <Link to="/contact" className="btn-secondary">
              Request Pricing Information
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
                <Link to="/services/ensure/claims-management" className="text-primary-600 hover:text-primary-700 border-b border-primary-600 hover:border-primary-700">
                  Claims Management
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
        <div className="inline-block p-2 bg-teal-100 text-teal-600 rounded-full">
          {icon}
        </div>
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <p className="text-secondary-700 mb-4">{description}</p>
      <div className="space-y-2">
        <h4 className="text-sm font-semibold text-teal-600">Benefits:</h4>
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

interface AnalyticsFeatureCardProps {
  title: string;
  icon: React.ReactNode;
  features: string[];
}

const AnalyticsFeatureCard: React.FC<AnalyticsFeatureCardProps> = ({ title, icon, features }) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-secondary-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="inline-block p-3 bg-teal-100 text-teal-600 rounded-full">
          {icon}
        </div>
        <h3 className="text-lg font-bold text-teal-600">{title}</h3>
      </div>
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <ArrowRight size={16} className="text-teal-600 mt-1 flex-shrink-0" />
            <span className="text-secondary-700 text-sm">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface CapabilityCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const CapabilityCard: React.FC<CapabilityCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-secondary-200 text-center hover:shadow-md transition-shadow">
      <div className="inline-block p-4 bg-teal-100 text-teal-600 rounded-full mb-4">
        {icon}
      </div>
      <h3 className="text-lg font-bold mb-3 text-teal-600">{title}</h3>
      <p className="text-secondary-700 text-sm">{description}</p>
    </div>
  );
};

interface ImplementationServiceProps {
  title: string;
  services: string[];
}

const ImplementationService: React.FC<ImplementationServiceProps> = ({ title, services }) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-secondary-200">
      <h3 className="text-lg font-bold mb-4 text-teal-600">{title}</h3>
      <ul className="space-y-3">
        {services.map((service, index) => (
          <li key={index} className="flex items-start gap-3">
            <CheckCircle size={16} className="text-green-600 mt-1 flex-shrink-0" />
            <span className="text-secondary-700 text-sm">{service}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface IntegrationCardProps {
  title: string;
  integrations: string[];
}

const IntegrationCard: React.FC<IntegrationCardProps> = ({ title, integrations }) => {
  return (
    <div className="bg-white p-6 rounded-lg border border-secondary-200">
      <h3 className="text-sm font-bold mb-4 text-teal-600 text-center">{title}</h3>
      <ul className="space-y-2">
        {integrations.map((integration, index) => (
          <li key={index} className="flex items-center gap-2 text-xs">
            <div className="w-2 h-2 bg-teal-600 rounded-full flex-shrink-0"></div>
            <span className="text-secondary-700">{integration}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

interface SecurityFeatureProps {
  title: string;
  description: string;
}

const SecurityFeature: React.FC<SecurityFeatureProps> = ({ title, description }) => {
  return (
    <div className="bg-white p-4 rounded-lg border border-secondary-200 text-center">
      <h3 className="text-sm font-bold text-teal-600 mb-2">{title}</h3>
      <p className="text-secondary-700 text-xs">{description}</p>
    </div>
  );
};

export default HealthcareAnalyticsPage;
