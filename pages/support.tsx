import { GetStaticProps } from 'next';
import Layout from '../components/Layout';
import { appService, PageData } from '../lib/app-service';

interface SupportProps {
  pageData: PageData;
}

export default function Support({ pageData }: SupportProps) {
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
              Centre d&apos;Aide et Support
            </h1>
            <p className="text-body-large max-w-2xl mx-auto leading-relaxed text-gray-warm">
              Trouvez rapidement des réponses à vos questions sur GoldWen et découvrez 
              comment tirer le meilleur parti de votre expérience.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section - Enhanced with premium card design */}
      <section className="section-padding bg-cream-lightest pattern-overlay">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-20 animate-fade-in-up">
              <div className="art-deco-border mb-8"></div>
              <h2 className="heading-secondary gold-accent-center text-shadow-lg mb-8">
                Questions Fréquentes
              </h2>
              <p className="text-body-large text-gray-warm">
                Les réponses aux questions les plus courantes sur GoldWen.
              </p>
            </div>
            
            <div className="space-y-8">
              {[
                {
                  question: "Comment fonctionne la sélection quotidienne ?",
                  answer: "Chaque jour à midi, notre algorithme vous propose 3 à 5 profils soigneusement sélectionnés en fonction de vos préférences, de votre compatibilité et de vos valeurs. Cette approche privilégie la qualité sur la quantité pour des rencontres plus significatives.",
                  icon: "🎯"
                },
                {
                  question: "Pourquoi les conversations disparaissent-elles après 24h ?",
                  answer: "Cette fonctionnalité encourage des échanges spontanés et authentiques, évitant l'accumulation de conversations non actives. Elle pousse à créer des connexions réelles rapidement et réduit l'anxiété liée aux messages en attente.",
                  icon: "⏰"
                },
                {
                  question: "Comment le matching intelligent fonctionne-t-il ?",
                  answer: "Notre algorithme analyse vos valeurs, personnalité et préférences pour identifier les profils les plus compatibles. Nous privilégions la compatibilité profonde plutôt que les critères superficiels.",
                  icon: "🧠"
                },
                {
                  question: "Qu'est-ce que la philosophie 'Calm Technology' ?",
                  answer: "GoldWen adopte les principes de la 'Calm Technology' : interface minimaliste, interactions prévisibles, notifications limitées. L'objectif est de réduire l'anxiété et créer une expérience apaisante.",
                  icon: "🧘"
                },
                {
                  question: "Comment contacter le support ?",
                  answer: "Vous pouvez nous contacter via notre page de contact ou directement par email à support@goldwen.app. Nous répondons généralement sous 24h avec des solutions personnalisées.",
                  icon: "💬"
                }
              ].map((faq, index) => (
                <div key={index} className="card group animate-fade-in-up" style={{animationDelay: `${index * 0.15}s`}}>
                  <div className="flex items-start space-x-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center text-2xl shadow-gold group-hover:animate-bounce-subtle">
                        {faq.icon}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="heading-tertiary mb-4 text-shadow">
                        {faq.question}
                      </h3>
                      <p className="text-body text-gray-warm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-gold-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                </div>
              ))}
            </div>

            {/* Contact Support Section */}
            <div className="mt-20 text-center animate-fade-in-up" style={{animationDelay: '0.8s'}}>
              <div className="card group">
                <div className="max-w-2xl mx-auto">
                  <div className="w-20 h-20 bg-gradient-gold rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-gold group-hover:animate-glow">
                    <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a.75.75 0 01.75.75v6l.75 1.5-.75 1.5v6a.75.75 0 01-1.5 0v-6L10.5 10.5l.75-1.5v-6a.75.75 0 01.75-.75z"></path>
                    </svg>
                  </div>
                  <h3 className="heading-tertiary mb-6 text-shadow">
                    Vous ne trouvez pas la réponse ?
                  </h3>
                  <p className="text-body text-gray-warm mb-8">
                    Notre équipe est là pour vous aider personnellement. 
                    N&apos;hésitez pas à nous contacter directement.
                  </p>
                  <a href="/contact" className="btn-primary hover-lift group animate-scale-in">
                    <svg className="w-6 h-6 mr-3 inline group-hover:animate-bounce-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 001.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                    Contactez-nous
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

export const getStaticProps: GetStaticProps = async () => {
  const pageData = appService.getSupportPageData();
  
  return {
    props: {
      pageData,
    },
  };
};