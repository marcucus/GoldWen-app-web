import { useRouter } from 'next/router';
import { useEffect } from 'react';

const supportedLocales = ['fr', 'en', 'es', 'de', 'it'];

export function useBrowserLanguageDetection() {
  const router = useRouter();

  useEffect(() => {
    // Only run on the client and if we're not already on a specific locale route
    if (typeof window === 'undefined' || router.locale !== router.defaultLocale) {
      return;
    }

    // Check if user has already visited and made a choice
    const savedLocale = localStorage.getItem('preferredLocale');
    if (savedLocale && supportedLocales.includes(savedLocale)) {
      if (savedLocale !== router.locale) {
        router.push(router.asPath, router.asPath, { locale: savedLocale });
      }
      return;
    }

    // Get browser languages
    const browserLanguages = navigator.languages || [navigator.language];
    
    // Find the first matching supported language
    const matchedLocale = browserLanguages
      .map(lang => {
        // Handle cases like 'en-US' -> 'en', 'es-ES' -> 'es', etc.
        const shortLang = lang.toLowerCase().split('-')[0];
        return supportedLocales.includes(shortLang) ? shortLang : null;
      })
      .find(lang => lang !== null);

    // If we found a matching language and it's different from current, redirect
    if (matchedLocale && matchedLocale !== router.locale) {
      // Save the detected language preference
      localStorage.setItem('preferredLocale', matchedLocale);
      router.push(router.asPath, router.asPath, { locale: matchedLocale });
    } else if (!matchedLocale) {
      // If no matching language found, save the default locale
      localStorage.setItem('preferredLocale', router.defaultLocale || 'fr');
    }
  }, [router]);
}