import React, { useEffect } from 'react';

export const SITE_URL = 'https://hndasah.com';
export const SITE_NAME = 'Specialized Technical Services';
export const OG_TITLE = 'Specialized Technical Services';
export const OG_DESCRIPTION =
  'Specialized Technical Services — engineering and technical consultancy for project costing and tendering, from architectural design to complete project cost and priced Bill of Quantities, across construction, infrastructure, and maintenance.';
export const DEFAULT_OG_IMAGE = '/specialized-technical-services.png';

interface SeoProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  type?: string;
  noIndex?: boolean;
}

const setMeta = (attr: 'name' | 'property', key: string, content: string) => {
  let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const setLink = (rel: string, href: string) => {
  let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', rel);
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
};

const Seo: React.FC<SeoProps> = ({
  title,
  description,
  path,
  ogImage = DEFAULT_OG_IMAGE,
  type = 'website',
  noIndex = false,
}) => {
  useEffect(() => {
    const url = `${SITE_URL}${path}`;
    const image = `${SITE_URL}${ogImage}`;
    document.title = title;
    setMeta('name', 'description', description);
    setMeta('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow');
    setLink('canonical', url);
    setMeta('property', 'og:type', type);
    setMeta('property', 'og:title', OG_TITLE);
    setMeta('property', 'og:description', OG_DESCRIPTION);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', image);
    setMeta('property', 'og:site_name', SITE_NAME);
    setMeta('property', 'og:locale', 'en_US');
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', OG_TITLE);
    setMeta('name', 'twitter:description', OG_DESCRIPTION);
    setMeta('name', 'twitter:image', image);
  }, [title, description, path, ogImage, type, noIndex]);

  return null;
};

export default Seo;
