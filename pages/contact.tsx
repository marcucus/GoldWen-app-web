import { GetStaticProps } from 'next';
import Layout from '../components/Layout';
import { appService, PageData } from '../lib/app-service';

interface ContactProps {
  pageData: PageData;
}

export default function Contact({ pageData }: ContactProps) {
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
              Contactez-nous
            </h1>
            <p className="text-xl text-gray-medium leading-relaxed mb-8">
              Une question ? Une suggestion ? N&apos;hésitez pas à nous contacter.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-responsive">
          <div className="max-w-2xl mx-auto">
            <div className="card">
              <h2 className="font-serif font-bold text-2xl text-gray-text mb-8 text-center">
                Nous sommes là pour vous aider
              </h2>
              
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="font-semibold text-gray-text mb-2">Email</h3>
                  <p className="text-gold-primary">support@goldwen.app</p>
                </div>
                
                <div className="text-center">
                  <h3 className="font-semibold text-gray-text mb-2">Réponse</h3>
                  <p className="text-gray-medium">Nous répondons généralement dans les 24h</p>
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
  const pageData = appService.getContactPageData();
  
  return {
    props: {
      pageData,
    },
  };
};