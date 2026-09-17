import type { AppProps } from 'next/app'
import '../styles/globals.css'
import CookieConsent from '../components/CookieConsent'
import { appWithTranslation } from 'next-i18next'
import { ThemeProvider } from '../components/ThemeProvider'


function App({ Component, pageProps }: AppProps) {


  return (
    <>

      <CookieConsent />
      <ThemeProvider>
        <div className="font-sans text-gray-text bg-cream-light dark:text-dark-text dark:bg-dark-primary min-h-screen transition-colors duration-300">
          <Component {...pageProps} />
        </div>
      </ThemeProvider>
    </>
  )
}

export default appWithTranslation(App)