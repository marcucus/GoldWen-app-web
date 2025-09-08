import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState, useRef } from 'react';
import { useTranslation } from 'next-i18next';
import { AppData } from '../lib/app-service';
import LanguageSelector from './LanguageSelector';
import ThemeToggle from './ThemeToggle';

interface LayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  keywords?: string;
  app: AppData;
}

export default function Layout({ children, title, description, keywords, app }: LayoutProps) {
  const router = useRouter();
  const { t } = useTranslation('common');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const initNavbarScroll = () => {
      const navbar = document.querySelector('nav');
      let lastScrollY = window.scrollY;

      const updateNavbar = () => {
        const scrollY = window.scrollY;
        
        if (navbar) {
          if (scrollY > 100) {
            navbar.classList.add('shadow-3xl', 'bg-white/95');
            navbar.classList.remove('border-b');
            navbar.style.backdropFilter = 'blur(20px) saturate(180%)';
          } else {
            navbar.classList.remove('shadow-3xl', 'bg-white/95');
            navbar.classList.add('border-b');
            navbar.style.backdropFilter = 'blur(10px) saturate(150%)';
          }
        }
        
        lastScrollY = scrollY;
      };

      window.addEventListener('scroll', updateNavbar);
      return () => window.removeEventListener('scroll', updateNavbar);
    };

    const initScrollAnimations = () => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, observerOptions);

      // Observe all animation elements
      document.querySelectorAll('.animate-fade-in, .animate-fade-in-up, .animate-fade-in-down, .animate-slide-left, .animate-slide-right, .animate-scale-in').forEach((el) => {
        observer.observe(el);
      });

      return () => observer.disconnect();
    };

    const cleanupNavbar = initNavbarScroll();
    const cleanupAnimations = initScrollAnimations();

    return () => {
      cleanupNavbar();
      cleanupAnimations();
    };
  }, []);

  // Mobile menu click-outside functionality
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        
        {/* SEO Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="author" content={`${app.name} Team`} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`https://goldwen.app${router.asPath}`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://goldwen.app${router.asPath}`} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://goldwen.app/images/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content={app.name} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://goldwen.app${router.asPath}`} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="https://goldwen.app/images/og-image.png" />
        
        {/* Favicons */}
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#D4AF37" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": app.name,
              "description": description,
              "url": "https://goldwen.app",
              "applicationCategory": "Dating",
              "operatingSystem": "iOS, Android",
              "author": {
                "@type": "Organization",
                "name": `${app.name} Team`
              }
            })
          }}
        />
      </Head>

      {/* Navigation - Enhanced with premium styling */}
        <nav className="fixed top-0 w-full z-50 glass-effect border-b border-gold-primary/10 dark:border-dark-tertiary transition-all duration-500 backdrop-blur-xl bg-white/95 dark:bg-dark-secondary/95">
          <div className="container-responsive">
            <div className="flex items-center justify-between h-20">
              {/* Logo - Enhanced with actual logo images and theme support */}
              <div className="flex items-center space-x-4">
                <Link href="/" className="flex items-center space-x-4 group">
                  <div className="relative navbar-logo-icon-animated">
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-gold transition-all duration-500 group-hover:shadow-gold-lg">
                      <img 
                        src="/images/logo_light.png" 
                        alt="GoldWen Logo" 
                        className="w-12 h-12 object-contain dark:hidden"
                      />
                      <img 
                        src="/images/logo_dark.png" 
                        alt="GoldWen Logo" 
                        className="w-12 h-12 object-contain hidden dark:block"
                      />
                    </div>
                  </div>
                  <span className="font-serif font-bold text-2xl navbar-logo-animated transition-all duration-500">
                    {app.name}
                  </span>
                </Link>
              </div>
              
              {/* Desktop menu - Enhanced with premium navigation */}
              <div className="hidden xl:flex items-center space-x-8">
                <Link 
                  href="/" 
                  className="navbar-link text-gray-text dark:text-dark-text hover:text-gold-primary font-medium text-lg"
                >
                  {t('nav.home')}
                </Link>
                <Link 
                  href="/support" 
                  className="navbar-link text-gray-text dark:text-dark-text hover:text-gold-primary font-medium text-lg"
                >
                  {t('nav.support')}
                </Link>
                <Link 
                  href="/contact" 
                  className="navbar-link text-gray-text dark:text-dark-text hover:text-gold-primary font-medium text-lg"
                >
                  {t('nav.contact')}
                </Link>
                
                {/* Language Selector */}
                <LanguageSelector />
                
                {/* Theme Toggle */}
                <ThemeToggle />
                
                <a 
                  href="/#download" 
                  className="btn-primary text-base px-8 py-3 hover-lift group"
                >
                  <svg className="w-5 h-5 mr-2 inline group-hover:animate-bounce-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                  {t('nav.download')}
                </a>
              </div>
              
              {/* Mobile menu button */}
              <button 
                onClick={toggleMobileMenu}
                className="xl:hidden p-3 text-gray-text dark:text-dark-text hover:text-gold-primary transition-colors rounded-lg focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
            </div>

            {/* Mobile Menu - Enhanced Premium Design */}
            {isMobileMenuOpen && (
              <div 
                ref={mobileMenuRef}
                className="xl:hidden fixed inset-0 z-50 bg-gradient-to-br from-cream-light via-white to-cream-light dark:from-dark-secondary dark:via-dark-primary dark:to-dark-secondary"
              >
                {/* Decorative Background Elements */}
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                  <div className="absolute top-20 right-10 w-32 h-32 bg-gold-primary/5 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-40 left-8 w-24 h-24 bg-gold-accent/10 rounded-full blur-2xl"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-gold-primary/3 to-gold-accent/3 rounded-full blur-3xl"></div>
                </div>

                {/* Mobile Menu Header */}
                <div className="relative z-10 flex items-center justify-between h-20 px-6 bg-white/95 dark:bg-dark-secondary/95 backdrop-blur-xl border-b border-gold-primary/10 dark:border-dark-tertiary shadow-lg">
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center bg-gradient-to-br from-gold-primary to-gold-accent shadow-gold">
                        <img 
                          src="/images/logo_light.png" 
                          alt="GoldWen Logo" 
                          className="w-10 h-10 object-contain dark:hidden"
                        />
                        <img 
                          src="/images/logo_dark.png" 
                          alt="GoldWen Logo" 
                          className="w-10 h-10 object-contain hidden dark:block"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-gold-primary to-gold-accent rounded-2xl opacity-20 blur-lg"></div>
                    </div>
                    <span className="font-serif font-bold text-2xl bg-gradient-to-r from-gray-text to-gold-primary bg-clip-text text-transparent dark:from-dark-text dark:to-gold-accent">
                      {app.name}
                    </span>
                  </div>
                  <button 
                    onClick={toggleMobileMenu}
                    className="p-3 text-gray-text dark:text-dark-text hover:text-gold-primary hover:bg-gold-primary/10 transition-all duration-300 rounded-xl"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>

                {/* Mobile Menu Content */}
                <div className="relative z-10 p-6 space-y-8 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 80px)' }}>
                  
                  {/* Navigation Links Card */}
                  <div className="bg-white/80 dark:bg-dark-secondary/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-gold-primary/10 dark:border-dark-tertiary">
                    <h3 className="font-serif font-semibold text-lg text-gold-primary dark:text-gold-accent mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                      </svg>
                      Navigation
                    </h3>
                    <div className="space-y-2">
                      <Link 
                        href="/" 
                        className="group flex items-center px-4 py-4 text-lg font-medium text-gray-text dark:text-dark-text hover:text-gold-primary hover:bg-gradient-to-r hover:from-gold-primary/5 hover:to-gold-accent/5 rounded-xl transition-all duration-300 transform hover:scale-[1.02]"
                        onClick={toggleMobileMenu}
                      >
                        <svg className="w-5 h-5 mr-3 text-gold-primary/60 group-hover:text-gold-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                        </svg>
                        {t('nav.home')}
                      </Link>
                      <Link 
                        href="/support" 
                        className="group flex items-center px-4 py-4 text-lg font-medium text-gray-text dark:text-dark-text hover:text-gold-primary hover:bg-gradient-to-r hover:from-gold-primary/5 hover:to-gold-accent/5 rounded-xl transition-all duration-300 transform hover:scale-[1.02]"
                        onClick={toggleMobileMenu}
                      >
                        <svg className="w-5 h-5 mr-3 text-gold-primary/60 group-hover:text-gold-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                        </svg>
                        {t('nav.support')}
                      </Link>
                      <Link 
                        href="/contact" 
                        className="group flex items-center px-4 py-4 text-lg font-medium text-gray-text dark:text-dark-text hover:text-gold-primary hover:bg-gradient-to-r hover:from-gold-primary/5 hover:to-gold-accent/5 rounded-xl transition-all duration-300 transform hover:scale-[1.02]"
                        onClick={toggleMobileMenu}
                      >
                        <svg className="w-5 h-5 mr-3 text-gold-primary/60 group-hover:text-gold-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                        </svg>
                        {t('nav.contact')}
                      </Link>
                    </div>
                  </div>

                  {/* Settings Card */}
                  <div className="bg-white/80 dark:bg-dark-secondary/80 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-gold-primary/10 dark:border-dark-tertiary">
                    <h3 className="font-serif font-semibold text-lg text-gold-primary dark:text-gold-accent mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      {t('nav.settings')}
                    </h3>
                    
                    {/* Language Selector */}
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-600 dark:text-dark-text-secondary mb-2">
                        Language / Langue
                      </label>
                      <div className="flex justify-center">
                        <LanguageSelector />
                      </div>
                    </div>

                    {/* Theme Toggle */}
                    <div>
                      <label className="block text-sm font-medium text-gray-600 dark:text-dark-text-secondary mb-2">
                        Theme / Thème
                      </label>
                      <div className="flex justify-center">
                        <ThemeToggle />
                      </div>
                    </div>
                  </div>

                  {/* Download Section */}
                  <div className="bg-gradient-to-br from-gold-primary/10 via-gold-accent/5 to-gold-light/10 dark:from-gold-primary/20 dark:via-gold-accent/10 dark:to-gold-light/20 backdrop-blur-lg rounded-2xl p-6 shadow-xl border border-gold-primary/20 dark:border-gold-accent/30">
                    <div className="text-center mb-4">
                      <h3 className="font-serif font-bold text-xl text-gold-primary dark:text-gold-accent mb-2">
                        Téléchargez l&apos;App
                      </h3>
                      <p className="text-gray-600 dark:text-dark-text-secondary text-sm">
                        Commencez votre voyage vers des connexions authentiques
                      </p>
                    </div>
                    
                    <a 
                      href="/#download" 
                      className="group block w-full text-center btn-primary text-lg py-4 rounded-xl transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                      onClick={toggleMobileMenu}
                    >
                      <svg className="w-5 h-5 mr-2 inline group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                      </svg>
                      {t('nav.download')}
                      <svg className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                      </svg>
                    </a>

                    {/* App Store badges */}
                    <div className="flex flex-col space-y-3 mt-4">
                      <div className="text-center text-xs text-gray-500 dark:text-dark-text-secondary">
                        Bientôt disponible sur
                      </div>
                      <div className="flex justify-center space-x-4">
                        <div className="bg-black/80 rounded-lg px-3 py-2 flex items-center space-x-2">
                          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                          </svg>
                          <span className="text-white text-xs font-medium">App Store</span>
                        </div>
                        <div className="bg-black/80 rounded-lg px-3 py-2 flex items-center space-x-2">
                          <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M1.04 5.51C.46 6.09.25 6.93.25 7.78v8.44c0 .85.21 1.69.79 2.27L8.5 12 1.04 5.51zm6.5 6.5l6.77-6.77c-.85-.85-2.01-1.34-3.26-1.34h-.05c-1.25 0-2.41.49-3.26 1.34L7.54 12zm9.77 7.46c.85-.85 1.34-2.01 1.34-3.26v-.1c0-1.25-.49-2.41-1.34-3.26L10.54 5.98 7.54 12l3 6.02 6.77-6.77zm-3-6.77L8.5 5.98 1.73 12.75c.85.85 2.01 1.34 3.26 1.34h.05c1.25 0 2.41-.49 3.26-1.34L14.31 12.7z"/>
                          </svg>
                          <span className="text-white text-xs font-medium">Google Play</span>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            )}
          </div>
        </nav>

        {/* Main Content */}
        <main className="pt-20">
          {children}
        </main>

        {/* Footer - Enhanced with premium styling and Art Deco elements */}
        <footer className="relative bg-gradient-to-br from-gray-text via-dark-secondary to-dark-primary text-white overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-10 left-10 w-32 h-32 border border-gold-primary/20 rounded-full animate-pulse-slow"></div>
            <div className="absolute top-20 right-20 w-16 h-16 bg-gold-primary/10 rounded-full animate-float"></div>
            <div className="absolute bottom-10 left-1/3 w-24 h-24 border-2 border-gold-primary/10 rounded-full animate-rotate-slow"></div>
            <div className="absolute bottom-20 right-10 w-8 h-8 bg-gold-primary/20 rounded-full animate-bounce-subtle"></div>
          </div>

          <div className="relative z-10 section-padding-sm">
            <div className="container-responsive">
              <div className="grid md:grid-cols-4 gap-12 mb-16">
                {/* Brand section - Enhanced */}
                <div className="col-span-2 space-y-6">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-gold animate-glow">
                        <img 
                          src="/images/logo_light.png" 
                          alt="GoldWen Logo" 
                          className="w-16 h-16 object-contain"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-gold-primary to-gold-dark rounded-2xl opacity-30 blur-lg"></div>
                    </div>
                    <div>
                      <span className="font-serif font-bold text-3xl text-shadow">{app.name}</span>
                      <div className="w-20 h-1 bg-gradient-to-r from-gold-primary to-gold-light rounded-full mt-2"></div>
                    </div>
                  </div>
                  
                  <p className="text-gold-accent text-lg font-medium italic text-shadow">
                    {app.slogan}
                  </p>
                  
                  <p className="text-gray-300 text-lg leading-relaxed max-w-md">
                    {t('footer.description')}
                  </p>

                  {/* Social proof */}
                  <div className="flex items-center space-x-8 pt-4">
                    <div className="text-center">
                      <div className="text-gold-primary font-bold text-2xl">10K+</div>
                      <div className="text-gray-400 text-sm">Utilisateurs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-gold-primary font-bold text-2xl">4.9★</div>
                      <div className="text-gray-400 text-sm">Note App Store</div>
                    </div>
                    <div className="text-center">
                      <div className="text-gold-primary font-bold text-2xl">95%</div>
                      <div className="text-gray-400 text-sm">Satisfaction</div>
                    </div>
                  </div>
                </div>

                {/* Navigation links */}
                <div className="space-y-6">
                  <h4 className="font-serif font-semibold text-xl text-gold-accent mb-6 relative">
                    Application
                    <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gold-primary rounded-full"></div>
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/" className="text-gray-300 hover:text-gold-primary transition-all duration-300 text-lg hover:translate-x-2 inline-block">
                        {t('nav.home')}
                      </Link>
                    </li>
                    <li>
                      <a href="/#features" className="text-gray-300 hover:text-gold-primary transition-all duration-300 text-lg hover:translate-x-2 inline-block">
                        {t('nav.features')}
                      </a>
                    </li>
                    <li>
                      <a href="/#about" className="text-gray-300 hover:text-gold-primary transition-all duration-300 text-lg hover:translate-x-2 inline-block">
                        {t('nav.about')}
                      </a>
                    </li>
                    <li>
                      <Link href="/support" className="text-gray-300 hover:text-gold-primary transition-all duration-300 text-lg hover:translate-x-2 inline-block">
                        {t('nav.support')}
                      </Link>
                    </li>
                  </ul>
                </div>

                {/* Legal links */}
                <div className="space-y-6">
                  <h4 className="font-serif font-semibold text-xl text-gold-accent mb-6 relative">
                    Légal
                    <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gold-primary rounded-full"></div>
                  </h4>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/confidentialite" className="text-gray-300 hover:text-gold-primary transition-all duration-300 text-lg hover:translate-x-2 inline-block">
                        {t('nav.privacy')}
                      </Link>
                    </li>
                    <li>
                      <Link href="/conditions" className="text-gray-300 hover:text-gold-primary transition-all duration-300 text-lg hover:translate-x-2 inline-block">
                        {t('nav.terms')}
                      </Link>
                    </li>
                    <li>
                      <Link href="/mentions-legales" className="text-gray-300 hover:text-gold-primary transition-all duration-300 text-lg hover:translate-x-2 inline-block">
                        {t('nav.legal')}
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="text-gray-300 hover:text-gold-primary transition-all duration-300 text-lg hover:translate-x-2 inline-block">
                        {t('nav.contact')}
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Footer bottom - Enhanced */}
              <div className="border-t border-gold-primary/20 pt-8">
                <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
                  <div className="flex items-center space-x-4">
                    <p className="text-gray-400 text-lg">
                      &copy; 2025 {app.name}. {t('footer.copyright')}
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-6">
                    <span className="text-gray-400 text-sm">{t('footer.made_with')}</span>
                    <div className="w-4 h-4 bg-gradient-to-br from-red-400 to-red-600 rounded-full animate-pulse-slow"></div>
                    <span className="text-gray-400 text-sm">{t('footer.in_paris')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
    </>
  );
}