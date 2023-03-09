import Navbar from '@/components/navbar'
import Test from '@/components/test'
import Footer from '@/components/Footer.js'
import Upfooter from '@/mobilecomponents/upfooter'


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