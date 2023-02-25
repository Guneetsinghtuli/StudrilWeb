import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'


const inter = Inter({ subsets: ['latin'] })

export default function Table() {
    return (
      <>
      <section className='mt-48'>
      <div>
        <h1 className='text-center font-bold mb-4 text-[#1E2B5E] font-serif text-3xl pt-100'>How will Jp Course change <br/> your life?</h1>
        <h2 className='text-center text-lg font-bold mb-4 text-[#1E2B5E] font-serif '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</h2>
       </div>
       <div className="w-full border-{#1E2B5E} ">
      <div className="flex flex-col md:flex-row w-full p-4 border-{#1E2B5E}">
        <div className="md:w-1/2   rounded-l-lg border-{#1E2B5E} pt-2">
          <div className="bg-white shadow-lg rounded-l-lg	">
            <h2 className="text-lg font-semibold mb-4 bg-[#1E2B5E] text-white font-serif text-center p-2">Why do you need JP Course</h2>
            <div className=' p-4 text-lg font-normal mb-1'>
                <h1 className='font-medium text-center'>Immerse yourself in the practical Japanese conversations</h1>
                  <p className='bg-[#F5F8FF] p-4'>
                  1. Detailed topics that you face very often in everyday life: <br/>
                  I. “Ugh, my close friend is badmouthing me!” <br/>
                  II. “I got a surprise proposal from my fiance!” <br/>
                  III. “My health is worsen”<br/>
                  2. Personalized-to-topics vocabulary and kanji helps you to express clearly and concisely.
                  </p>
            </div>
            <div className=' p-4 text-lg font-normal mb-1'>
                <h1 className='font-medium text-center'>Immerse yourself in the practical Japanese conversations</h1>
                  <p className='bg-[#F5F8FF] p-4'>
                  1. Detailed topics that you face very often in everyday life: <br/>
                  I. “Ugh, my close friend is badmouthing me!” <br/>
                  II. “I got a surprise proposal from my fiance!” <br/>
                  III. “My health is worsen”<br/>
                  2. Personalized-to-topics vocabulary and kanji helps you to express clearly and concisely.
                  </p>
            </div>
            <div className=' p-4 text-lg font-normal mb-1'>
                <h1 className='font-medium text-center'>Immerse yourself in the practical Japanese conversations</h1>
                  <p className='bg-[#F5F8FF] p-4'>
                  1. Detailed topics that you face very often in everyday life: <br/>
                  I. “Ugh, my close friend is badmouthing me!” <br/>
                  II. “I got a surprise proposal from my fiance!” <br/>
                  III. “My health is worsen”<br/>
                  2. Personalized-to-topics vocabulary and kanji helps you to express clearly and concisely.
                  </p>
            </div>
          </div>
        </div>
        <div className="md:w-1/2   rounded-l-lg">
          <div className="bg-white shadow-lg border-{#1E2B5E} pt-2">
            <h2 className="text-lg font-semibold mb-4 bg-[#1E2B5E] text-white font-serif text-center p-2">Why do you need JP Course</h2>
            <div className=' p-4 text-lg font-normal mb-1'>
                <h1 className='font-medium text-center'>Immerse yourself in the practical Japanese conversations</h1>
                  <p className='bg-[#F5F8FF] p-4'>
                  1. Detailed topics that you face very often in everyday life: <br/>
                  I. “Ugh, my close friend is badmouthing me!” <br/>
                  II. “I got a surprise proposal from my fiance!” <br/>
                  III. “My health is worsen”<br/>
                  2. Personalized-to-topics vocabulary and kanji helps you to express clearly and concisely.
                  </p>
            </div>
            <div className=' p-4 text-lg font-normal mb-1'>
                <h1 className='font-medium text-center'>Immerse yourself in the practical Japanese conversations</h1>
                  <p className='bg-[#F5F8FF] p-4'>
                  1. Detailed topics that you face very often in everyday life: <br/>
                  I. “Ugh, my close friend is badmouthing me!” <br/>
                  II. “I got a surprise proposal from my fiance!” <br/>
                  III. “My health is worsen”<br/>
                  2. Personalized-to-topics vocabulary and kanji helps you to express clearly and concisely.
                  </p>
            </div>
            <div className=' p-4 text-lg font-normal mb-1'>
                <h1 className='font-medium text-center'>Immerse yourself in the practical Japanese conversations</h1>
                  <p className='bg-[#F5F8FF] p-4'>
                  1. Detailed topics that you face very often in everyday life: <br/>
                  I. “Ugh, my close friend is badmouthing me!” <br/>
                  II. “I got a surprise proposal from my fiance!” <br/>
                  III. “My health is worsen”<br/>
                  2. Personalized-to-topics vocabulary and kanji helps you to express clearly and concisely.
                  </p>
            </div>
          </div>
        </div>
      </div>
    </div>
      </section>
      </>
    );
  }