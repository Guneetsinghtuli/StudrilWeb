import Link from "next/link";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import PriceSlider from '../components/testcard';

const TestPage = () => {
  return (
    <div>
      <h1>Our Prices</h1>
      <PriceSlider />
    </div>
  );
};

export default TestPage;
