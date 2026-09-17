export const locales = ['fr', 'en', 'es', 'de', 'it', 'pt'];
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://goldwen.app').replace(/\/$/, '');
export function localizedUrl(locale = 'fr', path = '/') {
  const clean = path.split(/[?#]/)[0].replace(/^\/(fr|en|es|de|it|pt)(?=\/|$)/, '').replace(/\/$/, '');
  return `${siteUrl}${locale === 'fr' ? '' : `/${locale}`}${clean}`;
}
