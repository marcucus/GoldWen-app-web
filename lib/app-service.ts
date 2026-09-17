export interface AppData {
  name: string;
  slogan: string;
  tagline: string;
  description?: string;
}

export interface PageData {
  title: string;
  description: string;
  keywords?: string;
  app: AppData;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Persona {
  name: string;
  age: string; // Changed to string to support translations
  description: string;
}

export interface HomePageData extends PageData {
  features: Feature[];
  personas: Persona[];
  cta: {
    primary: string;
    secondary: string;
  };
}

export class AppService {
  getHello(): string {
    return 'GoldWen Showcase API is running!';
  }

  // Static method to get feature icons mapping
  static getFeatureIcons() {
    return {
      daily_selection: 'calendar',
      smart_matching: 'heart',
      ephemeral_conversations: 'chat',
      calm_design: 'zen'
    };
  }

  // Method to get base SEO data for each page type
  getBaseSEOData(locale: string = 'fr') {
    const dictionaries: Record<string, { app: { tagline: string; description: string }; nav: Record<string, string> }> = {
      fr: require('../public/locales/fr/common.json'), en: require('../public/locales/en/common.json'),
      es: require('../public/locales/es/common.json'), de: require('../public/locales/de/common.json'),
      it: require('../public/locales/it/common.json'), pt: require('../public/locales/pt/common.json'),
    };
    const data = dictionaries[locale] || dictionaries.fr;
    const page = (label: string) => ({ title: `${label} | GoldWen`, description: `${label}. ${data.app.description}` });
    return { home: { title: `GoldWen | ${data.app.tagline}`, description: data.app.description },
      support: page(data.nav.support), privacy: page(data.nav.privacy), terms: page(data.nav.terms),
      legal: page(data.nav.legal), contact: page(data.nav.contact) };
  }

  getHomePageSEO(locale: string = 'fr') {
    return this.getBaseSEOData(locale).home;
  }

  getSupportPageSEO(locale: string = 'fr') {
    return this.getBaseSEOData(locale).support;
  }

  getPrivacyPageSEO(locale: string = 'fr') {
    return this.getBaseSEOData(locale).privacy;
  }

  getTermsPageSEO(locale: string = 'fr') {
    return this.getBaseSEOData(locale).terms;
  }

  getLegalPageSEO(locale: string = 'fr') {
    return this.getBaseSEOData(locale).legal;
  }

  getContactPageSEO(locale: string = 'fr') {
    return this.getBaseSEOData(locale).contact;
  }
}

export const appService = new AppService();