import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Seo from '../components/seo/Seo';
import {
  ArrowRight,
  ShieldCheck,
  Building2,
  HeartPulse,
  Landmark,
  FileCheck2,
  SearchCheck,
  LineChart,
  Users,
  CheckCircle2,
  DraftingCompass,
  HardHat,
  Wrench,
  Cpu,
} from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <>
      <Seo
        title="Nathm | Medical Sector Consulting in Saudi Arabia"
        description="Nathm is a medical-sector consulting group in Riyadh, KSA — advising corporations, hospital groups, and investors across market entry, due diligence, operations, commercial growth, and healthcare talent."
        path="/"
      />
      <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div className="pointer-events-none absolute -right-40 top-0 h-[480px] w-[640px] rounded-full bg-accent-600/15 blur-[130px]" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-[360px] w-[480px] rounded-full bg-accent-500/10 blur-[120px]" />

        <div className="pointer-events-none absolute inset-0 z-0 opacity-20">
          <svg
            className="h-full w-full"
            viewBox="0 0 1440 400"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
          >
            <path
              id="ecg-pulse-home"
              d="M -30 200 L 40 200 C 44 200 44 194 50 194 C 56 194 56 200 62 200 L 76 200 L 80 208 L 84 122 L 88 248 L 92 200 C 96 200 98 178 108 178 C 118 178 120 200 126 200 L 200 200 L 240 200 C 244 200 244 194 250 194 C 256 194 256 200 262 200 L 276 200 L 280 208 L 284 122 L 288 248 L 292 200 C 296 200 298 178 308 178 C 318 178 320 200 326 200 L 400 200 L 440 200 C 444 200 444 194 450 194 C 456 194 456 200 462 200 L 476 200 L 480 208 L 484 122 L 488 248 L 492 200 C 496 200 498 178 508 178 C 518 178 520 200 526 200 L 600 200 L 640 200 C 644 200 644 194 650 194 C 656 194 656 200 662 200 L 676 200 L 680 208 L 684 122 L 688 248 L 692 200 C 696 200 698 178 708 178 C 718 178 720 200 726 200 L 800 200 L 840 200 C 844 200 844 194 850 194 C 856 194 856 200 862 200 L 876 200 L 880 208 L 884 122 L 888 248 L 892 200 C 896 200 898 178 908 178 C 918 178 920 200 926 200 L 1000 200 L 1040 200 C 1044 200 1044 194 1050 194 C 1056 194 1056 200 1062 200 L 1076 200 L 1080 208 L 1084 122 L 1088 248 L 1092 200 C 1096 200 1098 178 1108 178 C 1118 178 1120 200 1126 200 L 1200 200 L 1240 200 C 1244 200 1244 194 1250 194 C 1256 194 1256 200 1262 200 L 1276 200 L 1280 208 L 1284 122 L 1288 248 L 1292 200 C 1296 200 1298 178 1308 178 C 1318 178 1320 200 1326 200 L 1400 200 L 1440 200"
              stroke="#34d399"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ecg-pulse-line"
            />
            <circle r="4.5" fill="#6ee7b7">
              <animateMotion dur="16s" repeatCount="indefinite" rotate="auto">
                <mpath xlinkHref="#ecg-pulse-home" />
              </animateMotion>
            </circle>
          </svg>
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent-400">
              Medical Sector Advisory
            </p>
            <h1 className="mt-6 text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl">
              The consulting partner for your next move in healthcare.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary-300">
              Nathm advises corporations, hospital groups, and investors across strategy,
              market entry, due diligence, operations, and talent in the medical sector —
              with the rigour of a global consultancy and the fluency of a local operator.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-accent-500"
              >
                Book a Briefing
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-accent-500/40 hover:bg-white/10"
              >
                Explore Services
              </Link>
            </div>

            <div className="mt-14 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-7">
              {[
                { icon: ShieldCheck, label: 'Regulatory fluency — MOH · CCHI · SCFHS' },
                { icon: Landmark, label: 'Vision 2030 privatization programs' },
                { icon: Building2, label: 'Investors & hospital groups' },
              ].map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 text-xs font-medium text-secondary-400"
                >
                  <Icon className="h-4 w-4 text-accent-400" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advisory presence */}
      <section className="border-b border-secondary-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-2">
          <div className="overflow-hidden rounded-2xl">
            <img
              src="/stock%20image%20landing.jpg"
              alt="Nathm advisors reviewing a healthcare facility with a client in the field in Riyadh"
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div>
            <p className="eyebrow">Advisors in the Field</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              A local team standing next to your decision
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-secondary-600">
              Every engagement is led by people who have walked the floors of Saudi
              hospitals and clinics — people who understand how care is licensed, staffed,
              supplied, and paid for in the Kingdom. We bring that reality into the
              boardroom, before capital is committed.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                'On-the-ground diligence across the Kingdom',
                'Direct access to senior advisors — no hand-offs',
                'One partner from deal evaluation to Day 1',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
                  <span className="font-medium text-navy-900">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Credentials strip */}
      <section className="border-b border-secondary-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-5 py-12 sm:px-8 md:grid-cols-2 lg:grid-cols-4">
          <Stat
            value="65B+"
            label="Health Transformation Sector"
            detail="Projected market scale under Vision 2030 privatization programs."
          />
          <Stat
            value="290+"
            label="Facilities for Transfer"
            detail="Active push toward private-sector operation and PPP concessions."
          />
          <Stat
            value="40%"
            label="Capacity Expansion Target"
            detail="Surging demand across outpatient, polyclinic, and tertiary centers."
          />
          <Stat
            value="Day-1"
            label="Operational Continuity"
            detail="Turnkey transition and licensing transfer on close of a deal."
          />
        </div>
      </section>

      {/* Core Services */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow">Core Services</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              One local partner across the full asset lifecycle
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-secondary-600">
              From pre-deal diligence to post-acquisition growth, we give corporations and
              investors a single advisory partner fluent in the Saudi medical sector.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Capability
              icon={<SearchCheck />}
              title="Investment & Market Entry Advisory"
              description="Market feasibility, entry strategy, and pre-acquisition technical and operational due diligence."
              link="/services"
            />
            <Capability
              icon={<ShieldCheck />}
              title="Operational & Regulatory Due Diligence"
              description="Asset audits, licensing readiness, CAPEX exposure, and transition blueprints that protect capital."
              link="/services"
            />
            <Capability
              icon={<LineChart />}
              title="Commercial Growth & Expansion"
              description="Service-line expansion, patient acquisition, revenue-cycle optimization, and corporate health contracting."
              link="/services"
            />
            <Capability
              icon={<Users />}
              title="Healthcare HR & Executive Search"
              description="Clinical leadership placement, C-suite search, and SCFHS / MOH licensing & Saudization compliance."
              link="/services/hr"
            />
          </div>
        </div>
      </section>

      {/* Medical depth — sector insight */}
      <section className="section-pad bg-secondary-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
            <div>
              <p className="eyebrow">The Opportunity</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                The Kingdom is re-shaping its healthcare sector
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-secondary-600">
                Saudi Arabia is executing one of the world's largest healthcare
                privatization programs. Between MOH restructuring, the transfer of
                facilities to private operators, and rising demand for specialized care,
                local execution knowledge separates successful entrants from stalled ones.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-secondary-600">
                Nathm operates at the intersection of clinical, regulatory, and commercial
                reality — so decisions are grounded in how care is actually delivered,
                licensed, and paid for in the Kingdom.
              </p>
              <ul className="mt-8 space-y-3">
                {[
                  'MOH, CCHI, and SCFHS regulatory fluency',
                  'Hospital economics and revenue-cycle expertise',
                  'Privatization, PPP, and facility-transfer experience',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-600" />
                    <span className="font-medium text-navy-900">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <InsightCard
                icon={<HeartPulse />}
                title="Clinical Operations"
                detail="Clinical workflow readiness, staffing models, and patient safety that hold up under inspection."
              />
              <InsightCard
                icon={<FileCheck2 />}
                title="Licensing & Compliance"
                detail="MOH facility licensing, CCHI insurance alignment, and SCFHS credentialing — end to end."
              />
              <InsightCard
                icon={<Landmark />}
                title="Privatization Programs"
                detail="Facility transfer, PPP concessions, and post-purchase ownership transition planning."
              />
              <InsightCard
                icon={<Building2 />}
                title="Corporate Health"
                detail="Corporate health contracting, referral networks, and employer-driven patient volume."
              />
            </div>
          </div>
        </div>
      </section>

      {/* How we engage */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow">How We Engage</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              A disciplined engagement model
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-secondary-600">
              Every engagement follows a structured path from diagnosis to delivery — with
              clear milestones, accountable owners, and measurable outcomes.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            <Step step="01" title="Diagnose" description="Deep-dive into the asset, market, and regulatory context to define the real problem and its risk profile." />
            <Step step="02" title="Design" description="A practical, prioritized roadmap with owners, timelines, and the commercial and operational levers that matter." />
            <Step step="03" title="Deliver" description="Hands-on implementation support — from licensing to staffing to growth — with continuity through Day 1 and beyond." />
          </div>
        </div>
      </section>

      {/* Hndasah Station — group station */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-navy-950 px-8 py-12 text-white sm:px-12 md:px-16 md:py-16">
            <div className="pointer-events-none absolute -right-32 top-0 h-[380px] w-[520px] rounded-full bg-accent-600/15 blur-[120px]" />
            <div className="pointer-events-none absolute -left-24 bottom-0 h-[280px] w-[420px] rounded-full bg-accent-500/10 blur-[110px]" />

            <div className="relative grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-600 text-white">
                    <DraftingCompass className="h-6 w-6" />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.28em] text-accent-400">
                    A Nathm Group Station
                  </span>
                </div>
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Hndasah Station — AI-Powered Costing &amp; Tendering
                </h2>
                <p className="mt-5 max-w-xl text-lg leading-relaxed text-secondary-300">
                  One station that carries a project the entire cost journey — from
                  architectural design to complete project cost and a priced, tender-ready
                  Bill of Quantities, powered by AI cost intelligence and engineering
                  discipline.
                </p>
                <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
                  {[
                    { icon: HardHat, label: 'Construction & infrastructure' },
                    { icon: Wrench, label: 'Maintenance & asset management' },
                    { icon: Cpu, label: 'Developer technology solutions' },
                  ].map(({ icon: Icon, label }) => (
                    <li key={label} className="inline-flex items-center gap-2 text-sm font-medium text-secondary-300">
                      <Icon className="h-4 w-4 text-accent-400" />
                      {label}
                    </li>
                  ))}
                </ul>
                <div className="mt-9 flex flex-wrap items-center gap-4">
                  <Link
                    to="/station"
                    className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-accent-500"
                  >
                    View the Station
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/station-ar"
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-accent-500/40 hover:bg-white/10"
                  >
                    العربية
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  { title: 'Design-to-Cost', detail: 'Cost discipline from the first architectural concept.' },
                  { title: 'Priced BOQ', detail: 'Itemised, rate-built, and tender-ready quantities.' },
                  { title: 'Infrastructure', detail: 'Roads, utilities, and public-works costing.' },
                  { title: 'Equipment Systems', detail: 'Managed maintenance and asset registers.' },
                ].map(({ title, detail }) => (
                  <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
                    <CheckCircle2 className="h-5 w-5 text-accent-400" />
                    <h3 className="mt-4 text-base font-bold text-white">{title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-secondary-400">{detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-pad bg-navy-950 text-white">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Discuss your next move in the medical sector
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-secondary-300">
            Whether you are evaluating an acquisition, entering the market, or scaling an
            existing asset, our team is ready to brief you on how we work.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:bg-accent-500"
            >
              Book a Private Briefing
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

const Stat: React.FC<{ value: string; label: string; detail: string }> = ({ value, label, detail }) => (
  <div>
    <p className="text-4xl font-bold tracking-tight text-navy-900">{value}</p>
    <p className="mt-2 text-sm font-bold text-accent-700">{label}</p>
    <p className="mt-1.5 text-[13px] leading-relaxed text-secondary-500">{detail}</p>
  </div>
);

const Capability: React.FC<{ icon: React.ReactNode; title: string; description: string; link: string }> = ({ icon, title, description, link }) => (
  <Link
    to={link}
    className="group flex flex-col rounded-2xl border border-secondary-200 bg-white p-7 transition-all duration-300 hover:border-transparent hover:shadow-xl hover:shadow-secondary-200/60"
  >
    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-700 transition-all duration-300 group-hover:bg-accent-600 group-hover:text-white">
      {React.cloneElement(icon as React.ReactElement, { className: 'h-5 w-5' })}
    </div>
    <h3 className="mt-5 text-lg font-bold text-navy-900">{title}</h3>
    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-secondary-600">{description}</p>
    <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent-700">
      Learn more
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </span>
  </Link>
);

const InsightCard: React.FC<{ icon: React.ReactNode; title: string; detail: string }> = ({ icon, title, detail }) => (
  <div className="rounded-2xl border border-secondary-200 bg-white p-6">
    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-600 text-white">
      {React.cloneElement(icon as React.ReactElement, { className: 'h-5 w-5' })}
    </div>
    <h3 className="mt-4 text-base font-bold text-navy-900">{title}</h3>
    <p className="mt-2 text-sm leading-relaxed text-secondary-600">{detail}</p>
  </div>
);

const Step: React.FC<{ step: string; title: string; description: string }> = ({ step, title, description }) => (
  <div className="border-t-2 border-accent-600 pt-6">
    <p className="text-sm font-bold text-accent-600">{step}</p>
    <h3 className="mt-3 text-xl font-bold text-navy-900">{title}</h3>
    <p className="mt-2.5 text-sm leading-relaxed text-secondary-600">{description}</p>
  </div>
);

export default HomePage;
