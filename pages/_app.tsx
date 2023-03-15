import Layout from '../components/Layout'
import type { AppProps } from 'next/app';
import "../styles/App.module.css";
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp;