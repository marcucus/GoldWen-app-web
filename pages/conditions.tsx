import { GetStaticProps } from 'next';
import Layout from '../components/Layout';
import { appService, PageData } from '../lib/app-service';

interface TermsProps {
  pageData: PageData;
}

export default function Terms({ pageData }: TermsProps) {
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
              Conditions d&apos;Utilisation
            </h1>
            <p className="text-xl text-gray-medium leading-relaxed mb-8">
              Les conditions d&apos;utilisation de GoldWen.
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="card">
              <h2 className="font-serif font-bold text-2xl text-gray-text mb-6">
                Conditions générales
              </h2>
              <p className="text-gray-medium leading-relaxed mb-6">
                Les conditions d&apos;utilisation détaillées seront disponibles 
                avec le lancement de l&apos;application GoldWen.
              </p>
              <p className="text-gray-medium leading-relaxed">
                En attendant, vous pouvez nous contacter pour toute question.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const pageData = appService.getTermsPageData();
  
  return {
    props: {
      pageData,
    },
  };
};