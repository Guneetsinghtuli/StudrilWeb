import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Banner from "../assets/banner.png";
import ImageB from "../assets/benefit1.png";

const bannerdesk = () => {
  return (
    <section>
      <div className="bg-white-100 mt-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2">
              <h2 className="text-2xl  pl-4 font-bold  text-[#1E2B5E]">
                Learn Express
              </h2>
              <h2 className="text-2xl pl-4 font-bold mb-2 text-[#1E2B5E]">
                and Speak
              </h2>
              <div className="p-4">
                <p className="text-gray-700 mb-4">
                  JPCourse helps you overcome feeling stupid when speaking
                  Japanese because we make you speak.
                </p>
                <div class="items-left justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 mt-10">
                  <a
                    href="#"
                    class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                  >
                    <svg
                      class="mr-3 w-7 h-7"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="apple"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 384 512"
                    >
                      <path
                        fill="currentColor"
                        d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                      ></path>
                    </svg>
                    <div class="text-left">
                      <div class="mb-1 text-xs">Download on the</div>
                      <div class="-mt-1 font-sans text-sm font-semibold">
                        Mac App Store
                      </div>
                    </div>
                  </a>
                  <a
                    href="#"
                    class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
                  >
                    <svg
                      class="mr-3 w-7 h-7"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fab"
                      data-icon="google-play"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="currentColor"
                        d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"
                      ></path>
                    </svg>
                    <div class="text-left">
                      <div class="mb-1 text-xs">Get in on</div>
                      <div class="-mt-1 font-sans text-sm font-semibold">
                        Google Play
                      </div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 md:pr-8">
              <Image
                src={Banner}
                alt="Example image"
                width={800}
                height={800}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default bannerdesk;