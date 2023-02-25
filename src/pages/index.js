import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Navbar from "../components/navbar";
import BannerDesk from "../components/bannerdesk";
import Price from "../components/price";
import Table from "../components/table";
import Benefits from "@/components/benefits";
import Footer from "../components/footer";
import Id from "../components/id";
import Test from "../components/test";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Navbar />
      <BannerDesk />
      <Test />
      <Id />
      <Table />
      <Benefits />
      <Price />
      <Footer />
    </>
  );
}
