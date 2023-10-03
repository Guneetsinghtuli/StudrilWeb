import React, { useState } from 'react'
import { FaCheck, FaCheckCircle, FaTimes } from 'react-icons/fa'

const Pricing = () => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

  return (
    <div>
        <h1 className='md:text-[25px] text-[24px] font-poppins font-bold text-[#1E2B5E] text-center'>Speak natural Japanese confidently now!</h1>
        <div className='px-5'>
        <div className='container flex justify-around slider bg-[#F8F9FC] my-4 rounded-full'>
            <div className={`w-2/4 text-center p-2 rounded-full cursor-pointer text-black   ${toggle ? '' : 'bg-[#EFCB27] slideLeft ' }`} onClick={handleToggle}>
            <div className='3month'>
                <p className='font-poppins font-semibold'>3 Months</p>
            </div>
            </div>
            <div className={`w-2/4 text-center p-2 rounded-full cursor-pointer font-semibold  ${toggle ? 'bg-[#EFCB27] slideRight' : ''}`} onClick={handleToggle}>
            <div className='6month'>
                <p className='font-poppins font-semibold'>6 Months</p>
            </div>
            </div>
        </div>
        </div>
        <div className='flex justify-evenly'>
            <div className={` border-2 w-2/5 px-2 py-2 cursor-pointer shadow-md rounded-md ${toggle ? '' : 'border-[#EFCB27] borderAnimationWillChangeColorAtEveryCorner'} `} onClick={handleToggle}>
                <div className='text-center text-[#1E2B5E] '>
                    <div className='p-2 py-3 bg-[#ffc72733] rounded-md'>
                        <p className='font-poppins font-bold text-[14px]'>3 Months</p>
                    </div>
                    <div className='text-center p-2 my-3'>
                        <p className='font-poppins text-[#6563D0] text-[20px] font-bold'>¥5,390/month</p>
                        <p className='font-poppins text-[#6563D0] text-[14px] font-bold'>¥5929 +税込</p>
                    </div>
                    
                </div>
            </div>
            <div className={`border-2 w-2/5 px-2 py-2 cursor-pointer shadow-md rounded-md relative ${toggle ? 'border-[#EFCB27] borderAnimationWillChangeColorAtEveryCorner' : ''}`} onClick={handleToggle}>
                <div className='text-center '>
                <div className='p-2 py-3 bg-[#ffc72733] rounded-md'>
                        <p className='font-poppins font-bold text-[14px]'>6 Months</p>
                    </div>
                    <div className='text-center p-2 my-3'>
                        <p className='font-poppins text-[#6563D0] text-[20px] font-bold'>¥5,990/month</p>
                        <p className='font-poppins text-[#6563D0] text-[14px] font-bold'>¥6589 +税込</p>
                    </div>
                </div>
                <div className='absolute left-[50%] w-[100px] -translate-x-1/2 font-poppins bottom-[-18px] bg-[#2BA80C] rounded-full p-2 text-center text-[12px] font-semibold text-white'>
                    <p>Best Deals!</p>

                </div>
            </div>
        </div>
        <div className='px-5 my-5'>
            <div className='bg-[#FFEBF0] border-2 rounded border-[#D0637D] mx-8 relative my-5 mt-10'>
                <div className='absolute right-[-10px] top-[-10px] bg-[#D0637D] p-1 rounded-full'>
                    <FaTimes className='text-white text-[20px] cursor-pointer'/>
                </div>
                <div className='p-3'>
                <table className='font-poppins text-[13px] p-3 text-[#1E2B5E]'>
                    <tbody>
                    <tr className='my-5'>
                        <td className='w-[150px] align-top font-semibold'><p>Other apps/ school:</p></td>
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

            <div className='bg-[#2ba80c26] border-2 rounded border-[#2ba80c] mx-8 relative'>
                <div className='absolute right-[-10px] top-[-10px] bg-[#2ba80c] p-1 rounded-full'>
                    <FaCheck className='text-white text-[20px] cursor-pointer' />
                </div>
                <div className='p-3'>
                <table className='font-poppins text-[13px] p-3 text-[#1E2B5E]'>
                    <tbody>
                    <tr className='my-5'>
                        <td className='w-[150px] align-top font-semibold'>Studrill:</td>
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


            <div className='border-2 border-[#EFCB27] rounded-md text-[12px] mx-8 my-5  px-2 py-3 text-[#1E2B5E]'>
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




        </div>

        <div className='mx-10 my-3'>
            <button className='rounded-full p-2 w-full flex justify-center items-center bg-[#1E2B5E] text-white font-poppins font-bold'>Coming to you this Autumn </button>
            
        </div>
        
    </div>
  )
}

export default Pricing