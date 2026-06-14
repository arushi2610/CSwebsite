import { useEffect } from 'react';

const BASE_URL = 'https://codesocial.tech';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}

function setMeta(attr: string, val: string, content: string) {
  let el = document.querySelector(`meta[${attr}="${val}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(attr, val);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

export function useSEO({ title, description, path = '/', ogImage = `${BASE_URL}/og-image.png` }: SEOProps) {
  useEffect(() => {
    const url = `${BASE_URL}${path}`;

    document.title = title;

    setMeta('name', 'description', description);
    setMeta('name', 'title', title);

    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', ogImage);

    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);
    setMeta('name', 'twitter:url', url);

    setCanonical(url);
  }, [title, description, path, ogImage]);
}
