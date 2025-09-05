import { GetStaticProps } from 'next';
import Layout from '../components/Layout';
import { appService } from '../lib/app-service';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface TermsProps {
  seoData: {
    title: string;
    description: string;
    keywords?: string;
  };
}

export default function Terms({ seoData }: TermsProps) {
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
              Conditions d&apos;Utilisation
            </h1>
            <p className="text-body-large max-w-2xl mx-auto leading-relaxed text-gray-warm">
              Les conditions d&apos;utilisation transparentes et équitables de GoldWen, 
              conçues dans le respect de vos droits et de votre vie privée.
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
                Conditions générales
              </h2>
              <p className="text-body-large text-gray-warm">
                Transparence et respect : nos engagements envers vous.
              </p>
            </div>
            
            <div className="space-y-8">
              {/* Coming Soon Card */}
              <div className="card group animate-fade-in-up">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-gold group-hover:animate-glow">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h3 className="heading-tertiary mb-6 text-shadow">
                    Conditions détaillées disponibles prochainement
                  </h3>
                  <p className="text-body text-gray-warm leading-relaxed mb-8">
                    Les conditions d&apos;utilisation complètes et détaillées seront disponibles 
                    avec le lancement officiel de l&apos;application GoldWen. Nous nous engageons 
                    à fournir des conditions transparentes et équitables.
                  </p>
                </div>
              </div>

              {/* Principles Card */}
              <div className="card group animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <h3 className="heading-tertiary mb-8 text-shadow text-center">
                  Nos principes fondamentaux
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Respect de la vie privée",
                      description: "Vos données personnelles sont protégées et ne sont jamais vendues à des tiers.",
                      icon: "🔒"
                    },
                    {
                      title: "Transparence",
                      description: "Des conditions claires, sans clauses cachées ou piégeuses.",
                      icon: "🔍"
                    },
                    {
                      title: "Sécurité",
                      description: "Environnement sûr avec vérification des profils et modération active.",
                      icon: "🛡️"
                    },
                    {
                      title: "Équité",
                      description: "Conditions d'utilisation équitables pour tous les utilisateurs.",
                      icon: "⚖️"
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

              {/* Contact Card */}
              <div className="card group animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <div className="text-center">
                  <h3 className="heading-tertiary mb-6 text-shadow">
                    Questions sur nos conditions ?
                  </h3>
                  <p className="text-body text-gray-warm leading-relaxed mb-8">
                    En attendant la publication de nos conditions complètes, n&apos;hésitez pas 
                    à nous contacter pour toute question ou clarification.
                  </p>
                  <a href="/contact" className="btn-primary hover-lift group animate-scale-in">
                    <svg className="w-6 h-6 mr-3 inline group-hover:animate-bounce-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 001.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    Nous contacter
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
  const seoData = appService.getTermsPageSEO(locale);
  
  return {
    props: {
      seoData,
      ...(await serverSideTranslations(locale!, ['common'])),
    },
  };
};