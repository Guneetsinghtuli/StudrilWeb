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
              <h2 className="md:text-2xl text-[24px] font-poppins font-bold text-[#1E2B5E] text-center">
              You deserve to speak Japanese better.
              </h2>
              <div className="p-4">
                <p className="md:text-xl text-[14px] mb-4 text-[#1E2B5E] font-normal font-poppins text-center">
                <span className="makeBold">Studrill</span> is an <span className="makeBold">all-in-one speaking app</span> where you can learn from <span className="makeBold">expressing yourself, practicing listening,</span> and <span className="makeBold">getting feedback,</span> allowing you to <span className="makeBold">speak Japanese naturally, better than</span> most Japanese learners' <span className="makeBold">rigid speaking.</span>
                </p>
              </div>
            </div>
            <div class="items-center w-full justify-center font-poppins space-y-4 sm:flex sm:space-y-0  mt-4">
                <input
                  justify-center
                  type="email"
                  placeholder="Enter email address and share to your friends"
                  class="placeholder-[#1E2B5E] md:w-9/12   border-2 border-[#1E2B5E] text-[13px] md:text-[15px] text-[#1E2B5E] border-2 font-poppins rounded-lg md:px-10 px-3 py-4"
                />
              </div>
              <div class="items-left justify-center space-y-6 sm:flex sm:space-y-0 sm:space-x-4 mt-4 md:w-9/12 w-full">
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