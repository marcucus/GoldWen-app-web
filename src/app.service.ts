import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'GoldWen Showcase API is running!';
  }

  getBasePageData() {
    return {
      app: {
        name: 'GoldWen',
        slogan: 'Conçue pour être désinstallée',
        tagline: 'La qualité plutôt que la quantité',
      },
    };
  }

  getHomePageData() {
    return {
      title: "GoldWen - L'application de rencontre qui valorise la qualité",
      description:
        "Découvrez GoldWen, l'antidote au dating burnout. Une sélection quotidienne de profils compatibles pour des connexions authentiques et durables.",
      keywords:
        'rencontre, dating app, application rencontre, site de rencontre, relations sérieuses, slow dating, qualité, authentique, amour, célibataire, couple, mariage, dating, match, profil, compatibilité, romance, flirt, séduction, relation amoureuse, âme soeur, partenaire, love, dating app france, rencontre en ligne, chat, message, rendez-vous, sortir ensemble, français, francophone, premium dating, exclusive dating, intentional dating, mindful dating, conscious dating, dating fatigue, swipe fatigue, meaningful connections, genuine relationships, long-term relationship, serious dating, quality over quantity, curated matches, daily selection, one-to-one, anti-tinder, slowlove, calm dating, zen dating, dating wellness, relationship goals, love connection, real love, true love, soulmate finder, relationship app, dating service, matchmaking, personal matching, intelligent matching, values-based matching, personality compatibility, relationship coaching, dating advice, love stories, success stories, testimonials dating, best dating app, top dating, nouvelle generation rencontre, révolution dating, future of dating, next generation dating, innovative dating, disruptive dating, ethical dating, sustainable dating, eco-friendly dating, green dating, responsible dating, fair dating, transparent dating, honest dating, no games dating, drama-free dating, stress-free dating, anxiety-free dating, peaceful dating, harmonious dating, balanced dating, healthy dating, positive dating, optimistic dating, hopeful dating, inspiring dating, motivating dating, empowering dating, confident dating, self-love, personal growth, relationship growth, emotional intelligence, communication skills, conflict resolution, relationship therapy, couples therapy, dating psychology, love psychology, attachment theory, relationship science, love research, dating studies, sociology of love, anthropology of dating, philosophy of love, spirituality dating, mindfulness dating, meditation dating, yoga dating, wellness dating, holistic dating, alternative dating, non-conventional dating, progressive dating, modern dating, contemporary dating, 21st century dating, digital detox dating, offline dating, in-person dating, face-to-face dating, real-world dating, authentic dating experience, genuine dating platform, sincere dating community, trustworthy dating service, reliable dating solution, effective dating method, successful dating strategy, winning dating approach, proven dating system, tested dating formula, validated dating concept, evidence-based dating, research-backed dating, scientifically proven dating, data-driven dating, algorithm-powered dating, AI-enhanced dating, machine learning dating, smart dating, intelligent dating platform, advanced matching technology, sophisticated compatibility assessment, comprehensive personality analysis, detailed psychological profiling, in-depth character evaluation, thorough lifestyle matching, extensive preference alignment, precise value-based pairing, accurate interest-based suggestions, targeted demographic filtering, refined search criteria, personalized recommendation engine, customized dating experience, tailored love journey, individualized relationship path, bespoke romantic adventure, exclusive dating membership, premium love service, luxury dating concierge, high-end matchmaking, elite dating club, sophisticated singles, cultured individuals, educated professionals, successful careers, accomplished individuals, ambitious singles, driven personalities, goal-oriented people, achievement-focused daters, success-minded partners, career-oriented singles, work-life balance seekers, lifestyle-conscious daters, health-conscious singles, fitness-minded partners, wellness-oriented individuals, environmentally conscious daters, socially responsible singles, community-minded partners, volunteer-oriented individuals, charity-supporting daters, cause-driven singles, mission-oriented partners, purpose-driven individuals, meaning-seeking daters, fulfillment-focused singles, happiness-pursuing partners, joy-seeking individuals, adventure-loving daters, travel-enthusiastic singles, culture-appreciating partners, art-loving individuals, music-passionate daters, literature-loving singles, film-enthusiastic partners, food-loving individuals, cooking-passionate daters, wine-appreciating singles, coffee-loving partners, outdoors-enthusiastic individuals, nature-loving daters, sports-passionate singles, fitness-enthusiastic partners, game-loving individuals, hobby-passionate daters, skill-developing singles, learning-enthusiastic partners, growth-minded individuals, self-improvement daters, personal development singles, life-coaching partners, mentoring individuals, teaching-passionate daters, knowledge-sharing singles, wisdom-seeking partners, enlightenment-pursuing individuals, consciousness-expanding daters, awareness-building singles, mindfulness-practicing partners, meditation-loving individuals, spirituality-exploring daters, faith-based singles, religion-oriented partners, values-driven individuals, principles-guided daters, ethics-focused singles, morality-conscious partners, integrity-minded individuals, honesty-valuing daters, transparency-seeking singles, authenticity-pursuing partners, genuineness-appreciating individuals, sincerity-loving daters, openness-embracing singles, vulnerability-accepting partners, emotional-intelligence individuals, empathy-driven daters, compassion-focused singles, kindness-oriented partners, generosity-minded individuals, giving-natured daters, service-oriented singles, helping-focused partners, support-providing individuals, care-giving daters, nurturing singles, protective partners, loyal individuals, faithful daters, committed singles, devoted partners, dedicated individuals, persistent daters, determined singles, resilient partners, strong individuals, confident daters, self-assured singles, independent partners, autonomous individuals, free-spirited daters, creative singles, artistic partners, innovative individuals, inventive daters, original singles, unique partners, special individuals, extraordinary daters, remarkable singles, exceptional partners, outstanding individuals, impressive daters, inspiring singles, motivating partners, encouraging individuals, uplifting daters, positive singles, optimistic partners, hopeful individuals, confident daters, secure singles, stable partners, grounded individuals, balanced daters, harmonious singles, peaceful partners, calm individuals, relaxed daters, easy-going singles, laid-back partners, flexible individuals, adaptable daters, open-minded singles, progressive partners, forward-thinking individuals, future-oriented daters, innovative singles, pioneering partners, trailblazing individuals, groundbreaking daters, revolutionary singles, transformative partners, life-changing individuals, impactful daters, influential singles, inspiring partners, motivational individuals, empowering daters, confidence-building singles, self-esteem boosting partners, personal-growth individuals, self-improvement daters, life-enhancement singles, quality-of-life partners, happiness-increasing individuals, joy-bringing daters, smile-creating singles, laughter-generating partners, fun-loving individuals, playful daters, humorous singles, witty partners, clever individuals, intelligent daters, smart singles, wise partners, knowledgeable individuals, informed daters, educated singles, learned partners, scholarly individuals, academic daters, professional singles, business-minded partners, entrepreneurial individuals, innovative daters, startup singles, tech-savvy partners, digital-native individuals, social-media daters, online singles, internet partners, web-based individuals, app-using daters, mobile singles, smartphone partners, tablet individuals, device-connected daters, always-online singles, digitally-integrated partners, technology-embracing individuals, future-ready daters, modern singles, contemporary partners, current individuals, up-to-date daters, trendy singles, fashionable partners, stylish individuals, elegant daters, sophisticated singles, refined partners, cultured individuals, well-mannered daters, polite singles, courteous partners, respectful individuals, considerate daters, thoughtful singles, caring partners, loving individuals, affectionate daters, romantic singles, passionate partners, intense individuals, deep daters, profound singles, meaningful partners, significant individuals, important daters, valuable singles, precious partners, cherished individuals, treasured daters, beloved singles, adored partners, worshipped individuals, revered daters, respected singles, admired partners, appreciated individuals, valued daters, esteemed singles, honored partners, celebrated individuals, acclaimed daters, recognized singles, acknowledged partners, validated individuals, confirmed daters, verified singles, authenticated partners, legitimate individuals, genuine daters, real singles, actual partners, true individuals, honest daters, truthful singles, sincere partners, authentic individuals, original daters, unique singles, one-of-a-kind partners, rare individuals, special daters, exceptional singles, extraordinary partners, remarkable individuals, outstanding daters, impressive singles, amazing partners, incredible individuals, fantastic daters, wonderful singles, marvelous partners, excellent individuals, superb daters, brilliant singles, magnificent partners, splendid individuals, glorious daters, beautiful singles, gorgeous partners, stunning individuals, attractive daters, appealing singles, charming partners, captivating individuals, enchanting daters, fascinating singles, intriguing partners, interesting individuals, engaging daters, compelling singles, magnetic partners, irresistible individuals, alluring daters, seductive singles, tempting partners, enticing individuals, inviting daters, welcoming singles, friendly partners, warm individuals, kind daters, gentle singles, tender partners, soft individuals, sweet daters, lovely singles, delightful partners, pleasant individuals, agreeable daters, nice singles, good partners, great individuals, excellent daters, perfect singles, ideal partners, dream individuals, fantasy daters, ultimate singles, supreme partners, perfect match, ideal companion, dream partner, soulmate connection, true love story, happily ever after, fairy tale romance, love at first sight, destiny meets, fate encounters, meant to be, written in stars, perfect timing, right person, right time, love story, romance novel, real-life fairy tale, modern love story, contemporary romance, digital age love, online romance, virtual connection, digital chemistry, internet spark, cyber attraction, web-based romance, app-facilitated love, technology-enabled connection, algorithm-powered romance, AI-assisted love, machine-learning romance, data-driven love story, scientific romance, research-based love, evidence-backed romance, proven love method, tested romance formula, validated love approach, successful romance strategy, winning love technique, effective romance solution, powerful love tool, advanced romance platform, sophisticated love system, intelligent romance algorithm, smart love matching, clever romance pairing, wise love selection, knowledgeable romance curation, informed love filtering, educated romance screening, learned love assessment, scholarly romance evaluation, professional love analysis, expert romance consultation, specialist love guidance, authority romance advice, master love coaching, guru romance mentoring, sage love wisdom, oracle romance insight, prophet love foresight, visionary romance prediction, futurist love forecast, trendsetter romance innovation, pioneer love breakthrough, leader romance advancement, champion love success, winner romance victory, achiever love accomplishment, performer romance excellence, star love brilliance, celebrity romance fame, icon love legend, symbol romance meaning, emblem love significance, badge romance honor, medal love achievement, trophy romance victory, award love recognition, prize romance reward, gift love blessing, treasure romance wealth, jewel love value, gem romance worth, diamond love purity, gold romance quality, platinum romance premium, silver romance elegance, bronze romance achievement, copper romance warmth, steel romance strength, iron romance durability, titanium romance resilience, carbon romance foundation, crystal romance clarity, pearl romance rarity, emerald romance growth, ruby romance passion, sapphire romance wisdom, topaz romance joy, amethyst romance peace, quartz romance energy, turquoise romance protection, jade romance luck, opal romance creativity, garnet romance commitment, onyx romance strength, jasper romance grounding, agate romance stability, obsidian romance truth, moonstone romance intuition, sunstone romance vitality, labradorite romance transformation, amazonite romance courage, aventurine romance opportunity, carnelian romance confidence, citrine romance abundance, fluorite romance focus, hematite romance balance, malachite romance healing, pyrite romance prosperity, rose quartz romance love, smoky quartz romance protection, clear quartz romance amplification, black tourmaline romance grounding, green tourmaline romance growth, pink tourmaline romance emotional healing, blue tourmaline romance communication, yellow tourmaline romance personal power, watermelon tourmaline romance harmony, rainbow tourmaline romance joy',
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

  getSupportPageData() {
    return {
      ...this.getBasePageData(),
      title: 'Support et Aide - GoldWen | Application de Rencontre Haut de Gamme',
      description:
        "Trouvez de l'aide et des réponses à vos questions sur GoldWen. Support client premium pour l'application de rencontre nouvelle génération axée sur la qualité des connexions.",
      keywords: 'support goldwen, aide application rencontre, service client dating, assistance technique, FAQ rencontre, guide utilisation, tutoriel dating app, problème connexion, bug application, contact support'
    };
  }

  getPrivacyPageData() {
    return {
      ...this.getBasePageData(),
      title: 'Politique de Confidentialité - GoldWen | Protection des Données Personnelles',
      description:
        'Découvrez comment GoldWen protège et utilise vos données personnelles. Politique de confidentialité transparente pour une application de rencontre éthique et sécurisée.',
      keywords: 'confidentialité goldwen, protection données personnelles, RGPD dating app, sécurité rencontre en ligne, vie privée application, données utilisateur, chiffrement, anonymat, sécurité information'
    };
  }

  getTermsPageData() {
    return {
      ...this.getBasePageData(),
      title: "Conditions d'Utilisation - GoldWen | CGU Application Rencontre",
      description:
        "Consultez les conditions d'utilisation de l'application GoldWen. Règles et conditions pour une expérience de rencontre respectueuse et sécurisée.",
      keywords: 'conditions utilisation goldwen, CGU dating app, règles application rencontre, termes service, contrat utilisateur, responsabilités, droits utilisateur, modération contenu'
    };
  }

  getLegalPageData() {
    return {
      ...this.getBasePageData(),
      title: 'Mentions Légales - GoldWen | Informations Légales Application Rencontre',
      description: 'Informations légales et réglementaires concernant GoldWen. Mentions légales complètes pour une application de rencontre française transparente et conforme.',
      keywords: 'mentions légales goldwen, information juridique, société éditrice, hébergement application, responsabilité légale, droit français, réglementation dating'
    };
  }

  getContactPageData() {
    return {
      ...this.getBasePageData(),
      title: 'Contact - GoldWen | Contactez Notre Équipe Application Rencontre',
      description:
        "Contactez l'équipe GoldWen pour toute question ou suggestion. Service client réactif pour l'application de rencontre premium française.",
      keywords: 'contact goldwen, équipe support, service client rencontre, feedback application, suggestion amélioration, partenariat, presse médias, investisseurs'
    };
  }
}
