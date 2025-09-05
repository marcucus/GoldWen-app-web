import { GetStaticProps } from 'next';
import Layout from '../components/Layout';
import { appService } from '../lib/app-service';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface PrivacyProps {
  seoData: {
    title: string;
    description: string;
    keywords?: string;
  };
}

export default function Privacy({ seoData }: PrivacyProps) {
  const { t } = useTranslation('common');

  // Get app data from translations
  const appData = {
    name: t('app.name'),
    slogan: t('app.slogan'),
    tagline: t('app.tagline'),
    description: t('app.description')
  };

  return (
    <Layout 
      title={seoData.title}
      description={seoData.description}
      keywords={seoData.keywords}
      app={appData}
    >
      {/* Hero Section - Enhanced with sophisticated design */}
      <section className="section-padding bg-gradient-hero geometric-bg relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold-primary opacity-10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gold-light opacity-8 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="container-responsive relative z-10">
          <div className="text-center max-w-4xl mx-auto space-calm-xl animate-fade-in-up">
            <div className="art-deco-border mb-8"></div>
            <h1 className="heading-primary text-shadow-gold mb-8">
              Politique de Confidentialité
            </h1>
            <p className="text-body-large max-w-2xl mx-auto leading-relaxed text-gray-warm">
              Votre confidentialité est notre priorité absolue. Découvrez notre engagement 
              pour la protection de vos données personnelles.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section - Enhanced with premium design */}
      <section className="section-padding bg-cream-lightest pattern-overlay">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="heading-secondary gold-accent-center text-shadow-lg mb-8">
                Notre engagement pour votre confidentialité
              </h2>
              <p className="text-body-large text-gray-warm">
                Protection maximale, transparence totale.
              </p>
            </div>
            
            <div className="space-y-8">
              {/* Main Commitment Card */}
              <div className="card group animate-fade-in-up">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-gold group-hover:animate-glow">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                  </div>
                  <h3 className="heading-tertiary mb-6 text-shadow">
                    Votre vie privée, notre engagement
                  </h3>
                  <p className="text-body text-gray-warm leading-relaxed mb-8">
                    Chez GoldWen, nous nous engageons à protéger vos données personnelles et à respecter 
                    votre vie privée. Nos pratiques suivent les standards les plus élevés de l&apos;industrie 
                    et sont conformes au RGPD.
                  </p>
                </div>
              </div>

              {/* Privacy Principles */}
              <div className="card group animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <h3 className="heading-tertiary mb-8 text-shadow text-center">
                  Nos principes de confidentialité
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Données minimales",
                      description: "Nous ne collectons que les données strictement nécessaires au fonctionnement de l'application.",
                      icon: "📊"
                    },
                    {
                      title: "Chiffrement complet",
                      description: "Toutes vos données sont chiffrées en transit et au repos avec les dernières technologies.",
                      icon: "🔐"
                    },
                    {
                      title: "Aucune vente de données",
                      description: "Vos informations personnelles ne sont jamais vendues ou partagées avec des tiers.",
                      icon: "🚫"
                    },
                    {
                      title: "Contrôle utilisateur",
                      description: "Vous gardez le contrôle total sur vos données et pouvez les supprimer à tout moment.",
                      icon: "⚙️"
                    },
                    {
                      title: "Transparence totale",
                      description: "Nous expliquons clairement comment nous utilisons vos données, sans jargon technique.",
                      icon: "💡"
                    },
                    {
                      title: "Conformité RGPD",
                      description: "Respect strict du Règlement Général sur la Protection des Données européen.",
                      icon: "🇪🇺"
                    }
                  ].map((principle, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center text-lg shadow-gold">
                          {principle.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-text mb-2">{principle.title}</h4>
                        <p className="text-gray-warm text-sm leading-relaxed">{principle.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Security Features */}
              <div className="card group animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <h3 className="heading-tertiary mb-8 text-shadow text-center">
                  Mesures de sécurité avancées
                </h3>
                <div className="grid sm:grid-cols-3 gap-6 text-center">
                  {[
                    {
                      title: "Authentification sécurisée",
                      description: "Connexion sécurisée avec authentification à deux facteurs optionnelle.",
                      icon: "🔑"
                    },
                    {
                      title: "Serveurs sécurisés",
                      description: "Infrastructure hébergée dans des centres de données certifiés ISO 27001.",
                      icon: "🏢"
                    },
                    {
                      title: "Audits réguliers",
                      description: "Audits de sécurité réguliers par des experts indépendants.",
                      icon: "🔍"
                    }
                  ].map((feature, index) => (
                    <div key={index} className="space-y-4">
                      <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mx-auto text-2xl shadow-gold">
                        {feature.icon}
                      </div>
                      <h4 className="font-semibold text-gray-text">{feature.title}</h4>
                      <p className="text-gray-warm text-sm leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Coming Soon */}
              <div className="card group animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                <div className="text-center">
                  <h3 className="heading-tertiary mb-6 text-shadow">
                    Politique complète disponible prochainement
                  </h3>
                  <p className="text-body text-gray-warm leading-relaxed mb-8">
                    La politique de confidentialité détaillée sera publiée avec le lancement de l&apos;application. 
                    Elle détaillera précisément nos pratiques de protection des données.
                  </p>
                  <a href="/contact" className="btn-primary hover-lift group animate-scale-in">
                    <svg className="w-6 h-6 mr-3 inline group-hover:animate-bounce-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    Questions sur la confidentialité ?
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const seoData = appService.getPrivacyPageSEO(locale);
  
  return {
    props: {
      seoData,
      ...(await serverSideTranslations(locale!, ['common'])),
    },
  };
};