import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Head from 'next/head'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"
import { appWithTranslation } from 'next-i18next'


function App({ Component, pageProps }: AppProps) {
  return (
    <>
    <SpeedInsights />
    <Analytics />
      <Head>
        <link href="/css/styles.css" rel="stylesheet" />
      </Head>
      <div className="font-sans text-gray-text bg-cream-light min-h-screen">
        <Component {...pageProps} />
      </div>
    </>
  )
}

export default appWithTranslation(App)