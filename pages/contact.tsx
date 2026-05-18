import { GetStaticProps } from 'next';
import { useState } from 'react';
import Layout from '../components/Layout';
import { appService } from '../lib/app-service';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

interface ContactProps {
  seoData: {
    title: string;
    description: string;
    keywords?: string;
  };
}

export default function Contact({ seoData }: ContactProps) {
  const { t } = useTranslation('common');
  const { t: tContact } = useTranslation('contact');

  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      setStatus(res.ok ? 'success' : 'error');
      if (res.ok) setForm({ name: '', email: '', subject: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  // Get app data from translations
  const appData = {
    name: t('app.name'),
    slogan: t('app.slogan'),
    tagline: t('app.tagline'),
    description: t('app.description')
  };

  return (
    <Layout 
      title={seoData.title}
      description={seoData.description}
      keywords={seoData.keywords}
      app={appData}
    >
      {/* Hero Section - Enhanced with sophisticated design */}
      <section className="section-padding bg-gradient-hero geometric-bg relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold-primary opacity-10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gold-light opacity-8 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        
        <div className="container-responsive relative z-10">
          <div className="text-center max-w-4xl mx-auto space-calm-xl animate-fade-in-up">
            <div className="art-deco-border mb-8"></div>
            <h1 className="heading-primary text-shadow-gold mb-8">
              {tContact('title')}
            </h1>
            <p className="text-body-large max-w-2xl mx-auto leading-relaxed text-gray-warm">
              {tContact('subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section - Enhanced with premium card design */}
      <section className="section-padding bg-cream-lightest dark:bg-dark-secondary pattern-overlay">
        <div className="container-responsive">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="heading-secondary gold-accent-center text-shadow-lg mb-8">
                {tContact('help_section.title')}
              </h2>
              <p className="text-body-large text-gray-warm">
                {tContact('help_section.subtitle')}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Email Contact Card */}
              <div className="card-feature group animate-scale-in">
                <div className="icon-large mx-auto mb-8 group-hover:scale-110 group-hover:text-gold-accent transition-all duration-300">
                  <svg className="text-gold-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 4.26a2 2 0 001.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h3 className="heading-tertiary mb-6 text-shadow">{tContact('email_card.title')}</h3>
                <p className="text-body text-gray-warm mb-6">
                  {tContact('email_card.description')}
                </p>
                <a href="mailto:support@goldwen.app" className="text-gold-primary font-semibold text-lg hover:text-gold-dark transition-colors duration-300">
                  {tContact('email_card.email')}
                </a>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-gold-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
              </div>

              {/* Response Time Card */}
              <div className="card-feature group animate-scale-in" style={{animationDelay: '0.15s'}}>
                <div className="icon-large mx-auto mb-8 group-hover:scale-110 group-hover:text-gold-accent transition-all duration-300">
                  <svg className="text-gold-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="heading-tertiary mb-6 text-shadow">{tContact('response_time_card.title')}</h3>
                <p className="text-body text-gray-warm mb-6">
                  {tContact('response_time_card.description')}
                </p>
                <p className="text-gold-primary font-semibold text-lg">
                  {tContact('response_time_card.time')}
                </p>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-gold-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card animate-fade-in-up mb-8" style={{animationDelay: '0.3s'}}>
              <h3 className="heading-tertiary mb-8 text-shadow text-center">{tContact('form.title')}</h3>
              <form onSubmit={handleSubmit} noValidate className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-text dark:text-dark-text mb-2">
                      {tContact('form.name')}
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      placeholder={tContact('form.name_placeholder')}
                      className="w-full px-4 py-3 rounded-xl border border-gold-primary/20 bg-white dark:bg-dark-tertiary text-gray-text dark:text-dark-text placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-primary/40 focus:border-gold-primary transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-text dark:text-dark-text mb-2">
                      {tContact('form.email')}
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      placeholder={tContact('form.email_placeholder')}
                      className="w-full px-4 py-3 rounded-xl border border-gold-primary/20 bg-white dark:bg-dark-tertiary text-gray-text dark:text-dark-text placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-primary/40 focus:border-gold-primary transition-all duration-200"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-text dark:text-dark-text mb-2">
                    {tContact('form.subject')}
                  </label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={e => setForm(f => ({ ...f, subject: e.target.value }))}
                    placeholder={tContact('form.subject_placeholder')}
                    className="w-full px-4 py-3 rounded-xl border border-gold-primary/20 bg-white dark:bg-dark-tertiary text-gray-text dark:text-dark-text placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-primary/40 focus:border-gold-primary transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-text dark:text-dark-text mb-2">
                    {tContact('form.message')}
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    placeholder={tContact('form.message_placeholder')}
                    className="w-full px-4 py-3 rounded-xl border border-gold-primary/20 bg-white dark:bg-dark-tertiary text-gray-text dark:text-dark-text placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-primary/40 focus:border-gold-primary transition-all duration-200 resize-none"
                  />
                </div>

                {status === 'success' && (
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 text-green-700 dark:text-green-400">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    {tContact('form.success')}
                  </div>
                )}
                {status === 'error' && (
                  <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 text-red-700 dark:text-red-400">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {tContact('form.error')}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending' || status === 'success'}
                  className="w-full btn-primary py-4 text-lg font-semibold rounded-xl disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-300 hover:scale-[1.02]"
                >
                  {status === 'sending' ? tContact('form.sending') : tContact('form.submit')}
                </button>
              </form>
            </div>

            {/* Additional Contact Information */}
            <div className="card group animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <div className="text-center">
                <h3 className="heading-tertiary mb-8 text-shadow">{tContact('other_contact.title')}</h3>
                
                <div className="grid sm:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mx-auto shadow-gold group-hover:animate-glow">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-text mb-2">{tContact('other_contact.address.title')}</h4>
                      <p className="text-gray-warm">{tContact('other_contact.address.value')}</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-gradient-gold rounded-2xl flex items-center justify-center mx-auto shadow-gold group-hover:animate-glow">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-text mb-2">{tContact('other_contact.support.title')}</h4>
                      <p className="text-gray-warm">
                        <a href="/support" className="text-gold-primary hover:text-gold-dark transition-colors duration-300">
                          {tContact('other_contact.support.link_text')}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const seoData = appService.getContactPageSEO(locale);
  
  return {
    props: {
      seoData,
      ...(await serverSideTranslations(locale!, ['common', 'contact'])),
    },
  };
};