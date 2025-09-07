import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';
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
        <link rel="canonical" href="https://goldwen.app" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://goldwen.app" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content="https://goldwen.app/images/og-image.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:site_name" content={app.name} />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://goldwen.app" />
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
              <div className="hidden md:flex items-center space-x-8">
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
              
              {/* Mobile menu button - Enhanced */}
              <button 
                onClick={toggleMobileMenu}
                className="md:hidden text-gray-text dark:text-dark-text hover:text-gold-primary transition-all duration-300 p-3 rounded-xl hover:bg-cream-light dark:hover:bg-dark-tertiary focus:outline-none focus:ring-2 focus:ring-gold-primary focus:ring-opacity-30 hover-lift"
              >
                {!isMobileMenuOpen ? (
                  <svg className="w-7 h-7 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                ) : (
                  <svg className="w-7 h-7 transition-transform duration-300 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                )}
              </button>
            </div>
            
            {/* Mobile menu - Enhanced with better animations and fixed positioning */}
            <div 
              className={`md:hidden transition-all duration-500 ease-out ${
                isMobileMenuOpen 
                  ? 'opacity-100 max-h-screen translate-y-0' 
                  : 'opacity-0 max-h-0 -translate-y-4'
              } overflow-hidden`}
            >
              <div className="px-2 pt-4 pb-6 space-y-3 bg-gradient-to-br from-white via-cream-light to-cream-default dark:from-dark-secondary dark:via-dark-tertiary dark:to-dark-quaternary backdrop-blur-xl rounded-2xl mt-4 border border-gold-primary/20 dark:border-dark-tertiary shadow-2xl">
                {/* Navigation Links - Centered */}
                <div className="space-y-1">
                  <Link 
                    href="/" 
                    className="block px-6 py-4 text-center text-gray-text dark:text-dark-text hover:text-gold-primary hover:bg-cream-light dark:hover:bg-dark-tertiary transition-all duration-300 rounded-xl font-medium text-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t('nav.home')}
                  </Link>
                  <Link 
                    href="/support" 
                    className="block px-6 py-4 text-center text-gray-text dark:text-dark-text hover:text-gold-primary hover:bg-cream-light dark:hover:bg-dark-tertiary transition-all duration-300 rounded-xl font-medium text-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t('nav.support')}
                  </Link>
                  <Link 
                    href="/contact" 
                    className="block px-6 py-4 text-center text-gray-text dark:text-dark-text hover:text-gold-primary hover:bg-cream-light dark:hover:bg-dark-tertiary transition-all duration-300 rounded-xl font-medium text-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {t('nav.contact')}
                  </Link>
                </div>
                
                {/* Settings Section - Language and Theme */}
                <div className="border-t border-gold-primary/20 dark:border-dark-tertiary pt-4 space-y-3">
                  <div className="text-center text-sm text-gray-medium dark:text-dark-text-secondary font-medium mb-3">
                    {t('nav.settings')}
                  </div>
                  
                  {/* Language Selector in Mobile Menu - Centered with better spacing */}
                  <div className="flex justify-center px-6 py-2">
                    <div className="w-full max-w-xs">
                      <LanguageSelector />
                    </div>
                  </div>
                  
                  {/* Theme Toggle in Mobile Menu - Centered with better spacing */}
                  <div className="flex justify-center px-6 py-2">
                    <div className="w-full max-w-xs">
                      <ThemeToggle />
                    </div>
                  </div>
                </div>
                
                {/* Download Button */}
                <div className="border-t border-gold-primary/20 dark:border-dark-tertiary pt-4 px-6">
                  <a 
                    href="/#download" 
                    className="block text-center btn-primary text-base py-4 rounded-xl hover-lift group"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <svg className="w-5 h-5 mr-2 inline group-hover:animate-bounce-subtle" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                    </svg>
                    {t('nav.download')}
                  </a>
                </div>
              </div>
            </div>
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