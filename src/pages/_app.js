import '@/styles/globals.css'
import '../styles/slick.css'
import Head from 'next/head'
export default function App({ Component, pageProps }) {
  return (
    <main className=''>
    <Head>
      <title>Studrill</title>
    </Head>
       <Component {...pageProps} />
    </main>
  )
}
