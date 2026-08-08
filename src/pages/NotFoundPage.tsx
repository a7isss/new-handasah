import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Seo from '../components/seo/Seo';
import { ArrowRight } from 'lucide-react';

const NotFoundPage: React.FC = () => {
  return (
    <>
      <Seo
        title="Page Not Found | Nathm"
        description="The page you are looking for does not exist or has been removed."
        path="/404"
        noIndex
      />
      <Layout>
      <section className="flex min-h-[60vh] items-center bg-white">
        <div className="mx-auto max-w-2xl px-5 py-20 text-center sm:px-8">
          <p className="text-7xl font-bold text-accent-600">404</p>
          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            This page has been moved
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-secondary-600">
            The page you are looking for does not exist or has been removed as part of a
            site update.
          </p>
          <div className="mt-9">
            <Link
              to="/"
              className="inline-flex items-center gap-2 rounded-full bg-navy-900 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-navy-800"
            >
              Return Home
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
    </>
  );
};

export default NotFoundPage;
