import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../components/navbar'
import Banner from '../components/bannerdesk'
import Testimonial from '../components/testimonial'
import Table from '../components/table'
import Benefits from '@/components/benefits'
import Price from '../components/price'
import Footer from '../components/footer'
import Slider from '../components/carousel'
 

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
     <>
        <Navbar/>
        {/* <Banner/> */}
        {/* <Testimonial/> */}
        {/* <Table/> */}
        {/* <Benefits/> */}
        {/* <Price/> */}
        {/* <Footer/> */}
        <Slider/>

     </>
  )
}
