import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Head from 'next/head'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import { appWithTranslation } from 'next-i18next'
import { useBrowserLanguageDetection } from '../lib/useBrowserLanguageDetection'
import { ThemeProvider } from '../components/ThemeProvider'


function App({ Component, pageProps }: AppProps) {
  // Detect and redirect to browser language
  useBrowserLanguageDetection();

  return (
    <>
    <SpeedInsights />
    <Analytics />
      <Head>
        <link href="/css/styles.css" rel="stylesheet" />
      </Head>
      <ThemeProvider>
        <div className="font-sans text-gray-text bg-cream-light dark:text-dark-text dark:bg-dark-primary min-h-screen transition-colors duration-300">
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  )
}

export default appWithTranslation(App)