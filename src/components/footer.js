import Link from 'next/link';
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';
import Apple from '../assets/applelogo.png'
import Google from '../assets/google.png'
const Footer = () => {
  return (
    <>
       <footer className="bg-[#1E2B5E] text-white ">
      <div className=" h-full container flex  mx-auto py-6 px-4">
        <div className=" w-full h-full flex flex-wrap justify-between items-center place-content-around">
          <div className='my-6'>
            <h1 className="text-4xl font-montserrat font-bold text-white mb-2">Studrill </h1>
            <h2 className='text-xl  font-poppins  text-white mb-2 mt-2'>We make you speak.</h2>
            <p className="text-sm font-poppins" href='contact@jpcourse.com'>Contact us at <br/> contact@studrill.com</p>
            
          </div>
          <div className='flex flex-row place-content-around'>
          <div className='place-content-around mx-0 md:mx-5 '>
            <h3 className="text-xl font-montserrat  text-[#EFCB27] mb-2">Studrill</h3>
            <ul className="text-sm">
              <li className='my-1'><a href="#" className="hover:text-white font-poppins my-8">Testimonies</a></li>
              <li className='my-1'><a href="#" className="hover:text-white font-poppins my-8">Features</a></li>
              <li className='my-1'><a href="#" className="hover:text-white font-poppins my-8">Why Studrill</a></li>
              <li className='my-1'><a href="#" className="hover:text-white font-poppins my-7 ">Blog</a></li>
            </ul>
          </div>

          <div className='mx-6'>
            <h3 className="text-xl font-montserrat font-semibold text-[#EFCB27] mb-2">Company</h3>
            <ul className="text-sm h-full">
              <li className='my-1'><a href="/privacypolicy" className="hover:text-white font-poppins my-6">Privacy Policy</a></li>
              <li className='my-1'><a href="/terms" className="hover:text-white font-poppins my-6">Terms of Service</a></li>
            </ul>
          </div>
          </div>
          
       

        </div>
        
      </div>
    </footer>
    <footer className="bg-[#EFCB27] ">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-white text-sm font-montserrat text-center sm:text-left">
          © 2023 Studrill. All Rights Reserved.
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <Link legacyBehavior href="https://m.facebook.com/studrill.ofcl/">
            <a className="text-[#1E2B5E] text-xl mx-3">
              <FaFacebook />
            </a>
          </Link>
          <Link legacyBehavior href="https://www.linkedin.com/company/studrill-jp/">
            <a className="ml-3 text-[#1E2B5E] text-xl mx-3">
              <FaLinkedin />
            </a>
          </Link>
          <Link legacyBehavior href="https://instagram.com/studrill?igshid=YmMyMTA2M2Y=">
            <a className="ml-3 text-[#1E2B5E] text-xl mx-3">
              <FaInstagram />
            </a>
          </Link>
          <Link legacyBehavior href="https://www.tiktok.com/@studrill?_t=8aRYJiIuttv&_r=1">
            <a className="ml-3 text-[#1E2B5E] text-xl mx-3">
              <FaTiktok />
            </a>
          </Link>
        </span>
      </div>
    </footer>
    </>
   
  );
};

export default Footer;
