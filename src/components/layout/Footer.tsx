import React from 'react';
import { Link } from 'react-router-dom';
import { Stethoscope, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-secondary-300">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-600">
                <Stethoscope className="h-5 w-5 text-white" />
              </span>
              <span className="text-lg font-extrabold tracking-tight text-white">Nathm</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-secondary-400">
              Medical sector consulting for corporations and investors — strategy,
              investment, operations, and talent across the Kingdom of Saudi Arabia.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-white">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/about" className="text-secondary-400 transition-colors hover:text-white">
                  About the Group
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-secondary-400 transition-colors hover:text-white">
                  Consulting Services
                </Link>
              </li>
              <li>
                <Link to="/services/hr" className="text-secondary-400 transition-colors hover:text-white">
                  Healthcare HR Services
                </Link>
              </li>
              <li>
                <Link to="/vendors" className="text-secondary-400 transition-colors hover:text-white">
                  Approved Vendor List
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-secondary-400 transition-colors hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-white">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-sm text-secondary-400">
              <li>Market Entry &amp; Investment Advisory</li>
              <li>Operational &amp; Regulatory Due Diligence</li>
              <li>Commercial Growth &amp; Expansion</li>
              <li>Executive Search &amp; Clinical Leadership</li>
              <li>Licensing &amp; Saudization Compliance</li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-sm font-bold uppercase tracking-widest text-white">
              Contact
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent-400" />
                <span className="text-secondary-400">
                  Office 10, 53165 Olaya Street,
                  <br />
                  Riyadh, Kingdom of Saudi Arabia
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-accent-400" />
                <a href="tel:+966924445440" className="text-secondary-400 transition-colors hover:text-white">
                  924 445 440
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-accent-400" />
                <a href="mailto:gm@hndasah.com" className="text-secondary-400 transition-colors hover:text-white">
                  gm@hndasah.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-xs text-secondary-500">
            &copy; {currentYear} Nathm. All rights reserved.
          </p>
          <p className="text-center text-xs text-secondary-500 md:text-right">
            Medical sector consulting, Riyadh. Advisory services only — not a licensed
            financial or banking institution.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
