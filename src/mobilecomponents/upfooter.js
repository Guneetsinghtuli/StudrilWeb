import React from "react";
import Send from '../assets/Send.png'
import Copy from '../assets/Icon.png'
import Head from 'next/head'

import {FaPaperPlane} from 'react-icons/fa'
import Cloud from '../assets/Union.png'
import Image from "next/image";

const upfooter = () => {
  return (
    <div className=" relative bg-[#F8F9FC] mt-28">
    <div className="absolute top-[-100px] -z-50">
    <Image src={Cloud} alt="hh" className=" w-full h-100 "/>
    </div>
    
      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-col items-center">
          <div className="">
          <div className="p-10 pb-4">
          <h2 className="text-[2.2rem] font-montserrat font-bold  text-[#1E2B5E] text-center">
              Claim your Early<br/> Access Now!
            </h2>
          <p className="mx-12 mt-3 font-poppins text-[#56647A] text-md text-center">
              Do not miss out on the chance to use Studrill Japanese-speaking app to make your life easier. Special treatments are awaiting you too!
              </p>
          </div>
            
            <div className="p-0">
              
              <div class="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mt-4">
                <input
                  justify-center
                  type="email"
                  placeholder="Enter email address and share to your friends"
                  class="placeholder-[#1E2B5E] text-center w-9/12 font-poppins border-[#1E2B5E] text-[#1E2B5E] border-2 rounded-lg px-3 py-4"
                />
              </div>
              <div class=" justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mt-4">
                <button className="bg-[#EFCB27] w-8/12 font-poppins text-[#1E2B5E] text-lg font-bold px-8 py-4 rounded-lg">
                Share to your friends to get <br/>
                FRESH MONEY up to ¥100,000!
                </button>
              </div>
              <div className=" flex justify-center my-3">
                <button className="bg-[#1E2B5E] w-8/12 text-[#fff] flex justify-center items-center p-3 rounded-full">
                <p className="font-poppins font-medium mx-3  ">Share page</p>
                  <FaPaperPlane />
                  
                </button>
              </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
     
  );
};

export default upfooter;
