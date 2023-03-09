import React from 'react'
import Navbar from '../components/Navbar'
import Test from '../components/Test'
import Footer from '../components/Footer'
import Upfooter from '../mobilecomponents/Upfooter'


const Testimonials = () => {
    return (
        <div className="md:ml-96 md:mr-96">
            <Navbar />
            <Test />
            <div className="h-20 bg-gradient-to-b from-[#EFCB27] to-[#F8F9FC]"></div>
            <Upfooter />
            <Footer />
        </div>
    )
}

export default Testimonials