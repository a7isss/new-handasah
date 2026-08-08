import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/layout/Layout';
import Seo from '../../components/seo/Seo';
import {
  ArrowRight,
  SearchCheck,
  ShieldCheck,
  FileCheck2,
  Users,
  Package,
  LineChart,
  CheckCircle2,
  Compass,
} from 'lucide-react';

interface GuideStep {
  step: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  points: string[];
}

const steps: GuideStep[] = [
  {
    step: '01',
    icon: <SearchCheck />,
    title: 'Pre-Deal Operational & Technical Diligence',
    description:
      'Independent verification of the asset before you commit — the real state of the facility, its clinical operations, and its liabilities.',
    points: [
      'Asset condition and equipment lifecycle',
      'Clinical workflow and staffing models',
      'Licensing, insurance, and compliance status',
    ],
  },
  {
    step: '02',
    icon: <ShieldCheck />,
    title: 'Licensing & Regulatory Path',
    description:
      'A clear map of every license, approval, and regulatory obligation the asset carries — so nothing surfaces after close.',
    points: [
      'MOH facility license and requirements',
      'CCHI insurance and payer alignment',
      'SCFHS credentialing for clinical staff',
    ],
  },
  {
    step: '03',
    icon: <FileCheck2 />,
    title: 'Transition & Day-1 Readiness',
    description:
      'A transfer blueprint that keeps the facility operational from the moment ownership changes hands.',
    points: [
      'Ownership and license transfer plan',
      'Day-1 operational continuity schedule',
      'Contract, lease, and supplier handovers',
    ],
  },
  {
    step: '04',
    icon: <Users />,
    title: 'Staffing, Licensing & Saudization',
    description:
      'The workforce plan — leadership in place, clinical staff compliant, and Saudization ratios met from day one.',
    points: [
      'Clinical leadership placement',
      'Staff credentialing and licensure',
      'Saudization ratio planning',
    ],
  },
  {
    step: '05',
    icon: <Package />,
    title: 'Vendors & Supply Setup',
    description:
      'Equipment, consumables, maintenance, and technology suppliers qualified and contracted before operations begin.',
    points: [
      'Approved vendor program access',
      'Supply and maintenance SLAs',
      'Health-tech and EMR setup',
    ],
  },
  {
    step: '06',
    icon: <LineChart />,
    title: 'Commercial Growth After Close',
    description:
      'Once the asset is stable, the work turns to growth — service lines, patient volume, and corporate health contracting.',
    points: [
      'Service-line portfolio shaping',
      'Patient acquisition and revenue-cycle',
      'Corporate health and referral networks',
    ],
  },
];

