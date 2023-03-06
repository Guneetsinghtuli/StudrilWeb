import '@/styles/globals.css'
import { Poppins } from '@next/font/google'
import '../styles/slick.css'
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700']
});

export default function App({ Component, pageProps }) {
  return (
    <main className='poppins.className'>
       <Component {...pageProps} />
    </main>
  )
}
