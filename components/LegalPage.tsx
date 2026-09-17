import Layout from './Layout';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { legalSections } from '../lib/legal-content';
import type { PageData } from '../lib/app-service';
export default function LegalPage({ kind, seoData, publisher }: { kind: string; seoData: Omit<PageData, 'app'>; publisher?: Record<string, string> }) {
  const { t } = useTranslation('common');
  const { locale } = useRouter();
  const title = kind === 'mentions-legales' ? t('nav.legal') : kind === 'conditions' ? t('nav.terms') : kind === 'confidentialite' ? t('nav.privacy') : t('data_contact');
  return <Layout {...seoData} app={{ name: 'GoldWen', slogan: t('app.slogan'), tagline: t('app.tagline') }}>
    <article className="legal-prose mx-auto px-6 py-16 max-w-3xl">
      <h1 className="font-serif text-4xl mb-6">{title}</h1>
      <p className="mb-8">{t('legal_scope')}</p>
      {locale !== 'fr' && <p className="mb-8 font-semibold">{t('legal_reference')}</p>}
      <div lang="fr">
        <p className="mb-8">Version du 17 septembre 2026.</p>
        {kind === 'mentions-legales' && <>
          <h2>Éditeur et directeur de publication</h2>
          <p>Projet porté par une personne physique, sans société constituée. Aucun capital social ni numéro d’immatriculation de société n’est applicable à ce stade.</p>
          <dl>{Object.entries(publisher || {}).map(([label, value]) => <div key={label} className="mb-3"><dt className="font-semibold">{label}</dt><dd>{value || 'Non renseigné : publication juridique à finaliser avant lancement.'}</dd></div>)}</dl>
          <p>Responsable des données personnelles : Adrien Marques. Contact : <a className="underline" href="mailto:goldwen.supp.app@gmail.com">goldwen.supp.app@gmail.com</a>. Aucun DPO distinct désigné.</p><h2>Hébergement du site</h2><p>Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis.</p>
          <p><a href="https://vercel.com/help" className="underline">Support Vercel</a> · <a href="https://vercel.com/legal/dpa" className="underline">Accord de traitement des données</a></p>
          <h2>Contenus et signalements</h2><p>Pour signaler une erreur ou un contenu illicite, contactez l’éditeur en précisant l’URL et le motif. Les droits applicables protègent le nom, les textes, les logos et les visuels. Ce site ne réalise aucune vente.</p>
        </>}
        {(legalSections[kind] || []).map(([heading, body]) => <section key={heading}><h2>{heading}</h2><p>{body}</p></section>)}
      </div>
      <div className="flex flex-wrap gap-6 mt-12"><Link href="/contact" className="underline">{t('nav.contact')}</Link><Link href="/donnees-personnelles" className="underline">{t('data_contact')}</Link><a href="https://www.cnil.fr/fr/adresser-une-plainte" className="underline">CNIL</a></div>
    </article>
  </Layout>;
}
