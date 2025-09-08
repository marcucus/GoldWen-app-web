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
        className="w-auto flex items-center justify-center p-3 rounded-lg bg-cream-dark dark:bg-dark-tertiary text-gray-text dark:text-dark-text hover:bg-gold-primary hover:text-white transition-colors"
        aria-label={t('language.switch')}
      >
        <span className="w-6 h-5 rounded-sm overflow-hidden">
          <img 
            src={currentLanguage?.flag} 
            alt={`${currentLanguage?.name} flag`}
            className="w-full h-full object-cover"
          />
        </span>
      </button>

      {isOpen && (
        <>
          {/* Backdrop for mobile to close dropdown */}
          <div 
            className="fixed inset-0 z-[998] bg-black/20 xl:hidden"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Dropdown menu with better positioning and z-index for mobile */}
          <div className="absolute top-full left-0 right-0 mt-2 py-2 bg-white dark:bg-dark-secondary rounded-lg shadow-xl border border-gray-200 dark:border-dark-border z-[999] max-h-[40vh] xl:max-h-60 overflow-y-auto min-w-[200px] xl:min-w-[240px]">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => changeLanguage(language.code)}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gold-primary hover:text-white transition-colors text-sm ${
                  router.locale === language.code ? 'bg-gold-primary/10 text-gold-primary' : 'text-gray-text dark:text-dark-text'
                }`}
              >
                <span className="w-5 h-4 rounded-sm overflow-hidden flex-shrink-0">
                  <img 
                    src={language.flag} 
                    alt={`${language.name} flag`}
                    className="w-full h-full object-cover"
                  />
                </span>
                <span className="font-medium">{language.name}</span>
                {router.locale === language.code && (
                  <svg className="w-4 h-4 ml-auto" fill="currentColor" viewBox="0 0 20 20">
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
        </>
      )}
    </div>
  );
}