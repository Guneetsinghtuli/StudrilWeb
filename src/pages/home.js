import Navbar from "../components/navbar";
import Table from "../components/table";
import Footer from "../components/footer";
import Test from "../components/test";
import MainM from "../mobilecomponents/main";
import FeatureM from "../mobilecomponents/feature";
import Upfooter from "../mobilecomponents/upfooter";
import Pricing from "@/components/pricing";
  

export default function Homesection() {
  return (
   <div className="md:ml-96 md:mr-96">
        <Navbar />
      <MainM />
      <Test />
      <div className="h-20 bg-gradient-to-b from-[#EFCB27] to-[#F8F9FC]"></div>
      <FeatureM />
      <Table />
      <Pricing />
      {/* <Upfooter /> */}
      <Footer />
     </div>
  )
}
