import Navbar from "../components/navbar";
import Table from "../components/table";
import Footer from "../components/footer";
import Test from "../components/test";
import MainM from "../mobilecomponents/main";
import FeatureM from "../mobilecomponents/feature";
import useMediaQuery from "@/components/hooks/useMobile";
import Upfooter from "../mobilecomponents/upfooter";
import { useEffect } from "react";
export default function Home() {
  const isDesktop = useMediaQuery("(min-width: 960px)");

  useEffect(() => {
    // Load the Google Analytics script
    window.dataLayer = window.dataLayer || []
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date())
    gtag('config', process.env.NEXT_PUBLIC_GTAG);
    // Track when the user scrolls to a certain section
    const section = document.querySelector('#features')
    const section1 = document.querySelector('#end')
    if (section) {
      const sectionRect = section.getBoundingClientRect()

      const handleScroll = () => {
        const scrolled = window.pageYOffset
        const sectionTop = sectionRect.top + scrolled
        const sectionBottom = sectionRect.bottom + scrolled

        if (scrolled >= sectionTop && scrolled < sectionBottom) {
          // The user has scrolled to the section, log the event
          gtag('event', 'section_scrolled', { section_name: 'features' })
        }
      }

      window.addEventListener('scroll', handleScroll)

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }

    if (section1) {
      const sectionRect = section1.getBoundingClientRect()

      const handleScroll = () => {
        const scrolled = window.pageYOffset
        const sectionTop = sectionRect.top + scrolled
        const sectionBottom = sectionRect.bottom + scrolled

        if (scrolled >= sectionTop && scrolled < sectionBottom) {
          gtag('event', 'section_scrolled', { section_name: 'end' })
        }
      }

      window.addEventListener('scroll', handleScroll)

      return () => {
        window.removeEventListener('scroll', handleScroll)
      }
    }
  }, [])

  

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
