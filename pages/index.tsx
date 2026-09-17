import { GetStaticProps } from 'next';
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import { appService } from '../lib/app-service';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface HomeProps {
  seoData: {
    title: string;
    description: string;
    keywords?: string;
  };
}

const APP_STORE_URL = process.env.NEXT_PUBLIC_APP_STORE_URL;
const GOOGLE_PLAY_URL = process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL;

export default function Home({ seoData }: HomeProps) {
  const { t } = useTranslation('common');
  // Get app data from translations
  const appData = {
    name: t('app.name'),
    slogan: t('app.slogan'),
    tagline: t('app.tagline'),
    description: t('app.description')
  };

  // Get features data from translations with icons
  const features = [
    {
      title: t('features.items.daily_selection.title'),
      description: t('features.items.daily_selection.description'),
      icon: 'calendar'
    },
    {
      title: t('features.items.smart_matching.title'),
      description: t('features.items.smart_matching.description'),
      icon: 'heart'
    },
    {
      title: t('features.items.ephemeral_conversations.title'),
      description: t('features.items.ephemeral_conversations.description'),
      icon: 'chat'
    },
    {
      title: t('features.items.calm_design.title'),
      description: t('features.items.calm_design.description'),
      icon: 'zen'
    }
  ];

  const personas = [
    {
      name: t('personas.sophie.name'),
      age: t('personas.sophie.age'),
      description: t('personas.sophie.description')
    },
    {
      name: t('personas.marc.name'),
      age: t('personas.marc.age'),
      description: t('personas.marc.description')
    }
  ];

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
          <div className="grid lg:grid-cols-2 gap-20 lg:gap-24 items-center min-h-[70vh]">
            <div className="space-calm-xl animate-fade-in-up">
              <div className="space-y-8">
                <h1 className="heading-primary text-shadow-gold">
                  <span className="title-goldwen-animated block mb-4 sm:mb-2">{appData.name}</span>
                  <span className="text-gold-primary gold-accent-animated block">
                    {appData.tagline}
                  </span>
                </h1>
                <p className="text-body-large max-w-2xl leading-relaxed">
                  {appData.description}
                </p>
                <div className="inline-block">
                  <p className="text-xl font-medium text-gold-rich italic text-shadow px-6 py-3 bg-gradient-to-r from-gold-primary/10 to-gold-light/10 rounded-2xl border border-gold-primary/20">
                    &quot;{appData.slogan}&quot;
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 pt-8">
                <a href="#download" className="btn-primary hover-lift group animate-scale-in" style={{animationDelay: '0.3s'}}>
                  <svg className="w-6 h-6 mr-3 inline group-hover:animate-bounce-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                  {t('hero.cta.primary')}
                </a>
                <a href="#features" className="btn-secondary hover-lift animate-scale-in" style={{animationDelay: '0.5s'}}>
                  {t('hero.cta.secondary')}
                </a>
              </div>
            </div>
            
            <div className="text-center space-y-8">
              <img src="/images/logo_light.png" alt="GoldWen" className="w-48 h-48 object-contain mx-auto" />
              <p className="font-serif text-3xl">{t('ritual.title')}</p>
              <p className="text-lg leading-relaxed max-w-sm mx-auto">{t('ritual.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced with premium card design */}
      <section id="features" className="section-padding bg-cream-lightest dark:bg-dark-secondary pattern-overlay">
        <div className="container-responsive">
          <div className="text-center mb-24 animate-fade-in-up">
            <div className="art-deco-border mb-8"></div>
            <h2 className="heading-secondary gold-accent-center text-shadow-lg mb-8">
              {t('features.title')}
            </h2>
            <p className="text-body-large max-w-4xl mx-auto leading-relaxed text-gray-warm">
              {t('features.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={feature.title}
                className="card-feature group animate-scale-in"
                style={{animationDelay: `${index * 0.15}s`}}
              >
                <div className="icon-large mx-auto mb-8 group-hover:scale-110 group-hover:text-gold-accent transition-all duration-300">
                  <Icon name={feature.icon} />
                </div>
                <h3 className="heading-tertiary mb-6 text-shadow">
                  {feature.title}
                </h3>
                <p className="text-body leading-relaxed text-gray-warm">
                  {feature.description}
                </p>
                
                {/* Decorative element */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-gold-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About/Philosophy Section - Enhanced with sophisticated layout */}
      <section id="about" className="section-padding bg-white dark:bg-dark-primary geometric-bg relative">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-24 h-24 border-2 border-gold-primary/20 rounded-full animate-rotate-slow"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-gold-primary/10 rounded-full animate-pulse-slow"></div>
        
        <div className="container-responsive relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-calm-xl animate-slide-right">
              <div className="art-deco-border mb-8"></div>
              <h2 className="heading-secondary gold-accent text-shadow-lg mb-12">
                {t('calm_tech.title')}
              </h2>
              <div className="space-calm-lg">
                <div className="relative">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-gold-primary to-gold-light rounded-full"></div>
                  <div className="pl-8 space-y-8">
                    <p className="text-body-large leading-relaxed text-gray-warm">
                      {t('calm_tech.description')}
                    </p>
                    <p className="text-body-large leading-relaxed text-gray-warm">
                      {t('calm_tech.subtitle1')}
                    </p>
                    <p className="text-body-large leading-relaxed text-gray-warm">
                      {t('calm_tech.subtitle2')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8 animate-slide-left">
              {[
                {
                  title: t('calm_tech.items.minimal_design.title'),
                  description: t('calm_tech.items.minimal_design.description'),
                  icon: "✨"
                },
                {
                  title: t('calm_tech.items.predictable_interactions.title'), 
                  description: t('calm_tech.items.predictable_interactions.description'),
                  icon: "🎯"
                },
                {
                  title: t('calm_tech.items.limited_notifications.title'),
                  description: t('calm_tech.items.limited_notifications.description'),
                  icon: "🔔"
                }
              ].map((item, index) => (
                <div key={item.title} className="card-testimonial group animate-fade-in-up" style={{animationDelay: `${index * 0.2}s`}}>
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center text-2xl shadow-gold group-hover:animate-bounce-subtle">
                        {item.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="heading-tertiary mb-4 text-shadow">
                        {item.title}
                      </h4>
                      <p className="text-body text-gray-warm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Personas Section - Enhanced with elegant personas cards */}
      <section className="section-padding bg-cream-light dark:bg-dark-tertiary pattern-overlay">
        <div className="container-responsive">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="art-deco-border mb-8"></div>
            <h2 className="heading-secondary gold-accent-center text-shadow-lg mb-8">
              {t('personas.title')}
            </h2>
            <p className="text-body-large max-w-4xl mx-auto text-gray-warm">
              {t('personas.subtitle')}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {personas.map((persona, index) => (
              <div key={persona.name} className={`card group animate-fade-in-${index % 2 === 0 ? 'left' : 'right'}`} style={{animationDelay: `${index * 0.3}s`}}>
                <div className="relative">
                  {/* Background decoration */}
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-gold opacity-10 rounded-full blur-xl group-hover:opacity-20 transition-opacity duration-400"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center space-x-6 mb-8">
                      <div className="relative">
                        <div className="w-20 h-20 bg-gradient-to-br from-gold-primary via-gold-light to-gold-dark rounded-2xl flex items-center justify-center shadow-gold group-hover:animate-glow">
                          <span className="text-white font-bold text-2xl">
                            {persona.name.charAt(0)}
                          </span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="heading-tertiary text-shadow mb-2">{persona.name}</h3>
                        <div className="flex items-center space-x-2">
                          <span className="text-gold-rich font-semibold text-lg">{persona.age}</span>
                          <div className="w-2 h-2 bg-gold-primary rounded-full"></div>
                          <span className="text-gray-soft text-sm">{t('personas.illustrative')}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-gold-primary to-transparent rounded-full"></div>
                      <p className="text-body text-gray-warm leading-relaxed pl-6">
                        {persona.description}
                      </p>
                    </div>
                    

                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download/CTA Section - Premium design with enhanced visual appeal */}
      <section id="download" className="section-padding bg-gradient-cta text-white relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 border border-white/20 rounded-full animate-pulse-slow"></div>
          <div className="absolute top-20 right-20 w-16 h-16 bg-white/10 rounded-full animate-float"></div>
          <div className="absolute bottom-10 left-1/3 w-24 h-24 border-2 border-white/10 rounded-full animate-rotate-slow"></div>
          <div className="absolute bottom-20 right-10 w-8 h-8 bg-white/20 rounded-full animate-bounce-subtle"></div>
        </div>
        
        <div className="container-responsive relative z-10">
          <div className="text-center max-w-5xl mx-auto space-calm-xl">
            <div className="animate-fade-in-up">
              <div className="art-deco-border mb-12"></div>
              <h2 className="heading-secondary mb-8 text-shadow-lg">
                {t('download.title')}
              </h2>
              <p className="text-xl mb-16 opacity-90 leading-relaxed max-w-3xl mx-auto">
                {t('download.subtitle')}
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16 animate-scale-in" style={{animationDelay: '0.3s'}}>
              {APP_STORE_URL ? (
                <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="download-btn-app-store group">
                  <div className="flex items-center space-x-4">
                    <div className="download-icon-wrapper">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-sm opacity-80">{t('download.app_store')}</div>
                      <div className="text-xl font-semibold">App Store</div>
                    </div>
                  </div>
                </a>
              ) : (
                <div className="download-btn-app-store opacity-50 cursor-not-allowed" aria-disabled="true">
                  <div className="flex items-center space-x-4">
                    <div className="download-icon-wrapper">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-sm opacity-80">{t('download.coming_soon')}</div>
                      <div className="text-xl font-semibold">App Store</div>
                    </div>
                  </div>
                </div>
              )}

              {GOOGLE_PLAY_URL ? (
                <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer" className="download-btn-google-play group">
                  <div className="flex items-center space-x-4">
                    <div className="download-icon-wrapper">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-sm opacity-80">{t('download.google_play')}</div>
                      <div className="text-xl font-semibold">Google Play</div>
                    </div>
                  </div>
                </a>
              ) : (
                <div className="download-btn-google-play opacity-50 cursor-not-allowed" aria-disabled="true">
                  <div className="flex items-center space-x-4">
                    <div className="download-icon-wrapper">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-sm opacity-80">{t('download.coming_soon')}</div>
                      <div className="text-xl font-semibold">Google Play</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            <div className="animate-fade-in" style={{animationDelay: '0.5s'}}>
              <p className="text-sm opacity-75 mb-8">
                {t('download.coming_soon')}
              </p>
              

            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const seoData = appService.getHomePageSEO(locale);
  
  return {
    props: {
      seoData,
      ...(await serverSideTranslations(locale!, ['common'])),
    },
  };
};