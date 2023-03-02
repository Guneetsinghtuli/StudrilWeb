import React from "react";
import Send from '../assets/Send.png'
import Copy from '../assets/Icon.png'
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const upfooter = () => {
  return (
    <div className="bg-[background: #C4C4C4]-100 mt-28">
      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-col items-center">
          <div className="">
            <h2 className="text-2xl font-bold  text-[#1E2B5E] text-center">
              Claim your Early Access Now!
            </h2>
            <div className="p-4">
              <p className="text-gray-700  text-center">
                Do not miss out the chance to change your life faster! Special
                treatments are awaiting for you too!
              </p>
              <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mt-4">
                <input
                  justify-center
                  type="email"
                  placeholder="Enter your email...."
                  class="border-blue-500 border-2 rounded-md px-10 py-4"
                />
              </div>
              <div class="items-left justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mt-4">
                <button className="bg-[#EFCB27] text-lg font-bold Poppins px-8 py-4 rounded-lg">
                  GET EARLY ACCESS AND SPECIAL TREATMENT
                </button>
              </div>
               <div className="flex flex-row justify-around	">
               <div class="space-x-4 space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mt-4 justify-around">
              <button className="bg-[#1E2B5E] text-lg  text-white Poppins px-4 py-2 rounded-lg"><Image src={Copy}></Image>
                  Copy Link
                </button>
                </div>
                 <div class="space-x-2 space-y-4 sm:flex sm:flex-row sm:space-y-0 sm:space-x-2 mt-4 justify-around">
              <button className="bg-[#1E2B5E] text-white text-lg   Poppins px-4 py-2 rounded-lg"><Image src={Send}></Image>
                  Share Page
                </button>
                </div>
               </div>
              </div>
            </div>
          </div>
        </div>
      </div>
     
  );
};

export default upfooter;
