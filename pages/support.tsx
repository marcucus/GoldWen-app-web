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
      {/* Header Section */}
      <section className="bg-gradient-to-br from-cream-light via-cream-default to-beige-light py-16">
        <div className="container-responsive">
          <div className="text-center max-w-4xl mx-auto space-calm-lg fade-in">
            <h1 className="font-serif font-bold text-4xl md:text-5xl text-gray-text mb-6 gold-accent">
              Centre d&apos;Aide et Support
            </h1>
            <p className="text-xl text-gray-medium leading-relaxed mb-8">
              Trouvez rapidement des réponses à vos questions sur GoldWen.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif font-bold text-3xl text-gray-text mb-12 text-center gold-accent">
              Questions Fréquentes
            </h2>
            
            <div className="space-y-8">
              <div className="card">
                <h3 className="font-serif font-semibold text-xl text-gray-text mb-4">
                  Comment fonctionne la sélection quotidienne ?
                </h3>
                <p className="text-gray-medium leading-relaxed">
                  Chaque jour à midi, notre algorithme vous propose 3 à 5 profils soigneusement 
                  sélectionnés en fonction de vos préférences et de votre compatibilité.
                </p>
              </div>

              <div className="card">
                <h3 className="font-serif font-semibold text-xl text-gray-text mb-4">
                  Pourquoi les conversations disparaissent-elles après 24h ?
                </h3>
                <p className="text-gray-medium leading-relaxed">
                  Cette fonctionnalité encourage des échanges spontanés et authentiques, 
                  évitant l&apos;accumulation de conversations non actives.
                </p>
              </div>

              <div className="card">
                <h3 className="font-serif font-semibold text-xl text-gray-text mb-4">
                  Comment contacter le support ?
                </h3>
                <p className="text-gray-medium leading-relaxed">
                  Vous pouvez nous contacter via notre page de contact ou directement 
                  par email à support@goldwen.app.
                </p>
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