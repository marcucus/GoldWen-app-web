import { GetStaticProps } from 'next';
import Layout from '../components/Layout';
import Icon from '../components/Icon';
import { appService, HomePageData } from '../lib/app-service';

interface HomeProps {
  pageData: HomePageData;
}

export default function Home({ pageData }: HomeProps) {
  return (
    <Layout 
      title={pageData.title}
      description={pageData.description}
      keywords={pageData.keywords}
      app={pageData.app}
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
                  {pageData.app.name}<br />
                  <span className="text-gold-primary gold-accent animate-pulse-gold">
                    {pageData.app.tagline}
                  </span>
                </h1>
                <p className="text-body-large max-w-2xl leading-relaxed">
                  {pageData.app.description}
                </p>
                <div className="inline-block">
                  <p className="text-xl font-medium text-gold-rich italic text-shadow px-6 py-3 bg-gradient-to-r from-gold-primary/10 to-gold-light/10 rounded-2xl border border-gold-primary/20">
                    &quot;{pageData.app.slogan}&quot;
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-6 pt-8">
                <a href="#download" className="btn-primary hover-lift group animate-scale-in" style={{animationDelay: '0.3s'}}>
                  <svg className="w-6 h-6 mr-3 inline group-hover:animate-bounce-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                  Télécharger l&apos;application
                </a>
                <a href="#features" className="btn-secondary hover-lift animate-scale-in" style={{animationDelay: '0.5s'}}>
                  Découvrir les fonctionnalités
                </a>
              </div>
            </div>
            
            {/* Enhanced phone mockup */}
            <div className="relative animate-fade-in-down" style={{animationDelay: '0.7s'}}>
              <div className="relative max-w-sm mx-auto">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-gold-primary to-gold-light rounded-3xl blur-xl opacity-30 animate-glow"></div>
                
                {/* Phone mockup */}
                <div className="relative bg-white rounded-3xl shadow-3xl p-8 transform rotate-3 hover:rotate-0 transition-all duration-800 hover-lift animate-float">
                  <div className="space-y-8">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-14 h-14 bg-gradient-gold rounded-full animate-pulse-gold flex items-center justify-center">
                          <span className="text-white font-bold text-lg">G</span>
                        </div>
                        <div>
                          <div className="h-4 bg-gray-200 rounded w-20 mb-2 animate-pulse"></div>
                          <div className="h-3 bg-gray-100 rounded w-16 animate-pulse"></div>
                        </div>
                      </div>
                      <div className="w-8 h-8 bg-gold-primary rounded-full animate-bounce-subtle"></div>
                    </div>
                    
                    {/* Profile cards */}
                    <div className="space-y-4">
                      {[1, 2, 3].map((item, index) => (
                        <div key={item} className="bg-cream-light rounded-2xl p-4 hover:shadow-lg transition-all duration-400" style={{animationDelay: `${index * 0.2}s`}}>
                          <div className="flex items-center space-x-3 mb-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-gold-primary to-gold-dark rounded-full"></div>
                            <div className="flex-1">
                              <div className="h-3 bg-gray-200 rounded w-full mb-1"></div>
                              <div className="h-2 bg-gray-100 rounded w-2/3"></div>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="h-2 bg-gray-100 rounded w-full"></div>
                            <div className="h-2 bg-gray-100 rounded w-4/5"></div>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* CTA Button */}
                    <div className="flex justify-center">
                      <div className="w-32 h-12 bg-gradient-gold rounded-xl animate-glow flex items-center justify-center">
                        <span className="text-white font-semibold">Choisir</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Enhanced with premium card design */}
      <section id="features" className="section-padding bg-cream-lightest pattern-overlay">
        <div className="container-responsive">
          <div className="text-center mb-24 animate-fade-in-up">
            <div className="art-deco-border mb-8"></div>
            <h2 className="heading-secondary gold-accent-center text-shadow-lg mb-8">
              Une approche révolutionnaire des rencontres
            </h2>
            <p className="text-body-large max-w-4xl mx-auto leading-relaxed text-gray-warm">
              Fini le swipe incessant et l&apos;anxiété. {pageData.app.name} propose une expérience apaisante 
              et intentionnelle pour des connexions authentiques.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pageData.features.map((feature, index) => (
              <div 
                key={feature.title}
                className="card-feature group animate-scale-in"
                style={{animationDelay: `${index * 0.15}s`}}
              >
                <div className="icon-large mx-auto mb-8 group-hover:animate-pulse-gold">
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
      <section id="about" className="section-padding bg-white geometric-bg relative">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-24 h-24 border-2 border-gold-primary/20 rounded-full animate-rotate-slow"></div>
        <div className="absolute bottom-10 left-10 w-16 h-16 bg-gold-primary/10 rounded-full animate-pulse-slow"></div>
        
        <div className="container-responsive relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-calm-xl animate-slide-right">
              <div className="art-deco-border mb-8"></div>
              <h2 className="heading-secondary gold-accent text-shadow-lg mb-12">
                La philosophie &quot;Calm Technology&quot;
              </h2>
              <div className="space-calm-lg">
                <div className="relative">
                  <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-gold-primary to-gold-light rounded-full"></div>
                  <div className="pl-8 space-y-8">
                    <p className="text-body-large leading-relaxed text-gray-warm">
                      {pageData.app.name} adopte les principes de la &quot;Calm Technology&quot; pour créer une expérience 
                      apaisante qui réduit l&apos;anxiété liée aux applications de rencontre traditionnelles.
                    </p>
                    <p className="text-body-large leading-relaxed text-gray-warm">
                      Notre interface minimaliste, nos espaces généreux et nos interactions prévisibles 
                      vous permettent de vous concentrer sur l&apos;essentiel : créer des connexions authentiques.
                    </p>
                    <p className="text-body-large leading-relaxed text-gray-warm">
                      Avec une seule notification par jour et des conversations limitées dans le temps, 
                      nous encourageons des échanges plus intentionnels et moins compulsifs.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-8 animate-slide-left">
              {[
                {
                  title: "Design Minimaliste",
                  description: "Interfaces épurées sans éléments superflus pour une expérience sereine.",
                  icon: "✨"
                },
                {
                  title: "Interactions Prévisibles", 
                  description: "Chaque action est claire et rassurante, vous savez toujours ce qui se passe.",
                  icon: "🎯"
                },
                {
                  title: "Notifications Limitées",
                  description: "Une seule notification par jour, pas de dépendance créée artificiellement.",
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
      <section className="section-padding bg-cream-light pattern-overlay">
        <div className="container-responsive">
          <div className="text-center mb-20 animate-fade-in-up">
            <div className="art-deco-border mb-8"></div>
            <h2 className="heading-secondary gold-accent-center text-shadow-lg mb-8">
              Pour qui {pageData.app.name} est-elle conçue ?
            </h2>
            <p className="text-body-large max-w-4xl mx-auto text-gray-warm">
              Notre application s&apos;adresse aux personnes qui recherchent des connexions authentiques 
              et qui sont fatiguées des applications de rencontre traditionnelles.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {pageData.personas.map((persona, index) => (
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
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-cream-lightest rounded-full border-2 border-gold-primary flex items-center justify-center">
                          <span className="text-gold-primary text-xs font-bold">✓</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="heading-tertiary text-shadow mb-2">{persona.name}</h3>
                        <div className="flex items-center space-x-2">
                          <span className="text-gold-rich font-semibold text-lg">{persona.age} ans</span>
                          <div className="w-2 h-2 bg-gold-primary rounded-full"></div>
                          <span className="text-gray-soft text-sm">Profil vérifié</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute left-0 top-0 w-1 h-full bg-gradient-to-b from-gold-primary to-transparent rounded-full"></div>
                      <p className="text-body text-gray-warm leading-relaxed pl-6">
                        {persona.description}
                      </p>
                    </div>
                    
                    {/* Stats or additional info */}
                    <div className="flex items-center justify-between mt-8 pt-6 border-t border-gold-primary/10">
                      <div className="flex space-x-4">
                        <div className="text-center">
                          <div className="text-gold-primary font-bold text-lg">98%</div>
                          <div className="text-gray-soft text-xs">Compatibilité</div>
                        </div>
                        <div className="text-center">
                          <div className="text-gold-primary font-bold text-lg">5★</div>
                          <div className="text-gray-soft text-xs">Évaluation</div>
                        </div>
                      </div>
                      <div className="w-12 h-12 bg-gradient-gold rounded-xl flex items-center justify-center group-hover:animate-bounce-subtle">
                        <span className="text-white text-xl">💎</span>
                      </div>
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
                Prêt(e) à vivre une expérience de rencontre différente ?
              </h2>
              <p className="text-xl mb-16 opacity-90 leading-relaxed max-w-3xl mx-auto">
                Rejoignez {pageData.app.name} et découvrez comment la qualité peut transformer vos rencontres en ligne. 
                Téléchargez l&apos;application dès aujourd&apos;hui.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center mb-16 animate-scale-in" style={{animationDelay: '0.3s'}}>
              <a href="#" className="download-btn-app-store group">
                <div className="flex items-center space-x-4">
                  <div className="download-icon-wrapper">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-sm opacity-80">Télécharger sur l&apos;</div>
                    <div className="text-xl font-semibold">App Store</div>
                  </div>
                </div>
              </a>
              
              <a href="#" className="download-btn-google-play group">
                <div className="flex items-center space-x-4">
                  <div className="download-icon-wrapper">
                    <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-sm opacity-80">Disponible sur</div>
                    <div className="text-xl font-semibold">Google Play</div>
                  </div>
                </div>
              </a>
            </div>
            
            <div className="animate-fade-in" style={{animationDelay: '0.5s'}}>
              <p className="text-sm opacity-75 mb-8">
                Disponible prochainement sur iOS et Android
              </p>
              
              {/* Social proof or additional info */}
              <div className="flex items-center justify-center space-x-8 text-center">
                <div className="space-y-1">
                  <div className="text-2xl font-bold">10K+</div>
                  <div className="text-xs opacity-70">En liste d&apos;attente</div>
                </div>
                <div className="w-px h-8 bg-white/30"></div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold">4.9★</div>
                  <div className="text-xs opacity-70">Avis utilisateurs</div>
                </div>
                <div className="w-px h-8 bg-white/30"></div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-xs opacity-70">Satisfaction</div>
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
  const pageData = appService.getHomePageData();
  
  return {
    props: {
      pageData,
    },
  };
};