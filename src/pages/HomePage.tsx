import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
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
} from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div className="pointer-events-none absolute -right-40 top-0 h-[480px] w-[640px] rounded-full bg-accent-600/15 blur-[130px]" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-[360px] w-[480px] rounded-full bg-accent-500/10 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
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
