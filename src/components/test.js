import React from "react";
import Think from "../assets/think.png";
import Head from "next/head";
import Image from "next/image";
import { Poppins } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Men from "../assets/men.png";
import Data from "../assets/data.png";
import Build from "../assets/building.png";
import Img from "../assets/img.png";
import Video1 from "../assets/play.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ThreeCardCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="mt-10 ">
      <div class="relative">
        {/* <div class="bottom-0 left-0 right-0 h-22">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="2 0 1440 320">
            <path
              class="fill-current text-yellow-500"
              d="M0,160L60,149.3C120,139,240,117,360,138.7C480,160,600,224,720,240C840,256,960,224,1080,197.3C1200,171,1320,149,1380,138.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
            ></path>
          </svg>
        </div> */}
      </div>
      <div className=" bg-[#EFCB27] pt-10">
        <div className="">
          <h1 className="text-center font-montserrat font-bold mb-4 text-[#1E2B5E] text-xl md:text-[2rem] pt-100 px-4  py-2 ">
          Like a different person. Feel the difference with StuDrill
          </h1>
          <h2 className="text-center md:leading-7 leading-5 font-poppins text-base mb-4 text-[13px] text-[#1E2B5E] px-4  ">
          In a short time, many foreigners/ Japanese learners can speak and express themselves in Japanese unconsciously. Smoother (shorter time too), better vocabulary words & spoken grammar patterns, and more confidence!
          </h2>
        </div>
        <div className="flex flex-col md:flex-col p-8  justify-around">
          <Slider {...settings}>
          <div className="bg-white w-90 rounded-lg shadow-xl m-4 mb-20">
            <div className="  m-4">
          
              <h2 className="text-xl text-[#1E2B5E] text-center font-bold mb-4  mb-4 ml-6 mt-4">
              A, Lives in Japan
              </h2>
            </div>

            <div className="text-4xl font-bold text-green-500 mb-8 px-16 py-5">
              <div className="flex flex-row justify-around">
                <div className="bg-white rounded-xl shadow-xl   border-4 border-[#1E2B5E] r-0 mr-2">
                  <h2 className="text-base text-center font-bold mb-4 text-white bg-[#1E2B5E] mb-4">
                    Texbook only
                  </h2>
                  <div className=" px-12 py-5">
                    <Image className="w-28" src={Video1}></Image>
                  </div>

                  <h2 className="text-3xl text-center text-[#1E2B5E] font-bold ">
                    Play
                  </h2>
                </div>
                <div className="bg-white rounded-xl shadow-xl   border-4 border-[#FFC727] r-0 mr-2">
                  <h2 className="text-base text-center font-bold mb-4 text-[#1E2B5E] bg-[#FFC727] mb-4">
                  Studrill with textbook
                  </h2>
                  <div className=" px-12 py-5">
                    <Image className="w-28" src={Video1}></Image>
                  </div>

                  <h2 className="text-3xl text-center text-[#1E2B5E] font-bold ">
                    Play
                  </h2>
                </div>
              </div>
            </div>
            <hr className="m-2 text-bold"/>
            <div className="flex flex-col mr-10 ml-10 mt-10 mb-20 text-center">
              <p className="text-3xl">I Love JapanDidn't you say you come from Hawaii?</p>
              <p className="text-3xl">ハワイ出身って言ってたよね。</p>
              <p className="text-3xl">Hawai shusshin tte itteta yo ne.</p>
            </div>
          </div>

          <div className="bg-white w-90 rounded-lg shadow-xl m-4 mb-20">
            <div className="  m-4">
          
              <h2 className="text-xl text-[#1E2B5E] text-center font-bold mb-4  mb-4 ml-6 mt-4">
              A, Lives in Japan
              </h2>
            </div>

            <div className="text-4xl font-bold text-green-500 mb-8 px-16 py-5">
              <div className="flex flex-row justify-around">
                <div className="bg-white rounded-xl shadow-xl   border-4 border-[#1E2B5E] r-0 mr-2">
                  <h2 className="text-base text-center font-bold mb-4 text-white bg-[#1E2B5E] mb-4">
                    Texbook only
                  </h2>
                  <div className=" px-12 py-5">
                    <Image className="w-28" src={Video1}></Image>
                  </div>

                  <h2 className="text-3xl text-center text-[#1E2B5E] font-bold ">
                    Play
                  </h2>
                </div>
                <div className="bg-white rounded-xl shadow-xl   border-4 border-[#FFC727] r-0 mr-2">
                  <h2 className="text-base text-center font-bold mb-4 text-[#1E2B5E] bg-[#FFC727] mb-4">
                  Studrill with textbook
                  </h2>
                  <div className=" px-12 py-5">
                    <Image className="w-28" src={Video1}></Image>
                  </div>

                  <h2 className="text-3xl text-center text-[#1E2B5E] font-bold ">
                    Play
                  </h2>
                </div>
              </div>
            </div>
            <hr className="m-2 text-bold"/>
            <div className="flex flex-col mr-10 ml-10 mt-10 mb-20 text-center">
              <p className="text-3xl">I Love JapanDidn't you say you come from Hawaii?</p>
              <p className="text-3xl">ハワイ出身って言ってたよね。</p>
              <p className="text-3xl">Hawai shusshin tte itteta yo ne.</p>
            </div>
          </div>

          <div className="bg-white w-90 rounded-lg shadow-xl m-4 mb-20">
            <div className="  m-4">
          
              <h2 className="text-xl text-[#1E2B5E] text-center font-bold mb-4  mb-4 ml-6 mt-4">
              A, Lives in Japan
              </h2>
            </div>

            <div className="text-4xl font-bold text-green-500 mb-8 px-16 py-5">
              <div className="flex flex-row justify-around">
                <div className="bg-white rounded-xl shadow-xl   border-4 border-[#1E2B5E] r-0 mr-2">
                  <h2 className="text-base text-center font-bold mb-4 text-white bg-[#1E2B5E] mb-4">
                    Texbook only
                  </h2>
                  <div className=" px-12 py-5">
                    <Image className="w-28" src={Video1}></Image>
                  </div>

                  <h2 className="text-3xl text-center text-[#1E2B5E] font-bold ">
                    Play
                  </h2>
                </div>
                <div className="bg-white rounded-xl shadow-xl   border-4 border-[#FFC727] r-0 mr-2">
                  <h2 className="text-base text-center font-bold mb-4 text-[#1E2B5E] bg-[#FFC727] mb-4">
                  Studrill with textbook
                  </h2>
                  <div className=" px-12 py-5">
                    <Image className="w-28" src={Video1}></Image>
                  </div>

                  <h2 className="text-3xl text-center text-[#1E2B5E] font-bold ">
                    Play
                  </h2>
                </div>
              </div>
            </div>
            <hr className="m-2 text-bold"/>
            <div className="flex flex-col mr-10 ml-10 mt-10 mb-20 text-center">
              <p className="text-3xl">I Love JapanDidn't you say you come from Hawaii?</p>
              <p className="text-3xl">ハワイ出身って言ってたよね。</p>
              <p className="text-3xl">Hawai shusshin tte itteta yo ne.</p>
            </div>
          </div>
          </Slider>
         
        </div>
      </div>
    </section>
  );
};

export default ThreeCardCarousel;
