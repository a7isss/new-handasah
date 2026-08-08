import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Seo from '../components/seo/Seo';
import {
  ArrowRight,
  SearchCheck,
  ShieldCheck,
  LineChart,
  Users,
  FileCheck2,
  CheckCircle2,
  Briefcase,
  Compass,
} from 'lucide-react';

interface Pillar {
  letter: string;
  icon: React.ReactNode;
  title: string;
  focus: string;
  capabilities: { title: string; detail: string }[];
  link?: string;
}

const pillars: Pillar[] = [
  {
    letter: 'A',
    icon: <Compass />,
    title: 'Acquiring Healthcare Assets in KSA',
    focus: "A complete buyer's roadmap for acquiring a hospital or clinic in Saudi Arabia — from pre-deal diligence through licensing, transition, staffing, and Day-1 operations.",
    capabilities: [
      { title: 'Pre-Deal Operational & Technical Diligence', detail: 'Surface the real clinical, regulatory, and CAPEX risks before you commit capital.' },
      { title: 'Licensing & Regulatory Path', detail: 'MOH, CCHI, and SCFHS requirements mapped from day one.' },
      { title: 'Transition, Staffing & Vendors', detail: 'Day-1 readiness, Saudization planning, and approved supply setup.' },
    ],
    link: '/services/acquisition-guide',
  },
  {
    letter: 'B',
    icon: <SearchCheck />,
    title: 'Investment & Market Entry Advisory',
    focus:
      'Strategic guidance for corporations and investors evaluating their next step in the Saudi medical sector.',
    capabilities: [
      { title: 'Market & Feasibility Studies', detail: 'Demand analysis, catchment modelling, and service-line economics.' },
      { title: 'Entry & Joint-Venture Strategy', detail: 'Optimal structure, licensing path, and local partnership models.' },
      { title: 'Target Screening & Prioritization', detail: 'Rapid assessment of facilities, operators, and assets under consideration.' },
    ],
  },
  {
    letter: 'C',
    icon: <ShieldCheck />,
    title: 'Operational & Regulatory Due Diligence',
    focus:
      'Pre-acquisition audits that surface the real operational, clinical, and CAPEX risks before you commit capital.',
    capabilities: [
      { title: 'Technical & Infrastructure Audits', detail: 'Asset condition, medical equipment lifecycle, and facility compliance.' },
      { title: 'Clinical Workflow & Readiness', detail: 'Independent verification of care delivery and staffing models.' },
      { title: 'Transition & Transfer Blueprints', detail: 'Guaranteed Day-1 operational continuity for new owners.' },
    ],
  },
  {
    letter: 'D',
    icon: <LineChart />,
    title: 'Commercial Growth & Expansion',
    focus:
      'Helping medical centers and hospital groups maximize unit economics and market share after entry or acquisition.',
    capabilities: [
      { title: 'Service-Line Expansion', detail: 'Data-driven portfolio shaping across profitable specialties.' },
      { title: 'Patient Funnel & Revenue-Cycle', detail: 'End-to-end improvement of acquisition and billing operations.' },
      { title: 'Corporate Health Contracting', detail: 'B2B corporate health networks and referral development.' },
    ],
  },
  {
    letter: 'E',
    icon: <Users />,
    title: 'Healthcare HR & Executive Search',
    focus:
      'Strategic talent acquisition and workforce advisory for clinical and corporate leadership across the sector.',
    capabilities: [
      { title: 'C-Suite & Clinical Headhunting', detail: 'Chief Medical Officers, Facility Directors, and specialized consultants.' },
      { title: 'Licensing & Saudization Compliance', detail: 'MOH / SCFHS credentialing alignment for every placement.' },
      { title: 'Workforce Restructuring', detail: 'Organizational transfer, retention, and key-talent management.' },
    ],
    link: '/services/hr',
  },
  {
    letter: 'F',
    icon: <FileCheck2 />,
    title: 'Approved Vendor Program',
    focus:
      'A curated, screened directory of medical-sector suppliers our clients can engage with confidence.',
    capabilities: [
      { title: 'Screened Suppliers', detail: 'Equipment, construction, health-tech, consumables, staffing, and maintenance.' },
      { title: 'Structured Vetting Standards', detail: 'Capacity, compliance, references, and delivery history verified.' },
      { title: 'Client Access', detail: 'The approved list is available to clients as part of our engagements.' },
    ],
    link: '/vendors',
  },
];

