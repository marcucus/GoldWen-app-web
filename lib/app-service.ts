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
    const seoData = {
      fr: {
        home: {
          title: "GoldWen - L'application de rencontre qui valorise la qualité",
          description: "Découvrez GoldWen, l'antidote au dating burnout. Une sélection quotidienne de profils compatibles pour des connexions authentiques et durables.",
          keywords: 'rencontre, dating app, application rencontre, site de rencontre, relations sérieuses, slow dating, qualité, authentique, amour, célibataire, couple, mariage, dating, match, profil, compatibilité, romance, flirt, séduction, relation amoureuse, âme soeur, partenaire, love, dating app france, rencontre en ligne, chat, message, rendez-vous, sortir ensemble, français, francophone, premium dating, exclusive dating, intentional dating, mindful dating, conscious dating, dating fatigue, swipe fatigue, meaningful connections, genuine relationships, long-term relationship, serious dating, quality over quantity, curated matches, daily selection, one-to-one, anti-tinder, slowlove, calm dating, zen dating, dating wellness, relationship goals, love connection, real love, true love, soulmate finder, relationship app, dating service, matchmaking, personal matching, intelligent matching, values-based matching, personality compatibility'
        },
        support: {
          title: 'Support et Aide - GoldWen | Application de Rencontre Haut de Gamme',
          description: "Trouvez de l'aide et des réponses à vos questions sur GoldWen. Support client premium pour l'application de rencontre nouvelle génération axée sur la qualité des connexions.",
          keywords: 'support goldwen, aide application rencontre, service client dating, assistance technique, FAQ rencontre, guide utilisation, tutoriel dating app, problème connexion, bug application, contact support'
        },
        privacy: {
          title: 'Politique de Confidentialité - GoldWen | Protection des Données Personnelles',
          description: 'Découvrez comment GoldWen protège et utilise vos données personnelles. Politique de confidentialité transparente pour une application de rencontre éthique et sécurisée.',
          keywords: 'confidentialité goldwen, protection données personnelles, RGPD dating app, sécurité rencontre en ligne, vie privée application, données utilisateur, chiffrement, anonymat, sécurité information'
        },
        terms: {
          title: "Conditions d'Utilisation - GoldWen | CGU Application Rencontre",
          description: "Consultez les conditions d'utilisation de l'application GoldWen. Règles et conditions pour une expérience de rencontre respectueuse et sécurisée.",
          keywords: 'conditions utilisation goldwen, CGU dating app, règles application rencontre, termes service, contrat utilisateur, responsabilités, droits utilisateur, modération contenu'
        },
        legal: {
          title: 'Mentions Légales - GoldWen | Informations Légales Application Rencontre',
          description: 'Informations légales et réglementaires concernant GoldWen. Mentions légales complètes pour une application de rencontre française transparente et conforme.',
          keywords: 'mentions légales goldwen, information juridique, société éditrice, hébergement application, responsabilité légale, droit français, réglementation dating'
        },
        contact: {
          title: 'Contact - GoldWen | Contactez Notre Équipe Application Rencontre',
          description: "Contactez l'équipe GoldWen pour toute question ou suggestion. Service client réactif pour l'application de rencontre premium française.",
          keywords: 'contact goldwen, équipe support, service client rencontre, feedback application, suggestion amélioration, partenariat, presse médias, investisseurs'
        }
      },
      en: {
        home: {
          title: "GoldWen - The Dating App That Values Quality",
          description: "Discover GoldWen, the antidote to dating burnout. A daily selection of compatible profiles for authentic and lasting connections.",
          keywords: 'dating, dating app, dating application, dating site, serious relationships, slow dating, quality, authentic, love, single, couple, marriage, dating, match, profile, compatibility, romance, flirt, seduction, romantic relationship, soulmate, partner, love, dating app france, online dating, chat, message, date, dating, english, francophone, premium dating, exclusive dating, intentional dating, mindful dating, conscious dating, dating fatigue, swipe fatigue, meaningful connections, genuine relationships, long-term relationship, serious dating, quality over quantity, curated matches, daily selection, one-to-one, anti-tinder, slowlove, calm dating, zen dating, dating wellness, relationship goals, love connection, real love, true love, soulmate finder, relationship app, dating service, matchmaking, personal matching, intelligent matching, values-based matching, personality compatibility'
        },
        support: {
          title: 'Support and Help - GoldWen | Premium Dating App',
          description: "Find help and answers to your questions about GoldWen. Premium customer support for the next-generation dating app focused on quality connections.",
          keywords: 'goldwen support, dating app help, dating customer service, technical assistance, dating FAQ, user guide, dating app tutorial, connection problems, app bugs, support contact'
        },
        privacy: {
          title: 'Privacy Policy - GoldWen | Personal Data Protection',
          description: 'Discover how GoldWen protects and uses your personal data. Transparent privacy policy for an ethical and secure dating app.',
          keywords: 'goldwen privacy, personal data protection, GDPR dating app, online dating security, app privacy, user data, encryption, anonymity, information security'
        },
        terms: {
          title: "Terms of Use - GoldWen | Dating App Terms",
          description: "Consult the terms of use of the GoldWen app. Rules and conditions for a respectful and secure dating experience.",
          keywords: 'goldwen terms of use, dating app TOS, dating app rules, service terms, user contract, responsibilities, user rights, content moderation'
        },
        legal: {
          title: 'Legal Notice - GoldWen | Dating App Legal Information',
          description: 'Legal and regulatory information concerning GoldWen. Complete legal notices for a transparent and compliant French dating app.',
          keywords: 'goldwen legal notice, legal information, publishing company, app hosting, legal responsibility, french law, dating regulations'
        },
        contact: {
          title: 'Contact - GoldWen | Contact Our Dating App Team',
          description: "Contact the GoldWen team for any questions or suggestions. Responsive customer service for the premium French dating app.",
          keywords: 'goldwen contact, support team, dating customer service, app feedback, improvement suggestions, partnership, press media, investors'
        }
      }
    };

    return seoData[locale as keyof typeof seoData] || seoData.fr;
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