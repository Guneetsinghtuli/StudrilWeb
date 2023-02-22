import React from 'react'
import PriceCard from '../components/pricecard'


const prices = [
    {
      title: 'Basic Plan',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: '9800'
    },
    {
      title: 'Standard Plan',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: '23,800'
    },
    {
      title: 'Premium Plan',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      price: '9800'
    },
  ]
  
  const Pricing = () => {
    return (
        <>
        <div className='text-3xl text-center text-bold mb-4 p-4 font-serif text-[#1E2B5E]'>
            <h1>Choose your Investment</h1>
        </div>
          <div className="flex flex-wrap ">
        {prices.map((price, index) => (
          <PriceCard key={index} title={price.title} description={price.description} price={price.price} />
        ))}
      </div>
        </>
     
    )
  }
  
  export default Pricing