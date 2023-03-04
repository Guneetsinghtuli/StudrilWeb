import React from "react";
import Think from "../assets/think.png";
import Head from "next/head";
import Image from "next/image";
import { Poppins } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Men from "../assets/men.png";
import Data from "../assets/data.png";
import Build from "../assets/building.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const price = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <section className="mt-24 mb-10">
      <div>
        <h1 className="text-center font-bold mb-4 text-[#1E2B5E]     text-2xl pt-100">
          Which one are you?
        </h1>
        <h2 className="text-center text-xl font-bold mb-4 text-[#1E2B5E]     ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </h2>
      </div>
      <div className="flex flex-col md:flex-col p-4 m-4 item-center">

      <Slider {...settings}>
        <div className="bg-white rounded-lg shadow-lg my-auto  border-4 border-[#FFC727] l-0 mb-10   ">
          <h2 className="text-6 text-center font-bold mb-4 bg-[#ffe680] mb-4 item-center">
            Koibito, doko?
          </h2>

          <div className="text-4xl font-bold text-green-500 mb-2 px-16 py-5 item-center">
            <Image src={Think}></Image>
          </div>
          <div className="m-4 item-center">
            <button className="bg-[#1E2B5E] hover:bg-green-600 text-white  rounded-full px-20 py-2  font-bold">
              Lorem Ipsum Dolor Sir Amet lorem
            </button>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row ml-4 mr-4 mt-2">
              <Image className="w-8" src={Men}></Image>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
            <div className="flex flex-row ml-4 mr-4 mt-2">
              <Image className="w-8" src={Data}></Image>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
            <div className="flex flex-row ml-4 mr-4 mt-2">
              <Image className="w-8" src={Build}></Image>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>
          <hr />
          <div className=" m-4 ml-32">
            <button className="bg-[#FFC727] hover:bg-green-600 text-white rounded-full px-4 py-2  font-bold">
              Preview
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg   border-4 border-[#FFC727] l-0 mb-10">
          <h2 className="text-6 text-center font-bold mb-4 bg-[#ffe680] mb-4">
            Koibito, doko?
          </h2>

          <div className="text-4xl font-bold text-green-500 mb-2 px-16 py-5">
            <Image src={Think}></Image>
          </div>
          <div className="m-4">
            <button className="bg-[#1E2B5E] hover:bg-green-600 text-white rounded-full px-4 py-2  font-bold">
              Lorem Ipsum Dolor Sir Amet lorem
            </button>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row ml-4 mr-4 mt-2">
              <Image className="w-8" src={Men}></Image>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
            <div className="flex flex-row ml-4 mr-4 mt-2">
              <Image className="w-8" src={Data}></Image>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
            <div className="flex flex-row ml-4 mr-4 mt-2">
              <Image className="w-8" src={Build}></Image>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>
          <hr />
          <div className=" m-4 ml-32">
            <button className="bg-[#FFC727] hover:bg-green-600 text-white rounded-full px-4 py-2  font-bold">
              Preview
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg   border-4 border-[#FFC727] l-0 mb-10">
          <h2 className="text-6 text-center font-bold mb-4 bg-[#ffe680] mb-4">
            Koibito, doko?
          </h2>

          <div className="text-4xl font-bold text-green-500 mb-2 px-16 py-5">
            <Image src={Think}></Image>
          </div>
          <div className="m-4">
            <button className="bg-[#1E2B5E] hover:bg-green-600 text-white rounded-full px-4 py-2  font-bold">
              Lorem Ipsum Dolor Sir Amet lorem
            </button>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row ml-4 mr-4 mt-2">
              <Image className="w-8" src={Men}></Image>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
            <div className="flex flex-row ml-4 mr-4 mt-2">
              <Image className="w-8" src={Data}></Image>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
            <div className="flex flex-row ml-4 mr-4 mt-2">
              <Image className="w-8" src={Build}></Image>
              <p>Lorem ipsum dolor sit amet, consectetur.</p>
            </div>
          </div>
          <hr />
          <div className=" m-4 ml-32">
            <button className="bg-[#FFC727] hover:bg-green-600 text-white rounded-full px-4 py-2  font-bold">
              Preview
            </button>
          </div>
        </div>
      </Slider>
      </div>
    </section>
  );
};

export default price;
