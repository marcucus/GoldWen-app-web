import { GetStaticProps } from 'next';
import Layout from '../components/Layout';
import { appService } from '../lib/app-service';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface ContactProps {
  seoData: {
    title: string;
    description: string;
    keywords?: string;
  };
}

export default function Contact({ seoData }: ContactProps) {
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
              Contactez-nous
            </h1>
            <p className="text-body-large max-w-2xl mx-auto leading-relaxed text-gray-warm">
              Une question ? Une suggestion ? Notre équipe est là pour vous accompagner 
              dans votre expérience GoldWen.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section - Enhanced with premium card design */}
      <section className="section-padding bg-cream-lightest pattern-overlay">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="heading-secondary gold-accent-center text-shadow-lg mb-8">
                Nous sommes là pour vous aider
              </h2>
              <p className="text-body-large text-gray-warm">
                Notre équipe s&apos;engage à vous répondre rapidement et avec attention.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Email Contact Card */}
              <div className="card-feature group animate-scale-in">
                <div className="icon-large mx-auto mb-8 group-hover:scale-110 group-hover:text-gold-accent transition-all duration-300">
                  <svg className="text-gold-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 001.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="heading-tertiary mb-6 text-shadow">Email</h3>
                <p className="text-body text-gray-warm mb-6">
                  Écrivez-nous directement pour toute question ou suggestion.
                </p>
                <a href="mailto:support@goldwen.app" className="text-gold-primary font-semibold text-lg hover:text-gold-dark transition-colors duration-300">
                  support@goldwen.app
                </a>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-gold-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
              </div>

              {/* Response Time Card */}
              <div className="card-feature group animate-scale-in" style={{animationDelay: '0.15s'}}>
                <div className="icon-large mx-auto mb-8 group-hover:scale-110 group-hover:text-gold-accent transition-all duration-300">
                  <svg className="text-gold-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="heading-tertiary mb-6 text-shadow">Temps de Réponse</h3>
                <p className="text-body text-gray-warm mb-6">
                  Nous nous engageons à vous répondre rapidement.
                </p>
                <p className="text-gold-primary font-semibold text-lg">
                  Généralement sous 24h
                </p>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-gold-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
              </div>
            </div>

            {/* Additional Contact Information */}
            <div className="card group animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="text-center">
                <h3 className="heading-tertiary mb-8 text-shadow">Autres moyens de nous joindre</h3>
                
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mx-auto shadow-gold group-hover:animate-glow">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-text mb-2">Adresse</h4>
                      <p className="text-gray-warm">Paris, France</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mx-auto shadow-gold group-hover:animate-glow">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-text mb-2">Support</h4>
                      <p className="text-gray-warm">
                        <a href="/support" className="text-gold-primary hover:text-gold-dark transition-colors duration-300">
                          Consultez notre FAQ
                        </a>
                      </p>
                    </div>
                  </div>
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
  const seoData = appService.getContactPageSEO(locale);
  
  return {
    props: {
      seoData,
      ...(await serverSideTranslations(locale!, ['common'])),
    },
  };
};