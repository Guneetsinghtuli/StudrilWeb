import Navbar from '../components/Navbar.js'
import Test from '../components/Test.js'
import Footer from '../components/Footer.js'
import Upfooter from '../mobilecomponents/Upfooter.js'


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