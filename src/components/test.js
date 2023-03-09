import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { BsPlayCircle,BsPauseCircle } from "react-icons/bs";


const ThreeCardCarousel = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    autoPlay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };


  const [audio1, setAudio1] = useState({
    audio:"",
    isPlaying: false,
  });
  const [audio2, setAudio2] = useState({
    audio:"",
    isPlaying: false,
  });
  const [audio3, setAudio3] = useState({
    audio:"",
    isPlaying: false,

  });
  const [audio4, setAudio4] = useState({
    audio:"",
    isPlaying: false,
  });
  const [audio5, setAudio5] = useState({
    audio:"",
    isPlaying: false,
  });
  const [audio6, setAudio6] = useState({
    audio:"",
    isPlaying: false,
  });
  const [audio7, setAudio7] = useState({
    audio:"",
    isPlaying: false,
  });
  const [audio8, setAudio8] = useState({
    audio:"",
    isPlaying: false,
  });
  

  useEffect(() => {
    setAudio1({
      audio: new Audio("/audio/a/two.mp3"),
      isPlaying: false,
    });
    setAudio2({
      audio: new Audio("/audio/a/one.mp3"),
      isPlaying: false,
    });
    setAudio3({
      audio: new Audio("/audio/c/one.mp3"),
      isPlaying: false,
    });
    setAudio4({
      audio: new Audio("/audio/c/two.mp3"),
      isPlaying: false,
    });
    setAudio5({
      audio: new Audio("/audio/d/one.mp3"),
      isPlaying: false,
    });
    setAudio6({
      audio: new Audio("/audio/d/two.mp3"),
      isPlaying: false,
    });
    setAudio7({
      audio: new Audio("/audio/f/one.mp3"),
      isPlaying: false,
    });
    setAudio8({
      audio: new Audio("/audio/f/two.mp3"),
      isPlaying: false,
    });
  },[])


  return (
    <section className="mt-10 ">
      <div className="relative"></div>
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
                  {
                    audio1.isPlaying && <BsPauseCircle className=" text-[#1E2B5E]" size={40} onClick={()=>{audio1.audio.pause(); setAudio1({...audio1, isPlaying: !audio1.isPlaying})}}/>
                  }
                  {
                    !audio1.isPlaying && <BsPlayCircle className=" text-[#1E2B5E]" size={40} onClick={()=>{audio1.audio.play(); setAudio1({...audio1, isPlaying: !audio1.isPlaying})}}/>
                  }
                    
                  </a>

                  </div>
                  

                  <h2 className="text-[16px] mb-3 text-center font-poppins text-[#1E2B5E] font-bold ">
                    Play
                  </h2>
                </div>
                <div className="bg-white w-6/12 rounded-xl border-0 r-0 mr-2">
                  <h2 className="md:text-sm text-[0.7rem] p-3 text-center font-poppins font-[600]  text-[#1E2B5E] rounded-t-md bg-[#FFC727] mb-4">
                    With STUDRILL
                  </h2>
                  <div className="w-full flex justify-center items-center">
                    <a className=" px-10 md:px-8 py-2  ">
                      {
                    audio2.isPlaying && <BsPauseCircle className=" text-[#1E2B5E]" size={40} onClick={()=>{audio2.audio.pause(); setAudio2({...audio2, isPlaying: !audio2.isPlaying})}}/>
                      }
                      {
                    !audio2.isPlaying && <BsPlayCircle className=" text-[#1E2B5E]" size={40} onClick={()=>{audio2.audio.play(); setAudio2({...audio2, isPlaying: !audio2.isPlaying})}}/>
                      }
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
                C, Lives in Japan
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
                    {
                    audio3.isPlaying && <BsPauseCircle className=" text-[#1E2B5E]" size={40} onClick={()=>{audio3.audio.pause(); setAudio3({...audio3, isPlaying: !audio3.isPlaying})}}/>
                    }
                    {
                    !audio3.isPlaying && <BsPlayCircle className=" text-[#1E2B5E]" size={40} onClick={()=>{audio3.audio.play(); setAudio3({...audio3, isPlaying: !audio3.isPlaying})}}/>
                    }
                  </a>

                  </div>
                  

                  <h2 className="text-[16px] mb-3 text-center font-poppins text-[#1E2B5E] font-bold ">
                    Play
                  </h2>
                </div>
                <div className="bg-white w-6/12 rounded-xl border-0 r-0 mr-2">
                  <h2 className="md:text-sm text-[0.7rem] p-3 text-center font-poppins font-[600]  text-[#1E2B5E] rounded-t-md bg-[#FFC727] mb-4">
                    With STUDRILL
                  </h2>
                  <div className="w-full flex justify-center items-center">
                    <a className=" px-10 md:px-8 py-2  ">
                      {
                    audio4.isPlaying && <BsPauseCircle className=" text-[#1E2B5E]" size={40} onClick={()=>{audio4.audio.pause(); setAudio4({...audio4, isPlaying: !audio4.isPlaying})}}/>

                      }
                      {
                    !audio4.isPlaying && <BsPlayCircle className=" text-[#1E2B5E]" size={40} onClick={()=>{audio4.audio.play(); setAudio4({...audio4, isPlaying: !audio4.isPlaying})}}/>
                      }
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
              Hey, why is the restroom in this restaurant so far back?
              </p>
              <p className="text-[16px] font-poppins font-medium	text-[#1E2B5E] m-2">
              ねえ、どうして洗面所はあんなに奥の方にあるのかな？
              </p>
              <p className="text-[16px] font-poppins font-medium	text-[#1E2B5E] m-2">
              Nē, dōshite senmenjo wa an'nani oku no hou ni aru no ka na?
              </p>
            </div>
          </div>

          <div className="bg-[#F5F8FF] w-50 my-16 mt-10 rounded-lg ">
            <div className="  m-4">
              <h2 className="text-[14px] font-montserrat text-[#1E2B5E] text-center font-bold mb-4  mb-4 ml-6 mt-4">
               D, Lives Outside Japan
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
                    {
                    audio5.isPlaying && <BsPauseCircle className=" text-[#1E2B5E]" size={40} onClick={()=>{audio5.audio.pause(); setAudio5({...audio5, isPlaying: !audio5.isPlaying})}}/>

                    }
                    {
                    !audio5.isPlaying && <BsPlayCircle className=" text-[#1E2B5E]" size={40} onClick={()=>{audio5.audio.play(); setAudio5({...audio5, isPlaying: !audio5.isPlaying})}}/>
                    }
                  </a>

                  </div>
                  

                  <h2 className="text-[16px] mb-3 text-center font-poppins text-[#1E2B5E] font-bold ">
                    Play
                  </h2>
                </div>
                <div className="bg-white w-6/12 rounded-xl border-0 r-0 mr-2">
                  <h2 className="md:text-sm text-[0.7rem] p-3 text-center font-poppins font-[600]  text-[#1E2B5E] rounded-t-md bg-[#FFC727] mb-4">
                    With STUDRILL
                  </h2>
                  <div className="w-full flex justify-center items-center">
                    <a className=" px-10 md:px-8 py-2  ">
                      {
                    audio6.isPlaying && <BsPauseCircle className=" text-[#1E2B5E]" size={40} onClick={()=>{audio6.audio.pause(); setAudio6({...audio6, isPlaying: !audio6.isPlaying})}}/>
                      }
                      {
                    !audio6.isPlaying && <BsPlayCircle className=" text-[#1E2B5E]" size={40} onClick={()=>{audio6.audio.play(); setAudio6({...audio6, isPlaying: !audio6.isPlaying})}}/>
                      }
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
              Despite the bad service, at least the foods are tasty.
              </p>
              <p className="text-[16px] font-poppins font-medium	text-[#1E2B5E] m-2">
              悪いサービスにもかかわらず、 食事はおいしいだけましだ。
              </p>
              <p className="text-[16px] font-poppins font-medium	text-[#1E2B5E] m-2">
              Warui sābisu nimokakawarazu, shokuji wa oishī dake mashida.
              </p>
            </div>
          </div>

          <div className="bg-[#F5F8FF] w-50 my-16 mt-10 rounded-lg ">
            <div className="  m-4">
              <h2 className="text-[14px] font-montserrat text-[#1E2B5E] text-center font-bold mb-4  mb-4 ml-6 mt-4">
               F, Lives Outside Japan
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
                    {
                    audio7.isPlaying && <BsPauseCircle className=" text-[#1E2B5E]" size={40} onClick={()=>{audio7.audio.pause(); setAudio7({...audio7, isPlaying: !audio7.isPlaying})}}/>
                    }
                    {
                    !audio7.isPlaying && <BsPlayCircle className=" text-[#1E2B5E]" size={40} onClick={()=>{audio7.audio.play(); setAudio7({...audio7, isPlaying: !audio7.isPlaying})}}/>
                    }
                  </a>

                  </div>
                  

                  <h2 className="text-[16px] mb-3 text-center font-poppins text-[#1E2B5E] font-bold ">
                    Play
                  </h2>
                </div>
                <div className="bg-white w-6/12 rounded-xl border-0 r-0 mr-2">
                  <h2 className="md:text-sm text-[0.7rem] p-3 text-center font-poppins font-[600]  text-[#1E2B5E] rounded-t-md bg-[#FFC727] mb-4">
                    With STUDRILL
                  </h2>
                  <div className="w-full flex justify-center items-center">
                    <a className=" px-10 md:px-8 py-2  ">
                      {
                    audio8.isPlaying && <BsPauseCircle className=" text-[#1E2B5E]" size={40} onClick={()=>{audio8.audio.pause(); setAudio8({...audio8, isPlaying: !audio8.isPlaying})}}/>
                      }
                      {
                    !audio8.isPlaying && <BsPlayCircle className=" text-[#1E2B5E]" size={40} onClick={()=>{audio8.audio.play(); setAudio8({...audio8, isPlaying: !audio8.isPlaying})}}/>
                      }
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
              Ryan spends so much on his car that he runs out of money quickly.
              </p>
              <p className="text-[16px] font-poppins font-medium	text-[#1E2B5E] m-2">
              ライアンは自分の車にあまりにも多くのお金を費やすので すぐにお金が無くなる。
              </p>
              <p className="text-[16px] font-poppins font-medium	text-[#1E2B5E] m-2">
              Raian wa jibun no kuruma ni amarini mo ōku no okane o tsuiyasunode, sugu ni okane ga nakunaru.
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