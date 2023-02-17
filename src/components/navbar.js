import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Logo from '../assets/logo.png'

const inter = Inter({ subsets: ['latin'] })

export default function Navbar() {
  return (
     <>
        <div>
           <header className='bg-white'>
             <nav className='flex justify-between items-center w-[92%]  mx-auto'>
                 <div className='ml-100'>
                   <Image class='w-25 py-5 px-5' src={Logo}></Image>
                 </div>
                <div className='nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5 '>
                  <ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8'>
                    <li>
                      <a className='hover:text-grey-500' href='home.js'>Home</a>
                    </li>
                    <li>
                      <a className='hover:text-grey-500' href='#'>Testimonies</a>
                    </li>
                    <li>
                      <a className='hover:text-grey-500' href='#'>JP Course</a>
                    </li>
                    <li>
                      <a className='hover:text-grey-500' href='#'>Learning Path</a>
                    </li>
                    <li>
                      <a className='hover:text-grey-500' href='#'>Pricing</a>
                    </li>
                  </ul>
                </div>
                <div className='flex items-center gap-6'>
                  <button class='bg-[#EFCB27] text-[#1E2B5E] px-5 py-2 rounded-full hover:bg-[#87acec]'>Download App</button>
                </div>
             </nav>

           </header>
        </div>
     </>
  )
}
