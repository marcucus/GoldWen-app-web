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
      {/* Hero Section */}
      <section className="section-padding bg-gradient-cream">
        <div className="container-responsive">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div className="space-calm-lg slide-in-left">
              <h1 className="font-serif font-bold text-gray-text mb-8 text-shadow">
                {pageData.app.name}<br />
                <span className="text-gold-primary gold-accent animate-pulse-slow">
                  {pageData.app.tagline}
                </span>
              </h1>
              <p className="text-xl text-gray-medium mb-8 leading-relaxed">
                {pageData.app.description}
              </p>
              <p className="text-lg font-medium text-gold-primary mb-10 italic text-shadow">
                &quot;{pageData.app.slogan}&quot;
              </p>
              <div className="flex flex-col sm:flex-row gap-6">
                <a href="#download" className="btn-primary hover-lift group">
                  <svg className="w-5 h-5 mr-2 inline group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                  Télécharger l&apos;application
                </a>
                <a href="#features" className="btn-secondary hover-lift">
                  Découvrir les fonctionnalités
                </a>
              </div>
            </div>
            <div className="relative slide-in-right">
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-all duration-500 hover-lift animate-float">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-gold rounded-full animate-pulse-slow"></div>
                    <div>
                      <div className="h-4 bg-gray-200 rounded w-24 mb-2"></div>
                      <div className="h-3 bg-gray-100 rounded w-16"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-3 bg-gray-100 rounded"></div>
                    <div className="h-3 bg-gray-100 rounded w-3/4"></div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-20 h-10 bg-gold-primary rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="section-padding bg-white">
        <div className="container-responsive">
          <div className="text-center mb-20 fade-in">
            <h2 className="font-serif font-bold text-gray-text mb-8 gold-accent text-shadow">
              Une approche révolutionnaire des rencontres
            </h2>
            <p className="text-xl text-gray-medium max-w-3xl mx-auto leading-relaxed">
              Fini le swipe incessant et l&apos;anxiété. {pageData.app.name} propose une expérience apaisante 
              et intentionnelle pour des connexions authentiques.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pageData.features.map((feature, index) => (
              <div 
                key={feature.title}
                className="card text-center space-calm fade-in hover-lift group" 
                style={{ animationDelay: `${index}00ms` }}
              >
                <div className="icon-large mx-auto mb-6 group-hover:animate-pulse">
                  <Icon name={feature.icon} />
                </div>
                <h3 className="font-serif font-semibold text-gray-text mb-4 text-shadow-lg">
                  {feature.title}
                </h3>
                <p className="text-gray-medium leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About/Philosophy Section */}
      <section id="about" className="section-padding gradient-cream">
        <div className="container-responsive">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-calm-lg slide-in-left">
              <h2 className="font-serif font-bold text-gray-text mb-8 gold-accent text-shadow">
                La philosophie &quot;Calm Technology&quot;
              </h2>
              <div className="space-calm">
                <p className="text-lg text-gray-medium">
                  {pageData.app.name} adopte les principes de la &quot;Calm Technology&quot; pour créer une expérience 
                  apaisante qui réduit l&apos;anxiété liée aux applications de rencontre traditionnelles.
                </p>
                <p className="text-lg text-gray-medium">
                  Notre interface minimaliste, nos espaces généreux et nos interactions prévisibles 
                  vous permettent de vous concentrer sur l&apos;essentiel : créer des connexions authentiques.
                </p>
                <p className="text-lg text-gray-medium">
                  Avec une seule notification par jour et des conversations limitées dans le temps, 
                  nous encourageons des échanges plus intentionnels et moins compulsifs.
                </p>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-serif font-semibold text-gray-text mb-3">Design Minimaliste</h4>
                <p className="text-gray-medium">Interfaces épurées sans éléments superflus pour une expérience sereine.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-serif font-semibold text-gray-text mb-3">Interactions Prévisibles</h4>
                <p className="text-gray-medium">Chaque action est claire et rassurante, vous savez toujours ce qui se passe.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <h4 className="font-serif font-semibold text-gray-text mb-3">Notifications Limitées</h4>
                <p className="text-gray-medium">Une seule notification par jour, pas de dépendance créée artificiellement.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Personas Section */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-gray-text mb-6 gold-accent">
              Pour qui {pageData.app.name} est-elle conçue ?
            </h2>
            <p className="text-xl text-gray-medium max-w-3xl mx-auto">
              Notre application s&apos;adresse aux personnes qui recherchent des connexions authentiques 
              et qui sont fatiguées des applications de rencontre traditionnelles.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {pageData.personas.map((persona) => (
              <div key={persona.name} className="card space-calm">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold-primary to-gold-dark rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-xl">
                      {persona.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-gray-text">{persona.name}</h3>
                    <p className="text-gold-primary font-medium">{persona.age} ans</p>
                  </div>
                </div>
                <p className="text-gray-medium">{persona.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Download/CTA Section */}
      <section id="download" className="section-padding bg-gradient-to-br from-gold-primary to-gold-dark text-white">
        <div className="container-responsive text-center">
          <div className="max-w-3xl mx-auto space-calm-lg">
            <h2 className="font-serif font-bold mb-6">
              Prêt(e) à vivre une expérience de rencontre différente ?
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Rejoignez {pageData.app.name} et découvrez comment la qualité peut transformer vos rencontres en ligne. 
              Téléchargez l&apos;application dès aujourd&apos;hui.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="#" className="btn bg-white text-gold-primary hover:bg-cream-light">
                <span className="flex items-center space-x-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <span>App Store</span>
                </span>
              </a>
              <a href="#" className="btn bg-white text-gold-primary hover:bg-cream-light">
                <span className="flex items-center space-x-2">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <span>Google Play</span>
                </span>
              </a>
            </div>
            <p className="text-sm opacity-75 mt-8">
              Disponible prochainement sur iOS et Android
            </p>
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