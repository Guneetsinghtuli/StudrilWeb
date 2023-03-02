import React from "react";
import Think from "../assets/think.png";
import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Mobile from '../assets/mobile.png'

const main = () => {
  return (
    <section>
        <div className="bg-white-100 mt-16">
        <div className="container mx-auto px-8">
          <div className="flex flex-col  mx-2 my-2 items-center">
          <div className=" ">
              <Image
                src={Mobile}
                alt="Example image"
                width={800}
                height={800}
              />
            </div>
            <div className="">
              <h2 className="text-2xl font-bold  text-[#1E2B5E] text-center">
              The Japanese speaking app you have never
seen before
              </h2>
              <div className="p-4">
                <p className="text-gray-700 mb-4 text-center">
                Studrill is an all-in-one speaking app where you can learn to express yourself & get feedback, listen to Native Japanese, and converse in natural Japanese.
                </p>
                 
              </div>
            </div>
            <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mt-4">
                <input
                  justify-center
                  type="email"
                  placeholder="Enter your email...."
                  class="border-blue-500 border-2 rounded-md px-10 py-4"
                />
              </div>
              <div class="items-left justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mt-4">
                <button className="bg-[#EFCB27] text-lg font-bold Poppins px-2 py-4 rounded-lg">
                  GET EARLY ACCESS AND SPECIAL TREATMENT
                </button>
              </div>
           
          </div>
        </div>
      </div>
    </section>
  )
}

export default main