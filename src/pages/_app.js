import '@/styles/globals.css'
import '../styles/slick.css'

export default function App({ Component, pageProps }) {
  return (
    <main className=''>
       <Component {...pageProps} />
    </main>
  )
}
