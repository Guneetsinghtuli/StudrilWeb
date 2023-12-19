import React, { useState } from 'react'
import { FaAppStoreIos, FaApple, FaApplePay, FaCheck, FaCheckCircle, FaGooglePay, FaGooglePlay, FaTimes } from 'react-icons/fa'
import Image from 'next/image'
import Appstore from '../assets/black.svg'
const Pricing = () => {
    const [toggle, setToggle] = useState(0)

    const handleToggle = (val) => {
        setToggle(val)
    }

  return (
    <div>
        <h1 className='md:text-[25px] text-[24px] font-poppins font-bold text-[#1E2B5E] text-center'>Speak natural Japanese confidently now!</h1>
        <div className='px-5'>
        <div className='container flex justify-around slider bg-[#F8F9FC] my-4 rounded-full'>
        <div className={`w-2/4 text-center p-2 rounded-full cursor-pointer text-black   ${toggle == 0 ? 'bg-[#EFCB27] slideLeft ' : '' }`} onClick={()=>{
            handleToggle(0)
        
        }}>
            <div className='3month'>
                <p className='font-poppins font-semibold'>1 Month</p>
            </div>
            </div>
            <div className={`w-2/4 text-center p-2 rounded-full cursor-pointer text-black   ${toggle == 1 ? 'bg-[#EFCB27] ' : '' }`} onClick={()=>{
            handleToggle(1)
            }}>
            <div className='3month'>
                <p className='font-poppins font-semibold'>3 Month</p>
            </div>
            </div>
            <div className={`w-2/4 text-center p-2 rounded-full cursor-pointer font-semibold  ${toggle == 2 ? 'bg-[#EFCB27] slideRight' : ''}`} onClick={()=>{
            handleToggle(2)
            
            }}>
            <div className='6month'>
                <p className='font-poppins font-semibold'>6 Month</p>
            </div>
            </div>
        </div>
        </div>
        <div className='flex  justify-center items-center w-100'>
        <div className={` border-2 w-2/5 px-2 py-2 m-2 w-9/12 cursor-pointer shadow-md rounded-md ${toggle == 0 ? 'border-[#EFCB27] borderAnimationWillChangeColorAtEveryCorner' : ''} `} onClick={()=>{
            handleToggle(0)
        }}>
                <div className='text-center text-[#1E2B5E] '>
                    <div className='p-2 py-3 bg-[#ffc72733] rounded-md'>
                        <p className='font-poppins font-bold text-[14px]'>1 Month</p>
                    </div>
                    <div className='text-center p-2 my-3'>
                        <p className='font-poppins text-[#6563D0] text-[16px] md:text-[20px] font-bold'>¥850</p>
                        <p className='font-poppins text-[#6563D0] text-[14px] font-bold'>(US$5.99)</p>
                    </div>
                    
                </div>
            </div>
            <div className={` border-2 w-2/5 px-2 py-2 m-2 w-9/12 cursor-pointer shadow-md rounded-md ${toggle == 1 ? 'border-[#EFCB27] borderAnimationWillChangeColorAtEveryCorner' : ''} `} onClick={()=>{
            handleToggle(1)
            }}>
                <div className='text-center text-[#1E2B5E] '>
                    <div className='p-2 py-3 bg-[#ffc72733] rounded-md'>
                        <p className='font-poppins font-bold text-[14px]'>3 Month</p>
                    </div>
                    <div className='text-center p-2 my-3'>
                        <p className='font-poppins text-[#6563D0] text-[16px] md:text-[20px] font-bold'>¥2,000</p>
                        <p className='font-poppins text-[#6563D0] text-[14px] font-bold'>(US$14.49)</p>
                    </div>
                    
                </div>
            </div>
            <div className={`border-2 w-2/5 px-2 py-2 m-2 w-9/12 cursor-pointer shadow-md rounded-md relative ${toggle == 2 ? 'border-[#EFCB27] borderAnimationWillChangeColorAtEveryCorner' : ''}`} onClick={()=>{
            handleToggle(2)
            
            
            }}>
                <div className='text-center '>
                <div className='p-2 py-3 bg-[#ffc72733] rounded-md'>
                        <p className='font-poppins font-bold text-[14px]'>6 Month</p>
                    </div>
                    <div className='text-center p-2 my-3'>
                        <p className='font-poppins text-[#6563D0] text-[16px] md:text-[20px] font-bold'>¥3,990</p>
                        <p className='font-poppins text-[#6563D0] text-[14px] font-bold'>(US$28.49)</p>
                    </div>
                </div>
                <div className='absolute left-[50%] w-[100px] -translate-x-1/2 font-poppins bottom-[-18px] bg-[#2BA80C] rounded-full p-2 text-center text-[12px] font-semibold text-white'>
                    <p>Best Deals!</p>

                </div>
            </div>
        </div>
        {/* <div className='px-0 md:px-5 my-5'>
            <div className='bg-[#FFEBF0] border-2 rounded border-[#D0637D] md:mx-8 mx-4 relative my-5 mt-10'>
                <div className='absolute right-[-10px] top-[-10px] bg-[#D0637D] p-1 rounded-full'>
                    <FaTimes className='text-white text-[20px] cursor-pointer'/>
                </div>
                <div className='p-3'>
                <table className='font-poppins text-[13px] p-3 text-[#1E2B5E]'>
                    <tbody>
                    <tr className='my-5'>
                        <td className='md:w-[150px] w-[100px] align-top font-semibold'><p>Other apps:</p></td>
                        <td>
                            <p>“Hey, can you describe how is your day today?”</p>
                        </td>
                    </tr>
                    <tr>
                        <td className='align-top font-semibold'>
                            <p>Your answer:</p>
                        </td>
                        <td>
                            <p>“It was okay. I went to office and supermarket after to buy some groceries.” (In Japanese)</p>
                        </td>
                    </tr>
                    <tr>
                        <td className='align-top font-semibold'>
                            <p>Feedback:</p>

                        </td>
                        <td>
                            <p>Nihongo jouzu desu ne..</p>
                        </td>
                    </tr>
                    </tbody>

                </table>
                </div>
            </div>

            <div className='bg-[#2ba80c26] border-2 rounded border-[#2ba80c] md:mx-8 mx-4 relative'>
                <div className='absolute right-[-10px] top-[-10px] bg-[#2ba80c] p-1 rounded-full'>
                    <FaCheck className='text-white text-[20px] cursor-pointer' />
                </div>
                <div className='p-3'>
                <table className='font-poppins text-[13px] p-3 text-[#1E2B5E]'>
                    <tbody>
                    <tr className='my-5'>
                        <td className='md:w-[150px] w-[100px] align-top font-semibold'>Studrill:</td>
                        <td>
                        Can you explain to me that Today you have finished doing your work, met with clients, and signed a deal?
                        </td>
                    </tr>
                    <tr>
                        <td className='align-top font-semibold'>
                            Your answer:
                        </td>
                        <td>
                        “Emmm, I met with clients, eto.. and do a deal, eto.. so I can finish the work..” (In Japanese)
                        </td>
                    </tr>
                    <tr>
                        <td className='align-top font-semibold'>
                            Feedback:
                        </td>
                        <td>
                        Speech analysis, accurate score, and feedback to your grammar, vocabulary words, cohesion, phrases, and pronunciation.
                        </td>
                    </tr>
                    </tbody>

                </table>
                </div>
            </div>


            <div className='border-2 border-[#EFCB27] rounded-md text-[12px] md:mx-8 mx-4 my-5  px-2 py-3 text-[#1E2B5E]'>
            <div className='flex items-center my-2'>
            <div className='mx-3'>
                    <FaCheckCircle size={15} color='#EFCB27'/>
                </div>
                <div className='font-poppins'>
                    <p>From work, health, to relationships, we customized the topic and all the contents to make it relevant in daily life.</p>
                </div>
            </div>
            <div className='flex items-center my-2'>
            <div className='mx-3'>
                    <FaCheckCircle size={15} color='#EFCB27'/>
                </div>
                <div className='font-poppins'>
                    <p>Speak in your own pace, and still get accurate speech analysis & feedback - just like Private Class!</p>
                </div>
            </div>
            <div className='flex items-center my-2'>
            <div className='mx-3'>
                    <FaCheckCircle size={15} color='#EFCB27'/>
                    </div>
                    <div className='font-poppins'>
                    <p>Get used to real Japanese pronunciation and understand what Japanese people say through our listening training.</p>
                    </div>
            </div>
            <div className='flex items-center my-2'>
            <div className='mx-3'>
                    <FaCheckCircle size={15} color='#EFCB27'/>
                    </div>
                    <div className='font-poppins'>
                    <p>No Japanese friends? Just talk to Studrill AI and immersed in Natural Conversation. </p>
                    </div>

            </div>
            <div className='flex items-center my-2'>
            <div className='mx-3'>
                    <FaCheckCircle size={15} color='#EFCB27'/>
                    </div>
                    <div className='font-poppins'>
                    <p>Adopt the “Speak first, grammar later” method and only speak spoken and relevant grammar patterns.</p> 
                    </div>  
            </div>
            <div className='flex items-center my-2'>
            <div className='mx-3'>
                    <FaCheckCircle size={15} color='#EFCB27'/>
                    </div>
                    <div className='font-poppins'>
                    <p>Never ever worried about forgetting the Vocabulary and Kanji again</p>
                    </div>
            </div>
            <div className='flex items-center my-2'>
            <div className='mx-3'>
                    <FaCheckCircle size={15} color='#EFCB27'/>
                    </div>
                    <div className='font-poppins'>
                    <p>Accessible, affordable, and practicable - whether you live in Brazil or Okinawa; whether you’re student or expats, Studrill is available for you anytime anywhere!</p>
                    </div>
            </div>


            </div>




        </div> */}

        <div className='mx-10 my-10'>
            {/* <button className='rounded-full p-2 w-full flex justify-center items-center bg-[#EFCB27] text-white font-poppins font-bold'>Coming to you this December </button> */}
            
        </div>
        
        <div className='flex items-center justify-center'>
            <a href="https://apps.apple.com/us/app/studrill-japanese-speaking/id6451344390?itsct=apps_box_badge&amp;itscg=30200" style={{display: 'inline-block', overflow: 'hidden', borderRadius: '13px', width: '200px', height: '83px'}}>
                <img src="https://tools.applemediaservices.com/api/badges/download-on-the-app-store/black/en-us?size=250x83&amp;releaseDate=1702512000" alt="Download on the App Store" style={{borderRadius: '13px', width: '250px', height: '83px'}} />
            </a>
            <div className='w-[30px]'></div>
            <div className=''>
                    {/* <img className='w-[180px]' src="https://play.google.com/intl/en_us/badges/images/generic/en-play-badge.png"></img> */}
                    <a href='https://play.google.com/store/apps/details?id=com.studrill.studrill&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1' style={{width: '200px', height: '83px'}}>
                        <img alt='Get it on Google Play' src='https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png' style={{width: '250px', }}/>
                        </a>
            </div>

        </div>
        
    </div>
  )
}

export default Pricing