const faqs = [
  {
    question: 'Which licenses are required to operate a healthcare facility in Saudi Arabia?',
    answer:
      'A typical hospital or clinic needs a facility license from the Ministry of Health (MOH), insurance-payer alignment with the Council for Health Insurance (CCHI), and SCFHS credentialing for clinical staff. Nathm maps the complete licensing path for the asset before you commit capital.',
  },
  {
    question: 'Can corporations and investors acquire hospitals or clinics in KSA?',
    answer:
      'Yes. Private operators and investors regularly acquire healthcare assets in the Kingdom under Saudi investment rules, often through licensed local structures or partnerships. Nathm advises on entry structure, the acquisition path, and the licensing reality of the specific asset.',
  },
  {
    question: 'What does Nathm cover during a healthcare asset acquisition?',
    answer:
      'Pre-deal operational and technical due diligence, the licensing and regulatory path, transition and Day-1 readiness, staffing and Saudization planning, approved vendor and supply setup, and commercial growth planning after close.',
  },
  {
    question: 'How long does the licensing and transition process take?',
    answer:
      'Timelines depend on the facility type, its current license status, and staffing readiness. Nathm builds a realistic, phased transition plan during diligence so the licensing path and Day-1 handover are scheduled before the deal closes.',
  },
  {
    question: 'Does Nathm operate the acquired facility?',
    answer:
      'No. Nathm provides advisory services only — diligence, licensing readiness, transition planning, staffing, and vendor assurance. It does not operate facilities and is not a financial or banking institution.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
};

const AcquisitionGuidePage: React.FC = () => {
  return (
    <>
      <Seo
        title="Acquiring Healthcare Assets in KSA | The Buyer's Guide — Nathm"
        description="A complete buyer's roadmap for acquiring a hospital or clinic in Saudi Arabia: pre-deal diligence, MOH / CCHI / SCFHS licensing, transition and Day-1 readiness, staffing and Saudization, and approved vendor setup."
        path="/services/acquisition-guide"
      />
      <Layout>
        {/* Hero */}
        <section className="bg-navy-950 text-white">
          <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent-400">
                Acquisition Guide
              </p>
              <h1 className="mt-6 text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl">
                Your guide for acquiring healthcare assets in Saudi Arabia
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary-300">
                Whether you are buying a hospital or a clinic in KSA, Nathm gives you the
                full reference — every stage of the acquisition mapped, from pre-deal
                diligence through licensing, transition, staffing, vendors, and growth.
              </p>
              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-accent-500"
                >
                  Brief Your Acquisition
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="mailto:gm@hndasah.com"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-colors duration-300 hover:border-accent-500/40 hover:bg-white/10"
                >
                  gm@hndasah.com
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Buyer's roadmap */}
        <section className="section-pad bg-white">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="max-w-3xl">
              <p className="eyebrow">The Buyer's Roadmap</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Six stages, from diligence to growth
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-secondary-600">
                Every acquisition follows a structured path. Nathm walks it with you — as
                an advisory partner, not a broker.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {steps.map(({ step, icon, title, description, points }) => (
                <article
                  key={step}
                  className="flex flex-col rounded-2xl border border-secondary-200 bg-white p-8"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-600 text-white">
                      {React.cloneElement(icon as React.ReactElement, { className: 'h-6 w-6' })}
                    </div>
                    <span className="text-3xl font-bold text-secondary-200">{step}</span>
                  </div>
                  <h3 className="mt-6 text-lg font-bold text-navy-900">{title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-secondary-600">
                    {description}
                  </p>
                  <ul className="mt-5 flex flex-1 flex-col gap-2.5 border-t border-secondary-200 pt-5">
                    {points.map((p) => (
                      <li key={p} className="flex items-start gap-2.5">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                        <span className="text-[13px] leading-relaxed text-secondary-600">{p}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Why Nathm for acquisitions */}
        <section className="section-pad bg-secondary-50">
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="max-w-3xl">
              <p className="eyebrow">Why Nathm</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Advisory grounded in how care is actually delivered
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-secondary-600">
                Acquisitions fail on the realities nobody checked. Nathm's advisors bring
                clinical, regulatory, and commercial fluency to every stage of the deal.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
              {[
                {
                  title: 'De-risked before close',
                  detail:
                    'Operational, clinical, regulatory, and CAPEX risks surfaced in diligence — priced and planned before you commit capital.',
                },
                {
                  title: 'One partner, every stage',
                  detail:
                    'Diligence, licensing, staffing, and vendors handled by a single advisory team — no fragmented hand-offs.',
                },
                {
                  title: 'Day-1 continuity',
                  detail:
                    'A transfer blueprint that keeps the facility licensed, staffed, supplied, and operating the moment ownership changes.',
                },
              ].map(({ title, detail }) => (
                <div key={title} className="rounded-2xl border border-secondary-200 bg-white p-8">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-700">
                    <Compass className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy-900">{title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-secondary-600">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-pad bg-white">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="max-w-3xl">
              <p className="eyebrow">Frequently Asked Questions</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Buying a healthcare asset in KSA?
              </h2>
            </div>

            <div className="mt-12 divide-y divide-secondary-200 border-y border-secondary-200">
              {faqs.map((f) => (
                <details key={f.question} className="group py-6">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-base font-bold text-navy-900">
                    {f.question}
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-secondary-300 text-accent-700 transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-sm leading-relaxed text-secondary-600">{f.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-pad bg-navy-950 text-white">
          <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Evaluating a hospital or clinic in Saudi Arabia?
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-secondary-300">
              Bring us the asset you are considering. We will walk you through the full
              acquisition reference — diligence, licensing, transition, staffing, vendors,
              and growth.
            </p>
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-accent-500"
              >
                Discuss an Acquisition
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="tel:+966924445440"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition-colors duration-300 hover:border-accent-500/40 hover:bg-white/10"
              >
                924 445 440
              </a>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default AcquisitionGuidePage;
