import type { AppProps } from 'next/app'
import '../styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link href="/css/styles.css" rel="stylesheet" />
      </Head>
      <div className="font-sans text-gray-text bg-cream-light min-h-screen">
        <Component {...pageProps} />
      </div>
    </>
  )
}