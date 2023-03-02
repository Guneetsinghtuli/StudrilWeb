import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Box from '../assets/box.png'

const inter = Inter({ subsets: ['latin'] })

export default function Benefits() {
    return (
      < >
      <section>
    <div>
    <div className='text-center '>
    <p className='text-left ml-8 text-lg font-bold  text-[#1E2B5E] font-serif '>Here's Why </p>
        <h1 className='text-center font-bold  text-[#1E2B5E] font-serif text-2xl pt-4'>Studrill Will Change Your Life</h1>
      </div>
       <div className="bg-white-100 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-col items-center">
          <div className="md:w-1/2 md:pr-2">
            <Image
              src={Box}
              alt="Example image"
              width={500}
              height={500}
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-[#1E2B5E] text-center">StuSmile</h2>
            <div className='p-4'>
            <p className="text-gray-700 mb-4 text-center">
            Smile, because #wemakeyouspeak now. Express yourself & feelings in Japanese, get feedback, and speak Japanese unconsciously.
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white-100 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-col items-center">
          <div className="md:w-1/2 md:pr-2">
            <Image
              src={Box}
              alt="Example image"
              width={500}
              height={500}
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-[#1E2B5E] text-center">StuRelax</h2>
            <div className='p-4'>
            <p className="text-gray-700 mb-4 text-center">
            Relax, because Studrill prepares everything for you. From super detailed daily conversation topics, customized-to-topic Kanjy (Kanji & Vocabulary), to SPOKEN grammar patterns.
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="bg-white-100 ">
      <div className="container mx-auto px-2">
        <div className="flex flex-col md:flex-col items-center">
          <div className="md:w-1/2 md:pr-2">
            <Image
              src={Box}
              alt="Example image"
              width={500}
              height={500}
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-[#1E2B5E] text-center">StuConfident</h2>
            <div className='p-2 md:p-0'>
            <p className="text-gray-700 mb-4 text-center">
            Be confident! Because you’ll finally be able to immerse yourself fully into NATURAL Japanese conversation! Think in Japanese, speak natural Japanese. #ByeTextbookJapanese
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
      </section>
      </>
    );
  }
 