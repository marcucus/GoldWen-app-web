import type { GetStaticProps } from 'next';
import LegalPage from '../components/LegalPage';
import { appService } from '../lib/app-service';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import type { ComponentProps } from 'react';
export default function Page(props: Omit<ComponentProps<typeof LegalPage>, 'kind'>) { return <LegalPage {...props} kind="confidentialite" />; }
export const getStaticProps: GetStaticProps = async ({ locale }) => ({ props: {
  seoData: appService.getPrivacyPageSEO(locale),
  ...(await serverSideTranslations(locale || 'fr', ['common'])),
} });
