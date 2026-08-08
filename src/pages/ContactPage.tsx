import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import Seo from '../components/seo/Seo';
import { MapPin, Phone, Mail, Send, Clock, MessageCircle } from 'lucide-react';
import toast from 'react-hot-toast';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    sector: 'Hospital / Clinical Facility',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Your inquiry has been received. Our team will contact you shortly.');
    setFormData({
      name: '',
      organization: '',
      email: '',
      phone: '',
      sector: 'Hospital / Clinical Facility',
      message: '',
    });
  };

  return (
    <>
      <Seo
        title="Contact Nathm | Medical Sector Consulting — Riyadh, KSA"
        description="Contact Nathm for a private briefing — Office 10, 53165 Olaya Street, Riyadh, Kingdom of Saudi Arabia. Email gm@hndasah.com or call 924 445 440."
        path="/contact"
      />
      <Layout>
      {/* Hero */}
      <section className="bg-navy-950 text-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent-400">
              Contact &amp; Engagement
            </p>
            <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Start with a private briefing
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-secondary-300">
              Whether you are evaluating a medical asset, entering the market, building a
              leadership team, or procuring through our approved vendor list — tell us
              where you are and where you need to go.
            </p>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-2">
            {/* Contact info */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Engagement details</h2>

              <div className="mt-8 space-y-6">
                <ContactRow
                  icon={<MapPin />}
                  title="Address"
                  lines={['Office 10, 53165 Olaya Street', 'Riyadh, Kingdom of Saudi Arabia']}
                />
                <ContactRow
                  icon={<Phone />}
                  title="Phone"
                  lines={['+966 924 445 440']}
                  href="tel:+966924445440"
                />
                <ContactRow
                  icon={<Mail />}
                  title="Email"
                  lines={['gm@hndasah.com']}
                  href="mailto:gm@hndasah.com"
                />
                <ContactRow
                  icon={<MessageCircle />}
                  title="WhatsApp"
                  lines={['+966 536 610 666']}
                  href="https://wa.me/966536610666"
                />
                <ContactRow
                  icon={<Clock />}
                  title="Business hours"
                  lines={['Sunday – Thursday: 9:00 AM – 5:00 PM', 'Friday – Saturday: Closed']}
                />
              </div>

              <div className="mt-10 rounded-2xl border border-accent-600/20 bg-accent-50 p-7">
                <h3 className="text-base font-bold text-navy-900">
                  Confidentiality assured
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-secondary-700">
                  All briefings and inquiries are treated with strict confidentiality.
                  Sensitive mandates can be discussed under NDA before any details are
                  shared.
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Send an inquiry</h2>

              <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="label">
                      Full name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="input"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="organization" className="label">
                      Organization
                    </label>
                    <input
                      type="text"
                      id="organization"
                      className="input"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="email" className="label">
                      Work email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="input"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="label">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="input"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="sector" className="label">
                    Area of interest
                  </label>
                  <select
                    id="sector"
                    className="input"
                    value={formData.sector}
                    onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                  >
                    <option>Hospital / Clinical Facility</option>
                    <option>Market Entry &amp; Investment Advisory</option>
                    <option>Due Diligence</option>
                    <option>Commercial Growth &amp; Expansion</option>
                    <option>Healthcare HR &amp; Executive Search</option>
                    <option>Approved Vendor List</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="label">
                    How can we help?
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="input"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  <Send className="h-4 w-4" />
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
    </>
  );
};

interface ContactRowProps {
  icon: React.ReactNode;
  title: string;
  lines: string[];
  href?: string;
}

const ContactRow: React.FC<ContactRowProps> = ({ icon, title, lines, href }) => (
  <div className="flex items-start gap-4">
    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent-700">
      {React.cloneElement(icon as React.ReactElement, { className: 'h-5 w-5' })}
    </div>
    <div>
      <h3 className="font-semibold text-navy-900">{title}</h3>
      {lines.map((line) =>
        href ? (
          <a
            key={line}
            href={href}
            {...(href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            className="mt-1 block text-secondary-600 transition-colors hover:text-accent-700"
          >
            {line}
          </a>
        ) : (
          <p key={line} className="mt-1 text-secondary-600">
            {line}
          </p>
        )
      )}
    </div>
  </div>
);

export default ContactPage;
