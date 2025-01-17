import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Box from '../assets/box.png'

import StuConfident from "../assets/StuConfident.png"
import StuRelax from "../assets/StuRelax.png"
import StuSmile from "../assets/StuSmile.png"
  

export default function Benefits() {
    return (
      < >
      <section className='bg-[#F8F9FC]' id="features">
    <div className='py-14'>
    <div className='text-center'>
        <p className='text-left md:ml-8 ml-4 text-xl font-poppins  text-[#56647A] '>Here's Why </p>
        <h1 className='md:ml-8 ml-4 font-montserrat font-bold text-left  text-[#1E2B5E] md:text-5xl text-[1.8rem] md:pt-4'>Studrill Will<br /> Change Your Life</h1>
      </div>
       <div className="bg-white-100 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-col items-center">
          <div className="md:w-1/2 md:pr-2">
            <Image
              src={StuSmile}
              alt="Example image"
              width={500}
              height={500}
            />
          </div>
          <div className="">
            <h2 className="text-2xl font-poppins font-bold text-[#1E2B5E] text-center">StuSmile</h2>
            <div className='md:p-4'>
            <p className="text-[#1E2B5E] leading-7 md:mx-10 font-poppins text-md mb-4 text-center">
            Studrill is an AI-powered app where you can <span className="makeBold">express yourself in Japanese and get feedback to improve your mistakes.</span> With these features, you can finally StuSmile because we transform you from <span className='makeBold'>Broken Japanese</span> to <span className='makeBold'>Natural Japanese.</span>
            {/* Studrill is an app where you can <span className="makeBold">express yourself in Japanese, get feedback,</span> and <span className="makeBold">speak Japanese unconsciously.</span> With these features, you can finally StuSmile because we make you speak Japanese. */}
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
              src={StuRelax}
              alt="Example image"
              width={500}
              height={500}
            />
          </div>
          <div className="">
            <h2 className="text-2xl font-poppins font-bold text-[#1E2B5E] text-center">StuRelax</h2>
            <div className='md:p-4'>
            <p className="text-[#1E2B5E] leading-7 md:mx-10 font-poppins text-md mb-4 text-center">
            Studrill app provides you with detailed 7-in-1 curriculum: <span className="makeBold">Speaking Drill, Listening, Dialogue Immersion, Spoken Grammar Application, Vocabulary Memory, Kanji Scanning, and Writing Practice.</span> These features will make you StuRelax because we prepare everything you need to <span className='makeBold'>speak Japanese naturally.</span>

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
              src={StuConfident}
              alt="Example image"
              width={500}
              height={500}
            />
          </div>
          <div className="">
            <h2 className="text-2xl font-poppins font-bold text-[#1E2B5E] text-center">StuConfident</h2>
            <div className='md:p-4'>
            <p className="text-[#1E2B5E] leading-7 md:mx-10 font-poppins text-md mb-4 text-center">
            Studrill app <span className="makeBold">trains you to think and speak in Japanese</span> - not translating from your <span className="makeBold">native language</span> to Japanese! We also just had a very sad goodbye to rigid textbook Japanese, because we want you to be StuConfident - transforming you fully to become a <span className="makeBold">solid Japanese speaker.</span>
            </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='h-10'></div>
    </div>
      </section>
      </>
    );
  }
 