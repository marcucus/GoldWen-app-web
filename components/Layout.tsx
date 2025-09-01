import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';
import { AppData } from '../lib/app-service';

interface LayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  keywords?: string;
  app: AppData;
}

export default function Layout({ children, title, description, keywords, app }: LayoutProps) {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const initNavbarScroll = () => {
      const navbar = document.querySelector('nav');
      let lastScrollY = window.scrollY;

      const updateNavbar = () => {
        const scrollY = window.scrollY;
        
        if (navbar) {
          if (scrollY > 50) {
            navbar.classList.add('shadow-lg');
            navbar.classList.remove('border-b');
          } else {
            navbar.classList.remove('shadow-lg');
            navbar.classList.add('border-b');
          }
        }
        
        lastScrollY = scrollY;
      };

      window.addEventListener('scroll', updateNavbar);
      return () => window.removeEventListener('scroll', updateNavbar);
    };

    initNavbarScroll();
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
        <meta property="og:image" content="https://goldwen.app/static/images/goldwen-og.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://goldwen.app" />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content="https://goldwen.app/static/images/goldwen-og.png" />
        
        {/* Favicon */}
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
        
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

      <body className="font-sans text-gray-text bg-cream-light">
        {/* Navigation */}
        <nav className="fixed top-0 w-full z-50 glass-effect border-b border-cream-dark transition-all duration-300">
          <div className="container-responsive">
            <div className="flex items-center justify-between h-16">
              {/* Logo */}
              <div className="flex items-center space-x-3">
                <Link href="/" className="flex items-center space-x-3 group">
                  <div className="w-10 h-10 bg-gradient-to-br from-gold-primary to-gold-dark rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105">
                    <span className="text-white font-bold text-sm">G</span>
                  </div>
                  <span className="font-serif font-bold text-xl text-gray-text hover:text-gold-primary transition-colors duration-300">
                    {app.name}
                  </span>
                </Link>
              </div>
              
              {/* Desktop menu */}
              <div className="hidden md:flex items-center space-x-8">
                <Link 
                  href="/" 
                  className="text-gray-text hover:text-gold-primary transition-all duration-300 font-medium relative group"
                >
                  Accueil
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link 
                  href="/support" 
                  className="text-gray-text hover:text-gold-primary transition-all duration-300 font-medium relative group"
                >
                  Support
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link 
                  href="/contact" 
                  className="text-gray-text hover:text-gold-primary transition-all duration-300 font-medium relative group"
                >
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <a 
                  href="/#download" 
                  className="btn-primary text-sm px-6 py-2.5 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  Télécharger
                </a>
              </div>
              
              {/* Mobile menu button */}
              <button 
                onClick={toggleMobileMenu}
                className="md:hidden text-gray-text hover:text-gold-primary transition-colors duration-300 p-2 rounded-lg hover:bg-cream-dark focus:outline-none focus:ring-2 focus:ring-gold-primary focus:ring-opacity-50"
              >
                {!isMobileMenuOpen ? (
                  <svg className="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                ) : (
                  <svg className="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                  </svg>
                )}
              </button>
            </div>
            
            {/* Mobile menu */}
            <div 
              className={`md:hidden transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? 'opacity-100 max-h-96' : 'opacity-0 max-h-0'
              } overflow-hidden`}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-sm rounded-lg mt-2 border border-cream-dark shadow-lg">
                <Link 
                  href="/" 
                  className="block px-4 py-3 text-gray-text hover:text-gold-primary hover:bg-cream-light transition-all duration-300 rounded-md font-medium"
                >
                  Accueil
                </Link>
                <Link 
                  href="/support" 
                  className="block px-4 py-3 text-gray-text hover:text-gold-primary hover:bg-cream-light transition-all duration-300 rounded-md font-medium"
                >
                  Support
                </Link>
                <Link 
                  href="/contact" 
                  className="block px-4 py-3 text-gray-text hover:text-gold-primary hover:bg-cream-light transition-all duration-300 rounded-md font-medium"
                >
                  Contact
                </Link>
                <a 
                  href="/#download" 
                  className="block mx-4 my-2 text-center btn-primary text-sm py-3 rounded-md shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
                >
                  Télécharger
                </a>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="pt-16">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-text text-white py-12">
          <div className="container-responsive">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="col-span-2">
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gold-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">G</span>
                  </div>
                  <span className="font-serif font-bold text-xl">{app.name}</span>
                </div>
                <p className="text-gray-300 mb-4">{app.slogan}</p>
                <p className="text-gray-400 text-sm">
                  L&apos;application de rencontre qui privilégie la qualité des connexions 
                  pour des relations authentiques et durables.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Application</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/" className="hover:text-gold-primary transition-colors">Accueil</Link></li>
                  <li><a href="/#features" className="hover:text-gold-primary transition-colors">Fonctionnalités</a></li>
                  <li><a href="/#about" className="hover:text-gold-primary transition-colors">À propos</a></li>
                  <li><Link href="/support" className="hover:text-gold-primary transition-colors">Support</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Légal</h4>
                <ul className="space-y-2 text-gray-300">
                  <li><Link href="/confidentialite" className="hover:text-gold-primary transition-colors">Confidentialité</Link></li>
                  <li><Link href="/conditions" className="hover:text-gold-primary transition-colors">Conditions d&apos;utilisation</Link></li>
                  <li><Link href="/mentions-legales" className="hover:text-gold-primary transition-colors">Mentions légales</Link></li>
                  <li><Link href="/contact" className="hover:text-gold-primary transition-colors">Contact</Link></li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-600 mt-8 pt-8 text-center text-gray-400 text-sm">
              <p>&copy; 2025 {app.name}. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </body>
    </>
  );
}