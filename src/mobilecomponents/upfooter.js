import React from "react";

import { FaPaperPlane } from "react-icons/fa";
import Cloud from "../assets/Union.png";
import Image from "next/image";

const upfooter = () => {
  const [email, setEmail] = React.useState("");
  const [sharee, setSharee] = React.useState(false);
  const [Submitted, setSubmitted] = React.useState(false);

  const sharePage = () => {
    gtag("event", "click", {
      event_category: "button",
      event_label: "sharePage",
      value: 1,
    });
    // SHare the page on whatsapp
    setSharee(true);
// Share on instagram closes the app immediately




    

    if (navigator.share) {
      navigator
      .share({
        title: "Studrill",
        text: `If Japanese use EngRish, we use Japanglish. But a better one. 

Take the challenge improving your Japanese speaking with StuDrill and get FRESH MONEY up to ¥100,000!
CLICK THE LINK now https://www.studrill.com/

App is launching this March! Get exclusive treatment if you sign-up early!`,
        url: "https://studrill.com/",
        image: "https://www.studrill.com/logoo.png",
      })
        .then(() => console.log("Successful share"))
        .catch((error) => console.log("Error sharing", error));
    }
  };

  const share = () => {
    console.log("share");
    gtag("event", "click", {
      event_category: "button",
      event_label: "emailSubscribtion",
      value: 1,
    });

    // check if email is correct format
    if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      alert("Please enter a valid email address");
      return;
    }
    if (email.length === 0) {
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
    })
      .then((res) => {
        console.log(res);
        setSubmitted(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // SHare the page on whatsapp

  return (
    <div className=" relative bg-[#F8F9FC] mt-36" id="end">
      <div className="absolute top-[-100px] -z-50">
        <Image src={Cloud} alt="hh" className=" w-full h-100 " />
      </div>

      <div className="container mx-auto z-5">
        <div className="flex flex-col md:flex-col items-center">
          <div className="">
            <div className="md:p-10 p-5 pb-4">
              <h2 className="md:text-[2.2rem] text-[32px] font-montserrat font-bold  text-[#1E2B5E] text-center">
                Claim your Early
                <br /> Access Now!
              </h2>
              <p className="ms:mx-12 mx-1 mt-3 font-poppins text-[#56647A] text-md text-center">
                Do not miss out on the chance to use Studrill Japanese-speaking
                app to make your life easier. Special treatments are awaiting
                you too!
              </p>
            </div>
            {Submitted ? (
              <div className="flex justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mt-4 container mx-auto">
              <div className="bg-[#EFCB27] w-9/12 text-[12px] md:text-[16px] text-[#1E2B5E] font-bold font-poppins px-2 py-4 rounded-lg">
                <p className="text-center ">
                Don’t forget to share this page to your friends and get up to ¥100,000 when the app is launched!
                </p>
              </div>
              </div>
            ) : (
              <>
                <div className="items-center flex justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mt-4">
                  <input
                    justify-center
                    type="email"
                    placeholder="Enter your email and get early sign-up"
                    className="placeholder-[#1E2B5E] text-center md:w-8/12 w-10/12 text-[14px] font-poppins border-[#1E2B5E] text-[#1E2B5E] border-2 rounded-lg px-3 py-4 opacity-50"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <div className="flex justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mt-4 container mx-auto">
                  <button
                    className="bg-[#EFCB27] text-[13px] md:text-[16px] md:w-8/12 w-10/12 font-poppins text-[#1E2B5E] font-bold md:px-8 px-2 py-4 rounded-lg"
                    onClick={share}
                  >
                    Submit and Share to Your Friends
                  </button>
                </div>
              </>
            )}

            <div className="p-0">
              <div className=" flex justify-center my-3 mb-6">
                <button className="bg-[#1E2B5E] md:w-8/12 w-10/12 text-[#fff] flex justify-center items-center p-3 rounded-full">
                  <p
                    className="font-poppins font-medium mx-3  "
                    onClick={sharePage}
                  >
                    Share page
                  </p>
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
