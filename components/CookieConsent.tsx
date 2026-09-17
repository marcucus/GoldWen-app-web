import { useEffect, useState } from 'react';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

const KEY = 'goldwen-metrics-v1';
const MAX_AGE = 180 * 24 * 60 * 60 * 1000;
export default function CookieConsent() {
  const { t } = useTranslation('common');
  const [choice, setChoice] = useState<boolean | null>(null);
  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(KEY) || 'null');
      if (saved && typeof saved.accepted === 'boolean' && saved.at <= Date.now() && Date.now() - saved.at < MAX_AGE) setChoice(saved.accepted);
    } catch { /* Storage unavailable: keep analytics disabled. */ }
  }, []);
  useEffect(() => {
    // Full navigation on withdrawal clears already-loaded SDKs and their listeners.
    if (choice !== true || process.env.NEXT_PUBLIC_ENABLE_ANALYTICS !== 'true') return;
    let active = true;
    import('@vercel/analytics').then(({ inject }) => { if (active) inject(); });
    import('@vercel/speed-insights').then(({ injectSpeedInsights }) => { if (active) injectSpeedInsights(); });
    return () => { active = false; };
  }, [choice]);
  const save = (accepted: boolean) => {
    try { localStorage.setItem(KEY, JSON.stringify({ accepted, at: Date.now() })); } catch { /* No persistence required to refuse. */ }
    setChoice(accepted);
    if (!accepted && choice === true) window.location.reload();
  };
  return <>
    {choice === null && <section aria-label={t('cookies.title')} className="fixed bottom-0 inset-x-0 z-[60] border-t border-gold-primary bg-white dark:bg-dark-secondary p-6 shadow-lg">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-6 items-start md:items-center">
        <div className="flex-1"><h2 className="font-serif text-xl mb-2">{t('cookies.title')}</h2><p>{t('cookies.description')} <Link className="underline" href="/confidentialite">{t('nav.privacy')}</Link></p></div>
        <button className="consent-button" onClick={() => save(false)}>{t('cookies.refuse')}</button>
        <button className="consent-button" onClick={() => save(true)}>{t('cookies.accept')}</button>
      </div>
    </section>}
    {choice !== null && <button className="fixed bottom-3 left-3 z-[60] consent-button text-sm" onClick={() => { if (choice) save(false); else setChoice(null); }}>{t('cookies.manage')}</button>}
  </>;
}
