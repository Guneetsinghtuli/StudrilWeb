import Navbar from "../components/navbar";
import Table from "../components/table";
import Footer from "../components/footer";
import Test from "../components/test";
import MainM from "../mobilecomponents/main";
import FeatureM from "../mobilecomponents/feature";
import useMediaQuery from "@/components/hooks/useMobile";
import Upfooter from "../mobilecomponents/upfooter";

export default function Home() {
  const isDesktop = useMediaQuery("(min-width: 960px)");

  return (
    <div className="md:ml-96 md:mr-96">
      <Navbar />
      <MainM />
      <Test />
      <div className="h-20 bg-gradient-to-b from-[#EFCB27] to-[#F8F9FC]"></div>
      <FeatureM />
      <Table />
      <Upfooter />
      <Footer />
    </div>
  );
}
