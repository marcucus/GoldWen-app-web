import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'GoldWen Showcase API is running!';
  }

  getHomePageData() {
    return {
      title: "GoldWen - L'application de rencontre qui valorise la qualité",
      description:
        "Découvrez GoldWen, l'antidote au dating burnout. Une sélection quotidienne de profils compatibles pour des connexions authentiques et durables.",
      keywords:
        'rencontre, dating app, relations sérieuses, slow dating, qualité, authentique',
      app: {
        name: 'GoldWen',
        slogan: 'Conçue pour être désinstallée',
        tagline: 'La qualité plutôt que la quantité',
        description:
          'GoldWen révolutionne les rencontres en ligne en proposant une approche intentionnelle et apaisante. Fini le swipe incessant, place aux connexions significatives.',
      },
      features: [
        {
          title: 'Sélection Quotidienne',
          description:
            'Recevez 3 à 5 profils soigneusement sélectionnés chaque jour à midi.',
          icon: 'calendar',
        },
        {
          title: 'Matching Intelligent',
          description:
            'Notre algorithme privilégie la compatibilité des valeurs et des personnalités.',
          icon: 'heart',
        },
        {
          title: 'Conversations Éphémères',
          description:
            'Discussions limitées à 24h pour encourager des échanges authentiques.',
          icon: 'chat',
        },
        {
          title: 'Design Apaisant',
          description:
            'Interface minimaliste inspirée de la "Calm Technology" pour réduire l\'anxiété.',
          icon: 'zen',
        },
      ],
      personas: [
        {
          name: "Sophie, l'Intentionnelle",
          age: 29,
          description:
            'Professionnelle urbaine, fatiguée de la superficialité. Cherche une relation sérieuse et valorise la compatibilité des valeurs.',
        },
        {
          name: 'Marc, le Professionnel Ambitieux',
          age: 34,
          description:
            'Carrière exigeante, peu de temps libre. Optimise sa recherche en se concentrant sur des profils sérieux.',
        },
      ],
      cta: {
        primary: "Télécharger l'app",
        secondary: 'En savoir plus',
      },
    };
  }
}
