import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import Seo from '../../components/seo/Seo';
import {
  ArrowRight,
  Search,
  Users,
  Target,
  ShieldCheck,
  FileCheck2,
  CheckCircle2,
  Stethoscope,
  Building2,
  TrendingUp,
} from 'lucide-react';

const HRServicesPage: React.FC = () => {
  return (
    <>
      <Seo
        title="Healthcare HR & Executive Search | Nathm — KSA"
        description="Clinical leadership placement, C-suite and executive search, MOH / SCFHS licensing, and Saudization compliance for healthcare organizations in the Kingdom of Saudi Arabia."
        path="/services/hr"
      />
      <Layout>
      {/* Hero */}
      <section className="bg-navy-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent-400">
              Healthcare HR &amp; Executive Search
            </p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              The right leaders, placed with full regulatory alignment
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary-300">
              Clinical and corporate talent is the difference between a healthcare asset
              that runs and one that thrives. We combine senior search with complete
              MOH / SCFHS licensing and Saudization compliance for every placement.
            </p>
            <div className="mt-9">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-accent-500"
              >
                Start a Talent Engagement
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow">How We Work</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              A disciplined talent process
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-secondary-600">
              From mandate to placement, every search follows a structured, audited
              process that protects both the client and the candidate.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            <HrStep
              step="1"
              icon={<Search />}
              title="Scoping & Search"
              description="Mandate definition, market mapping, and a targeted search across clinical and corporate networks."
            />
            <HrStep
              step="2"
              icon={<Users />}
              title="Assessment & Interview"
              description="Multi-stage assessment by senior consultants — clinical, leadership, and cultural fit."
            />
            <HrStep
              step="3"
              icon={<Target />}
              title="Compliance & Onboarding"
              description="SCFHS / MOH credentialing, licensure processing, and onboarding support through Day 1."
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="section-pad bg-secondary-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow">Capabilities</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Full-spectrum healthcare workforce advisory
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
            <HrCard
              icon={<Stethoscope />}
              title="Clinical Leadership Placement"
              description="Chief Medical Officers, department heads, specialized consultants, and senior nursing leadership."
              features={[
                'Hospital & polyclinic leadership',
                'Specialty consultants and physicians',
                'Clinical department leadership',
              ]}
            />
            <HrCard
              icon={<Building2 />}
              title="Corporate & Executive Search"
              description="C-suite and corporate roles for hospital groups, operators, and medical-sector organizations."
              features={[
                'CEO, COO, CFO, and CMO mandates',
                'Facility directors and general managers',
                'Commercial and operations leadership',
              ]}
            />
            <HrCard
              icon={<ShieldCheck />}
              title="Licensing & Saudization Compliance"
              description="End-to-end credentialing and licensure alignment for every placement and workforce restructuring."
              features={[
                'SCFHS credentialing & licensure',
                'MOH facility staffing compliance',
                'Saudization ratio planning',
              ]}
            />
            <HrCard
              icon={<FileCheck2 />}
              title="Workforce Restructuring & Retention"
              description="Structured management of transitions, contracts, and key-talent retention during ownership changes."
              features={[
                'Post-acquisition org transfer',
                'Contract restructuring',
                'Key-talent retention programs',
              ]}
            />
          </div>
        </div>
      </section>

      {/* Target profiles */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow">Target Profiles</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Roles we place across the sector
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: <Stethoscope />, title: 'Clinical Leadership', detail: 'CMOs, department heads, and senior physicians.' },
              { icon: <Building2 />, title: 'Facility Management', detail: 'Directors, operations, and compliance leads.' },
              { icon: <TrendingUp />, title: 'Commercial & Growth', detail: 'Business development and corporate health leads.' },
              { icon: <Users />, title: 'Corporate Functions', detail: 'Finance, HR, procurement, and governance.' },
            ].map(({ icon, title, detail }) => (
              <div key={title} className="rounded-2xl border border-secondary-200 bg-white p-6 text-center transition-all duration-300 hover:shadow-lg">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-accent-50 text-accent-700">
                  {React.cloneElement(icon as React.ReactElement, { className: 'h-6 w-6' })}
                </div>
                <h3 className="mt-4 text-base font-bold text-navy-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary-600">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-navy-950 text-white">
        <div className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Building a healthcare leadership team?
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-secondary-300">
            We place leaders who are clinically credible, commercially sharp, and fully
            licensed to operate in the Kingdom.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-accent-500"
            >
              Discuss a Mandate
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:border-accent-500/40 hover:bg-white/10"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </Layout>
    </>
  );
};

const HrStep: React.FC<{ step: string; icon: React.ReactNode; title: string; description: string }> = ({ step, icon, title, description }) => (
  <div className="rounded-2xl border border-secondary-200 bg-white p-8">
    <div className="flex items-center justify-between">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-600 text-white">
        {React.cloneElement(icon as React.ReactElement, { className: 'h-6 w-6' })}
      </div>
      <span className="text-3xl font-bold text-secondary-200">{step}</span>
    </div>
    <h3 className="mt-6 text-xl font-bold text-navy-900">{title}</h3>
    <p className="mt-2.5 text-sm leading-relaxed text-secondary-600">{description}</p>
  </div>
);

const HrCard: React.FC<{ icon: React.ReactNode; title: string; description: string; features: string[] }> = ({ icon, title, description, features }) => (
  <div className="rounded-2xl border border-secondary-200 bg-white p-8">
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-700">
      {React.cloneElement(icon as React.ReactElement, { className: 'h-6 w-6' })}
    </div>
    <h3 className="mt-5 text-lg font-bold text-navy-900">{title}</h3>
    <p className="mt-2.5 text-sm leading-relaxed text-secondary-600">{description}</p>
    <ul className="mt-5 space-y-2.5">
      {features.map((f) => (
        <li key={f} className="flex items-start gap-2.5">
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
          <span className="text-sm font-medium text-navy-900">{f}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default HRServicesPage;
