import React from 'react';
import Layout from '../components/layout/Layout';
import {
  Stethoscope,
  Ruler,
  Compass,
  ShieldCheck,
  HeartHandshake,
  FileCheck2,
} from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="bg-navy-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent-400">
              About the Group
            </p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              A group built for the medical sector's next chapter
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary-300">
              Nathm is a consulting group with two complementary divisions. Our core
              business is medical-sector consulting for corporations and investors; a
              legacy engineering consultancy completes the group's heritage.
            </p>
          </div>
        </div>
      </section>

      {/* Group structure */}
      <section className="section-pad bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow">Our Structure</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Two divisions, one standard of discipline
            </h2>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {/* Flagship: Medical Consulting */}
            <div className="relative overflow-hidden rounded-2xl border-2 border-accent-600/30 bg-accent-50 p-9">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-600 text-white">
                  <Stethoscope className="h-6 w-6" />
                </div>
                <span className="rounded-full bg-accent-600 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                  Flagship Division
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-navy-900">
                Medical Consulting
              </h3>
              <p className="mt-3 text-base leading-relaxed text-secondary-700">
                The core of Nathm. We advise large corporations, hospital groups, and
                investors on their next step in the medical sector — market entry,
                investment decisions, due diligence, operational readiness, commercial
                growth, and the talent required to execute. Our engagements are grounded
                in MOH, CCHI, and SCFHS regulatory reality, hospital economics, and the
                day-to-day of how care is actually delivered.
              </p>
              <p className="mt-3 text-base leading-relaxed text-secondary-700">
                Working style: executive, rigorous, and outcomes-focused — like the global
                consultancies our clients are used to, but specialized in healthcare.
              </p>
            </div>

            {/* Buried: Engineering Consultancy */}
            <div className="rounded-2xl border border-secondary-200 bg-white p-9">
              <div className="flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary-100 text-secondary-600">
                  <Ruler className="h-6 w-6" />
                </div>
                <span className="rounded-full border border-secondary-300 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-secondary-500">
                  Legacy Division
                </span>
              </div>
              <h3 className="mt-6 text-2xl font-bold text-navy-900">
                Engineering Consultancy
              </h3>
              <p className="mt-3 text-base leading-relaxed text-secondary-600">
                Nathm's heritage lies in engineering consultancy — project design,
                feasibility, and technical advisory across infrastructure and facility
                development. This division continues to serve long-standing engineering
                clients and provides technical grounding for the group's work in
                healthcare facility planning and assessment.
              </p>
              <p className="mt-3 text-sm italic leading-relaxed text-secondary-500">
                Engineering services are not a focus of this site; enquiries are handled
                separately and on a case-by-case basis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="section-pad bg-secondary-50">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="max-w-3xl">
            <p className="eyebrow">Our Approach</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Why clients engage Nathm
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-secondary-600">
              We combine global consulting discipline with deep, on-the-ground knowledge
              of the Saudi medical sector.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: <ShieldCheck />, title: 'De-risked decisions', detail: 'Acquisitions and expansions protected from technical, regulatory, and operational blind spots.' },
              { icon: <FileCheck2 />, title: 'Regulatory fluency', detail: 'MOH, CCHI, and SCFHS requirements navigated without friction or delays.' },
              { icon: <HeartHandshake />, title: 'Local partnerships', detail: 'One partner across diligence, talent, and vendors — no fragmented hand-offs.' },
              { icon: <Compass />, title: 'Outcomes, not reports', detail: 'Advice that is grounded in hospital economics and executable on Day 1.' },
            ].map(({ icon, title, detail }) => (
              <div key={title} className="rounded-2xl border border-secondary-200 bg-white p-7">
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

      {/* Mission */}
      <section className="bg-navy-950 py-20 text-white md:py-24">
        <div className="mx-auto max-w-4xl px-5 text-center sm:px-8">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent-400">
            Mission
          </p>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            To be the consulting partner large organizations choose for their most
            consequential medical-sector decisions in the Kingdom.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-secondary-300">
            We exist to turn regulatory complexity, clinical reality, and commercial
            opportunity into clear, executable strategy.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
