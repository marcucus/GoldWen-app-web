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
        className="group relative w-14 h-14 flex items-center justify-center rounded-2xl bg-gradient-to-br from-cream-dark to-cream-light dark:from-dark-tertiary dark:to-dark-secondary text-gray-text dark:text-dark-text hover:from-gold-primary hover:to-gold-accent hover:text-white transition-all duration-500 transform hover:scale-105 shadow-lg hover:shadow-gold/50 border border-gold-primary/20 dark:border-gold-accent/30 overflow-hidden"
        aria-label={t('language.switch')}
      >
        {/* Animated background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold-primary/10 to-gold-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        
        <span className="relative w-7 h-5 rounded-md overflow-hidden border border-white/30 dark:border-white/20 transition-all duration-500 group-hover:scale-110 group-hover:border-white/50 shadow-md">
          <img 
            src={currentLanguage?.flag} 
            alt={`${currentLanguage?.name} flag`}
            className="w-full h-full object-cover"
          />
        </span>

        {/* Subtle shine effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full group-hover:translate-x-full"></div>
      </button>

      {isOpen && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 py-3 bg-white/98 dark:bg-dark-secondary/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-gold-primary/20 dark:border-gold-accent/30 z-[9999] min-w-[240px] max-h-[50vh] overflow-y-auto animate-fade-in-down">
          {/* Header with improved styling */}
          <div className="px-4 pb-3 mb-2 border-b border-gold-primary/10 dark:border-gold-accent/20">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-gold-primary dark:text-gold-accent uppercase tracking-wider flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                {t('language.switch')}
              </span>
            </div>
          </div>

          {/* Language options with enhanced animations */}
          <div className="space-y-1 px-2">
            {languages.map((language, index) => (
              <button
                key={language.code}
                onClick={() => changeLanguage(language.code)}
                style={{ animationDelay: `${index * 50}ms` }}
                className={`w-full flex items-center space-x-3 px-3 py-3 rounded-xl text-left transition-all duration-300 text-sm group animate-fade-in ${
                  router.locale === language.code
                    ? 'bg-gradient-to-r from-gold-primary/20 to-gold-accent/20 text-gold-primary dark:text-gold-accent shadow-md'
                    : 'text-gray-text dark:text-dark-text hover:bg-gradient-to-r hover:from-gold-primary/10 hover:to-gold-accent/10 hover:text-gold-primary dark:hover:text-gold-accent'
                }`}
              >
                <span className="w-7 h-5 rounded-md overflow-hidden flex-shrink-0 border border-gray-200/50 dark:border-dark-border group-hover:border-gold-primary/50 dark:group-hover:border-gold-accent/50 transition-all duration-300 shadow-sm group-hover:shadow-md group-hover:scale-110">
                  <img 
                    src={language.flag} 
                    alt={`${language.name} flag`}
                    className="w-full h-full object-cover"
                  />
                </span>
                <span className="font-medium flex-1 transition-transform duration-300 group-hover:translate-x-1">
                  {language.name}
                </span>
                {router.locale === language.code && (
                  <svg className="w-5 h-5 text-gold-primary dark:text-gold-accent animate-scale-in" fill="currentColor" viewBox="0 0 20 20">
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
        </div>
      )}
    </div>
  );
}
