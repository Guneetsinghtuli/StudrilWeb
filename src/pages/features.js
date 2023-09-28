import FeatureM from "@/mobilecomponents/feature";
import Upfooter from "@/mobilecomponents/upfooter";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Pricing from "@/components/pricing";
const Features = () => {
    return(

        <div className="md:ml-96 md:mr-96">
        <Navbar/>
            <FeatureM/>
            <Pricing/>
            <Upfooter/>
            <Footer/>
        </div>
    )
};

export default Features;