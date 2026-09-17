import type { GetStaticProps } from 'next';
import LegalPage from '../components/LegalPage';
import { appService } from '../lib/app-service';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { ComponentProps } from 'react';
export default function Page(props: Omit<ComponentProps<typeof LegalPage>, 'kind'>) { return <LegalPage {...props} kind="mentions-legales" />; }
export const getStaticProps: GetStaticProps = async ({ locale }) => ({ props: {
  seoData: appService.getLegalPageSEO(locale), publisher: { 'Nom': process.env.LEGAL_PUBLISHER_NAME || 'Adrien Marques', 'Adresse': process.env.LEGAL_PUBLISHER_ADDRESS || '', 'Contact': process.env.LEGAL_CONTACT_EMAIL || 'marquesadrien.site@gmail.com', 'Téléphone': process.env.LEGAL_CONTACT_PHONE || '' },
  ...(await serverSideTranslations(locale || 'fr', ['common'])),
} });
