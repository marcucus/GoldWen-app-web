import type { GetStaticProps } from 'next';
import Link from 'next/link';
import Head from 'next/head';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
export default function ErrorPage() {
 const { t } = useTranslation('common');
 return <><Head><title>{t('errors.not_found')} | GoldWen</title><meta name="robots" content="noindex" /></Head>
 <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center gap-8">
 <Link href="/"><img src="/images/logo_light.png" alt="GoldWen" className="w-24 h-24 object-contain" /></Link>
 <p className="font-serif text-6xl">404</p><h1 className="font-serif text-3xl">{t('errors.not_found')}</h1>
 <p className="max-w-md">{t('errors.not_found_description')}</p><Link className="consent-button" href="/">{t('errors.home')}</Link>
 <Link href="/support" className="underline">{t("nav.support")}</Link>
 </div></>;
}
export const getStaticProps: GetStaticProps = async ({ locale }) => ({ props: { ...(await serverSideTranslations(locale || 'fr', ['common'])) } });
