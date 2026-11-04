import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/seo/Seo';
import {
  DraftingCompass,
  Calculator,
  ClipboardList,
  Gavel,
  HardHat,
  Wrench,
  Cpu,
  Building2,
  Network,
  Boxes,
  Database,
  ShieldCheck,
  BadgeCheck,
  Sparkles,
  Brain,
  MapPin,
  Phone,
  Mail,
  ScanLine,
  Layers,
} from 'lucide-react';

interface PipelineStep {
  icon: React.ReactNode;
  step: string;
  title: string;
  detail: string;
}

const pipeline: PipelineStep[] = [
  {
    icon: <DraftingCompass />,
    step: '01',
    title: 'Design & Scope',
    detail:
      'Architectural and engineering scope captured from concept drawings, captured and structured into a cost-ready model.',
  },
  {
    icon: <ScanLine />,
    step: '02',
    title: 'Quantity & Cost Model',
    detail:
      'AI-assisted quantity takeoff and cost modelling across construction, infrastructure, and maintenance works.',
  },
  {
    icon: <Calculator />,
    step: '03',
    title: 'Priced Bill of Quantities',
    detail:
      'Itemised, coded, and rate-built BOQ — benchmarked against current market rates and priced for tender.',
  },
  {
    icon: <Gavel />,
    step: '04',
    title: 'Tender & Award',
    detail:
      'Bid packages, pre-qualification, tender evaluation, and award support — a tender-ready deliverable from day one.',
  },
];

interface Capability {
  icon: React.ReactNode;
  title: string;
  detail: string;
  tag?: string;
}

const capabilities: Capability[] = [
  {
    icon: <DraftingCompass />,
    title: 'Design-to-Cost',
    tag: 'From architecture',
    detail:
      'Cost discipline applied from the first concept — architectural and engineering design developed alongside a live cost model, so scope never runs ahead of budget.',
  },
  {
    icon: <Calculator />,
    title: 'Complete Project Cost',
    tag: 'CAPEX estimate',
    detail:
      'Full capital cost estimation from early feasibility through detailed design — covering construction, infrastructure, and maintenance-program costs.',
  },
  {
    icon: <ClipboardList />,
    title: 'Priced BOQ',
    tag: 'Tender-ready',
    detail:
      'Itemised, coded, and rate-built Bills of Quantities priced against current market data — accurate, auditable, and ready for tender.',
  },
  {
    icon: <Gavel />,
    title: 'Tendering & Bidding',
    tag: 'Procurement',
    detail:
      'Bid packages, contractor pre-qualification, tender evaluation, negotiation, and award support — managed end-to-end.',
  },
  {
    icon: <HardHat />,
    title: 'Infrastructure Projects',
    tag: 'Beyond construction',
    detail:
      'Costing and tendering for roads, utilities, water, power, and public-works networks — the same discipline applied to large-scale civil infrastructure.',
  },
  {
    icon: <Wrench />,
    title: 'Maintenance & Asset Management',
    tag: 'Lifecycle',
    detail:
      'Maintenance programs, life-cycle costing, and asset registers that keep facilities and portfolios performing long after handover.',
  },
  {
    icon: <Network />,
    title: 'Equipment Maintenance System',
    tag: 'Uptime',
    detail:
      'A managed system for equipment upkeep — maintenance scheduling, work orders, uptime tracking, and replacement planning in one place.',
  },
  {
    icon: <Building2 />,
    title: 'Tech Solutions for Developers',
    tag: 'Portfolio',
    detail:
      'Cost analytics dashboards, portfolio cost intelligence, and developer-facing tools that bring live project cost visibility to real-estate owners.',
  },
];

interface MethodStep {
  icon: React.ReactNode;
  title: string;
  detail: string;
}

const method: MethodStep[] = [
  {
    icon: <Database />,
    title: 'Ingest',
    detail: 'Drawings, specs, and scope documents structured into a common cost model.',
  },
  {
    icon: <Brain />,
    title: 'Model',
    detail: 'AI-assisted quantity takeoff, pricing, and benchmarking against market data.',
  },
  {
    icon: <ShieldCheck />,
    title: 'Validate',
    detail: 'Senior quantity surveyors and engineers review and reconcile every line.',
  },
  {
    icon: <BadgeCheck />,
    title: 'Deliver',
    detail: 'A priced, tender-ready BOQ and cost report, backed by a traceable audit trail.',
  },
];

