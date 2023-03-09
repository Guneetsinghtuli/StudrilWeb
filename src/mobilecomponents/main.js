import React from "react";
import Think from "../assets/think.png";
import Head from "next/head";
import Image from "next/image";
import Mobile from '../assets/mobile.png'
import { FaPaperPlane } from "react-icons/fa";

const main = () => {

  const [email, setEmail] = React.useState("");
  const [sharee, setSharee] = React.useState(false);
  const [Submitted, setSubmitted] = React.useState(false);


  const sharePage = () => {
    gtag('event', 'click', {
      'event_category': 'button',
      'event_label': 'sharePage',
      'value': 1
    });
    // SHare the page on whatsapp
    setSharee(true);

    if (navigator.share) {
      navigator
        .share({
          title: "Studrill",
          text: "Studrill is an all-in-one Japanese learning app that helps you learn Japanese faster and more effectively. Get early access now!",
          url: "https://studrill.com/",
        })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing", error));
    }
  }

  const share = ()=>{
    console.log("share");
    gtag('event', 'click', {
      'event_category': 'button',
      'event_label': 'emailSubscribtion',
      'value': 1
    });

    // check if email is correct format
    if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      alert("Please enter a valid email address");
      return;
    }
    if(email.length === 0){
      alert("Please enter a valid email address");
      return;
    }



    fetch("https://www.studrill.com/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
      }),
    }).then((res) => {
      console.log(res);
      setSubmitted(true);
    }).catch((err) => {
      console.log(err);
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
            {
              Submitted ? (
                <div className="bg-[#EFCB27] w-9/12 text-[12px] md:text-[16px] text-[#1E2B5E] font-bold font-poppins px-2 py-4 rounded-lg">
                <p className="text-center ">
                Thank you for sharing! You will receive an email with a link to download the app.
                </p>
              </div>
              ) : (
                <>
                <div className="items-center w-full justify-center font-poppins space-y-4 sm:flex sm:space-y-0  mt-4">
                <input
                  justify-center
                  type="email"
                  placeholder="Enter email address and share to your friends"
                  onChange={(e) => setEmail(e.target.value)}
                  className="placeholder-[#1E2B5E] w-full md:w-9/12   border-2 border-[#1E2B5E] text-[13px] md:text-[15px] text-[#1E2B5E] border-2 font-poppins rounded-lg md:px-10 px-3 py-4"
                />
              </div>
              <div className="items-left justify-center space-y-6 sm:flex sm:space-y-0 sm:space-x-4 mt-4 md:w-9/12 w-full">
                <button className="bg-[#EFCB27] w-full text-[12px] md:text-[16px] text-[#1E2B5E] font-bold font-poppins px-2 py-4 rounded-lg" onClick={share}>
                Submit and Share to Your Friends and Get Fresh Money up to ¥100,000! 
                </button>
              </div>
                </>
              )
            }
              <div className=" flex justify-center md:w-9/12 w-full my-3 ">
                <button className="bg-[#1E2B5E] w-full text-[12px] md:text-[16px]  text-[#fff] flex justify-center items-center p-3 rounded-full" onClick={sharePage}>
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