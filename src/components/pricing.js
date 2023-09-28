import React, { useState } from 'react'
import { FaAppStore, FaCheck, FaCheckCircle, FaCross, FaGooglePlay, FaTimes } from 'react-icons/fa'

const Pricing = () => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = () => {
        setToggle(!toggle)
    }

  return (
    <div>
        <h1 className='md:text-[25px] text-[20px] font-poppins font-bold text-[#1E2B5E] text-center'>Speak natural Japanese confidently now!</h1>
        <div className='px-5'>
        <div className='container flex justify-around slider bg-[#F8F9FC] my-4 rounded-full'>
            <div className={`w-2/4 text-center p-2 rounded-full cursor-pointer  ${toggle ? '' : 'bg-[#1E2B5E] slideLeft ' }`} onClick={handleToggle}>
            <div className='3month'>
                <p className='font-poppins'>3 Months</p>
            </div>
            </div>
            <div className={`w-2/4 text-center p-2 rounded-full cursor-pointer  ${toggle ? 'bg-[#1E2B5E] slideRight' : ''}`} onClick={handleToggle}>
            <div className='6month'>
                <p className='font-poppins'>6 Months</p>
            </div>
            </div>
        </div>
        </div>
        <div className='flex justify-evenly'>
            <div className={`border-2 w-2/5 p-5 rounded bg-[#EFCB27] cursor-pointer ${toggle ? '' : 'border-[#1E2B5E] borderAnimationWillChangeColorAtEveryCorner'} `} onClick={handleToggle}>
                <div className='text-center text-[#1E2B5E] '>
                    <p className='font-poppins'>3 Months</p>
                    <p className='font-poppins'>¥5,390/month</p>
                    <p className='font-poppins'>¥5929 +税込</p>
                </div>
            </div>
            <div className={`border-2 w-2/5 p-5 rounded bg-[#EFCB27] cursor-pointer ${toggle ? 'border-[#1E2B5E] borderAnimationWillChangeColorAtEveryCorner' : ''}`} onClick={handleToggle}>
                <div className='text-center '>
                    <p className='font-poppins'>6 Months</p>
                    <p className='font-poppins'>¥5,990/month</p>
                    <p className='font-poppins'>¥6589 +税込</p>
                </div>
            </div>
        </div>
        <div className='px-5 my-5'>
            <div className='font-poppins px-3'>
                <div className='flex items-center'>
                    <FaTimes className='text-[#ed1b2e]' size={30}/>
                    <div className='px-3 text-[12px]'>
                        <p><span className='font-bold'>Other apps/ school:</span>  “Hey, can you describe how is your day today?”</p>
                        <p><span className='font-bold'>Your answer:</span> “It was okay. I went to office and supermarket after to buy some groceries.” (In Japanese)</p>
                        <p><span className='font-bold'>Feedback:</span> Nihongo jouzu desu ne..</p>
                    </div>
                </div>
                <div className='flex items-center my-4'>
                    <FaCheck className='text-[#008000]' size={40}/>
                    <div className='px-3 text-[12px]'>
                        <p><span className='font-bold'>Studrill:</span>  Can you explain to me that ‘Today you have finished doing your work, met with clients, and signed a deal?’</p>
                        <p><span className='font-bold'>Your answer:</span> “Emmm, I met with clients, eto.. and do a deal, eto.. so I can finish the work..” (In Japanese)</p>
                        <p><span className='font-bold'>Feedback:</span> Speech analysis, accurate score, and feedback to your grammar, vocabulary words, cohesion, phrases, and pronunciation.</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='my-3 px-5 text-[12px]'>
            <div className='flex items-center'>
                <div className='mx-3'>
                    <FaCheckCircle size={15} color='#EFCB27'/>
                </div>
                <div className='font-poppins '>
                    <p>Speak Natural Japanese and become confident to speak! </p>
                </div>
            </div>
            <div className='flex items-center'>
            <div className='mx-3'>
                    <FaCheckCircle size={15} color='#EFCB27'/>
                </div>
                <div className='font-poppins'>
                    <p>From work, health, to relationships, we customized the topic and all the contents to make it relevant in daily life.</p>
                </div>
            </div>
            <div className='flex items-center'>
            <div className='mx-3'>
                    <FaCheckCircle size={15} color='#EFCB27'/>
                </div>
                <div className='font-poppins'>
                    <p>Speak in your own pace, and still get accurate speech analysis & feedback - just like Private Class!</p>
                </div>
            </div>
            <div className='flex items-center'>
            <div className='mx-3'>
                    <FaCheckCircle size={15} color='#EFCB27'/>
                    </div>
                    <div className='font-poppins'>
                    <p>Get used to real Japanese pronunciation and understand what Japanese people say through our listening training.</p>
                    </div>
            </div>
            <div className='flex items-center'>
            <div className='mx-3'>
                    <FaCheckCircle size={15} color='#EFCB27'/>
                    </div>
                    <div className='font-poppins'>
                    <p>No Japanese friends? Just talk to Studrill AI and immersed in Natural Conversation. </p>
                    </div>

            </div>
            <div className='flex items-center'>
            <div className='mx-3'>
                    <FaCheckCircle size={15} color='#EFCB27'/>
                    </div>
                    <div className='font-poppins'>
                    <p>Adopt the “Speak first, grammar later” method and only speak spoken and relevant grammar patterns.</p> 
                    </div>  
            </div>
            <div className='flex items-center'>
            <div className='mx-3'>
                    <FaCheckCircle size={15} color='#EFCB27'/>
                    </div>
                    <div className='font-poppins'>
                    <p>Never ever worried about forgetting the Vocabulary and Kanji again</p>
                    </div>
            </div>
            <div className='flex items-center'>
            <div className='mx-3'>
                    <FaCheckCircle size={15} color='#EFCB27'/>
                    </div>
                    <div className='font-poppins'>
                    <p>Accessible, affordable, and practicable - whether you live in Brazil or Okinawa; whether you’re student or expats, Studrill is available for you anytime anywhere!</p>
                    </div>
            </div>

            
        </div>
        <div className='mx-10 my-3'>
            <button className='rounded-md p-2 w-full flex justify-center items-center bg-[#1E2B5E] text-white font-poppins'>Coming to you this Autumn 
            <FaAppStore className='mx-[5px]'/>
            <FaGooglePlay className='mx-[5px]'/>
            </button>
        </div>
    </div>
  )
}

export default Pricing