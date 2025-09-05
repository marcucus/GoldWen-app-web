import { GetStaticProps } from 'next';
import Layout from '../components/Layout';
import { appService } from '../lib/app-service';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface LegalProps {
  seoData: {
    title: string;
    description: string;
    keywords?: string;
  };
}

export default function Legal({ seoData }: LegalProps) {
  const { t: tCommon } = useTranslation('common');
  const { t } = useTranslation('legal');

  // Get app data from translations
  const appData = {
    name: tCommon('app.name'),
    slogan: tCommon('app.slogan'),
    tagline: tCommon('app.tagline'),
    description: tCommon('app.description')
  };

  return (
    <Layout 
      title={seoData.title}
      description={seoData.description}
      keywords={seoData.keywords}
      app={appData}
    >
      {/* Hero Section - Enhanced with sophisticated design */}
      <section className="section-padding bg-gradient-hero dark:bg-dark-primary geometric-bg relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold-primary opacity-10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gold-light opacity-8 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="container-responsive relative z-10">
          <div className="text-center max-w-4xl mx-auto space-calm-xl animate-fade-in-up">
            <div className="art-deco-border mb-8"></div>
            <h1 className="heading-primary text-shadow-gold mb-8 dark:text-dark-text">
              {t('title')}
            </h1>
            <p className="text-body-large max-w-2xl mx-auto leading-relaxed text-gray-warm dark:text-dark-text-secondary">
              {t('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Content Section - Enhanced with premium design */}
      <section className="section-padding bg-cream-lightest dark:bg-dark-secondary pattern-overlay dark:pattern-overlay-dark">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="heading-secondary gold-accent-center text-shadow-lg mb-8 dark:text-dark-text">
                {t('main_section.title')}
              </h2>
              <p className="text-body-large text-gray-warm dark:text-dark-text-secondary">
                {t('main_section.subtitle')}
              </p>
            </div>
            
            <div className="space-y-8">
              {/* Main Legal Info Card */}
              <div className="card group animate-fade-in-up bg-white dark:bg-dark-tertiary border border-cream-dark dark:border-dark-border">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-gold group-hover:animate-glow">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                  </div>
                  <h3 className="heading-tertiary mb-6 text-shadow dark:text-dark-text">
                    {t('coming_soon.title')}
                  </h3>
                  <p className="text-body text-gray-warm dark:text-dark-text-secondary leading-relaxed mb-8">
                    {t('coming_soon.description')}
                  </p>
                </div>
              </div>

              {/* Legal Compliance */}
              <div className="card group animate-fade-in-up bg-white dark:bg-dark-tertiary border border-cream-dark dark:border-dark-border" style={{animationDelay: '0.2s'}}>
                <h3 className="heading-tertiary mb-8 text-shadow text-center dark:text-dark-text">
                  {t('commitment.title')}
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      title: t('commitment.items.gdpr_compliance.title'),
                      description: t('commitment.items.gdpr_compliance.description'),
                      icon: "🇪🇺"
                    },
                    {
                      title: t('commitment.items.french_law.title'),
                      description: t('commitment.items.french_law.description'),
                      icon: "🇫🇷"
                    },
                    {
                      title: t('commitment.items.transparency.title'),
                      description: t('commitment.items.transparency.description'),
                      icon: "📋"
                    },
                    {
                      title: t('commitment.items.user_protection.title'),
                      description: t('commitment.items.user_protection.description'),
                      icon: "🛡️"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center text-lg shadow-gold">
                          {item.icon}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-text dark:text-dark-text mb-2">{item.title}</h4>
                        <p className="text-gray-warm dark:text-dark-text-secondary text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Future Legal Info */}
              <div className="card group animate-fade-in-up bg-white dark:bg-dark-tertiary border border-cream-dark dark:border-dark-border" style={{animationDelay: '0.4s'}}>
                <h3 className="heading-tertiary mb-8 text-shadow text-center dark:text-dark-text">
                  {t('future_info.title')}
                </h3>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-text dark:text-dark-text">{t('future_info.publisher.title')}</h4>
                    <ul className="text-gray-warm dark:text-dark-text-secondary space-y-2 text-sm">
                      {(t('future_info.publisher.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-text dark:text-dark-text">{t('future_info.hosting.title')}</h4>
                    <ul className="text-gray-warm dark:text-dark-text-secondary space-y-2 text-sm">
                      {(t('future_info.hosting.items', { returnObjects: true }) as string[]).map((item: string, index: number) => (
                        <li key={index}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Contact Legal */}
              <div className="card group animate-fade-in-up bg-white dark:bg-dark-tertiary border border-cream-dark dark:border-dark-border" style={{animationDelay: '0.6s'}}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-gold group-hover:animate-glow">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 001.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <h3 className="heading-tertiary mb-4 text-shadow dark:text-dark-text">
                    {t('contact.title')}
                  </h3>
                  <p className="text-body text-gray-warm dark:text-dark-text-secondary leading-relaxed mb-6">
                    {t('contact.description')}
                  </p>
                  <div className="space-y-4">
                    <p className="text-gold-primary font-semibold">
                      <a href={`mailto:${t('contact.email')}`} className="hover:text-gold-dark transition-colors duration-300">
                        {t('contact.email')}
                      </a>
                    </p>
                    <div className="pt-4">
                      <a href="/contact" className="btn-secondary hover-lift">
                        {t('contact.button')}
                      </a>
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
  const seoData = appService.getLegalPageSEO(locale);
  
  return {
    props: {
      seoData,
      ...(await serverSideTranslations(locale!, ['common', 'legal'])),
    },
  };
};