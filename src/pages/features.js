import FeatureM from "@/mobilecomponents/feature";
import Upfooter from "@/mobilecomponents/upfooter";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
const Features = () => {
    return(

        <div className="md:ml-96 md:mr-96">
        <Navbar/>
            <FeatureM/>
            <Upfooter/>
            <Footer/>
        </div>
    )
};

export default Features;