import React from "react";

import {FaPaperPlane} from 'react-icons/fa'
import Cloud from '../assets/Union.png'
import Image from "next/image";

const upfooter = () => {
  return (
    <div className=" relative bg-[#F8F9FC] mt-36" id="end">
    <div className="absolute top-[-100px] -z-50">
    <Image src={Cloud} alt="hh" className=" w-full h-100 "/>
    </div>
    
      <div className="container mx-auto z-5">
        <div className="flex flex-col md:flex-col items-center">
          <div className="">
          <div className="md:p-10 p-5 pb-4">
          <h2 className="md:text-[2.2rem] text-[32px] font-montserrat font-bold  text-[#1E2B5E] text-center">
              Claim your Early<br/> Access Now!
            </h2>
          <p className="ms:mx-12 mx-1 mt-3 font-poppins text-[#56647A] text-md text-center">
              Do not miss out on the chance to use Studrill Japanese-speaking app to make your life easier. Special treatments are awaiting you too!
              </p>
          </div>
            
            <div className="p-0">
              
              <div className="items-center flex justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mt-4">
                <input
                  justify-center
                  type="email"
                  placeholder="Enter email address and share to your friends"
                  className="placeholder-[#1E2B5E] text-center md:w-8/12 w-10/12 text-[14px] font-poppins border-[#1E2B5E] text-[#1E2B5E] border-2 rounded-lg px-3 py-4"
                />
              </div>
              <div className="flex justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mt-4 container mx-auto">
                <button className="bg-[#EFCB27] text-[13px] md:text-[16px] md:w-8/12 w-10/12 font-poppins text-[#1E2B5E] font-bold md:px-8 px-2 py-4 rounded-lg">
                Submit and Share to Your Friends and Get Fresh Money Up To ¥100,000!
                </button>
              </div>
              <div className=" flex justify-center my-3 mb-6">
                <button className="bg-[#1E2B5E] md:w-8/12 w-10/12 text-[#fff] flex justify-center items-center p-3 rounded-full">
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
