import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Banner from "../assets/banner.png";

const BannerDesk = () => {
  return (
    <>
      <section className="relative">
        <div className="flex flex-row mt-20   relative">
          <div className="ml-24">
            <div className="w-1/2  mt-20 mr-4">
              <h1 className="text-4xl font-bold mt-20">Learn, Express</h1>
              <h1 className="text-4xl font-bold mt-3">and Speak</h1>
              <p className="text-lg mt-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                lacinia vestibulum lectus, eu finibus arcu imperdiet sit amet.
              </p>
              <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-5">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="w-1/2   pt-100">
            <Image src={Banner} objectFit="cover"></Image>
          </div>
          <div className="relative h-24">
            <div className="absolute inset-0 bg-yellow-400"></div>
            <div className="absolute inset-0 wave"></div>
          </div>
          <style jsx>
            {`
              .wave {
                background-color: #fff;
                bottom: 0;
                left: 0;
                right: 0;
                height: 20px;
                transform-origin: center bottom;
                position: absolute;
                z-index: 1;
              }

              .wave::before {
                content: "";
                display: block;
                position: absolute;
                border-radius: 100% 50%;
                width: 200%;
                height: 300%;
                left: -50%;
                top: -250%;
                background-color: #fff;
                transform-origin: 50% 48%;
                transform: rotate(-30deg);
              }

              .bg-yellow-400 {
                background-color: #f59e0b;
              }

              .h-24 {
                height: 6rem;
              }
            `}
          </style>
        </div>
        
         
      </section>
      <div className="bottom-0 left-0 right-0 mt-16">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="50 0 1300 200"><path fill="#FFB900" fillOpacity="1" d="M0,64L80,69.3C160,75,320,85,480,106.7C640,128,800,160,960,154.7C1120,149,1280,107,1360,85.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
      </div>
    </>
  );
};

export default BannerDesk;
