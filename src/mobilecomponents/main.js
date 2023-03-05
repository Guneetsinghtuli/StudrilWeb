import React from "react";
import Think from "../assets/think.png";
import Head from "next/head";
import Image from "next/image";
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
              <h2 className="text-2xl font-poppins font-bold text-[#1E2B5E] text-center">
              You deserve to speak Japanese better.
              </h2>
              <div className="p-4">
                <p className="text-xl mb-4 text-[#1E2B5E] font-normal font-poppins text-center">
                Studrill is an all-in-one speaking app where you can learn to express yourself & get feedback, listen to Native Japanese, and converse in natural Japanese.
                </p>
              </div>
            </div>
            <div class="items-center justify-center font-poppins space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mt-4">
                <input
                  justify-center
                  type="email"
                  placeholder="Enter email address and share to your friends"
                  class="placeholder-[#1E2B5E] border-2 border-[#1E2B5E] text-[#1E2B5E] border-2 font-poppins rounded-lg px-10 py-4"
                />
              </div>
              <div class="items-left justify-center space-y-6 sm:flex sm:space-y-0 sm:space-x-4 mt-4 w-9/12">
                <button className="bg-[#EFCB27] w-full text-[16px] text-[#1E2B5E] font-bold font-poppins px-2 py-4 rounded-lg">
                Share to your friends to get <br /> FRESH MONEY up to ¥100,000!
                </button>
              </div>
           
          </div>
        </div>
      </div>
    </section>
  )
}

export default main