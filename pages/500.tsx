import Link from 'next/link';
import Head from 'next/head';

export default function ServerError() {
  return (
    <>
      <Head>
        <title>500 — Erreur serveur | GoldWen</title>
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
            500
          </p>
          <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-20 h-20 text-gold-primary dark:text-gold-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
        </div>

        <h1 className="font-serif text-3xl font-bold text-gray-text dark:text-dark-text mb-4">
          Erreur serveur
        </h1>
        <p className="text-gray-warm dark:text-dark-text-secondary max-w-md mb-10 text-lg">
          Une erreur inattendue s&apos;est produite de notre côté. Notre équipe a été notifiée et travaille à résoudre le problème.
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
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-gold-primary/30 text-gold-primary dark:text-gold-accent font-semibold rounded-2xl hover:border-gold-primary hover:bg-gold-primary/5 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            Réessayer
          </button>
        </div>
      </div>
    </>
  );
}
