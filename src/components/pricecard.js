import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

import React from 'react'
const PriceCard = ({ title, description, price }) => {
    return (
     <>
      <div>
      <div className=" w-1/3 p-6 m-2 flex flex-col justify-around	 bg-white shadow-xl transform transition duration-500 hover:scale-110">
        <div className="text-center p-4">
          <h2 className="text-lg font-bold  bg-[#EFCB27]">{title}</h2>
        </div>
        <div className="flex-grow flex items-center justify-center">
          <h1 className="text-7xl font-bold pb-4">${price}</h1>
        </div>
        <hr/>
        <p className="text-gray-600 pt-4">{description}</p>
        <div className="text-center pt-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full ">
            Buy Now
          </button>
        </div>
      </div>
      </div>
     </>
    )
  }
  
  export default PriceCard
  
  
  

