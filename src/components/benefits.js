import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import ImageA from '../assets/benefit1.png'
import ImageB from '../assets/benefit2.png'
import ImageC from '../assets/benefit3.png'


const inter = Inter({ subsets: ['latin'] })

export default function Benefits() {
    return (
      < >
      <section className='mt-48'>
      <div className='text-center'>
        <h1 className='text-center font-bold mb-4 text-[#1E2B5E] font-serif text-3xl pt-4'>JP Course Benefits</h1>
        <p className='text-center text-lg font-bold mb-4 text-[#1E2B5E] font-serif '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
      </div>
       <div className="bg-white-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <Image
              src={ImageA}
              alt="Example image"
              width={500}
              height={500}
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-2 text-[#1E2B5E]">Immerse yourself in the practical Japanese conversations</h2>
            <div className='p-4'>
            <p className="text-gray-700 mb-4">
            1. Detailed topics that you face very often in everyday life:<br/>
     I. “Ugh, my close friend is badmouthing me!”<br/>
     Ii. “I got a surprise proposal from my fiance!”<br/>
     Iii. “My health is worsen”
            </p>
            <p className="text-gray-700 mb-4">
              2. Personalized-to-topics vocabulary and kanji helps you to express clearly and concisely.
            </p>
            </div>
            <button class='bg-[#EFCB27] text-[#1E2B5E] px-5 py-2 rounded-full hover:bg-[#87acec]'>Learn Now</button>
          </div>
        </div>
      </div>
    </div>
     
    <div className="bg-white-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-2 text-[#1E2B5E]">Improve your Japanese thinking process and express confidently</h2>
            <div className='p-4'>
            <p className="text-gray-700 mb-4">
            1. Detailed topics that you face very often in everyday life:<br/>
     I. “Ugh, my close friend is badmouthing me!”<br/>
     Ii. “I got a surprise proposal from my fiance!”<br/>
     Iii. “My health is worsen”
            </p>
            <p className="text-gray-700 mb-4">
              2. Personalized-to-topics vocabulary and kanji helps you to express clearly and concisely.
            </p>
            </div>
            <button class='bg-[#EFCB27] text-[#1E2B5E] px-5 py-2 rounded-full hover:bg-[#87acec]'>Learn Now</button>

          </div>
          <div className="md:w-1/2 md:pr-8">
            <Image
              src={ImageB}
              alt="Example image"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 md:pr-8">
            <Image
              src={ImageC}
              alt="Example image"
              width={500}
              height={500}
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold mb-2 text-[#1E2B5E]">Implement and building dialogue skills in your Japanese conversations in 3S</h2>
            <div className='p-4'>
            <p className="text-gray-700 mb-4">
            1. Detailed topics that you face very often in everyday life:<br/>
     I. “Ugh, my close friend is badmouthing me!”<br/>
     Ii. “I got a surprise proposal from my fiance!”<br/>
     Iii. “My health is worsen”
            </p>
            <p className="text-gray-700 mb-4">
              2. Personalized-to-topics vocabulary and kanji helps you to express clearly and concisely.
            </p>
            </div>
            <button class='bg-[#EFCB27] text-[#1E2B5E] px-5 py-2 rounded-full hover:bg-[#87acec]'>Learn Now</button>

          </div>
        </div>
      </div>
    </div>
      </section>
      </>
    );
  }
 