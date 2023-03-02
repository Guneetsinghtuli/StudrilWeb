import Link from 'next/link';
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Apple from '../assets/applelogo.png'
import Google from '../assets/google.png'
const Footer = () => {
  return (
    <>
       <footer className="bg-[#1E2B5E] text-white">
      <div className="container mx-auto py-6 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h1 className="text-xl font-semibold text-white mb-2">JPCourse </h1>
            <h2 className='text-lg font-semibold text-white mb-2 mt-2'>We make you speak.</h2>
            <p className="text-sm" href='contact@jpcourse.com'>Contact us at contact@jpcourse.com</p>
            
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-[#EFCB27] mb-2">Resources</h3>
            <ul className="text-sm">
              <li><a href="#" className="hover:text-white">Documentation</a></li>
              <li><a href="#" className="hover:text-white">Support</a></li>
              <li><a href="#" className="hover:text-white">Community</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-[#EFCB27] mb-2">Legal</h3>
            <ul className="text-sm">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms of Use</a></li>
              <li><a href="#" className="hover:text-white">License</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-[#EFCB27] mb-2">Connect</h3>
            <ul className="text-sm">
              <li><a href="#" className="hover:text-white">Facebook</a></li>
              <li><a href="#" className="hover:text-white">Twitter</a></li>
              <li><a href="#" className="hover:text-white">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div class="items-left justify-center space-y-2 sm:flex md:flex-row sm:space-y-0 sm:space-x-4 mt-10">
        <a href="#" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <svg class="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="apple" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path></svg>
            <div class="text-left">
                <div class="mb-1 text-xs">Download on the</div>
                <div class="-mt-1 font-sans text-sm font-semibold">Mac App Store</div>
            </div>
        </a>
        <a href="#" class="w-full sm:w-auto bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700">
            <svg class="mr-3 w-7 h-7" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google-play" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 60.1-34.1c18-14.3 18-46.5-1.2-60.8zM104.6 499l280.8-161.2-60.1-60.1L104.6 499z"></path></svg>
            <div class="text-left">
                <div class="mb-1 text-xs">Get in on</div>
                <div class="-mt-1 font-sans text-sm font-semibold">Google Play</div>
            </div>
        </a>
    </div>
      </div>
    </footer>
    <footer className="bg-blue-500 border-t-4 border-yellow-500">
      <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
        <p className="text-white text-sm text-center sm:text-left">
          © {new Date().getFullYear()} My Website Name
        </p>
        <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
          <Link legacyBehavior href="#">
            <a className="text-white">
              <FaFacebook />
            </a>
          </Link>
          <Link legacyBehavior href="#">
            <a className="ml-3 text-white">
              <FaTwitter />
            </a>
          </Link>
          <Link legacyBehavior href="#">
            <a className="ml-3 text-white">
              <FaInstagram />
            </a>
          </Link>
        </span>
      </div>
    </footer>
    </>
   
  );
};

export default Footer;
