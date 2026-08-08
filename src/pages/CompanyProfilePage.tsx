import React, { useEffect } from 'react';
import {
  Stethoscope,
  Ruler,
  SearchCheck,
  ShieldCheck,
  LineChart,
  Users,
  FileCheck2,
  CheckCircle2,
  BadgeCheck,
  MapPin,
  Phone,
  Mail,
  Building2,
  Cpu,
  Package,
  GraduationCap,
  Wrench,
  HeartHandshake,
  Compass,
} from 'lucide-react';

interface Pillar {
  letter: string;
  icon: React.ReactNode;
  title: string;
  focus: string;
  capabilities: { title: string; detail: string }[];
}

const pillars: Pillar[] = [
  {
    letter: 'A',
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
    letter: 'B',
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
    letter: 'C',
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
    letter: 'D',
    icon: <Users />,
    title: 'Healthcare HR & Executive Search',
    focus:
      'Strategic talent acquisition and workforce advisory for clinical and corporate leadership across the sector.',
    capabilities: [
      { title: 'C-Suite & Clinical Headhunting', detail: 'Chief Medical Officers, Facility Directors, and specialized consultants.' },
      { title: 'Licensing & Saudization Compliance', detail: 'MOH / SCFHS credentialing alignment for every placement.' },
      { title: 'Workforce Restructuring', detail: 'Organizational transfer, retention, and key-talent management.' },
      { title: 'Corporate & Executive Search', detail: 'CEO, COO, CFO, and commercial leadership mandates.' },
    ],
  },
  {
    letter: 'E',
    icon: <FileCheck2 />,
    title: 'Approved Vendor Program',
    focus:
      'A curated, screened directory of medical-sector suppliers our clients can engage with confidence.',
    capabilities: [
      { title: 'Screened Suppliers', detail: 'Equipment, construction, health-tech, consumables, staffing, and maintenance.' },
      { title: 'Structured Vetting Standards', detail: 'Capacity, compliance, references, and delivery history verified.' },
      { title: 'Client Access', detail: 'The approved list is available to clients as part of our engagements.' },
    ],
  },
];

interface VendorCategory {
  icon: React.ReactNode;
  title: string;
  scope: string;
}

const vendorCategories: VendorCategory[] = [
  { icon: <Stethoscope />, title: 'Medical Equipment & Devices', scope: 'Imaging, diagnostics, monitoring, surgical, and therapeutic equipment.' },
  { icon: <Building2 />, title: 'Facilities & Medical Construction', scope: 'Clinic and hospital fit-out, renovation, medical gas, and HVAC.' },
  { icon: <Cpu />, title: 'Health Technology & IT', scope: 'HIS/EMR, telemedicine, cybersecurity, and health-data platforms.' },
  { icon: <Package />, title: 'Consumables & Supplies', scope: 'Medical consumables, sterile supplies, lab reagents, and procurement.' },
  { icon: <GraduationCap />, title: 'Staffing & Training', scope: 'Nursing and allied-health staffing, clinical training, and CPD providers.' },
  { icon: <Wrench />, title: 'Maintenance & Support Services', scope: 'Equipment maintenance, facility FM, sterilization, and technical support.' },
];

