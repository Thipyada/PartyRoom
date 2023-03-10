import '@/styles/globals.css'
import '@/styles/home.css'
import '@/styles/register.css'
import '@/styles/login.css'
import '@/styles/createParty.css'
import '@/styles/partyDetail.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
