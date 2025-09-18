import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useState, useEffect, useRef } from 'react';

export default function LanguageSelector() {
  const router = useRouter();
  const { t } = useTranslation('common');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const changeLanguage = (locale: string) => {
    // Save user's choice to localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferredLocale', locale);
    }
    router.push(router.asPath, router.asPath, { locale });
    setIsOpen(false);
  };

  const languages = [
    { code: 'fr', name: t('language.french'), flag: '/images/flags/fr.svg' },
    { code: 'en', name: t('language.english'), flag: '/images/flags/en.svg' },
    { code: 'es', name: t('language.spanish'), flag: '/images/flags/es.svg' },
    { code: 'de', name: t('language.german'), flag: '/images/flags/de.svg' },
    { code: 'it', name: t('language.italian'), flag: '/images/flags/it.svg' }
  ];

  const currentLanguage = languages.find(lang => lang.code === router.locale);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-cream-dark to-cream-light dark:from-dark-tertiary dark:to-dark-secondary text-gray-text dark:text-dark-text hover:from-gold-primary hover:to-gold-accent hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-gold/50 border border-gold-primary/20"
        aria-label={t('language.switch')}
      >
        <span className="w-7 h-5 rounded-md overflow-hidden border border-white/20 transition-transform group-hover:scale-110">
          <img 
            src={currentLanguage?.flag} 
            alt={`${currentLanguage?.name} flag`}
            className="w-full h-full object-cover"
          />
        </span>
        <div className="absolute inset-0 bg-gradient-to-br from-gold-primary/10 to-gold-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>

      {isOpen && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 py-3 bg-white/95 dark:bg-dark-secondary/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gold-primary/20 dark:border-gold-accent/30 z-[9999] min-w-[220px] max-h-[50vh] overflow-y-auto">
          <div className="px-3 pb-2 mb-2 border-b border-gold-primary/10 dark:border-gold-accent/20">
            <span className="text-xs font-medium text-gold-primary dark:text-gold-accent uppercase tracking-wider">
              {t('language.switch')}
            </span>
          </div>
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => changeLanguage(language.code)}
              className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gradient-to-r hover:from-gold-primary/10 hover:to-gold-accent/10 hover:text-gold-primary dark:hover:text-gold-accent transition-all duration-200 text-sm group ${
                router.locale === language.code ? 'bg-gradient-to-r from-gold-primary/20 to-gold-accent/20 text-gold-primary dark:text-gold-accent' : 'text-gray-text dark:text-dark-text'
              }`}
            >
              <span className="w-6 h-4 rounded-sm overflow-hidden flex-shrink-0 border border-gray-200 dark:border-dark-border group-hover:border-gold-primary/50 transition-colors">
                <img 
                  src={language.flag} 
                  alt={`${language.name} flag`}
                  className="w-full h-full object-cover"
                />
              </span>
              <span className="font-medium flex-1">{language.name}</span>
              {router.locale === language.code && (
                <svg className="w-4 h-4 text-gold-primary dark:text-gold-accent" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