const CompanyProfilePage: React.FC = () => {
  useEffect(() => {
    document.title = 'Company Profile | Nathm — Medical Sector Consulting Group, KSA';
  }, []);

  return (
    <div className="min-h-screen bg-white text-secondary-900">
      <style>
        {`@media print {
  .profile-dark { background-color: #ffffff !important; }
  .profile-dark * { color: #334155 !important; }
  .profile-dark h1, .profile-dark h2, .profile-dark h3 { color: #0a111b !important; }
  .profile-dark .text-accent-400, .profile-dark .text-accent-500 { color: #047857 !important; }
  .print-break { break-inside: avoid; }
}`}
      </style>

      {/* Brand hero */}
      <section className="profile-dark relative overflow-hidden bg-navy-950 text-white">
        <div className="pointer-events-none absolute -right-40 top-0 h-[480px] w-[640px] rounded-full bg-accent-600/15 blur-[130px]" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-[360px] w-[480px] rounded-full bg-accent-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
          <div className="flex flex-wrap items-center gap-4">
            <img src="/logo.svg" alt="Nathm logo" className="h-12 w-auto invert" />
            <div>
              <p className="text-2xl font-extrabold tracking-tight text-white">Nathm</p>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent-400">
                Medical Sector Consulting Group &middot; KSA
              </p>
            </div>
          </div>

          <h1 className="mt-12 max-w-3xl text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl">
            One partner for every stage of the medical asset lifecycle
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary-300">
            Nathm advises corporations, hospital groups, and investors across market
            entry, investment decisions, due diligence, operations, commercial growth,
            and talent in the medical sector — with the rigour of a global consultancy
            and the fluency of a local operator.
          </p>

          <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-7">
            {[
              { icon: ShieldCheck, label: 'Regulatory fluency — MOH · CCHI · SCFHS' },
              { icon: Users, label: 'Executive search & healthcare HR' },
              { icon: BadgeCheck, label: 'Approved vendor program' },
            ].map(({ icon: Icon, label }) => (
              <span key={label} className="inline-flex items-center gap-2 text-xs font-medium text-secondary-400">
                <Icon className="h-4 w-4 text-accent-400" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Company overview & group structure */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow">About the Group</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              A group built for the medical sector's next chapter
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-secondary-600">
              Nathm is a consulting group anchored by medical-sector advisory for
              corporations and investors, supported by healthcare HR and an approved
              vendor program — with engineering consultancy completing the group's
              heritage.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
            <div className="print-break relative overflow-hidden rounded-2xl border-2 border-accent-600/30 bg-accent-50 p-8 lg:col-span-2">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-600 text-white">
                  <Stethoscope className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-accent-600 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                  Flagship Division
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-navy-900">Medical Consulting</h3>
              <p className="mt-3 text-base leading-relaxed text-secondary-700">
                The core of Nathm. We advise large corporations, hospital groups, and
                investors on their next step in the medical sector — market entry,
                investment decisions, due diligence, operational readiness, commercial
                growth, and the talent required to execute. Engagements are grounded in
                MOH, CCHI, and SCFHS regulatory reality, hospital economics, and the
                day-to-day of how care is actually delivered.
              </p>
              <p className="mt-3 text-base leading-relaxed text-secondary-700">
                Working style: executive, rigorous, and outcomes-focused — like the global
                consultancies our clients are used to, but specialized in healthcare.
              </p>
            </div>

            <div className="print-break flex flex-col gap-6">
              <div className="flex-1 rounded-2xl border border-secondary-200 bg-white p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-700">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy-900">
                  Healthcare HR &amp; Executive Search
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-secondary-600">
                  Clinical leadership placement, C-suite search, and MOH / SCFHS licensing
                  and Saudization compliance supporting every consulting engagement.
                </p>
              </div>
              <div className="flex-1 rounded-2xl border border-secondary-200 bg-white p-8">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-700">
                  <FileCheck2 className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-navy-900">
                  Approved Vendor Program
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-secondary-600">
                  A curated, screened directory of vetted medical-sector suppliers clients
                  can procure from with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full services */}
      <section className="section-pad bg-secondary-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow">Consulting Services</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Five pillars across the full asset lifecycle
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-secondary-600">
              From pre-deal diligence to post-acquisition growth, talent, and supplier
              assurance — one partner across the entire journey.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {pillars.map(({ letter, icon, title, focus, capabilities }) => (
              <article
                key={letter}
                className="print-break flex flex-col rounded-2xl border border-secondary-200 bg-white p-8"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-700">
                    {React.cloneElement(icon as React.ReactElement, { className: 'h-6 w-6' })}
                  </div>
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border border-accent-600/30 text-xs font-bold text-accent-700">
                    {letter}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-navy-900">{title}</h3>
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
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Approved vendor program */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow">Approved Vendor Program</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              A curated, screened directory of medical-sector suppliers
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-secondary-600">
              Nathm maintains an approved vendor list of suppliers assessed for capacity,
              compliance, and delivery reliability — so clients can procure with confidence
              instead of spending months qualifying vendors.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {vendorCategories.map(({ icon, title, scope }) => (
              <div
                key={title}
                className="print-break rounded-2xl border border-secondary-200 bg-white p-7"
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
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-xs italic leading-relaxed text-secondary-500">
            Vetting covers capacity, compliance, references, and delivery history. Access
            is extended to clients as part of our consulting and HR engagements.
          </p>
        </div>
      </section>

      {/* Legacy engineering division */}
      <section className="bg-secondary-50 py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="print-break rounded-2xl border border-secondary-200 bg-white p-8">
            <div className="flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary-100 text-secondary-600">
                <Ruler className="h-5 w-5" />
              </div>
              <span className="rounded-full border border-secondary-300 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-secondary-500">
                Legacy Division
              </span>
            </div>
            <h3 className="mt-5 text-xl font-bold text-navy-900">Engineering Consultancy</h3>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-secondary-600">
              Nathm's heritage lies in engineering consultancy — project design,
              feasibility, and technical advisory across infrastructure and facility
              development. This division continues to serve long-standing engineering
              clients and provides technical grounding for the group's work in healthcare
              facility planning and assessment. Engineering services are not a focus of the
              group's consulting practice; enquiries are handled separately and on a
              case-by-case basis.
            </p>
          </div>
        </div>
      </section>

      {/* Why Nathm */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow">Why Nathm</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Global consulting discipline, local healthcare fluency
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-secondary-600">
              We combine the working style of a global consultancy with deep, on-the-ground
              knowledge of the Saudi medical sector.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: <ShieldCheck />, title: 'De-risked decisions', detail: 'Acquisitions and expansions protected from technical, regulatory, and operational blind spots.' },
              { icon: <FileCheck2 />, title: 'Regulatory fluency', detail: 'MOH, CCHI, and SCFHS requirements navigated without friction or delays.' },
              { icon: <HeartHandshake />, title: 'Local partnerships', detail: 'One partner across diligence, talent, and vendors — no fragmented hand-offs.' },
              { icon: <Compass />, title: 'Outcomes, not reports', detail: 'Advice that is grounded in hospital economics and executable on Day 1.' },
            ].map(({ icon, title, detail }) => (
              <div key={title} className="print-break rounded-2xl border border-secondary-200 bg-white p-7">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-600 text-white">
                  {React.cloneElement(icon as React.ReactElement, { className: 'h-5 w-5' })}
                </div>
                <h3 className="mt-5 text-base font-bold text-navy-900">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary-600">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="profile-dark bg-navy-950 py-20 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent-400">
              Contact
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Start with a private briefing
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-secondary-300">
              Whether you are evaluating a medical asset, entering the market, building a
              leadership team, or procuring through our approved vendor list — reach the
              group directly.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="print-break rounded-2xl border border-white/10 bg-white/5 p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-600 text-white">
                <MapPin className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-bold text-white">Office</h3>
              <p className="mt-2 text-sm leading-relaxed text-secondary-300">
                Office 10, 53165 Olaya Street
                <br />
                Riyadh, Kingdom of Saudi Arabia
              </p>
            </div>
            <div className="print-break rounded-2xl border border-white/10 bg-white/5 p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-600 text-white">
                <Phone className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-bold text-white">Phone</h3>
              <a
                href="tel:+966924445440"
                className="mt-2 inline-block text-sm leading-relaxed text-secondary-300 transition-colors hover:text-white"
              >
                924 445 440
              </a>
            </div>
            <div className="print-break rounded-2xl border border-white/10 bg-white/5 p-7">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-600 text-white">
                <Mail className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-bold text-white">Email</h3>
              <a
                href="mailto:gm@hndasah.com"
                className="mt-2 inline-block text-sm leading-relaxed text-secondary-300 transition-colors hover:text-white"
              >
                gm@hndasah.com
              </a>
            </div>
          </div>

          <p className="mt-10 border-t border-white/10 pt-8 text-xs italic leading-relaxed text-secondary-500">
            Nathm provides operational and technical advisory services only. It does not
            engage in SAMA-regulated financial brokerage, banking, or securities activities.
          </p>
        </div>
      </section>
    </div>
  );
};

export default CompanyProfilePage;
