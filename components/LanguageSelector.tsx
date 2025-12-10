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
    { code: 'it', name: t('language.italian'), flag: '/images/flags/it.svg' },
    { code: 'pt', name: t('language.portuguese'), flag: '/images/flags/pt.svg' }
  ];

  const currentLanguage = languages.find(lang => lang.code === router.locale);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative w-14 h-14 flex items-center justify-center rounded-2xl bg-white dark:bg-dark-secondary hover:bg-gradient-to-br hover:from-gold-primary hover:to-gold-accent text-gray-text dark:text-dark-text hover:text-white transition-all duration-500 transform hover:scale-110 shadow-xl hover:shadow-2xl hover:shadow-gold-primary/40 border-2 border-gold-primary/30 dark:border-gold-accent/40 hover:border-gold-primary dark:hover:border-gold-accent overflow-hidden"
        aria-label={t('language.switch')}
      >
        {/* Animated background glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold-primary/0 to-gold-accent/0 group-hover:from-gold-primary/20 group-hover:to-gold-accent/20 rounded-2xl transition-all duration-500"></div>
        
        <span className="relative w-8 h-6 rounded-md overflow-hidden border-2 border-gray-300/60 dark:border-dark-border transition-all duration-500 group-hover:scale-110 group-hover:border-white/80 shadow-md group-hover:shadow-xl">
          <img 
            src={currentLanguage?.flag} 
            alt={`${currentLanguage?.name} flag`}
            className="w-full h-full object-cover"
          />
        </span>

        {/* Premium shine effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 transform -translate-x-full group-hover:translate-x-full"></div>
      </button>

      {isOpen && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 py-4 bg-white dark:bg-dark-secondary backdrop-blur-xl rounded-2xl shadow-2xl border border-gold-primary/30 dark:border-gold-accent/40 z-[9999] min-w-[260px] max-h-[50vh] overflow-y-auto animate-fade-in-down">
          {/* Header with improved styling */}
          <div className="px-4 pb-3 mb-3 border-b border-gold-primary/20 dark:border-gold-accent/30">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-gold-primary dark:text-gold-accent uppercase tracking-wider flex items-center">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
                </svg>
                {t('language.switch')}
              </span>
            </div>
          </div>

          {/* Language options with enhanced animations */}
          <div className="space-y-1.5 px-3">
            {languages.map((language, index) => (
              <button
                key={language.code}
                onClick={() => changeLanguage(language.code)}
                style={{ animationDelay: `${index * 50}ms` }}
                className={`w-full flex items-center space-x-3 px-4 py-3.5 rounded-xl text-left transition-all duration-300 text-base font-medium group animate-fade-in ${
                  router.locale === language.code
                    ? 'bg-gradient-to-r from-gold-primary/25 to-gold-accent/25 text-gold-primary dark:text-gold-accent shadow-md border border-gold-primary/30 dark:border-gold-accent/40'
                    : 'text-gray-text dark:text-dark-text hover:bg-gradient-to-r hover:from-gold-primary/15 hover:to-gold-accent/15 hover:text-gold-primary dark:hover:text-gold-accent border border-transparent hover:border-gold-primary/20 dark:hover:border-gold-accent/30'
                }`}
              >
                <span className="w-8 h-6 rounded-md overflow-hidden flex-shrink-0 border-2 border-gray-300/60 dark:border-dark-border group-hover:border-gold-primary/60 dark:group-hover:border-gold-accent/60 transition-all duration-300 shadow-sm group-hover:shadow-lg group-hover:scale-110">
                  <img 
                    src={language.flag} 
                    alt={`${language.name} flag`}
                    className="w-full h-full object-cover"
                  />
                </span>
                <span className="flex-1 transition-transform duration-300 group-hover:translate-x-1">
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
