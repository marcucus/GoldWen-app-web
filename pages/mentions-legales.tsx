import { GetStaticProps } from 'next';
import Layout from '../components/Layout';
import { appService, PageData } from '../lib/app-service';

interface LegalProps {
  pageData: PageData;
}

export default function Legal({ pageData }: LegalProps) {
  return (
    <Layout 
      title={pageData.title}
      description={pageData.description}
      app={pageData.app}
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
              Mentions Légales
            </h1>
            <p className="text-body-large max-w-2xl mx-auto leading-relaxed text-gray-warm">
              Informations légales et transparence : notre engagement pour un service 
              conforme et responsable.
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
                Informations légales
              </h2>
              <p className="text-body-large text-gray-warm">
                Conformité légale et transparence totale.
              </p>
            </div>
            
            <div className="space-y-8">
              {/* Main Legal Info Card */}
              <div className="card group animate-fade-in-up">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-gold group-hover:animate-glow">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                  </div>
                  <h3 className="heading-tertiary mb-6 text-shadow">
                    Mentions légales complètes disponibles prochainement
                  </h3>
                  <p className="text-body text-gray-warm leading-relaxed mb-8">
                    Les mentions légales détaillées seront publiées avec le lancement officiel 
                    de l&apos;application GoldWen. Elles incluront toutes les informations 
                    légales requises par la réglementation française et européenne.
                  </p>
                </div>
              </div>

              {/* Legal Compliance */}
              <div className="card group animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <h3 className="heading-tertiary mb-8 text-shadow text-center">
                  Notre engagement légal
                </h3>
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Conformité RGPD",
                      description: "Respect total du Règlement Général sur la Protection des Données.",
                      icon: "🇪🇺"
                    },
                    {
                      title: "Droit français",
                      description: "Application conforme au droit français et aux réglementations applicables.",
                      icon: "🇫🇷"
                    },
                    {
                      title: "Transparence",
                      description: "Informations claires sur l'éditeur, l'hébergement et les responsabilités.",
                      icon: "📋"
                    },
                    {
                      title: "Protection utilisateur",
                      description: "Respect des droits des utilisateurs et des obligations légales.",
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
                        <h4 className="font-semibold text-gray-text mb-2">{item.title}</h4>
                        <p className="text-gray-warm text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Future Legal Info */}
              <div className="card group animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <h3 className="heading-tertiary mb-8 text-shadow text-center">
                  Informations à venir
                </h3>
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-text">Éditeur</h4>
                    <ul className="text-gray-warm space-y-2 text-sm">
                      <li>• Raison sociale de la société</li>
                      <li>• Adresse du siège social</li>
                      <li>• Numéro SIRET</li>
                      <li>• Capital social</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-semibold text-gray-text">Hébergement</h4>
                    <ul className="text-gray-warm space-y-2 text-sm">
                      <li>• Nom de l&apos;hébergeur</li>
                      <li>• Adresse de l&apos;hébergeur</li>
                      <li>• Coordonnées techniques</li>
                      <li>• Localisation des serveurs</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Contact Legal */}
              <div className="card group animate-fade-in-up" style={{animationDelay: '0.6s'}}>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-gold group-hover:animate-glow">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 001.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <h3 className="heading-tertiary mb-4 text-shadow">
                    Questions légales ?
                  </h3>
                  <p className="text-body text-gray-warm leading-relaxed mb-6">
                    Pour toute question concernant les aspects légaux de GoldWen, 
                    contactez notre équipe juridique.
                  </p>
                  <div className="space-y-4">
                    <p className="text-gold-primary font-semibold">
                      <a href="mailto:legal@goldwen.app" className="hover:text-gold-dark transition-colors duration-300">
                        legal@goldwen.app
                      </a>
                    </p>
                    <div className="pt-4">
                      <a href="/contact" className="btn-secondary hover-lift">
                        Formulaire de contact
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

export const getStaticProps: GetStaticProps = async () => {
  const pageData = appService.getLegalPageData();
  
  return {
    props: {
      pageData,
    },
  };
};