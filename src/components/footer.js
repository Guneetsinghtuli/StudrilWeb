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
            <h1 className="text-2xl font-semibold text-white mb-2">JPCourse </h1>
            <h2 className='text-lg font-semibold text-white mb-2 mt-2'>We make you speak.</h2>
            <p className="text-sm" href='contact@jpcourse.com'>Contact us at contact@jpcourse.com</p>
            <img src='Apple'></img>
            <img src='Google'></img>
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