const sectors: string[] = [
  'Residential',
  'Commercial',
  'Healthcare',
  'Education',
  'Industrial',
  'Infrastructure & Public Works',
  'Maintenance Programs',
  'Developer Portfolios',
];

const differentiators = [
  {
    icon: <Sparkles />,
    title: 'Speed',
    detail: 'Estimates and BOQs produced in a fraction of traditional turnaround time.',
  },
  {
    icon: <Boxes />,
    title: 'Accuracy',
    detail: 'AI-assisted takeoff reconciled by senior QS and engineering review.',
  },
  {
    icon: <Layers />,
    title: 'Consistency',
    detail: 'One structured standard across every project, portfolio, and sector.',
  },
  {
    icon: <ShieldCheck />,
    title: 'Auditability',
    detail: 'Every rate, item, and adjustment traceable back to its source.',
  },
];

const StationProfilePage: React.FC = () => {
  useEffect(() => {
    document.documentElement.lang = 'en';
    document.documentElement.dir = 'ltr';
  }, []);

  return (
    <>
      <Seo
        title="Hndasah Station | AI-Powered Costing & Tendering — Nathm Group, KSA"
        description="Hndasah Station — the AI-powered costing and tendering station of the Nathm group. From architectural design to complete project cost and a priced BOQ, across construction, infrastructure, maintenance, asset management, and real-estate developer technology."
        path="/station"
      />
      <div className="min-h-screen bg-secondary-50 text-secondary-900">
        <style>
          {`@media print {
  @page { size: A4; margin: 12mm; }
  .station-sheet { box-shadow: none !important; border: none !important; border-radius: 0 !important; }
  .station-dark { background-color: #ffffff !important; color: #0f172a !important; }
  .station-dark * { color: #334155 !important; }
  .station-dark h1, .station-dark h2, .station-dark h3 { color: #0a111b !important; }
  .station-dark .text-accent-400, .station-dark .text-accent-500, .station-dark .text-accent-600 { color: #047857 !important; }
  .print-break { break-inside: avoid; }
  .print-section { break-inside: auto; }
  body { background: #ffffff !important; }
}`}
        </style>

        <div className="station-sheet mx-auto min-h-screen max-w-5xl bg-white shadow-2xl">
          {/* Cover hero */}
          <section className="station-dark relative overflow-hidden bg-navy-950 text-white">
            <div className="pointer-events-none absolute -right-32 top-0 h-[440px] w-[560px] rounded-full bg-accent-600/15 blur-[130px]" />
            <div className="pointer-events-none absolute -left-24 bottom-0 h-[320px] w-[440px] rounded-full bg-accent-500/10 blur-[120px]" />

            <div className="relative px-6 py-16 sm:px-10 md:px-14 md:py-24">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-4">
                  <img src="/logo.svg" alt="Hndasah Station logo" className="h-12 w-auto invert" />
                  <div>
                    <p className="text-2xl font-extrabold tracking-tight text-white">
                      Hndasah Station
                    </p>
                    <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent-400">
                      AI-Powered Costing &amp; Tendering &middot; A Nathm Group Station
                    </p>
                  </div>
                </div>
                <Link
                  to="/station-ar"
                  className="rounded-full border border-white/15 px-4 py-1.5 text-sm font-medium text-secondary-300 transition-colors hover:border-accent-400 hover:text-white"
                >
                  العربية
                </Link>
              </div>

              <h1 className="mt-12 max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl">
                From first design to a priced, tender-ready BOQ.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary-300">
                One station that carries a project the entire cost journey — architectural
                design, complete project cost, and a priced Bill of Quantities — powered by
                AI cost intelligence and anchored by engineering discipline.
              </p>

              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/10 pt-7">
                {[
                  { icon: HardHat, label: 'Construction & infrastructure' },
                  { icon: Wrench, label: 'Maintenance & asset management' },
                  { icon: Cpu, label: 'Developer technology solutions' },
                ].map(({ icon: Icon, label }) => (
                  <span key={label} className="inline-flex items-center gap-2 text-xs font-medium text-secondary-400">
                    <Icon className="h-4 w-4 text-accent-400" />
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* About the station */}
          <section className="px-6 py-16 sm:px-10 md:px-14 md:py-20">
            <div className="max-w-3xl">
              <p className="eyebrow">About the Station</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                A single hub for the entire project cost lifecycle
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-secondary-600">
                Hndasah Station is the AI-powered costing and tendering unit of the Nathm
                group. We take a project from its earliest architectural concept through to
                a complete project cost and a priced, itemised Bill of Quantities — then
                carry it into tender. The station extends the group's engineering heritage
                with AI-assisted quantity takeoff, market-rate pricing, and developer-facing
                cost technology.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
              {pipeline.map(({ icon, step, title, detail }) => (
                <div
                  key={step}
                  className="print-break relative rounded-2xl border border-secondary-200 bg-white p-6"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-50 text-accent-700">
                      {React.cloneElement(icon as React.ReactElement, { className: 'h-5 w-5' })}
                    </div>
                    <span className="text-sm font-extrabold tracking-tight text-secondary-300">
                      {step}
                    </span>
                  </div>
                  <h3 className="mt-5 text-base font-bold text-navy-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-secondary-600">{detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Capabilities */}
          <section className="px-6 py-16 sm:px-10 md:px-14 md:py-20">
            <div className="max-w-3xl">
              <p className="eyebrow">Capabilities</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Beyond construction — the full portfolio
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-secondary-600">
                Construction is only the start. The station costs and tenders infrastructure,
                maintenance and asset-management programs, equipment systems, and the
                technology that real-estate developers run on.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
              {capabilities.map(({ icon, title, detail, tag }) => (
                <article
                  key={title}
                  className="print-break flex flex-col rounded-2xl border border-secondary-200 bg-white p-8"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-50 text-accent-700">
                      {React.cloneElement(icon as React.ReactElement, { className: 'h-6 w-6' })}
                    </div>
                    {tag && (
                      <span className="rounded-full border border-accent-600/30 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent-700">
                        {tag}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-navy-900">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-secondary-600">{detail}</p>
                </article>
              ))}
            </div>
          </section>

          {/* Method */}
          <section className="bg-secondary-50 px-6 py-16 sm:px-10 md:px-14 md:py-20">
            <div className="max-w-3xl">
              <p className="eyebrow">How the Station Works</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                AI engine, engineer-validated
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-secondary-600">
                Automation accelerates the work; senior quantity surveyors and engineers
                guarantee the output.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {method.map(({ icon, title, detail }) => (
                <div key={title} className="print-break rounded-2xl border border-secondary-200 bg-white p-7">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-600 text-white">
                    {React.cloneElement(icon as React.ReactElement, { className: 'h-5 w-5' })}
                  </div>
                  <h3 className="mt-5 text-base font-bold text-navy-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-secondary-600">{detail}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Sectors + differentiators */}
          <section className="px-6 py-16 sm:px-10 md:px-14 md:py-20">
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <p className="eyebrow">Sectors</p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                  Where the station works
                </h2>
                <div className="mt-7 flex flex-wrap gap-2.5">
                  {sectors.map((sector) => (
                    <span
                      key={sector}
                      className="rounded-full border border-secondary-200 bg-white px-4 py-2 text-sm font-medium text-secondary-700"
                    >
                      {sector}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="eyebrow">Why the Station</p>
                <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
                  Built for speed and confidence
                </h2>
                <div className="mt-7 flex flex-col gap-4">
                  {differentiators.map(({ icon, title, detail }) => (
                    <div key={title} className="print-break flex items-start gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-700">
                        {React.cloneElement(icon as React.ReactElement, { className: 'h-5 w-5' })}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-navy-900">{title}</p>
                        <p className="mt-0.5 text-sm leading-relaxed text-secondary-600">{detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="station-dark bg-navy-950 px-6 py-16 text-white sm:px-10 md:px-14 md:py-20">
            <div className="max-w-3xl">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent-400">
                Contact
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Commission a cost model or a priced BOQ
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-secondary-300">
                Share a drawing set, a scope document, or a portfolio and the station returns
                a complete project cost and priced Bill of Quantities — ready for tender.
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
              Hndasah Station is a unit of the Nathm group. It provides cost advisory,
              tendering support, and related technology services only — not licensed
              financial, banking, or securities activities.
            </p>
          </section>
        </div>
      </div>
    </>
  );
};

export default StationProfilePage;
