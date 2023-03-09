import React from "react";
import Think from "../assets/think.png";
import Head from "next/head";
import Image from "next/image";
import Mobile from '../assets/mobile.png'
import { FaPaperPlane } from "react-icons/fa";

const main = () => {

  const share = ()=>{
    console.log("share");
    gtag('event', 'click', {
      'event_category': 'button',
      'event_label': 'emailSubscribtion',
      'value': 1
    });
  }


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
                <span className="">Studrill</span> is an <span className="">all-in-one speaking app</span> where you can learn from <span className="">expressing yourself, practicing listening,</span> and <span className="">getting feedback,</span> allowing you to <span className="">speak Japanese naturally, better than</span> most Japanese learners' <span className="">rigid speaking.</span>
                </p>
              </div>
            </div>
            <div className="items-center w-full justify-center font-poppins space-y-4 sm:flex sm:space-y-0  mt-4">
                <input
                  justify-center
                  type="email"
                  placeholder="Enter email address and share to your friends"
                  className="placeholder-[#1E2B5E] w-full md:w-9/12   border-2 border-[#1E2B5E] text-[13px] md:text-[15px] text-[#1E2B5E] border-2 font-poppins rounded-lg md:px-10 px-3 py-4"
                />
              </div>
              <div className="items-left justify-center space-y-6 sm:flex sm:space-y-0 sm:space-x-4 mt-4 md:w-9/12 w-full">
                <button className="bg-[#EFCB27] w-full text-[12px] md:text-[16px] text-[#1E2B5E] font-bold font-poppins px-2 py-4 rounded-lg" onClick={share}>
                Submit and Share to Your Friends and Get Fresh Money up to ¥100,000! 
                </button>
              </div>
              <div className=" flex justify-center md:w-9/12 w-full my-3 ">
                <button className="bg-[#1E2B5E] w-full text-[12px] md:text-[16px]  text-[#fff] flex justify-center items-center p-3 rounded-full">
                <p className="font-poppins font-medium mx-3  ">Share page</p>
                  <FaPaperPlane />
                  
                </button>
              </div>
           
          </div>
        </div>
      </div>
    </section>
  )
}

export default main