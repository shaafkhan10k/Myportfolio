import { Helmet } from 'react-helmet-async';
import config from '../../seo.config.json';

type RoutePath = keyof typeof config.routes;

/**
 * Single source of truth for per-route <head> tags.
 * The same seo.config.json is used by scripts/prerender.mjs so the static HTML
 * and the client-rendered head always match (and never duplicate).
 */
export default function Seo({ path }: { path: RoutePath }) {
  const { title, description } = config.routes[path];
  const url = `${config.siteUrl}${path === '/' ? '/' : path}`;
  const image = `${config.siteUrl}${config.ogImage}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={config.siteName} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
