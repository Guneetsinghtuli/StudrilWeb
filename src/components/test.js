import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsPlayCircle } from "react-icons/bs";


const ThreeCardCarousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    autoPlay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="mt-10 ">
      <div class="relative"></div>
      <div className=" bg-[#EFCB27] pt-10">
        <div className="">
          <h1 className="text-center font-montserrat font-bold mb-4 text-[#1E2B5E] text-xl md:text-[2rem] pt-100 px-4  py-2 ">
            Like a different person. Feel the difference with StuDrill
          </h1>
          <h2 className="text-center md:leading-7 leading-5 font-poppins text-base mb-4 text-[13px] text-[#1E2B5E] px-4  ">
            In a short time, many foreigners/ Japanese learners can speak and
            express themselves in Japanese unconsciously. Smoother (shorter time
            too), better vocabulary words & spoken grammar patterns, and more
            confidence!
          </h2>
        </div>
        {/* <div className="flex flex-col md:flex-col p-8 gap-[20px]  justify-around"> */}
        <Slider {...settings}>
          <div className="bg-[#F5F8FF] w-50 my-16 mt-10 rounded-lg ">
            <div className="  m-4">
              <h2 className="text-[14px] font-montserrat text-[#1E2B5E] text-center font-bold mb-4  mb-4 ml-6 mt-4">
                A, Lives in Japan
              </h2>
            </div>

            <div className="text-4xl mb-4 md:px-16 px-5 py-5">
              <div className="flex flex-row justify-around">
                <div className="bg-white w-6/12 rounded-xl    border-0 r-0 mr-2">
                  <h2 className="md:text-sm text-[0.7rem] p-3 text-center font-poppins font-[600] text-white bg-[#1E2B5E] rounded-t-md mb-4">
                    Texbook only
                  </h2>
                  <div className="w-full flex justify-center items-center">
                  <a className=" px-10 md:px-8 py-2 w-90">
                    <BsPlayCircle className=" text-[#1E2B5E]" size={40}/>
                  </a>

                  </div>
                  

                  <h2 className="text-[16px] mb-3 text-center font-poppins text-[#1E2B5E] font-bold ">
                    Play
                  </h2>
                </div>
                <div className="bg-white w-6/12 rounded-xl border-0 r-0 mr-2">
                  <h2 className="md:text-sm text-[0.7rem] p-3 text-center font-poppins font-[600]  text-[#1E2B5E] rounded-t-md bg-[#FFC727] mb-4">
                    Studrill with textbook
                  </h2>
                  <div className="w-full flex justify-center items-center">
                    <a className=" px-10 md:px-8 py-2  ">
                      <BsPlayCircle className="text-[#EFCB27]" size={40} />
                    </a>
                  </div>

                  <h2 className="text-[16px] mb-3 font-poppins text-center text-[#1E2B5E] font-bold ">
                    Play
                  </h2>
                </div>
              </div>
            </div>
            <hr className="m-2 text-bold" />
            <div className="flex flex-col mr-4 ml-4 mt-2 mb-10 text-center">
              <p className="text-[16px] font-poppins font-medium	text-[#1E2B5E] m-2">
                Didn't you say you come from Hawaii?
              </p>
              <p className="text-[16px] font-poppins font-medium	text-[#1E2B5E] m-2">
                ハワイ出身って言ってたよね。
              </p>
              <p className="text-[16px] font-poppins font-medium	text-[#1E2B5E] m-2">
                Hawai shusshin tte itteta yo ne.
              </p>
            </div>
          </div>

          <div className="bg-[#F5F8FF] w-50 my-16 mt-10 rounded-lg ">
            <div className="  m-4">
              <h2 className="text-[14px] font-montserrat text-[#1E2B5E] text-center font-bold mb-4  mb-4 ml-6 mt-4">
                A, Lives in Japan
              </h2>
            </div>

            <div className="text-4xl mb-4 md:px-16 px-5 py-5">
              <div className="flex flex-row justify-around">
                <div className="bg-white w-6/12 rounded-xl    border-0 r-0 mr-2">
                  <h2 className="md:text-sm text-[0.7rem] p-3 text-center font-poppins font-[600] text-white bg-[#1E2B5E] rounded-t-md mb-4">
                    Texbook only
                  </h2>
                  <div className="w-full flex justify-center items-center">
                  <a className=" px-10 md:px-8 py-2 w-90">
                    <BsPlayCircle className=" text-[#1E2B5E]" size={40}/>
                  </a>

                  </div>
                  

                  <h2 className="text-[16px] mb-3 text-center font-poppins text-[#1E2B5E] font-bold ">
                    Play
                  </h2>
                </div>
                <div className="bg-white w-6/12 rounded-xl border-0 r-0 mr-2">
                  <h2 className="md:text-sm text-[0.7rem] p-3 text-center font-poppins font-[600]  text-[#1E2B5E] rounded-t-md bg-[#FFC727] mb-4">
                    Studrill with textbook
                  </h2>
                  <div className="w-full flex justify-center items-center">
                    <a className=" px-10 md:px-8 py-2  ">
                      <BsPlayCircle className="text-[#EFCB27]" size={40} />
                    </a>
                  </div>

                  <h2 className="text-[16px] mb-3 font-poppins text-center text-[#1E2B5E] font-bold ">
                    Play
                  </h2>
                </div>
              </div>
            </div>
            <hr className="m-2 text-bold" />
            <div className="flex flex-col mr-4 ml-4 mt-2 mb-10 text-center">
              <p className="text-[16px] font-poppins font-medium	text-[#1E2B5E] m-2">
                Didn't you say you come from Hawaii?
              </p>
              <p className="text-[16px] font-poppins font-medium	text-[#1E2B5E] m-2">
                ハワイ出身って言ってたよね。
              </p>
              <p className="text-[16px] font-poppins font-medium	text-[#1E2B5E] m-2">
                Hawai shusshin tte itteta yo ne.
              </p>
            </div>
          </div>

          <div className="bg-[#F5F8FF] w-50 my-16 mt-10 rounded-lg ">
            <div className="  m-4">
              <h2 className="text-[14px] font-montserrat text-[#1E2B5E] text-center font-bold mb-4  mb-4 ml-6 mt-4">
                A, Lives in Japan
              </h2>
            </div>

            <div className="text-4xl mb-4 md:px-16 px-5 py-5">
              <div className="flex flex-row justify-around">
                <div className="bg-white w-6/12 rounded-xl    border-0 r-0 mr-2">
                  <h2 className="md:text-sm text-[0.7rem] p-3 text-center font-poppins font-[600] text-white bg-[#1E2B5E] rounded-t-md mb-4">
                    Texbook only
                  </h2>
                  <div className="w-full flex justify-center items-center">
                  <a className=" px-10 md:px-8 py-2 w-90">
                    <BsPlayCircle className=" text-[#1E2B5E]" size={40}/>
                  </a>

                  </div>
                  

                  <h2 className="text-[16px] mb-3 text-center font-poppins text-[#1E2B5E] font-bold ">
                    Play
                  </h2>
                </div>
                <div className="bg-white w-6/12 rounded-xl border-0 r-0 mr-2">
                  <h2 className="md:text-sm text-[0.7rem] p-3 text-center font-poppins font-[600]  text-[#1E2B5E] rounded-t-md bg-[#FFC727] mb-4">
                    Studrill with textbook
                  </h2>
                  <div className="w-full flex justify-center items-center">
                    <a className=" px-10 md:px-8 py-2  ">
                      <BsPlayCircle className="text-[#EFCB27]" size={40} />
                    </a>
                  </div>

                  <h2 className="text-[16px] mb-3 font-poppins text-center text-[#1E2B5E] font-bold ">
                    Play
                  </h2>
                </div>
              </div>
            </div>
            <hr className="m-2 text-bold" />
            <div className="flex flex-col mr-4 ml-4 mt-2 mb-10 text-center">
              <p className="text-[16px] font-poppins font-medium	text-[#1E2B5E] m-2">
                Didn't you say you come from Hawaii?
              </p>
              <p className="text-[16px] font-poppins font-medium	text-[#1E2B5E] m-2">
                ハワイ出身って言ってたよね。
              </p>
              <p className="text-[16px] font-poppins font-medium	text-[#1E2B5E] m-2">
                Hawai shusshin tte itteta yo ne.
              </p>
            </div>
          </div>
        </Slider>
      </div>
      {/* </div> */}
    </section>
  );
};

export default ThreeCardCarousel;
