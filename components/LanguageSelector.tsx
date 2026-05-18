import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useState, useEffect, useRef } from 'react';

const LANGUAGES = [
  { code: 'fr', flag: '/images/flags/fr.svg', short: 'FR' },
  { code: 'en', flag: '/images/flags/en.svg', short: 'EN' },
  { code: 'es', flag: '/images/flags/es.svg', short: 'ES' },
  { code: 'de', flag: '/images/flags/de.svg', short: 'DE' },
  { code: 'it', flag: '/images/flags/it.svg', short: 'IT' },
  { code: 'pt', flag: '/images/flags/pt.svg', short: 'PT' },
];

export default function LanguageSelector() {
  const router = useRouter();
  const { t } = useTranslation('common');
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const current = LANGUAGES.find(l => l.code === router.locale) ?? LANGUAGES[0];

  const changeLanguage = (locale: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferredLocale', locale);
    }
    router.push(router.asPath, router.asPath, { locale });
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };

    document.addEventListener('mousedown', handleOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const languageNames: Record<string, string> = {
    fr: t('language.french'),
    en: t('language.english'),
    es: t('language.spanish'),
    de: t('language.german'),
    it: t('language.italian'),
    pt: t('language.portuguese'),
  };

  return (
    <div className="relative" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 h-14 px-4 rounded-2xl bg-white dark:bg-dark-secondary border border-gold-primary/20 dark:border-gold-accent/30 hover:border-gold-primary dark:hover:border-gold-accent text-gray-text dark:text-dark-text hover:text-gold-primary dark:hover:text-gold-accent transition-all duration-200 shadow-sm hover:shadow-md"
        aria-label={t('language.switch')}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span className="w-5 h-3.5 rounded-sm overflow-hidden flex-shrink-0 border border-gray-300/60 dark:border-dark-border shadow-sm">
          <img src={current.flag} alt="" className="w-full h-full object-cover" aria-hidden="true" />
        </span>
        <span className="text-sm font-semibold tracking-wide">{current.short}</span>
        <svg
          className={`w-3.5 h-3.5 text-gold-primary/60 dark:text-gold-accent/60 transition-transform duration-200 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`absolute right-0 top-full mt-2 w-48 bg-white dark:bg-dark-secondary rounded-xl border border-gold-primary/20 dark:border-gold-accent/30 shadow-xl shadow-black/10 dark:shadow-black/40 overflow-hidden transition-all duration-200 origin-top-right z-[9999] ${
          isOpen
            ? 'opacity-100 scale-100 pointer-events-auto'
            : 'opacity-0 scale-95 pointer-events-none'
        }`}
        role="listbox"
        aria-label={t('language.switch')}
      >
        <div className="p-1.5">
          {LANGUAGES.map((lang) => {
            const isActive = router.locale === lang.code;
            return (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-left transition-colors duration-150 ${
                  isActive
                    ? 'bg-gold-primary/10 dark:bg-gold-accent/10 text-gold-primary dark:text-gold-accent'
                    : 'text-gray-text dark:text-dark-text hover:bg-gold-primary/5 dark:hover:bg-gold-accent/5 hover:text-gold-primary dark:hover:text-gold-accent'
                }`}
                role="option"
                aria-selected={isActive}
              >
                <span className="w-6 h-4 rounded-sm overflow-hidden flex-shrink-0 border border-gray-200/80 dark:border-dark-border shadow-sm">
                  <img src={lang.flag} alt="" className="w-full h-full object-cover" aria-hidden="true" />
                </span>
                <span className="flex-1">{languageNames[lang.code]}</span>
                {isActive && (
                  <svg className="w-3.5 h-3.5 text-gold-primary dark:text-gold-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
