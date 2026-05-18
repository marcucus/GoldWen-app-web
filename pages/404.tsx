import Link from 'next/link';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { GetStaticProps } from 'next';

export default function NotFound() {
  const { t } = useTranslation('common');

  return (
    <>
      <Head>
        <title>404 — Page introuvable | GoldWen</title>
        <meta name="robots" content="noindex" />
      </Head>

      <div className="min-h-screen bg-cream-light dark:bg-dark-primary flex flex-col items-center justify-center px-6 text-center">
        {/* Logo */}
        <Link href="/" className="mb-12 block">
          <img src="/images/logo.png" alt="GoldWen" className="h-12 mx-auto" />
        </Link>

        {/* Error code */}
        <div className="relative mb-8">
          <p className="text-[10rem] font-serif font-bold leading-none text-gold-primary/10 dark:text-gold-accent/10 select-none">
            404
          </p>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-20 h-20 text-gold-primary dark:text-gold-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        </div>

        <h1 className="font-serif text-3xl font-bold text-gray-text dark:text-dark-text mb-4">
          Page introuvable
        </h1>
        <p className="text-gray-warm dark:text-dark-text-secondary max-w-md mb-10 text-lg">
          La page que vous cherchez n&apos;existe pas ou a été déplacée. Revenez à l&apos;accueil pour continuer votre aventure.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-gold text-white font-semibold rounded-2xl shadow-gold hover:shadow-gold-lg transition-all duration-300 hover:scale-105"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/support"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gold-primary/30 text-gold-primary dark:text-gold-accent font-semibold rounded-2xl hover:border-gold-primary hover:bg-gold-primary/5 transition-all duration-300"
          >
            {t('nav.support')}
          </Link>
        </div>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale!, ['common'])),
  },
});
