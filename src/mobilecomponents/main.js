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
    console.log(navigator.canShare({
      title: "Studrill",
      text: `If Japanese use EngRish, we use Japanglish. But a better one. 

Take the challenge improving your Japanese speaking with StuDrill and get FRESH MONEY up to ¥100,000!
CLICK THE LINK now https://www.studrill.com/

App is launching this March! Get exclusive treatment if you sign-up early!`,
      url: "https://studrill.com/",
      image: "https://www.studrill.com/logoo.png",
    }))

    if (navigator.share) {
      navigator
      .share({
        title: "Studrill",
        text: `If Japanese use EngRish, we use Japanglish. But a better one. 

Take the challenge improving your Japanese speaking with StuDrill and get FRESH MONEY up to ¥100,000!
CLICK THE LINK now https://www.studrill.com/

App is launching this March! Get exclusive treatment if you sign-up early!`,
        url: "https://studrill.com/",
        // image: "https://www.studrill.com/logoo.png",
      })
        .then(() => console.log("Successful share"))
        .catch((error) => {
          fetch("instagram.com/direct/inbox/?text=If Japanese use EngRish, we use Japanglish. But a better one.")


          console.log("Error sharing", error)
        });
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
              Speak your dreams into reality
              </h2>
              <div className="p-4">
                <p className="md:text-xl text-[14px] mb-4 text-[#1E2B5E] font-normal font-poppins text-center">
                {/* <span className="">Studrill</span> is an <span className="">all-in-one speaking app</span> where you can learn from <span className="">expressing yourself, practicing listening,</span> and <span className="">getting feedback,</span> allowing you to <span className="">speak Japanese naturally, better than</span> most Japanese learners' <span className="">rigid speaking.</span> */}
            Studrill is an <b>AI powered 7-in-1 personal Japanese tutor app </b>that <i>guides</i> individuals to express themselves, practice listening, and receive feedback, allowing them to speak Japanese naturally, better than most Japanese learners’ rigid speaking.

                </p>
              </div>
            </div>
            {
              Submitted ? (
                <div className="bg-[#EFCB27] w-9/12 text-[12px] md:text-[16px] text-[#1E2B5E] font-bold font-poppins px-2 py-4 rounded-lg">
                <p className="text-center ">
                Don’t forget to share this page to your friends and get up to ¥100,000 when the app is launched!
                </p>
              </div>
              ) : (
                <>
                <div className="items-center w-full justify-center font-poppins space-y-4 sm:flex sm:space-y-0  mt-4">
                <input
                  justify-center
                  type="email"
                  placeholder="Enter your email to get discount offers (early sign-up) "
                  onChange={(e) => setEmail(e.target.value)}
                //   ::placeholder {
                //     text-align: center; 
                //  }

                  className="placeholder-[#1E2B5E] w-full md:w-9/12   border-2 border-[#1E2B5E] text-[13px] md:text-[15px] text-[#1E2B5E] border-2 font-poppins rounded-lg md:px-10 px-3 py-4 opacity-50"
                />
              </div>
              <div className="items-left justify-center space-y-6 sm:flex sm:space-y-0 sm:space-x-4 mt-4 md:w-9/12 w-full">
                <button className="bg-[#EFCB27] w-full text-[12px] md:text-[16px] text-[#1E2B5E] font-bold font-poppins px-2 py-4 rounded-lg" onClick={share}>
                Submit (Discount code will be emailed in early Dec)
                </button>
              </div>
                </>
              )
            }
              <div className=" flex justify-center md:w-9/12 w-full my-3 ">
                <button className="bg-[#1E2B5E] w-full text-[12px] md:text-[16px]  text-[#fff] flex justify-center items-center p-3 rounded-full" onClick={sharePage}>
                <p className="font-poppins font-medium mx-3  ">Share to your friends</p>
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