const ServicesPage: React.FC = () => {
  return (
    <>
      <Seo
        title="Services | Nathm — Medical Sector Consulting in KSA"
        description="Nathm's consulting services for the Saudi medical sector: healthcare asset acquisition guide, investment & market entry, operational and regulatory due diligence, commercial growth, healthcare HR, and an approved vendor program."
        path="/services"
      />
      <Layout>
      {/* Hero */}
      <section className="bg-navy-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent-400">
              Consulting Services
            </p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Advisory for every stage of the medical asset lifecycle
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary-300">
              Six integrated pillars — from pre-deal diligence to post-acquisition growth,
              talent, and supplier assurance — give large corporations and investors one
              partner across the entire journey.
            </p>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {pillars.map(({ letter, icon, title, focus, capabilities, link }) => (
              <article
                key={letter}
                className="flex flex-col rounded-2xl border border-secondary-200 bg-white p-8 transition-all duration-300 hover:border-transparent hover:shadow-xl hover:shadow-secondary-200/60"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-700">
                    {React.cloneElement(icon as React.ReactElement, { className: 'h-6 w-6' })}
                  </div>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-accent-600/30 text-xs font-bold text-accent-700">
                    {letter}
                  </span>
                </div>

                <h2 className="mt-6 text-xl font-bold text-navy-900">{title}</h2>
                <p className="mt-3 text-sm leading-relaxed text-secondary-600">{focus}</p>

                <ul className="mt-6 flex flex-1 flex-col gap-3.5 border-t border-secondary-200 pt-6">
                  {capabilities.map((c) => (
                    <li key={c.title} className="flex gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                      <div>
                        <p className="text-sm font-semibold text-navy-900">{c.title}</p>
                        <p className="mt-0.5 text-[13px] leading-relaxed text-secondary-500">
                          {c.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                {link ? (
                  <Link
                    to={link}
                    className="group mt-7 inline-flex items-center gap-1.5 text-sm font-bold text-accent-700 transition-colors hover:text-accent-800"
                  >
                    Explore this service
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                ) : (
                  <Link
                    to="/contact"
                    className="group mt-7 inline-flex items-center gap-1.5 text-sm font-bold text-accent-700 transition-colors hover:text-accent-800"
                  >
                    Discuss this engagement
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                )}
              </article>
            ))}
          </div>

          <p className="mt-12 text-center text-xs italic leading-relaxed text-secondary-500">
            Nathm provides operational and technical advisory services only. It does not
            engage in SAMA-regulated financial brokerage, banking, or securities activities.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-secondary-50">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-between gap-8 px-5 text-center sm:px-8 lg:flex-row lg:text-left">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Not sure which pillar fits your situation?
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-secondary-600">
              Start with a private briefing. We will map your objectives to a clear,
              scoped engagement.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-navy-800"
          >
            Book a Briefing
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* HR teaser */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col items-start justify-between gap-6 rounded-2xl border border-accent-600/20 bg-accent-50 p-8 md:flex-row md:items-center">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-600 text-white">
                <Briefcase className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-navy-900">Healthcare HR &amp; Executive Search</h3>
                <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-secondary-600">
                  Supporting all of the above with clinical leadership placement, C-suite
                  search, and full MOH / SCFHS licensing and Saudization compliance.
                </p>
              </div>
            </div>
            <Link
              to="/services/hr"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-accent-600 px-6 py-3 text-sm font-semibold text-accent-700 transition-all duration-300 hover:bg-accent-600 hover:text-white"
            >
              View HR Services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
    </>
  );
};

export default ServicesPage;
