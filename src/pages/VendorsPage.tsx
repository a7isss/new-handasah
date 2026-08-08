import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Seo from '../components/seo/Seo';
import {
  ArrowRight,
  ShieldCheck,
  Stethoscope,
  Building2,
  Cpu,
  Package,
  GraduationCap,
  Wrench,
  CheckCircle2,
  BadgeCheck,
} from 'lucide-react';

interface VendorCategory {
  icon: React.ReactNode;
  title: string;
  scope: string;
  standards: string[];
}

const categories: VendorCategory[] = [
  {
    icon: <Stethoscope />,
    title: 'Medical Equipment & Devices',
    scope: 'Imaging, diagnostics, monitoring, surgical, and therapeutic equipment — new and refurbished.',
    standards: [
      'ISO 13485 / SFDA-registered suppliers',
      'Installation, training & warranty terms verified',
      'Maintenance & spare-part SLAs confirmed',
    ],
  },
  {
    icon: <Building2 />,
    title: 'Facilities & Medical Construction',
    scope: 'Clinic and hospital fit-out, renovation, medical gas, and HVAC — qualified contractors.',
    standards: [
      'Ministry of Health building-code fluency',
      'Proven healthcare project portfolio',
      'Financial & delivery capability screened',
    ],
  },
  {
    icon: <Cpu />,
    title: 'Health Technology & IT',
    scope: 'Hospital information systems, HIS/EMR, telemedicine, cybersecurity, and health-data platforms.',
    standards: [
      'Compliance with local health-data regulations',
      'Reference sites and uptime track record',
      'Integration capability with local systems',
    ],
  },
  {
    icon: <Package />,
    title: 'Consumables & Supplies',
    scope: 'Medical consumables, sterile supplies, lab reagents, and administrative procurement.',
    standards: [
      'SFDA-registered products verified',
      'Supply-chain reliability & stock depth',
      'Competitive pricing benchmarks',
    ],
  },
  {
    icon: <GraduationCap />,
    title: 'Staffing & Training',
    scope: 'Nursing and allied-health staffing, clinical training, and continuing-education providers.',
    standards: [
      'SCFHS credentialing alignment',
      'Saudization program capability',
      'Quality and safety training standards',
    ],
  },
  {
    icon: <Wrench />,
    title: 'Maintenance & Support Services',
    scope: 'Medical equipment maintenance, facility FM, sterilization services, and technical support.',
    standards: [
      'Certified technicians and OEM authorization',
      'Response-time and uptime SLAs',
      'Compliance with inspection standards',
    ],
  },
];

const VendorsPage: React.FC = () => {
  return (
    <>
      <Seo
        title="Approved Vendor List | Nathm — Medical Sector Suppliers in KSA"
        description="Nathm's approved vendor list — a curated, screened directory of medical equipment, construction, health-tech, consumables, staffing, and maintenance suppliers for healthcare facilities in Saudi Arabia."
        path="/vendors"
      />
      <Layout>
      {/* Hero */}
      <section className="bg-navy-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent-400">
              Approved Vendor List
            </p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              A curated, screened directory of medical-sector suppliers
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary-300">
              Nathm maintains an approved vendor list of suppliers we have assessed for
              capacity, compliance, and delivery reliability — so clients can procure with
              confidence instead of spending months qualifying vendors.
            </p>
            <div className="mt-9">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-accent-500"
              >
                Request the List
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why it matters */}
      <section className="border-b border-secondary-200 bg-white py-14">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { title: 'Every vendor vetted', detail: 'Compliance, capacity, references, and delivery history are verified before approval.' },
              { title: 'Medically fluent', detail: 'Categorization reflects how healthcare facilities actually buy — equipment, fit-out, tech, supplies, staffing.' },
              { title: 'A working asset', detail: 'Access is extended to clients as part of our consulting and HR engagements.' },
            ].map(({ title, detail }) => (
              <div key={title} className="flex gap-4">
                <ShieldCheck className="mt-0.5 h-6 w-6 shrink-0 text-accent-600" />
                <div>
                  <h3 className="text-base font-bold text-navy-900">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-secondary-600">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="section-pad bg-secondary-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow">Categories</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Vendor categories under active management
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-secondary-600">
              Each category is maintained with defined vetting standards and reviewed
              periodically to keep the list current and trustworthy.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {categories.map(({ icon, title, scope, standards }) => (
              <article
                key={title}
                className="flex flex-col rounded-2xl border border-secondary-200 bg-white p-7 transition-all duration-300 hover:border-transparent hover:shadow-xl hover:shadow-secondary-200/60"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-700">
                    {React.cloneElement(icon as React.ReactElement, { className: 'h-5 w-5' })}
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-600/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent-700">
                    <BadgeCheck className="h-3.5 w-3.5" />
                    Approved
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy-900">{title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-secondary-600">{scope}</p>
                <ul className="mt-5 flex flex-1 flex-col gap-2.5 border-t border-secondary-200 pt-5">
                  {standards.map((s) => (
                    <li key={s} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent-600" />
                      <span className="text-[13px] leading-relaxed text-secondary-600">{s}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Access a qualified supply base for your project
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-secondary-600">
            Whether you are equipping a new center or maintaining an existing facility, our
            approved vendor list saves procurement teams months of qualification work.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-navy-800"
            >
              Request Vendor Access
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
    </>
  );
};

export default VendorsPage;
