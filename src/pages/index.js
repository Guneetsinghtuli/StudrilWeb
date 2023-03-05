import Head from "next/head";
import Image from "next/image";
import { Poppins } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "../components/navbar";
import BannerDesk from "../components/bannerdesk";
import Price from "../components/price";
import Table from "../components/table";
import Benefits from "@/components/benefits";
import Footer from "../components/footer";
import Id from "../components/id";
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
      <div class="h-20 bg-gradient-to-b from-[#EFCB27] to-[#F8F9FC]"></div>
      <FeatureM />
      {/* <Id /> */}
      <Table />
      <Upfooter />
      <Footer />
    </div>
  );
}
