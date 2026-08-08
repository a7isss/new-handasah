import React, { useEffect } from 'react';

export const SITE_URL = 'https://hndasah.com';
export const DEFAULT_OG_IMAGE = '/stock%20image%20landing.jpg';

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
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', image);
    setMeta('property', 'og:site_name', 'Nathm');
    setMeta('property', 'og:locale', 'en_US');
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', image);
  }, [title, description, path, ogImage, type, noIndex]);

  return null;
};

export default Seo;
